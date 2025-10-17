from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

# Load translation model globally (so it doesn’t reload each request)
translation_model_name = "Helsinki-NLP/opus-mt-en-<target>"  # replace <target> dynamically if needed
translation_tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")  # example: English to German
translation_model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-en-de")

def translate_text(text: str, target_language: str = "en") -> str:
    """
    Translate the input text to the target language.
    """
    # TODO: For dynamic target languages, load tokenizer/model accordingly
    inputs = translation_tokenizer(text, return_tensors="pt", max_length=512, truncation=True)
    outputs = translation_model.generate(**inputs, max_length=512)
    translated_text = translation_tokenizer.decode(outputs[0], skip_special_tokens=True)
    return translated_text
