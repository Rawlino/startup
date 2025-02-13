import React from 'react';
import './charts.css'

export function Charts() {
  return (
    <main>
    <h1>Who's Cooking Right Now?</h1>
    <div>
      <div className="tab">
          <button className="tablinks" style={{width: "33.3%"}}>Games</button>
          <button className="tablinks" style={{width: "33.3%"}}>Anime</button>
          <button className="tablinks" style={{width: "33.3%"}}>Both</button>
        </div>
        <div>
          <h3>Games</h3>
          <p>This is a placeholder for including top charts</p>
        </div>
        <div>
          <h3>Anime</h3>
          <p>This is a placeholder for including top charts</p>
        </div>
        <div>
          <h3>Both</h3>
          <p>This is a placeholder for including top charts</p>
        </div>
    </div>
  </main>
  );
}