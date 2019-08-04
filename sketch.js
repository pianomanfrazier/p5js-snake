let w = 20
let snake;
let apple;
// TODO: do multiple apples


function setup() {
    createCanvas(w * 50, w * 30);
    frameRate(10);

    snake = new Snake();
    apple = new Apple();
    apple.spawn();
}

function draw() {
    background(220);
    fill(0);
    stroke(255);

    apple.draw();

    snake.update();
    snake.draw();

    if (snake.x === apple.x && snake.y === apple.y) {
        apple.spawn();
        snake.eat();
    }

    // if snake.dead()
    //     gameOver()
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        console.log('left');
        snake.goLeft();
    } else if (keyCode === RIGHT_ARROW) {
        snake.goRight();
    } else if (keyCode === DOWN_ARROW) {
        snake.goDown();
    } else if (keyCode === UP_ARROW) {
        snake.goUp();
    }
}
