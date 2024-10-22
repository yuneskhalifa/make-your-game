
// // this part of the code to initilise the number of bullets , the counter for the result
// // and the isPaused to check for the paused menu 
// // start *****************************************
// let noBullets = 8;
// let counter = 0;
// let isPaused= false;
// // end *******************************************************
 
// //this part of the code to only shoot once when the space is pressed 
// //start ***************************************************
// // function shoot(){
// //         window.addEventListener('keydown', function (event) {
// //             if (event.key === ' ') { 
// //             if (noBullets > 0 ){
// //                 if (!isPaused){
// //                     noBullets--;
// //                     document.getElementById("currentBullets").innerHTML = noBullets ;
// //                     //console.log(event.target.id)
        
// //                     const crosshair = document.getElementById('crosshair');
// //                     const ducks = document.querySelectorAll('img[id^="p"]');
                   
// //                     ducks.forEach(duck => {
// //                         if (isOverlapping(crosshair, duck)) {
// //                                 duck.style.display = 'none'; // Hide the duck
// //                                 document.getElementById('shoot').play(); // Play the shooting sound
// //                                 document.getElementById('currentScore').innerHTML = ++counter;
// //                         }
// //                     });    

// //                     window.addEventListener('keydown', function (event) {
// //                         if (event.key === ' ') {
// //                             document.getElementById('shoot').play(); 
// //                          }
// //                     });

// //                 }
               
// //             }else if (noBullets == 0){
// //                 alert("please reload the page becuse the number of bullets remeaning is 0");
// //             }  
// //         }
// //         });  
 
// // }
// // shoot()
// // end **********************************************************************************



// // this part of the code for keep triggring the shoot if they asked for it 
// // start ***************************************************************************
// let isSpacePressed = false;

// function performShooting(){
//             if (noBullets > 0 ){
//                 if (!isPaused){
//                     noBullets--;
//                     document.getElementById("currentBullets").innerHTML = noBullets ;
//                     //console.log(event.target.id)
        
//                     const crosshair = document.getElementById('crosshair');
//                     const ducks = document.querySelectorAll('img[id^="p"]');
                   
//                     ducks.forEach(duck => {
//                         if (isOverlapping(crosshair, duck)) {
//                                 duck.style.display = 'none'; // Hide the duck
//                                 document.getElementById('shoot').play(); // Play the shooting sound
//                                 document.getElementById('currentScore').innerHTML = ++counter;
//                         }
//                     });    

//                 }
               
//             }else if (noBullets == 0){
//                 alert("the game has end no Bullets = 0 , if you want to replay the game press space");
//                 location.reload();
//             }  

// }

// // Start listening for keydown and keyup events
// document.addEventListener('keydown', (event) => {
//     if (event.code === 'Space') {
//         isSpacePressed = true; // Set the flag when space is pressed
//         performShooting();
//         document.getElementById('shoot').play(); 
//     }
// });

// document.addEventListener('keyup', (event) => {
//     if (event.code === 'Space') {
//         isSpacePressed = false; // Reset the flag when space is released
//     }
// });
// // end ********************************************************************************
 
// // if there is somthing wrong that because of the resumeGame function and the enter 


// // this code to check if the crosshair is overlapping with the ducks 
// // start **************************************************************
// function isOverlapping(el1, el2) {
//     const rect1 = el1.getBoundingClientRect();
//     const rect2 = el2.getBoundingClientRect();

//     return !(rect1.right < rect2.left || 
//              rect1.left > rect2.right || 
//              rect1.bottom < rect2.top || 
//              rect1.top > rect2.bottom);
// }
// // end *******************************************************************

// // this part of the code to caculate the fps 
// //start *************************************************************************
// function calculateFPS() {
   
//         let startTime = performance.now();
//     let frameCount = 0;
  
//     function updateFPS() {
//       const currentTime = performance.now();
//       const elapsedTime = currentTime - startTime;
  
//       if (elapsedTime >= 1000) { // Measure FPS over 1 second
//         const fps = frameCount / (elapsedTime / 1000);
//        // console.log(`FPS: ${fps}`); // Log the calculated FPS
//         document.getElementById('fpsCounter').textContent = `FPS: ${fps}`;
//         frameCount = 0;
//         startTime = currentTime;
//       }
  
//       frameCount++;
//       requestAnimationFrame(updateFPS);
//     }
  
//     requestAnimationFrame(updateFPS);

    
    
//   }
  
//   calculateFPS();

