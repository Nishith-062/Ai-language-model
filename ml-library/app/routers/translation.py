from fastapi import APIRouter, HTTPException
from app.schemas.grammar import TextInput  # you can create a dedicated TranslationInput if needed
from app.services.translation_service import translate_text

router = APIRouter()

@router.post("/", response_model=dict)
async def translation_endpoint(input_data: TextInput, target_language: str = "en"):
    """
    Translate the provided text to the target language.
    """
    try:
        translated_text = translate_text(input_data.text, target_language)
        return {"translated_text": translated_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
