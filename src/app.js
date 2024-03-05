/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["Un", "El", "Ese"];
  let subject = ["perro", "gato", "raton", "conductor", "comico"];
  let action = [
    "mordio mi",
    "tiró mi",
    "se comio mi",
    "robo mi",
    "se llevo mi"
  ];

  let possetion = ["pierna", "televisor", "cuaderno", "zapato", "almuerzo"];
  let where = [
    "en la calle",
    "en mi casa",
    "en mi habitación",
    "en el colegio"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
