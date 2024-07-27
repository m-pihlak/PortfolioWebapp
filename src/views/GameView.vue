<template>
    <div id="game">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; margin-bottom: 0;">
            <h1>Snake Game</h1>
            <h2>Score: {{ this.score }}</h2>
            <h2>High Score: {{ this.getHighScore() }}</h2>
        </div>
        <canvas id="game_canvas"></canvas>
    </div>
</template>

<script>
import '@/assets/css/main.css'
import { mapGetters } from 'vuex';

export default {
    name: 'GameView',
    components: {
    },
    data() {
        return {
            score: 0
        }
    },
    methods: {
        ...mapGetters([
            'getHighScore'
        ])
    },
    mounted() {
        const DEFAULT_UNIT_SIZE = 25;
        const SNAKE_COLOR = "#76F707";
        const FOOD_COLOR = "#F70776";
        const BACKGROUND_COLOR = "#141010";
        const vuePointer = this;

        const canvas = document.querySelector("#game_canvas");
        const boundingClientRect = canvas.getBoundingClientRect();
        canvas.setAttribute("width", boundingClientRect.width);
        canvas.setAttribute("height", boundingClientRect.height);
        const ctx = canvas.getContext("2d");

        const unitCounts = {
            x: Math.floor(boundingClientRect.width/DEFAULT_UNIT_SIZE),
            y: Math.floor(boundingClientRect.height/DEFAULT_UNIT_SIZE)
        }
        const unitSize = {
            x: boundingClientRect.width/unitCounts.x,
            y: boundingClientRect.height/unitCounts.y
        }
        
        let running = false;
        let turned = false;
        // Left negative
        // Right positive
        let xVelocity = unitSize.x;
        // Up negative
        // Down positive
        let yVelocity = 0;

        const food = {
            x: null,
            y: null
        }
        
        let snake = [
            {
                x: Math.floor(unitCounts.x/2)*unitSize.x,
                y: Math.floor(unitCounts.y/2)*unitSize.y
            },
            {
                x: (Math.floor(unitCounts.x/2) - 1)*unitSize.x,
                y: Math.floor(unitCounts.y/2)*unitSize.y
            },
            {
                x: (Math.floor(unitCounts.x/2) - 2)*unitSize.x,
                y: Math.floor(unitCounts.y/2)*unitSize.y
            },
            {
                x: (Math.floor(unitCounts.x/2) - 3)*unitSize.x,
                y: Math.floor(unitCounts.y/2)*unitSize.y
            },
            {
                x: (Math.floor(unitCounts.x/2) - 4)*unitSize.x,
                y: Math.floor(unitCounts.y/2)*unitSize.y
            }
        ];

        window.addEventListener("keydown", changeDirection);
        canvas.addEventListener("click", resetGame);
        
        gameStart(this);

        function gameStart() {
            running = true;
            createFood();
            drawFood();
            nextTick();
        }

        function nextTick() {
            if (running) {
                setTimeout(() => {
                    clearBoard();
                    drawFood();
                    moveSnake();
                    turned = false;
                    drawSnake();
                    checkGameOver();
                    nextTick();
                }, 75);
            }
            else {
                displayGameOver();
            }
        }

        function drawRoundRect(x, y, width, height) {
            ctx.beginPath();
            ctx.roundRect(x, y, width, height, 4);
            ctx.fill();
        }

        function clearBoard() {
            ctx.fillStyle = BACKGROUND_COLOR;
            drawRoundRect(0, 0, boundingClientRect.width, boundingClientRect.height);
        }

        function createFood() {
            const randomFood = (min, max) => Math.round(Math.random() * (max - min) + min);
            food.x = randomFood(0, unitCounts.x - 1)*unitSize.x;
            food.y = randomFood(0, unitCounts.y - 1)*unitSize.y;
        }

        function drawFood() {
            ctx.fillStyle = FOOD_COLOR;
            drawRoundRect(food.x, food.y, unitSize.x, unitSize.y);
        }

        function checkSnakeSegmentCoverFood(segmentIndex) {
            return Math.abs(snake[segmentIndex].x - food.x) < 0.01 && Math.abs(snake[segmentIndex].y - food.y) < 0.01;
        }

        function checkFoodInSnake() {
            for (let i = 0; i < snake.length; i++) {
                if (checkSnakeSegmentCoverFood(i))
                    return true;
            }
            return false;
        }

        
        function checkSnakeSegmentCoverHead(segmentIndex) {
            return Math.abs(snake[segmentIndex].x - snake[0].x) < 0.01 && Math.abs(snake[segmentIndex].y - snake[0].y) < 0.01;
        }

        function checkSnakeEatItself() {
            for (let i = 1; i < snake.length; i++) {
                if (checkSnakeSegmentCoverHead(i))
                    return true;
            }
            return false;
        }

        function moveSnake() {
            const head = {
                x: snake[0].x + xVelocity,
                y: snake[0].y + yVelocity
            }
            snake.unshift(head)
            
            if (checkSnakeSegmentCoverFood(0)) {
                vuePointer.score += 1;
                createFood();
                while (checkFoodInSnake())
                    createFood();
            } else {
                snake.pop();
            }
        }

        function drawSnake() {
            ctx.fillStyle = SNAKE_COLOR;
            snake.forEach((part) => {
                drawRoundRect(part.x, part.y, unitSize.x, unitSize.y);
            });
        }

        function changeDirection(e) {
            if (turned) {
                return;
            }
            const keyPressed = e.keyCode;
            const LEFT = 37;
            const UP = 38;
            const RIGHT = 39;
            const DOWN = 40;

            // Moving up/down
            if (yVelocity != 0) {
                switch (keyPressed) {
                    case LEFT:
                        xVelocity = -unitSize.x;
                        yVelocity = 0;
                        turned = true;
                        break
                    case RIGHT:
                        xVelocity = unitSize.x;
                        yVelocity = 0;
                        turned = true;
                        break
                }
            // Moving left/right
            } else {
                switch (keyPressed) {
                    case UP:
                        xVelocity = 0;
                        yVelocity = -unitSize.y;
                        turned = true;
                        break;
                    case DOWN:
                        xVelocity = 0;
                        yVelocity = unitSize.y;
                        turned = true;
                        break
                }
            }
        }

        function checkGameOver() {
            const x = snake[0].x + unitSize.x/2;
            const y = snake[0].y + unitSize.y/2;
            const snakeOutOfBounds = x < 0 || y < 0 || x > boundingClientRect.width || y > boundingClientRect.height;
            running = !(snakeOutOfBounds || checkSnakeEatItself());
        }

        function displayGameOver() {
            ctx.font =  '36px "Press Start 2P"';
            ctx.fillStyle = FOOD_COLOR;
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER!", boundingClientRect.width/2, boundingClientRect.height/2);
            ctx.font =  '18px "Press Start 2P"';
            ctx.fillStyle = SNAKE_COLOR;
            ctx.textAlign = "center";
            ctx.fillText("CLICK TO RESTART", boundingClientRect.width/2, boundingClientRect.height/2+36);
            running = false;
            vuePointer.$store.dispatch({
                type: 'updateHighScore',
                score: vuePointer.score
            });
        }

        function resetGame() {
            if (running) return;
            vuePointer.score = 0;
            xVelocity = unitSize.x;
            yVelocity = 0;
            snake = [
                {
                    x: Math.floor(unitCounts.x/2)*unitSize.x,
                    y: Math.floor(unitCounts.y/2)*unitSize.y
                },
                {
                    x: (Math.floor(unitCounts.x/2) - 1)*unitSize.x,
                    y: Math.floor(unitCounts.y/2)*unitSize.y
                },
                {
                    x: (Math.floor(unitCounts.x/2) - 2)*unitSize.x,
                    y: Math.floor(unitCounts.y/2)*unitSize.y
                },
                {
                    x: (Math.floor(unitCounts.x/2) - 3)*unitSize.x,
                    y: Math.floor(unitCounts.y/2)*unitSize.y
                },
                {
                    x: (Math.floor(unitCounts.x/2) - 4)*unitSize.x,
                    y: Math.floor(unitCounts.y/2)*unitSize.y
                }
            ];
            gameStart();
        }
        
    }
}
</script>

<style>

#game_canvas {
    display: block;
    width: fill;
    height: calc(var(--router-container-height) - var(--nav-button-height) - 4*var(--spacing));
    background-color: var(--dark);
    border-radius: 4px;
    box-shadow: 4px 4px 16px 4px black;
}

</style>