//   // end ***************************************************************************



// // this part of the code to keep moving the crosshair 
// // start ***********************************************************************
// let speed = 10; // Speed of movement
// let keys = {};
// function moveCrosshair() {
    
        
//     if (keys['ArrowUp']) {
//         document.getElementById('crosshair').style.top = `${parseInt(document.getElementById('crosshair').style.top || 0, 10) - speed}px`;
//     }
//     if (keys['ArrowDown']) {
//         document.getElementById('crosshair').style.top = `${parseInt(document.getElementById('crosshair').style.top || 0, 10) + speed}px`;
//     }
//     if (keys['ArrowLeft']) {
//         document.getElementById('crosshair').style.left = `${parseInt(document.getElementById('crosshair').style.left || 0, 10) - speed}px`;
//     }
//     if (keys['ArrowRight']) {
//         document.getElementById('crosshair').style.left = `${parseInt(document.getElementById('crosshair').style.left || 0, 10) + speed}px`;

//     }
//     if (isPaused==false){
//         requestAnimationFrame(moveCrosshair); 
//     }else if(isPaused == true){
//         document.addEventListener('keydown', function(event) {
//             if (event.key=== 'Enter') {
//                 requestAnimationFrame(moveCrosshair);
//                 resumeGame(); 
//             }
//         });
//     }
// }

// // Event listener for keydown to start movement
// window.addEventListener('keydown', (event) => {
//     keys[event.key] = true; // Set the key as pressed
// });

// // Event listener for keyup to stop movement
// window.addEventListener('keyup', (event) => {
//     keys[event.key] = false; // Set the key as released
// });

// // Start moving the crosshair
// moveCrosshair();

// // end ***************************************************************************************


// // this part of the code to pause, resume, and restart the game 
// // start **************************************************************
// var resumeButton = document.getElementById('ContinueButton');
// var restartButton = document.getElementById('RestartButton');

// document.addEventListener('keyup', function(e){
//     if (e.key == 'Escape') {
//         pauseGame();
//     }

// });

// function pauseGame(){
//     isPaused = true;
//     document.getElementById('pauseMenu').style.visibility = "visible";
// }

// function resumeGame(){
//     isPaused = false;
//     document.getElementById('pauseMenu').style.visibility = "hidden";

// }

// function restartGame() {
//     isPaused = false;
//     document.getElementById('pauseMenu').style.visibility = "hidden";
//     location.reload();
// }

// document.addEventListener('keyup', function(e){
//     if (e.key == 'Shift') {
//         restartGame();
//     }

// });
// // end **********************************************************************

// // this part of the code to start the timer and pasue it when the pause menu is activated 
// // start ******************************************************************************
// let remainingTime ;
// let timerNotPause = true ;
// function startTimer(duration, display) {
//     let timer = duration;
//     let minutes, seconds;

//     const countdown = setInterval(function () {
//         if (timerNotPause == true){
//             //console.log(timerPause);

//         // Calculate minutes and seconds
//         minutes = Math.floor(timer / 60);
//         seconds = timer % 60;

//         // Format minutes and seconds to always show two digits
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         seconds = seconds < 10 ? '0' + seconds : seconds;

//         // Update the display
//         display.textContent = minutes + ':' + seconds;

//         // Check if the timer has reached 0, if so, clear the interval
//         if (--timer < 0) {
//             clearInterval(countdown);
//             alert("please press space to reload the game - time is over")
//             location.reload();
//         }
//     }

//         remainingTime = timer;
//     }, 1000); // The interval is set to 1000 milliseconds (1 second)
// }

// window.onload = function () {
//     const display = document.getElementById('timer');
//     const oneMinute = 30; // 1 minute in seconds
//         startTimer(oneMinute, display);
// };

// document.addEventListener('keyup', function(e){
//     if (e.key == 'Escape') {
//         timerNotPause = false;
//         console.log(timerNotPause)
       
//     }else if (e.key == 'Enter'){
//         timerNotPause = true
//     }

// });
// // end *************************************************************************

// // this part of the code for the animation of the ducks 
// // start **************************************************************

//     document.addEventListener('DOMContentLoaded', function() {
//         const keyframes1 = [
//             { time: 10, left: 20, bottom: 30 },
//             { time: 30, left: 30, bottom: 50 },
//             { time: 50, left: 40, bottom: 70 },
//             { time: 70, left: 60, bottom: 30 },
//             { time: 100, left: 100, bottom: 100 }
//         ];
        
