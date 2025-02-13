import React from 'react';
import './review.css'

export function Review() {
  return (
    <main>
      <h1 class="title">Let's Review!</h1>
      <label for="anigames">Games or Anime?</label>
      <select name="anigames" id="anigames">
        <option value="game">Game</option>
        <option value="anime">Anime</option>
      </select>
      <form>
        <div>
            <input type="text" placeholder="Title" />
        </div>
        <div>
          <label for="anigames">How Good?</label>
          <select name="anigames" id="anigames">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <textarea name="review" placeholder="C'mon, get reviewing!" rows="5" cols="40"></textarea>
        </div>
        <button class="site_button" type="submit">Quack!</button>
      </form>
    </main>
  );
}