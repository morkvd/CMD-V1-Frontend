'use strict';
var doc = document;
var formSelect = doc.querySelectorAll("input[name=submit-for]");
var project = doc.querySelector("#project");
var stage = doc.querySelector("#stage");

// form toggle
var toggleForm = function (e) {
    if ((e.target.value === "stage" && stage.classList.contains("disabled")) || (e.target.value === "project" && project.classList.contains("disabled"))) {
        project.classList.toggle("disabled");
        stage.classList.toggle("disabled");
    }
};

// setup
stage.classList.toggle("disabled");
formSelect[0].checked = true;

// add event listeners
formSelect[0].addEventListener("click", toggleForm);
formSelect[1].addEventListener("click", toggleForm);


