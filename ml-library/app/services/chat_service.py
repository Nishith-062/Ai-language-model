from app.models.conversation_model import conversation_history, chat_tokenizer, chat_model
import torch

def generate_ai_response(user_input: str, session_id: str = "default") -> str:
    """
    Generates AI chat response using a conversational model.
    Maintains conversation context per session_id.
    """
    # Use session history if exists
    chat_history_ids = conversation_history.get(session_id, None)
    
    new_input_ids = chat_tokenizer.encode(user_input + chat_tokenizer.eos_token, return_tensors='pt')
    
    if chat_history_ids is not None:
        bot_input_ids = torch.cat([chat_history_ids, new_input_ids], dim=-1)
    else:
        bot_input_ids = new_input_ids

    # Generate model output
    chat_history_ids = chat_model.generate(
        bot_input_ids,
        max_length=1000,
        pad_token_id=chat_tokenizer.eos_token_id,
        do_sample=True,
        top_p=0.9,
        temperature=0.7
    )
    
    # Decode model output
    response_text = chat_tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)

    # Fallback: if model just repeats input, provide simple friendly reply
    if response_text.lower().strip() == user_input.lower().strip() or len(response_text.strip()) == 0:
        if "basketball" in user_input.lower():
            response_text = "That's great! Keep it up!"
        else:
            response_text = "Interesting! Tell me more."

    # Save updated history
    conversation_history[session_id] = chat_history_ids

    return response_text
