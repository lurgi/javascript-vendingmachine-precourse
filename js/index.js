import header from "./header.js";

const nav = document.createElement("nav");
nav.id = "header";

const content = document.createElement("div");
content.id = "content";

function main() {
  const app = document.querySelector("#app");

  const nav = document.createElement("nav");
  nav.id = "header";

  const content = document.createElement("div");
  content.id = "content";

  app.appendChild(nav);
  app.appendChild(content);
  header();
}

main();
