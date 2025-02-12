import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


export default function App() {
  return(
    <div>
        <header>
          <h1 className="header">AniGameReviews<sup>&reg;</sup></h1>
          <h3 className="username"><img className="username" src="/image_library/profile_pic.png" style={{ width: "100px", height: "100px" }} />Username</h3>
          <nav>
            <menu className="topnav">
              <a href="index.html">Home</a>
              <a href="review.html">Review</a>
              <a href="charts.html">Charts</a>
            </menu>
          </nav>
          <hr />
        </header>
    
        <main>App components go here</main>
    
        <footer>
          <hr />
          <span className="text-reset">Author:</span>
          <br />
          <h5><a href="https://github.com/Rawlino/startup">Orion's GitHub</a></h5>
          <div>
            <button className="site_button" type="button">Give me a duck please. Placeholder for 3rd party service calls.</button>
          </div>
        </footer>
        <div className="parallax"/>
    </div>
  ); 
}