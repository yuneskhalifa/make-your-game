
// this part of the code to initilise the number of bullets , the counter for the result
// and the isPaused to check for the paused menu 
// start *****************************************
//let noBullets = 8;
let counter = 0;
let isPaused= false;
let lives = 20;

//let tracker1 = false;
let tracker1 = { value: false };
let tracker2 = { value: false };
let tracker3 = { value: false };
let tracker4 = { value: false };
let tracker5 = { value: false };
let tracker6 = { value: false };
let tracker7 = { value: false };
let tracker8 = { value: false };
// end *******************************************************

// this part of the code for keep triggring the shoot if they asked for it 
// start ***************************************************************************
let isSpacePressed = false;
let duckHit = false;

function performShooting(){
    let duckHit = false;
            if (lives > 0 ){
                if (!isPaused){
                    //noBullets--;
                   // document.getElementById("currentBullets").innerHTML = noBullets ;
                    const crosshair = document.getElementById('crosshair');
                    const ducks = document.querySelectorAll('img[id^="p"]');
                   
                    ducks.forEach(duck => {
                        if (isOverlapping(crosshair, duck)) {
                                duckHit = true;
                                duck.style.display = 'none'; // Hide the duck
                                //document.getElementById('shoot').play(); // Play the shooting sound
                                document.getElementById('currentScore').innerHTML = ++counter;
                                //toTrue(tracker1);
                                                    
                        }
                        
                       
                        
                       
                        
                    });  
                    if (duckHit == false) {
                        document.getElementById("lives").innerHTML = --lives;
                        if (lives == 0){
                            alert("you lost all your lives");

                        }
                    } 
                    
                    animateHitRound1();
                        

                }
               
            }else if (lives == 0){
                 alert("you lost all your lives");
                // location.reload();
               // nextRound();
                
            }

}



// Start listening for keydown and keyup events
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        isSpacePressed = true; // Set the flag when space is pressed
        performShooting();
        document.getElementById('shoot').play();
        //nextRound();
        
    }
});


document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        isSpacePressed = false; // Reset the flag when space is released
    }
});
// end ********************************************************************************

//start *****************************************************************************
//function animate when hit
function toTrue(tracker){
    let start = 0;
    let end = 10;
        const intervalId = setInterval(function() {
            
             start++;
             // Stop the interval when the time reaches the endTime (e.g., 10 seconds)
             if (start === end) {
                 clearInterval(intervalId);
                 tracker.value = true;
             }
         }, 1000); 
}

function toTrue1(tracker){
    let start = 0;
    let end = 7;
        const intervalId = setInterval(function() {
            
             start++;
             // Stop the interval when the time reaches the endTime (e.g., 10 seconds)
             if (start === end) {
                 clearInterval(intervalId);
                 tracker.value = true;
             }
         }, 1000); 
}

function toTrue2(tracker){
    let start = 0;
    let end = 4;
        const intervalId = setInterval(function() {
            
             start++;
             // Stop the interval when the time reaches the endTime (e.g., 10 seconds)
             if (start === end) {
                 clearInterval(intervalId);
                 tracker.value = true;
             }
         }, 1000); 
}
let trackers1 = false;
let trackers2 = false;
let trackers3 = false;
let trackers4 = false;
let trackers5 = false;
let trackers6 = false;
let trackers7 = false;
let trackers8 = false;

let trackers9 = false;
let trackers10 = false;
let trackers11 = false;
let trackers12 = false;
let trackers13 = false;
let trackers14 = false;
let trackers15 = false;
let trackers16 = false;
let trackers17 = false;
let trackers18 = false;

let trackers19 = false;
let trackers20 = false;
let trackers21 = false;
let trackers22 = false;
let trackers23 = false;





