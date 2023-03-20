import './styles/main.css'

const canvas = document.getElementById("canvas");
canvas.height = document.querySelector(".work_area").offsetHeight;
canvas.width = document.querySelector(".work_area").offsetWidth;
const ctx = canvas.getContext("2d");
console.log("CTX ", ctx)