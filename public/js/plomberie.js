  $('.gallery-items').click(function() {
        const src = $(this).find('img').attr('src');
        $('#img01').attr('src', src);
        $('#myModal').css('display', 'flex');
      });

      $('.close').click(function() {
        $('#myModal').hide();
      });

      $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
          $('#myModal').hide();
        }
      });
    
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-contact");
  const widget = document.getElementById("calendly-widget");

  let isOpen = false;

  if (btn && widget) {
    // Clique sur le bouton
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      widget.style.display = isOpen ? "none" : "block";
      isOpen = !isOpen;

      if (isOpen) {
        window.scrollTo({
          top: widget.offsetTop,
          behavior: "smooth"
        });
      }
    });

    // Clique ailleurs que le widget ou le bouton
    document.addEventListener("click", function (e) {
      const isClickInside =
        widget.contains(e.target) || btn.contains(e.target);
      if (!isClickInside && isOpen) {
        widget.style.display = "none";
        isOpen = false;
      }
    });
  }
});


/* Fin de widget de badge Calendly */

window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/tleclercq87/30min', text: '📅📱', color: '#1a1a1a', textColor: '#ffffff' }); }