function animateHitRound1(){
    
    if (document.getElementById('p1').style.display == "none" && trackers1 == false){
        animateDuck(document.getElementById('p2'), keyframes2,10000);
        toTrue(tracker2);
        tracker1.value = false;
        trackers1 = true;
        console.log("1");
    }
    if (document.getElementById('p2').style.display == "none" && trackers2 == false){
        animateDuck(document.getElementById('p3'), keyframes3,10000);
        toTrue(tracker3);
        tracker2.value = false;
        trackers2 = true;
        console.log("2");
        
    }

    if (document.getElementById('p3').style.display == "none" && trackers3 == false){
        animateDuck(document.getElementById('p4'), keyframes4,10000);
        toTrue(tracker4);
        tracker3.value = false;
        trackers3 = true;
        console.log("3");
        
    }

    if (document.getElementById('p4').style.display == "none" && trackers4 == false){
        animateDuck(document.getElementById('p5'), keyframes5,10000);
        toTrue(tracker5);
        tracker4.value = false;
        trackers4 = true;
        console.log("4");
        
    }
    if (document.getElementById('p5').style.display == "none" && trackers5 == false){
        animateDuck(document.getElementById('p6'), keyframes6,10000);
        toTrue(tracker6);
        tracker5.value = false;
        trackers5 = true;
        console.log("5");
        
    }
    
    if (document.getElementById('p6').style.display == "none" && trackers6 == false){
        animateDuck(document.getElementById('p7'), keyframes7,10000);
        toTrue(tracker7);
        tracker7.value = false;
        trackers6 = true;
        console.log("6");
        
    }

    if (document.getElementById('p7').style.display == "none" && trackers7 == false){
        animateDuck(document.getElementById('p8'), keyframes8,10000);
        toTrue(tracker8);
        tracker8.value = false;
        trackers7 = true;
        console.log("7");
        
    }

    if (document.getElementById('p8').style.display == "none" && trackers8 == false){
        nextRound();
        animateDuck(document.getElementById('p9'), keyframes1,7000);
        toTrue1(tracker9);
        tracker9.value = false;
        trackers8 = true;
        console.log("8");
        
    }
    
    if (document.getElementById('p9').style.display == "none" && trackers9 == false){
        animateDuck(document.getElementById('p10'), keyframes2,7000);
        toTrue1(tracker10);
        tracker10.value = false;
        trackers9 = true;
        console.log("9");
        
    }

    if (document.getElementById('p10').style.display == "none" && trackers10 == false){
        animateDuck(document.getElementById('p11'), keyframes3,7000);
        toTrue1(tracker11);
        tracker11.value = false;
        trackers10 = true;
        console.log("10");
        
    }

    if (document.getElementById('p11').style.display == "none" && trackers11 == false){
        animateDuck(document.getElementById('p12'), keyframes4,7000);
        toTrue1(tracker12);
        tracker12.value = false;
        trackers11 = true;
        console.log("11");
        
    }

    if (document.getElementById('p12').style.display == "none" && trackers12 == false){
        animateDuck(document.getElementById('p13'), keyframes5,7000);
        toTrue1(tracker13);
        tracker13.value = false;
        trackers12 = true;
        console.log("12");
        
    }
    
    if (document.getElementById('p13').style.display == "none" && trackers13 == false){
        animateDuck(document.getElementById('p14'), keyframes6,7000);
        toTrue1(tracker14);
        tracker14.value = false;
        trackers13 = true;
        console.log("13");
        
    }

    if (document.getElementById('p14').style.display == "none" && trackers14 == false){
        animateDuck(document.getElementById('p15'), keyframes7,7000);
        toTrue1(tracker15);
        tracker15.value = false;
        trackers14 = true;
        console.log("14");
        
    }

    if (document.getElementById('p15').style.display == "none" && trackers15 == false){
        animateDuck(document.getElementById('p16'), keyframes8,7000);
        toTrue1(tracker16);
        tracker16.value = false;
        trackers15 = true;
        console.log("15");
        
    }

    if (document.getElementById('p16').style.display == "none" && trackers16 == false){
        nextRound();
        animateDuck(document.getElementById('p17'), keyframes1,4000);
        toTrue2(tracker17);
        tracker17.value = false;
        trackers16 = true;
        console.log("16");
        
    }

    if (document.getElementById('p17').style.display == "none" && trackers17 == false){
        animateDuck(document.getElementById('p18'), keyframes2,4000);
        toTrue2(tracker18);
        tracker18.value = false;
        trackers17 = true;
        console.log("17");
        
    }
    if (document.getElementById('p18').style.display == "none" && trackers18 == false){
        animateDuck(document.getElementById('p19'), keyframes3,4000);
        toTrue2(tracker19);
        tracker19.value = false;
        trackers18 = true;
        console.log("18");
        
    }

    if (document.getElementById('p19').style.display == "none" && trackers19 == false){
        animateDuck(document.getElementById('p20'), keyframes4,4000);
        toTrue2(tracker20);
        tracker20.value = false;
        trackers19 = true;
        console.log("19");
        
    }

    if (document.getElementById('p20').style.display == "none" && trackers20 == false){
        animateDuck(document.getElementById('p21'), keyframes5,4000);
        toTrue2(tracker21);
        tracker21.value = false;
        trackers20 = true;
        console.log("20");
        
    }

    if (document.getElementById('p21').style.display == "none" && trackers21 == false){
        animateDuck(document.getElementById('p22'), keyframes6,4000);
        toTrue2(tracker22);
        tracker22.value = false;
        trackers21 = true;
        console.log("21");
        
    }
    
    if (document.getElementById('p22').style.display == "none" && trackers22 == false){
        animateDuck(document.getElementById('p23'), keyframes7,4000);
        toTrue2(tracker23);
        tracker23.value = false;
        trackers22 = true;
        console.log("22");
        
    }

    if (document.getElementById('p23').style.display == "none" && trackers23 == false){
        animateDuck(document.getElementById('p24'), keyframes8,4000);
        // toTrue(tracker24);
        // tracker24.value = false;
        trackers23 = true;
        console.log("23");
        
    }


            const intervalId = setInterval(function() {
                if (tracker1.value == true && trackers1 == false){
                    console.log("11");
                    animateDuck(document.getElementById('p2'), keyframes2,10000);
                    toTrue(tracker2);
                    tracker1.value = false;
                    trackers1 == true;
                    
                }

                if (tracker2.value == true && trackers2 == false){
                    console.log("22");
                    animateDuck(document.getElementById('p3'), keyframes3,10000);
                    toTrue(tracker3);
                    tracker2.value = false;
                    trackers2 == true;
                 
                }

                if (tracker3.value == true && trackers3 == false){
                    console.log("33");
                    animateDuck(document.getElementById('p4'), keyframes4,10000);
                    toTrue(tracker4);
                    tracker3.value = false;
                    trackers3 == true;
                 
                }

                if (tracker4.value == true && trackers4 == false){
                    console.log("44");
                    animateDuck(document.getElementById('p5'), keyframes5,10000);
                    toTrue(tracker5);
                    tracker4.value = false;
                    trackers4 == true;
                 
                }

                if (tracker5.value == true && trackers5 == false){
                    console.log("55");
                    animateDuck(document.getElementById('p6'), keyframes6,10000);
                    toTrue(tracker6);
                    tracker5.value = false;
                    trackers5 == true;
                 
                }

                if (tracker6.value == true && trackers6 == false){
                    console.log("66");
                    animateDuck(document.getElementById('p7'), keyframes7,10000);
                    toTrue(tracker7);
                    tracker6.value = false;
                    trackers6 == true;
                 
                }

                if (tracker7.value == true && trackers7 == false){
                    console.log("77");
                    animateDuck(document.getElementById('p8'), keyframes8,10000);
                    toTrue(tracker8);
                    tracker7.value = false;
                    trackers7 == true;
                 
                }

                if (tracker8.value == true && trackers8 == false){
                    console.log("88");
                    nextRound();
                    animateDuck(document.getElementById('p9'), keyframes1,7000);
                    toTrue1(tracker9);
                    tracker8.value = false;
                    trackers8 == true;
                 
                }

                if (tracker9.value == true && trackers9 == false){
                    console.log("99");
                    animateDuck(document.getElementById('p10'), keyframes2,7000);
                    toTrue1(tracker10);
                    tracker9.value = false;
                    trackers9 == true;
                 
                }
                if (tracker10.value == true && trackers10 == false){
                    console.log("1010");
                    animateDuck(document.getElementById('p11'), keyframes3,7000);
                    toTrue1(tracker11);
                    tracker10.value = false;
                    trackers10 == true;
                 
                }
                if (tracker11.value == true && trackers11 == false){
                    console.log("1111");
                    animateDuck(document.getElementById('p12'), keyframes4,7000);
                    toTrue1(tracker12);
                    tracker11.value = false;
                    trackers11 == true;
                 
                }
                if (tracker12.value == true && trackers12 == false){
                    console.log("1212");
                    animateDuck(document.getElementById('p13'), keyframes5,7000);
                    toTrue1(tracker13);
                    tracker12.value = false;
                    trackers12 == true;
                 
                }

                if (tracker13.value == true && trackers13 == false){
                    console.log("1313");
                    animateDuck(document.getElementById('p14'), keyframes6,7000);
                    toTrue1(tracker14);
                    tracker13.value = false;
                    trackers13 == true;
                 
                }
                if (tracker14.value == true && trackers14 == false){
                    console.log("1414");
                    animateDuck(document.getElementById('p15'), keyframes7,7000);
                    toTrue1(tracker15);
                    tracker14.value = false;
                    trackers14 == true;
                 
                }
                if (tracker15.value == true && trackers15 == false){
                    console.log("1515");
                    animateDuck(document.getElementById('p16'), keyframes8,7000);
                    toTrue1(tracker16);
                    tracker15.value = false;
                    trackers15 == true;
                 
                }
                if (tracker16.value == true && trackers16 == false){
                    nextRound();
                    console.log("1616");
                    animateDuck(document.getElementById('p17'), keyframes1,4000);
                    toTrue2(tracker17);
                    tracker16.value = false;
                    trackers16 == true;
                 
                }

                if (tracker17.value == true && trackers17 == false){
                    console.log("1717");
                    animateDuck(document.getElementById('p18'), keyframes2,4000);
                    toTrue2(tracker18);
                    tracker17.value = false;
                    trackers17 == true;
                 
                }
                if (tracker18.value == true && trackers18 == false){
                    console.log("1818");
                    animateDuck(document.getElementById('p19'), keyframes3,4000);
                    toTrue2(tracker19);
                    tracker18.value = false;
                    trackers18 == true;
                 
                }
                if (tracker19.value == true && trackers19 == false){
                    console.log("1919");
                    animateDuck(document.getElementById('p20'), keyframes4,4000);
                    toTrue2(tracker20);
                    tracker19.value = false;
                    trackers19 == true;
                 
                }
                if (tracker20.value == true && trackers20 == false){
                    console.log("2020");
                    animateDuck(document.getElementById('p21'), keyframes5,4000);
                    toTrue2(tracker21);
                    tracker20.value = false;
                    trackers20 == true;
                 
                }
                if (tracker21.value == true && trackers21 == false){
                    console.log("2121");
                    animateDuck(document.getElementById('p22'), keyframes6,4000);
                    toTrue2(tracker22);
                    tracker21.value = false;
                    trackers21 == true;
                 
                }

                if (tracker22.value == true && trackers22 == false){
                    console.log("2222");
                    animateDuck(document.getElementById('p23'), keyframes7,4000);
                    toTrue2(tracker23);
                    tracker22.value = false;
                    trackers22 == true;
                 
                }

                if (tracker23.value == true && trackers23 == false){
                    console.log("2323");
                    animateDuck(document.getElementById('p24'), keyframes8,4000);
                   // toTrue(tracker24);
                    tracker23.value = false;
                    trackers23 == true;
                 
                }

                
                
                
            }, 1000); 
}