//         const keyframes2 = [
//             { time: 0, left: 10, bottom: 90 },
//             { time: 20, left: 20, bottom: 30 },
//             { time: 60, left: 25, bottom: 60 },
//             { time: 80, left: 90, bottom: 30 },
//             { time: 100, left: 100, bottom: 87.5 }
//         ];
        
//         const keyframes3 = [
//             { time: 10, left: 15, bottom: 10 },
//             { time: 20, left: 30, bottom: 30 },
//             { time: 55, left: 45, bottom: 50 },
//             { time: 80, left: 90, bottom: 70 },
//             { time: 100, left: 100, bottom: 75 }
//         ];
        
//         const keyframes4 = [
//             { time: 10, right: 70, bottom: 30 },
//             { time: 20, right: 70, bottom: 50 },
//             { time: 55, right: 80, bottom: 70 },
//             { time: 80, right: 90, bottom: 40 },
//             { time: 100, right: 100, bottom: 62.5 }
//         ];
//         // here there is a problem
//         const keyframes5 = [
//             { time: 10, left: 30, bottom: 55 },
//             { time: 20, left: 41, bottom: 88 },
//             { time: 55, left: 62, bottom: 77 },
//             { time: 80, left: 82, bottom: 55 },
//             { time: 100, left: 100, bottom: 50 }
//         ];
        
//         const keyframes6 = [
//             { time: 10, left: 45, bottom: 67 },
//             { time: 20, left: 73, bottom: 12 },
//             { time: 55, left: 87, bottom: 56 },
//             { time: 80, left: 95, bottom: 75 },
//             { time: 100, left: 100, bottom: 37.5 }
//         ];
        
//         const keyframes7 = [
//             { time: 10, left: 44, bottom: 56 },
//             { time: 20, left: 66, bottom: 56 },
//             { time: 55, left: 88, bottom: 22 },
//             { time: 80, left: 95, bottom: 52 },
//             { time: 100, left: 100, bottom: 25 }
//         ];
//         // here there is a problem 
//         const keyframes8 = [
//             { time: 10, right: 12, bottom: 50 },
//             { time: 20, right: 29, bottom: 30 },
//             { time: 55, right: 59, bottom: 60 },
//             { time: 80, right: 88, bottom: 40 },
//             { time: 100, right: 100, bottom: 12.5 }
//         ];
        

//         function animateDuck(duckElement, keyframes, duration) {
//             let startTime = null;

//             function step(timestamp) {
//                 if (!startTime) startTime = timestamp;
//                 const elapsed = timestamp - startTime;

//                // const progress = (elapsed % duration) / duration * 100;
//                const progress = (elapsed / duration) * 100;
//                 let prevKeyframe = keyframes[0];
//                 let nextKeyframe = keyframes[keyframes.length - 1];
               

                
//                 for (let i = 0; i < keyframes.length - 1; i++) {
//                     if (progress >= keyframes[i].time && progress <= keyframes[i + 1].time) {
//                         prevKeyframe = keyframes[i];
//                         nextKeyframe = keyframes[i + 1];
//                         break;
//                     }else if (progress > duration){

//                     }
//                 }
            


//                 const keyframeProgress = (progress - prevKeyframe.time) / (nextKeyframe.time - prevKeyframe.time);
//                 const currentLeft = prevKeyframe.left + (nextKeyframe.left - prevKeyframe.left) * keyframeProgress;
//                 const currentBottom = prevKeyframe.bottom + (nextKeyframe.bottom - prevKeyframe.bottom) * keyframeProgress;
//                 if (!isPaused){

//                 duckElement.style.left = `${currentLeft}%`;
//                 duckElement.style.bottom = `${currentBottom}%`;
//             }
//                 requestAnimationFrame(step);
//             }

//             requestAnimationFrame(step);
//         }

//         // Start the animations for duck 1 and duck 2
//         animateDuck(document.getElementById('p1'), keyframes1,10000);
//         animateDuck(document.getElementById('p2'), keyframes2,30000);
//         animateDuck(document.getElementById('p3'), keyframes3,25000);
//         animateDuck(document.getElementById('p4'), keyframes4,8000);
//         animateDuck(document.getElementById('p5'), keyframes5,9000);
//         animateDuck(document.getElementById('p6'), keyframes6,20000);
//         animateDuck(document.getElementById('p7'), keyframes7,1000);
//         animateDuck(document.getElementById('p8'), keyframes8,15000);
//     });

//     // end *******************************************************************************