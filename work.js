
document.body.style.cursor = "url('https://raw.githubusercontent.com/YurieYoshimura/west/main/cursor.cur'), auto";

// Add CSS for link hover cursor change
const style = document.createElement('style');
style.innerHTML = `
  a:hover {
    cursor: url('https://raw.githubusercontent.com/YurieYoshimura/west/main/cursor%20(2).cur'), auto;
  }
`;
document.head.appendChild(style);


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
