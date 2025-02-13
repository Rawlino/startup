import React from 'react';
import './login.css'

export function Login() {
  return (
    <main>
  <h1>Welcome To Your Centralized Reviews</h1>
  <form method="get" action="index.html">
    <div>
      <span>@</span>
      <input type="text" placeholder="your@email.com" />
    </div>
    <div>
      <span>🔒</span>
      <input type="password" placeholder="password" />
    </div>
    <button className="site_button" type="submit">Login</button>
    <button className="site_button" type="submit">Create</button>
  </form>

  <div>
    <a href="review">
      <button className="review_button" type="button">Review Anime</button>
    </a>
    <a href="review">
      <button className="review_button" type="button">Review Games</button>
    </a>
  </div>

  <div>
    <a href="./charts">
      <button type="button">
        <img src="./image_library/top_charts.png" alt="Top Charts" style={{ width: "700px", height: "300px" }} />
      </button>
    </a>
  </div>
</main>
  );
}