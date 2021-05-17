const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;


(function setup(){
    snake = new Snake();
    apple = new Apple();
    score = new Score();

    apple.randomLocation();
    
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        apple.draw();
        snake.update();
        snake.draw();
        score.drawScore();

        if (snake.eat(apple)){
            apple.randomLocation();
        }

        snake.checkCollision();
    }, 180);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))