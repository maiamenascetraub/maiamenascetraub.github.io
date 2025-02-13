document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('myPopup');
  var closeBtn = document.querySelector('.close-button');

  closeBtn.addEventListener('click', function() {
    //popup.classList.remove('show');
    document.querySelector('.popup').style.display = 'none'
  });

  // Check if popup has already been shown this session
  if (!sessionStorage.getItem('popupShown')) {
    // Check if on mobile (simple viewport width check)
    if (window.innerWidth < 768) {
      // Show the popup
      popup.classList.add('show');
      // Mark as shown
      sessionStorage.setItem('popupShown', 'true');
    }
  }
});