//start ***************************************************************
// test the rounds 
let currentRound = 1;
let maxRound = 3;
let totalScore = 0;
let lives1 = 0;


let tracker9 = { value: false };
let tracker10 = { value: false };
let tracker11 = { value: false };
let tracker12 = { value: false };
let tracker13 = { value: false };
let tracker14 = { value: false };
let tracker15 = { value: false };
let tracker16 = { value: false };

function nextRound(){
    if (currentRound < maxRound){
        currentRound++;
        totalScore+= counter;
        counter = 0;
        lives1 = lives;
        document.getElementById("currentScore").innerHTML = counter;
        document.getElementById("currentRound").innerHTML = currentRound;
        document.getElementById("totalScore").innerHTML = totalScore;
        document.getElementById("lives").innerHTML = lives1;   
    }
   
}


// end ***********************************************************
 
// if there is somthing wrong that because of the resumeGame function and the enter 


// this code to check if the crosshair is overlapping with the ducks 
// start **************************************************************
function isOverlapping(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}
// end *******************************************************************

// this part of the code to caculate the fps 
//start *************************************************************************
function calculateFPS() {
   
        let startTime = performance.now();
    let frameCount = 0;
  
    function updateFPS() {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
  
      if (elapsedTime >= 1000) { // Measure FPS over 1 second
        const fps = frameCount / (elapsedTime / 1000);
       // console.log(`FPS: ${fps}`); // Log the calculated FPS
        document.getElementById('fpsCounter').textContent = `FPS: ${fps}`;
        frameCount = 0;
        startTime = currentTime;
      }
  
      frameCount++;
      requestAnimationFrame(updateFPS);
    }
  
    requestAnimationFrame(updateFPS);

    
    
  }
  
  calculateFPS();

  // end ***************************************************************************

  let tracker17 = { value: false };
  let tracker18 = { value: false };
  let tracker19 = { value: false };
  let tracker20 = { value: false };
  let tracker21 = { value: false };
  let tracker22 = { value: false };
  let tracker23 = { value: false };
 

