// console.log("Hola");

// document.querySelectorAll('.accordion__question')[0].classList.add('open');
// document.querySelectorAll('.accordion__question')[0].classList.toggle('open');

document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    // source: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
    //handle click
    // console.log("click!");
    if (!item.classList.contains("collapsing")) {
      let accCollapse = item.nextElementSibling;

      // Open accordiion item
      if (!item.classList.contains("open")) {
        console.log("toggle accordion button");

        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;
        console.log(accHeight);

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);

        accCollapse.classList = "accordion__collapse collapsing aa";

        setTimeout(() => {
          console.log("open accordion content");
          accCollapse.classList = "accordion__collapse collapse open tt";
        }, 300);
      }
      // close accordiion item
      else {
        console.log("close");

        accCollapse.classList = "accordion__collapse collapsing pp";

        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);

        setTimeout(() => {
          console.log("close open accordion content ");
          accCollapse.classList = "accordion__collapse collapse xxx";
          accCollapse.style.height = "";
        }, 300);
      }
    }

    item.classList.toggle("open");
    //item.nextElementSibling.classList.toggle("open");
  });
});
