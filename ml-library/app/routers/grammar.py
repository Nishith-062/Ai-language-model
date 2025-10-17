from fastapi import APIRouter, HTTPException
from app.schemas.grammar import GrammarInput, GrammarResponse
from app.services.grammar_service import correct_grammar

router = APIRouter()

@router.post("/", response_model=GrammarResponse)
async def grammar_endpoint(input_data: GrammarInput):
    """
    Corrects grammar of input text.
    """
    try:
        corrected_text = correct_grammar(input_data.text)
        return {"corrected_text": corrected_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
