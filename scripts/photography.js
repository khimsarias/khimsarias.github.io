const slider = document.querySelector('.photos');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  startX = e.pageX - slider.offsetLeft;
  startY = e.pageY - slider.offsetTop;
  scrollLeft = slider.scrollLeft;
  scrollTop = slider.scrollTop;
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
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const y = e.pageY - slider.offsetTop;

  const walkH = (x - startX) * 3; //scroll-fast
  const walkV = (y - startY) * 3;
  slider.scrollLeft = scrollLeft - walkH;
  slider.scrollDown = scrollTop - walkV;
  console.log(`WalkH = ` + walkH);
  console.log(`WalkV = ` + walkV);
});


// // 
//  const slider = document.querySelector('.photos');
// (function(){
//   var curYPos, curXPos, curDown;

//   slider.addEventListener('mousemove', function(e){ 
//     if(curDown){
//       slider.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
//     }
//   });

//   slider.addEventListener('mousedown', function(e){ 
//     curYPos = e.pageY; 
//     curXPos = e.pageX; 
//     curDown = true; 
//   });

//   slider.addEventListener('mouseup', function(e){ 
//     curDown = false; 
//   });
// })()