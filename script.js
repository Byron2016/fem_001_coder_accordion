const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  //console.log(e.target.tagName);
  if (e.target && e.target.tagName === "BUTTON") {
    console.log("Button element was pressed");
    if (!e.target.classList.contains("collapsing")) {
      console.log("Elemento contine collapsing");
      const accCollapse = e.target.nextElementSibling;

      // Open accordiion item
      if (!e.target.classList.contains("open")) {
        console.log("Button has not an OPEN class");
        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;
        console.log(accHeight);
        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 1);
        accCollapse.classList = "accordion__collapse collapsing";
        setTimeout(() => {
          console.log("open accordion content");
          accCollapse.classList = "accordion__collapse collapse open";
        }, 300);
      }
      // close accordiion item
      else {
        console.log("Button has an OPEN class");
        accCollapse.classList = "accordion__collapse collapsing";
        setTimeout(() => {
          accCollapse.style.height = "0px";
        }, 1);
        setTimeout(() => {
          console.log("close open accordion content ");
          accCollapse.classList = "accordion__collapse collapse xxx";
          accCollapse.style.height = "";
        }, 300);
      }

      e.target.classList.toggle("open");
    }
  }
});

/*
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
*/
