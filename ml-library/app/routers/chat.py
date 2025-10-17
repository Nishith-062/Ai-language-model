from fastapi import APIRouter, HTTPException, Query, UploadFile, File, Form
from app.schemas.chat import ChatResponse
from app.services.conversation_service import process_conversation

router = APIRouter()

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(
    text: str = Form(None),
    audio: UploadFile = File(None),
    session_id: str = Query("default")
):
    """
    Handles both text and audio inputs.
    Returns structured response:
    - input_text
    - corrected_text
    - chatbot_reply
    - pronunciation_score
    - feedback
    """
    try:
        response = await process_conversation(text, audio, session_id)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
