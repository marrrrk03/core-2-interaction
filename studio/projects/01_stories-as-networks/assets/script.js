document.addEventListener('DOMContentLoaded', function() {
    var hoverElements = document.querySelectorAll('.hover-element');
    
    hoverElements.forEach(function(element) {
      element.addEventListener('mouseover', function() {
        element.classList.add('hovered');
      });
      element.addEventListener('mouseout', function() {
        element.classList.remove('hovered');
      });
    });
  });