// this part of the code to keep moving the crosshair 
// start ***********************************************************************
let speed = 10; // Speed of movement
let keys = {};
function moveCrosshair() {
    
        
    if (keys['ArrowUp']) {
        document.getElementById('crosshair').style.top = `${parseInt(document.getElementById('crosshair').style.top || 0, 10) - speed}px`;
    }
    if (keys['ArrowDown']) {
        document.getElementById('crosshair').style.top = `${parseInt(document.getElementById('crosshair').style.top || 0, 10) + speed}px`;
    }
    if (keys['ArrowLeft']) {
        document.getElementById('crosshair').style.left = `${parseInt(document.getElementById('crosshair').style.left || 0, 10) - speed}px`;
    }
    if (keys['ArrowRight']) {
        document.getElementById('crosshair').style.left = `${parseInt(document.getElementById('crosshair').style.left || 0, 10) + speed}px`;

    }
    if (isPaused==false){
        requestAnimationFrame(moveCrosshair); 
    }else if(isPaused == true){
        document.addEventListener('keydown', function(event) {
            if (event.key=== 'Enter') {
                requestAnimationFrame(moveCrosshair);
                resumeGame(); 
            }
        });
    }
}

// Event listener for keydown to start movement
window.addEventListener('keydown', (event) => {
    keys[event.key] = true; // Set the key as pressed
});

