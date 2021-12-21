var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

var slideIndex_partner = 0;
carousel_partner();
function carousel_partner() {
  var i;
  var x = document.getElementsByClassName("partner_mySlides");
  var y = document.getElementsByClassName("partner_mySlides_background");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
  }
  slideIndex_partner++;
  if (slideIndex_partner > x.length) {slideIndex_partner = 1}
  x[slideIndex_partner-1].style.display = "block";
  y[slideIndex_partner-1].style.display = "block";
  setTimeout(carousel_partner, 5000); // Change image every 5 seconds
}