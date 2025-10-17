from fastapi import APIRouter, UploadFile, File, HTTPException, Query
from app.schemas.speech import SpeechResponse
from app.services.speech_service import process_audio_file

router = APIRouter()

@router.post("/", response_model=SpeechResponse)
async def speech_endpoint(file: UploadFile = File(...), language: str = Query("en")):
    """
    Processes audio file (wav/mp3) and returns:
    - Transcribed text
    - Grammar correction
    - Pronunciation score
    - Feedback
    """
    try:
        result = await process_audio_file(file, language)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