// Event listener for keyup to stop movement
window.addEventListener('keyup', (event) => {
    keys[event.key] = false; // Set the key as released
});

// Start moving the crosshair
moveCrosshair();

// end ***************************************************************************************


// this part of the code to pause, resume, and restart the game 
// start **************************************************************
var resumeButton = document.getElementById('ContinueButton');
var restartButton = document.getElementById('RestartButton');

document.addEventListener('keyup', function(e){
    if (e.key == 'Escape') {
        pauseGame();
    }

});

function pauseGame(){
    isPaused = true;
    document.getElementById('pauseMenu').style.visibility = "visible";
}

function resumeGame(){
    isPaused = false;
    document.getElementById('pauseMenu').style.visibility = "hidden";

}

function restartGame() {
    isPaused = false;
    document.getElementById('pauseMenu').style.visibility = "hidden";
    location.reload();
}

document.addEventListener('keyup', function(e){
    if (e.key == 'Shift') {
        restartGame();
    }

});
// end **********************************************************************

// this part of the code to start the timer and pasue it when the pause menu is activated 
// start ******************************************************************************
let remainingTime ;
let timerNotPause = true ;
function startTimer(duration, display) {
    let timer = duration;
    let minutes, seconds;

    const countdown = setInterval(function () {
        if (timerNotPause == true){
            //console.log(timerPause);

        // Calculate minutes and seconds
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        // Format minutes and seconds to always show two digits
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Update the display
        display.textContent = minutes + ':' + seconds;

        // Check if the timer has reached 0, if so, clear the interval
        if (--timer < 0) {
            clearInterval(countdown);
            alert("please press space to reload the game - time is over")
            location.reload();
        }
    }

        remainingTime = timer;
    }, 1000); // The interval is set to 1000 milliseconds (1 second)
}

window.onload = function () {
    const display = document.getElementById('timer');
    const oneMinute = 300; // 1 minute in seconds
        startTimer(oneMinute, display);
};

