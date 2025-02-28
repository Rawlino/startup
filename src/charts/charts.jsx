import React from 'react';
import './charts.css';

function openCtg(evt, ctgName) {
  
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  document.getElementById(ctgName).style.display = "block";
  evt.currentTarget.className += " active";

}

export function Charts() {
  return (
    <main>
      <h1>Who's Cooking Right Now?</h1>
      <div>
        <div className="tab">
          <button
            className="tablinks"
            onClick={(evt) => openCtg(evt, 'Games')}
            style={{ width: "33.3%" }}
            id="defaultOpen"
          >
            Games
          </button>
          <button
            className="tablinks"
            onClick={(evt) => openCtg(evt, 'Anime')}
            style={{ width: "33.3%" }}
          >
            Anime
          </button>
          <button
            className="tablinks"
            onClick={(evt) => openCtg(evt, 'Both')}
            style={{ width: "33.3%" }}
          >
            Both
          </button>
        </div>
        <div id="Games" className="tabcontent">
          <h3>Games</h3>
          <p>This is a placeholder for including top charts (users reviews will appear here)</p>
        </div>
        <div id="Anime" className="tabcontent">
          <h3>Anime</h3>
          <p>This is a placeholder for including top charts (users reviews will appear here)</p>
        </div>
        <div id="Both" className="tabcontent">
          <h3>Both</h3>
          <p>This is a placeholder for including top charts (users reviews will appear here)</p>
        </div>
      </div>
    </main>
  );
}
