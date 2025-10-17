from pydantic import BaseModel
from typing import Optional

class TextInput(BaseModel):
    text: str | None = None

class ChatResponse(BaseModel):
    input_text: str
    corrected_text: str
    chatbot_reply: str
    pronunciation_score: Optional[float] = None
    feedback: Optional[str] = None
