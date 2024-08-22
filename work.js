document.body.style.cursor = "url('/cursor.cur'), auto";
document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById('intro-screen');
  const mainContent = document.getElementById('main-content');

  introScreen.addEventListener('animationend', (event) => {
    if (event.animationName === 'brushStroke') {
      introScreen.style.display = 'none';
      mainContent.style.display = 'block';
      mainContent.style.opacity = '1';
    }
  });
});
