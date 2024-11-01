import { useState } from "react";
import axios from "axios";
import "./HomePage.scss";

function HomePage() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/scrape", { url });
    setSummary(response.data.summary);
  };

  return (
    <div className="container">
      <img className="sticker" src="../../../src/assets/images/Sticker.svg" />
      <section className="card">
        <h1 className="title">TLDR</h1>
        <p className="subtitle">The summary you need... in seconds</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="url">Website</label>
            <input
              className="input-text"
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Input the website that you wish to summarize here:"
            />
          </div>
          <div className="input-group">
            <label htmlFor="summary">Summary</label>
            <textarea
              className="input-text"
              id="summary"
              value={summary}
              readOnly
              placeholder="Voila! We will generate your bite-size summary here:"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Summarize it!
          </button>
        </form>
      </section>
    </div>
  );
}

export default HomePage;
