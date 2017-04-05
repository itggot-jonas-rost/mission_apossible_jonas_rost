function openNav() {
    document.getElementById("mySidenav").style.width = "67%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function openSearch() {
    document.getElementById("mySearch").style.width = "40%";
}

function closeSearch() {
    document.getElementById("mySearch").style.width = "0";
}



function Settingsdropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

var button = document.getElementById("close_button");


function modal_popup() {
     modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

button.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

