import torch
from transformers import pipeline

device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Device set to use {device}")

stt_pipe = pipeline(
    "automatic-speech-recognition",
    model="openai/whisper-tiny",
    device=0 if device == "cuda" else -1
)
