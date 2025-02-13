window.onload = function() {
  let pumpLevels = [15, 20, 25, 0];
  let tankLevels = [25, 45, 70, -20];
  let counter = 0;
  let isAnimating = false;
  
  function pumpHeart() {
    if(isAnimating) {
      return;
    }
    
    isAnimating = true;
    //forward
    gsap.to('.heart', {
      translateZ: pumpLevels[counter], 
      duration: 0.5
    });
    
    gsap.to(".curve", {
      bottom: tankLevels[counter],
      transformOrigin: "bottom",
      scaleY: 1,
      duration: 0.5
    })
      gsap.to(".tank", {
      height: counter === 3 ? 0 : tankLevels[counter],
      duration: 0.5
    })
    
    //reverse
    gsap.to(".curve", {
      delay: 0.6,
      bottom: tankLevels[counter],
      transformOrigin: "bottom",
      scaleY: 0.5,
      duration: 0.5
    });
    
    gsap.to('.heart', {
      delay: 0.6,
      translateZ: 0,
      duration: 0.25,
      onComplete: function() {
        isAnimating = false;
      }
    })
    
    if(++counter > 3) counter = 0;
  }
  
  let heart = document.getElementsByClassName('heart')[0];
  heart.addEventListener("click", pumpHeart);
}