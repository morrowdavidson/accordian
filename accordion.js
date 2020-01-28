// ACCORDION MECHANICS
var jsaccordion = {
  init : function () {
  // init() : initialize accordion
  // PARAM target : ID of accordion wrapper

    var sections = document.querySelectorAll(".accordion");
    if (sections.length > 0) { for (var section of sections) {
      console.log(section);
      section.addEventListener("click", jsaccordion.select);
    }}
  },

  select : function () {
  // select() : fired when user clicks on a header
    console.log(this);
    this.classList.toggle("open");
  }
};

// ON PAGE LOAD
window.addEventListener('load', function(){
  jsaccordion.init();
});