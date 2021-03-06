'use strict';
var doc = document;
var formSelect = doc.querySelectorAll("input[name=submit-for]");
var project = doc.querySelector("#project");
var stage = doc.querySelector("#stage");

var mainMenu = doc.querySelectorAll("header nav li");
var blocks = doc.querySelectorAll("body > *");
console.log(blocks);

// form toggle
var toggleForm = function (e) {
    var btn = e.target.value; 
    if ((btn === "stage" && stage.classList.contains("disabled")) || (btn === "project" && project.classList.contains("disabled"))) {
        project.classList.toggle("disabled");
        stage.classList.toggle("disabled");
    }
};

stage.classList.toggle("disabled");
formSelect[0].checked = true;

formSelect[0].addEventListener("click", toggleForm);
formSelect[1].addEventListener("click", toggleForm);


