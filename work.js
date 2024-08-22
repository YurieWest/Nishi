
document.body.style.cursor = "url('https://raw.githubusercontent.com/YurieYoshimura/west/main/cursor.cur'), auto";


document.body.style.cursor = "url('https://raw.githubusercontent.com/YurieYoshimura/west/main/cursor.cur'), auto";

const style = document.createElement('style');
style.innerHTML = `
  * {
    cursor: url('https://raw.githubusercontent.com/YurieYoshimura/west/main/cursor%20(2).cur'), pointer;
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
