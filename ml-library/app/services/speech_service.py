# speech_service.py

import tempfile
import shutil
import whisper
from app.services.grammar_service import correct_grammar
from app.models.pronunciation_scorer import PronunciationScorer

# Load Whisper Tiny model globally so it doesn't reload on every request
stt_model = whisper.load_model("tiny")
scorer = PronunciationScorer()

def generate_feedback(score: float) -> str:
    """
    Returns friendly pronunciation feedback based on the score.
    """
    if score >= 90:
        return "Excellent! You pronounced it really well! 🎉"
    elif score >= 75:
        return "Good job! Keep practicing and you'll get even better! 🙂"
    elif score >= 50:
        return "Not bad! A little more practice will help you improve."
    else:
        return "Keep practicing! You'll get better with time. 💪"

async def process_audio_file(file, language="en"):
    """
    Process uploaded audio file and return transcription, grammar correction,
    pronunciation score, and feedback.
    """
    # Save uploaded file to a temporary .wav file
    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp:
        shutil.copyfileobj(file.file, tmp)
        tmp_path = tmp.name

    # 1️⃣ Transcribe audio using Whisper Tiny
    result = stt_model.transcribe(tmp_path)
    transcription = result["text"]

    # 2️⃣ Correct grammar using T5 model
    corrected_text = correct_grammar(transcription)

    # 3️⃣ Pronunciation scoring
    score = scorer.score(transcription, corrected_text)
    feedback = generate_feedback(score)

    return {
        "transcription": transcription,
        "corrected_text": corrected_text,
        "pronunciation_score": score,
        "feedback": feedback
    }
