from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import chat, speech, grammar

app = FastAPI(title="Virtual AI Coach API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(chat.router, prefix="/chat", tags=["Chat"])
app.include_router(grammar.router, prefix="/grammar", tags=["Grammar"])
app.include_router(speech.router, prefix="/speech", tags=["Speech"])

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
