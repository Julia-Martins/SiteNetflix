const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 20) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 20) {
        navEl.classList.remove('navbar-scrolled')
    }
});


/* ---------------------------------------- */
/* Lupa e o e toda a search daqui pra baixo */
/* ---------------------------------------- */
let input = document.querySelector(".search-input");
let searchIcon = document.querySelector(".search-icon");
let clearIcon = document.querySelector(".clear-icon");
let searchText = document.querySelector(".container-text");
let form = document.getElementById("form");

input.addEventListener("keydown", function (e) {
    //if there is any text in input field then clear icon will appear
    clearIcon.classList.add("active");

    //hide clear icon when we remove text using backspace
    if (
        (e.code === "Backspace" && input.value.length === 1) ||
        (e.code === "Backspace" && input.value.length === 0)
    )
        clearIcon.classList.remove("active");

    //stop search when no text in input field
    if (e.code === "Enter" && input.value === "") {
        e.preventDefault(); //prevent refresh page when there is no text
        clearIcon.classList.remove("active"); //hide clear icon if there is no text
    }

    //if user press enter and there is search text in input field the search() method will be called
    if (e.code === "Enter" && input.value !== "") search();
});

const search = () => {
    input.classList.add("active"); //adding active class to input field to give width of 500px

    //if there is search text then form action and search button type will be changed to perform search
    if (input.value !== "") {
        form.action = "https://www.google.com/search";
        searchIcon.type = "submit";
    }
};

//set all the elements value to default when we click on clear icon
clearIcon.onclick = function () {
    input.value = ""; //remove search text
    form.action = ""; //set form action to default /
    searchIcon.type = "button"; //set button type to button so that form not submitted without text
    input.classList.remove("active"); //set search bar to default size
    clearIcon.classList.remove("active"); //hide clear icon
};