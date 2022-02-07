// console.log("Hola");

// document.querySelectorAll('.accordion__question')[0].classList.add('open');
// document.querySelectorAll('.accordion__question')[0].classList.toggle('open');

document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    // source: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
    //handle click
    // console.log("click!");

    item.classList.toggle("open");

    // Add "collapsing" class to .accordion__collapse (sibbling)

    // Remove "collapsing" class and add "open" class

    item.nextElementSibling.classList.toggle("open");
  });
});
