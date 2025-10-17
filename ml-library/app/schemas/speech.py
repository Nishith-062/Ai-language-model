from pydantic import BaseModel

class SpeechResponse(BaseModel):
    transcription: str
    corrected_text: str
    pronunciation_score: float
    feedback: str