document.addEventListener('keyup', function(e){
    if (e.key == 'Escape') {
        timerNotPause = false;
        console.log(timerNotPause)
       
    }else if (e.key == 'Enter'){
        timerNotPause = true
    }

});
// end *************************************************************************

// this part of the code for the animation of the ducks 
// start *************************************************************



        const keyframes1 = [
            { time: 10, left: 10, bottom: 0 },
            { time: 30, left: 30, bottom: 50 },
            { time: 50, left: 40, bottom: 70 },
            { time: 70, left: 60, bottom: 30 },
            { time: 100, left: 100, bottom: 100 }
        ];
        
        const keyframes2 = [
            { time: 0, left: 20, bottom: 0 },
            { time: 20, left: 20, bottom: 30 },
            { time: 60, left: 25, bottom: 60 },
            { time: 80, left: 90, bottom: 30 },
            { time: 100, left: 100, bottom: 87.5 }
        ];
        
        const keyframes3 = [
            { time: 10, left: 30, bottom: 0 },
            { time: 20, left: 30, bottom: 30 },
            { time: 55, left: 45, bottom: 50 },
            { time: 80, left: 90, bottom: 70 },
            { time: 100, left: 100, bottom: 75 }
        ];
        
        const keyframes4 = [
            { time: 10, right: 40, bottom: 0 },
            { time: 20, right: 70, bottom: 50 },
            { time: 55, right: 80, bottom: 70 },
            { time: 80, right: 90, bottom: 90 },
            { time: 100, right: 100, bottom: 62.5 }
        ];
        // here there is a problem
        const keyframes5 = [
            { time: 10, left: 41, bottom: 0 },
            { time: 20, left: 50, bottom: 55 },
            { time: 55, left: 62, bottom:  77},
            { time: 80, left: 82, bottom: 88 },
            { time: 100, left: 100, bottom: 50 }
        ];
        
        const keyframes6 = [
            { time: 10, left: 60, bottom: 0 },
            { time: 20, left: 73, bottom: 12 },
            { time: 55, left: 87, bottom: 56 },
            { time: 80, left: 95, bottom: 75 },
            { time: 100, left: 100, bottom: 37.5 }
        ];
        
        const keyframes7 = [
            { time: 10, left: 70, bottom: 0 },
            { time: 20, left: 66, bottom: 56 },
            { time: 55, left: 88, bottom: 22 },
            { time: 80, left: 95, bottom: 52 },
            { time: 100, left: 100, bottom: 25 }
        ];
        // here there is a problem 
        const keyframes8 = [
            { time: 10, right: 80, bottom: 0 },
            { time: 20, right: 29, bottom: 30 },
            { time: 55, right: 59, bottom: 60 },
            { time: 80, right: 88, bottom: 40 },
            { time: 100, right: 100, bottom: 12.5 }
        ];

        

        function animateDuck(duckElement, keyframes, duration) {
            let startTime = null;
            duckElement.style.visibility = "visible";
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;

               // const progress = (elapsed % duration) / duration * 100;
               const progress = (elapsed / duration) * 100;
                let prevKeyframe = keyframes[0];
                let nextKeyframe = keyframes[keyframes.length - 1];
               

                
                for (let i = 0; i < keyframes.length - 1; i++) {
                    if (progress >= keyframes[i].time && progress <= keyframes[i + 1].time) {
                        prevKeyframe = keyframes[i];
                        nextKeyframe = keyframes[i + 1];
                        break;
                    }else if (progress > duration){

                    }
                }
            


                const keyframeProgress = (progress - prevKeyframe.time) / (nextKeyframe.time - prevKeyframe.time);
                const currentLeft = prevKeyframe.left + (nextKeyframe.left - prevKeyframe.left) * keyframeProgress;
                const currentBottom = prevKeyframe.bottom + (nextKeyframe.bottom - prevKeyframe.bottom) * keyframeProgress;
                if (!isPaused){

                duckElement.style.left = `${currentLeft}%`;
                duckElement.style.bottom = `${currentBottom}%`;
            }
                requestAnimationFrame(step);
               
            }

            requestAnimationFrame(step);
           
        }
        
        
      
        document.addEventListener('DOMContentLoaded', function() {
                 animateDuck(document.getElementById('p1'), keyframes1,10000);
                 toTrue(tracker1);
                 //console.log(tracker1);
            
        });

    // end *******************************************************************************

 