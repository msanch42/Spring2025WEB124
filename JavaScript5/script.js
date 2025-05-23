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
    if (e.button !== 0) return; // added code to prevent behavior from right or middle-click dragging  
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

//Refactored repetetive code for mouseleave and mouseup
function stopDragging() {
    isDown = false;
    slider.classList.remove('active');
}

slider.addEventListener('mouseleave', stopDragging);
slider.addEventListener('mouseup', stopDragging);
 /* slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });*/

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
