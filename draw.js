const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const snakeSpeed = 250;

var snake;
//function to draw a snake 
(function setup() {
    snake = new Snake();

    fruit = new Fruit();

    //set the timer
    window.setInterval(() => {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)) {
            fruit.pickLocation();
        }
        snake.checkCollision();
        document.querySelector('.score').innerText = snake.total;
    }, snakeSpeed - (snake.total * scale));
}());

// to handle key presses

window.addEventListener('keydown', ((evt) => {
    const direction =  evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
