from transformers import AutoTokenizer, AutoModelForCausalLM

# Load once at startup
chat_model_name = "microsoft/DialoGPT-small"  # Example conversational model
chat_tokenizer = AutoTokenizer.from_pretrained(chat_model_name)
chat_model = AutoModelForCausalLM.from_pretrained(chat_model_name)

# Store conversation history per session (simple in-memory for demo)
conversation_history = {}
