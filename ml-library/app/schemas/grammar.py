from pydantic import BaseModel

class GrammarInput(BaseModel):
    text: str

class GrammarResponse(BaseModel):
    corrected_text: str
