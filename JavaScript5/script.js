// Monica Sanchez 4-29-25
// Adapted from https://javasript.com/
// CLick and Drag
/* New/expanded information:
    addEventListener for mouse, preventDefault(), 
    functions for the slider.addEventListener
*/
const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });

//Added keyboard navigation to make cards focusable when arrow keys are used to scroll
slider.setAttribute('tabindex', '0'); 
slider.addEventListener('keydown', (e) => {
  const scrollAmount = 50;
  if (e.key === 'ArrowRight') slider.scrollLeft += scrollAmount;
  if (e.key === 'ArrowLeft') slider.scrollLeft -= scrollAmount;
});
