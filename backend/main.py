from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="DATASPHERE API", description="Your Personal Data Universe", version="1.0.0")

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/health")
def health():
    return {"status": "ok", "message": "DATASPHERE running"}

@app.get("/api/weather")
async def weather(city: str = "New York"):
    return {"city": city, "temperature": 28.5, "condition": "Sunny", "humidity": 65}

@app.get("/api/news")
async def news():
    return {"articles": [{"title": "Breaking News 1"}, {"title": "Breaking News 2"}]}

@app.get("/api/anime")
async def anime():
    return {"anime": [{"title": "Demon Slayer", "score": 8.8}, {"title": "Attack on Titan", "score": 8.5}]}

@app.get("/api/crypto")
async def crypto():
    return {"crypto": [{"name": "Bitcoin", "symbol": "BTC", "price": 42500}, {"name": "Ethereum", "symbol": "ETH", "price": 2200}]}

@app.get("/api/apis/health")
async def apis_health():
    return {"apis": [{"name": "OpenWeatherMap", "status": "active"}, {"name": "Jikan", "status": "active"}]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)