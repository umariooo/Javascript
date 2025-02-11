const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let snake = [{ x: canvas.width / 2, y: canvas.height / 2 }];
let foodX = 0;
let foodY = 0;
let dx = 10;
let dy = 0;

// Create random food position
function createFood() {
    foodX = Math.floor(Math.random() * (canvas.width - 10) / 10) * 10;
    foodY = Math.floor(Math.random() * (canvas.height - 10) / 10) * 10;
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, 10, 10);
}

function drawSnake() {
    ctx.fillStyle = "lime";
    snake.forEach(part => ctx.fillRect(part.x, part.y, 10, 10));
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    // If the snake eats the food
    if (head.x === foodX && head.y === foodY) {
        score += 10;
        createFood();
    } else {
        snake.pop(); // Remove last part of the snake's tail if no food eaten
    }
}

// Change direction based on key press
document.addEventListener("keydown", (event) => {
    const keyPressed = event.key;

    if (keyPressed === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -10;
    } else if (keyPressed === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = 10;
    } else if (keyPressed === 'ArrowLeft' && dx === 0) {
        dx = -10;
        dy = 0;
    } else if (keyPressed === 'ArrowRight' && dx === 0) {
        dx = 10;
        dy = 0;
    }
});

function checkCollision() {
    const head = snake[0];

    // Check collision with walls
    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
        return true;
    }

    // Check collision with itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Main game loop
function gameLoop() {
    if (checkCollision()) {
        alert("Game Over! Your score: " + score);
        document.location.reload();
        return;
    }

    setTimeout(function onTick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFood();
        moveSnake();
        drawSnake();
        gameLoop();
    }, 100);
}

createFood();
gameLoop();
