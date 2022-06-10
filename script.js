var range1 = document.getElementById("my-range1");
var range2 = document.getElementById("my-range2");
var img1 = document.getElementById("divImg1");
var img2 = document.getElementById("divImg2");

range1.addEventListener("change", function () {
    img1.style.zoom = this.value;
});

range2.addEventListener("change", function () {
    img2.style.zoom = this.value;
});

function addiframe(url) {
    var x = document.createElement("IFRAME");
    x.style.width = "1280px";
    x.style.height = "720px";
    x.setAttribute("src", url);
    document.getElementById("iframe").innerHTML = '';
    document.getElementById("iframe").appendChild(x);
}
document.addEventListener('DOMContentLoaded', function () {
    var src = "https://vdo.ninja/?view=LabRemotosUnicaucaStream&password=1234";
    addiframe(src);
});

function activarDato1() {
    var img = document.getElementById("divImg1");
    if (img.style.visibility === 'hidden') {
        img.style.visibility = "visible";
    } else {
        img.style.visibility = "hidden";
    }
}

function activarDato2() {
    var img = document.getElementById("divImg2");
    if (img.style.visibility === 'hidden') {
        img.style.visibility = "visible";
    } else {
        img.style.visibility = "hidden";
    }
};

dragElement(document.getElementById("divImg1"));
dragElement(document.getElementById("divImg2"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}