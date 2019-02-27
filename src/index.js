/*
    Demo event bubbling v/s capturing.
    Explanation: https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
*/

document.getElementById("app").innerHTML = `
<style>
p {
    line-height: 0;
}

div {
    display:inline-block;
    padding: 5px;

    background: #fff;
    border: 1px solid #aaa;
    cursor: pointer;
}

div:hover {
    border: 1px solid #faa;
    background: #fdd;
}
</style>
<div>1
    <div>2
        <div>3
            <div>4
                <div>5</div>
            </div>
        </div>
    </div>
</div>
<section id="log"></section>
`;

var logElement = document.getElementById("log");

function log(msg) {
  logElement.innerHTML += "<p>" + msg + "</p>";
}

function capture() {
  log("capture: " + this.firstChild.nodeValue.trim());
}

function bubble() {
  log("bubble: " + this.firstChild.nodeValue.trim());
}

var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", capture, true);
  divs[i].addEventListener("click", bubble, false);
}
