import tempfile
import shutil
import whisper
from app.services.grammar_service import correct_grammar
from app.services.chat_service import generate_ai_response
from app.models.pronunciation_scorer import PronunciationScorer

# Load Whisper Tiny model globally (only once)
stt_model = whisper.load_model("tiny")
scorer = PronunciationScorer()


def generate_feedback(score: float) -> str:
    """
    Returns friendly pronunciation feedback based on the score.
    """
    if score is None:
        return None
    if score >= 90:
        return "Excellent pronunciation! 🎯"
    elif score >= 75:
        return "Pretty good! Keep practicing 👏"
    elif score >= 50:
        return "Decent effort — more practice will help! 💪"
    else:
        return "Let’s keep practicing to improve pronunciation 🔁"


async def process_conversation(text: str = None, audio=None, session_id: str = "default", language: str = "en"):
    """
    Handles both text and audio input:
    - If audio → transcribe via Whisper
    - Then grammar correction
    - Then chatbot reply
    - Optionally gives pronunciation feedback
    Returns structured dict for API response
    """
    transcription = None
    pronunciation_score = None
    feedback = None
    corrected_text = None

    if audio:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp:
            shutil.copyfileobj(audio.file, tmp)
            tmp_path = tmp.name

        # Transcribe using Whisper
        result = stt_model.transcribe(tmp_path, language=language)
        transcription = result.get("text", "").strip()

        # Grammar correction
        corrected_text = correct_grammar(transcription)

        # Pronunciation score + feedback
        pronunciation_score = scorer.score(transcription, corrected_text)
        feedback = generate_feedback(pronunciation_score)

        user_input = corrected_text

    elif text:
        transcription = text
        corrected_text = correct_grammar(text)
        user_input = corrected_text

    else:
        raise ValueError("Either text or audio input is required.")

    # Chatbot reply
    chatbot_reply = generate_ai_response(user_input, session_id=session_id)

    return {
        "input_text": transcription,
        "corrected_text": corrected_text,
        "chatbot_reply": chatbot_reply,
        "pronunciation_score": pronunciation_score,
        "feedback": feedback
    }
