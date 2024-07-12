document.addEventListener("DOMContentLoaded", () => {
    // a) 
    console.log(document.body.innerHTML);

    // b) 
    // 1. getElementsByTagName
    const headerByTagName = document.getElementsByTagName("header")[0];
    console.log("Header encontrado por getElementsByTagName:", headerByTagName);

    // 2. getElementById
    const headerById = document.getElementById("cabecera");
    console.log("Header encontrado por getElementById:", headerById);

    // 3. querySelector
    const headerByQuerySelector = document.querySelector("header");
    console.log("Header encontrado por querySelector:", headerByQuerySelector);
});
