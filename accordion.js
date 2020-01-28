// ACCORDION MECHANICS
var jsaccordion = {
  init : function () {
  // init() : initialize accordion
  // PARAM target : ID of accordion wrapper

    var sections = document.querySelectorAll(".accordion");
    if (sections.length > 0) { for (var section of sections) {
      section.addEventListener("click", jsaccordion.select);
      section.insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" class="plus" width="10" height="10" viewBox="0 0 160 160"><rect class="vertical-line" x="70" width="20" height="160"/><rect class="horizontal-line" y="70" width="160" height="20"/></svg>');
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