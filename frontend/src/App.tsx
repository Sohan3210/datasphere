import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/weather?city=New%20York')
      .then(r => r.json())
      .then(d => setWeather(d))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));

    fetch('http://localhost:8000/api/news')
      .then(r => r.json())
      .then(d => setNews(d.articles || []))
      .catch(e => console.error(e));
  }, []);

  if (loading) return <div className="app"><p>Loading...</p></div>;

  return (
    <div className="app">
      <nav className="navbar">
        <h1>🌟 DATASPHERE</h1>
        <p>Your Personal Data Universe</p>
      </nav>

      <main className="main-content">
        <div className="dashboard">
          {weather && (
            <div className="card">
              <h2>🌤️ Weather</h2>
              <p>City: {weather.city}</p>
              <p>Temperature: {weather.temperature}°C</p>
              <p>Condition: {weather.condition}</p>
            </div>
          )}

          {news.length > 0 && (
            <div className="card">
              <h2>📰 News</h2>
              {news.map((article, i) => (
                <div key={i}>{article.title}</div>
              ))}
            </div>
          )}

          <div className="card">
            <h2>💰 Crypto</h2>
            <div>Bitcoin: $42,500</div>
            <div>Ethereum: $2,200</div>
          </div>

          <div className="card">
            <h2>🎌 Anime</h2>
            <div>Demon Slayer - ⭐ 8.8</div>
            <div>Attack on Titan - ⭐ 8.5</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;