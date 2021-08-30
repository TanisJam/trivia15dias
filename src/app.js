//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//Elementos comunes
const parser = new DOMParser();
const nav = require("html-loader!./partials/nav.html").default;
const navHTML = parser.parseFromString(nav, "text/html");
document.querySelector("body").prepend(navHTML.body.firstChild);

const footer = require("html-loader!./partials/footer.html").default;
const footerHTML = parser.parseFromString(footer, "text/html");
document.querySelector("body").append(footerHTML.body.firstChild);



//Styles
import "./main.less";
import "./styles/sprites.css";

//Pages
import "./app/index.js";
import "./game/app/game.js";
import "./about/about.js";