const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
let Player1Y = canvas.height /2 -40;
let Player2Y = canvas.height /2 - 40;
let BallX = canvas.width /2;
let BallY = canvas.height /2;
let BallSpeedX = 1;
let BallSpeedY = 3;
let player1Score =0;
let player2Score =0;
const defenderHeight =100;
const defenderWidth =10;

console.log(`Height:${canvas.height}`);
console.log(`Width:${canvas.width}`);


//draw ball and defenders
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle ='red';
    box = ctx.fillRect(0, Player1Y, defenderWidth, defenderHeight);

    ctx.fillStyle = 'orange';
    ctx.fillRect(canvas.width -10, Player2Y, defenderWidth, defenderHeight );

    

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ball = ctx.arc(BallX, BallY, 10, 0, Math.PI * 2); // Draw ball
    ctx.fill();
}



// reset ball to centre
function resetBall()
{
    BallX = canvas.width / 2;
    BallY = canvas.height / 2;
    BallSpeedX = - BallSpeedX;
    
}

//function for ball movement
function moveBall(){
    BallX += BallSpeedX;
    BallY += BallSpeedY;


   

    //out of bounds detection
    if(BallY > canvas.height || BallY <0)
    { 
        BallSpeedY = -BallSpeedY;
    }


   

    //Player 1 collision
    if(BallX <= defenderWidth && BallY >= Player1Y && BallY <= Player1Y + defenderHeight)
    {
        BallSpeedX =- BallSpeedX;
    }


    //Player 2 collision
    if(BallX >= canvas.width - defenderWidth && BallY >= Player2Y && BallY <= Player2Y + defenderHeight)
    {
        BallSpeedX =- BallSpeedX;
    }

   
    //Goal Detection
    if(BallX > canvas.width)
    {
        resetBall();
        player1Score++;
    }

    if(BallX < 0)
    {
        player2Score++;
        resetBall();
    }


    document.getElementById("scoreBoard").innerText = `Player 1: ${player1Score} | Player 2: ${player2Score}`

    if(player1Score === 7)
    {
        resetBall();
        document.getElementById("game-over").innerText = "Player 1 Wins!!!";
    }

    else if(player2Score === 7)
    {
        resetBall();
        document.getElementById("game-over").innerText = "Player 2 Wins!!!";

    }
  
}

//keybinds
document.addEventListener("keydown", (event) =>{
    if(event.key === 'w' && Player2Y > 0)
    {
        
        Player2Y -= 10;
        console.log("w pressed");
    }

    if(event.key ==='s' && Player2Y < canvas.height - defenderHeight)
    {
        Player2Y +=10;
        console.log("S pressed");
    }

    if(event.key ==="ArrowUp" && Player1Y >0 )
    {
        Player1Y -=10;
    }

    if(event.key ==='ArrowDown' && Player1Y < canvas.height - defenderHeight)
    {
        Player1Y +=10;
    }
})

//game loop
function gameLoop()
{
    draw();
    moveBall();
    requestAnimationFrame(gameLoop);
}

//reset button
document.getElementById("reset-button").addEventListener('click', () =>{

    if(player1Score ==7 || player2Score ===7)
    {
        document.getElementById("game-over").innerText ="";
    }
    player1Score =0;
    player2Score =0;
    Player1Y = canvas.height /2 - 40;
    Player2Y = canvas.height /2 - 40;
    resetBall();



});

gameLoop();











