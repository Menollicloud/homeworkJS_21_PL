// div - фигура, которая может принимать какие-то формы
// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура
// input для выбора цвета. При его изменении меняется цвет фигуры

let figure = document.querySelector('.figure');
let chooseFigure = document.getElementById('chooseFigure');
let chooseColor = document.getElementById('chooseColor');

const setFigure = () => {
    let firstClass = figure.classList[figure.classList.length-1];
    figure.classList.replace(firstClass, chooseFigure.value);
};

const setColor = () => figure.style.background = chooseColor.value;

chooseFigure.onchange = setFigure;
chooseColor.onchange = setColor;