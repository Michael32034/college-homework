import { $ } from "https://code.jquery.com/jquery-4.0.0.module.min.js";

$(window).on("load", async ()=>{
  let content = await fetch("./content.json").then((r) => r.json());

  //HTML
  $("header>h1").html(`${content.name}`);
  $("section#description").html(`<p>${content.description}</p>`);
  $("section#feautures").html(`<ul>${content.feautures.map(item => `<li><p>${item.name}</p></li>`).join("")}</ul>`);
  $("#founded").html(`<p>${content.label_founded}: ${content.founded}</p>`);
  $("#lib_size").html(`<p>${content.label_lib_size}: ${content.lib_size}</p>`);

  //CSS
  $("body").css({
    "margin": 0,
    "background-color": "#0769AD"
  });
  $("header>h1").css({
    "text-align": "center",
    "margin": 0,
    "padding": "20pt 0pt 20pt 0pt"
  });
  $("p").css({
    "font-size": "15pt"
  });
  $("main").css({
    "display": "grid",
    "grid-template-columns": "repeat(4, 1fr)",
    "grid-template-rows": "auto auto",
    "grid-template-areas": `
      "description description description features"
      "details details details details"
    `,
    "width": "auto",
    "height": "100%",
    "background-color": "white",
    "border-radius": "10pt",
    "margin": "0 30pt",
    "padding": "20pt"
  });
  $("section#description").css({
    "grid-area": "description"
  });

  $("section#feautures").css({
    "grid-area": "features",
    "background-color": "#BF9581",
    "border-radius": "10pt"
  });

  $("section#details").css({
    "grid-area": "details"
  });
  /*
  $("#founded");
  $("#lib_size");
  */
});
