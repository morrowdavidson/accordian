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
    this.classList.toggle("open");
  
    if (this.style.maxHeight){
      this.style.maxHeight = null;
    } else {
      this.style.maxHeight = this.scrollHeight + "px";
    }
  }
};

// ON PAGE LOAD
window.addEventListener('load', function(){
  jsaccordion.init();
});

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }