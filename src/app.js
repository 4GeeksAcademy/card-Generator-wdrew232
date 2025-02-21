/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♠", "♥", "♦", "♣"];
const numbers = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generateCard() {
const randomSuit = suits[Math.floor(Math.random() * 4)];
  const randomNumber = numbers[Math.floor(Math.random() * 14)];
    const card = randomNumber
      const suit = randomSuit
      document.getElementById('number').textContent = card;
      document.getElementById('suit').textContent = suit;
      
      
     
      
      if (randomSuit == "♥" || randomSuit == "♦" ) {
        document.querySelectorAll('suit').style.color = "red";
        console.log("red"); 
      }
      else  {
          document.querySelector('#suit').style.color = "black"
      }
        
}

    document.getElementById('generateBtn').addEventListener('click', generateCard);
  