let speed_alfred = 500;						//миллисикунды


const allEnemyCoin = [];					//Масив для хранение врагов монеток					//Размеры монетки

//const alfredPosition = positionAlfred();	// Стартовая позрцря пользователя
//let xCoordinateUser = alfredPosition.x;
//let yCoordinateUser = alfredPosition.y;

// Получаем ширину и высоту экрана
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// --=--=-- Враг монетка --=--=--=--=--=--=--=--=--=--=--=--
let speed_enemy_coin = 300;					//миллисикунды
let maxCountEnemyCoin = 2;
let priceEnemyCoin = 1;
let enemyCoinHeight = Math.round((5 / 100) * screenHeight);


// Создание нового контейнера div
var container = document.createElement('div');
container.id = 'image-container';			// Установка ID для контейнера
container.style.backgroundColor = "#181A20";
// Добавление контейнера в body документа
document.body.appendChild(container);


// --=--=-- Создаю Canvas --=--=--=--=--=--=--=--=--=--=--
let canvas = document.createElement("canvas");
canvas.width = screenWidth;
canvas.height = screenHeight;
container.appendChild(canvas);				// Добавляю его в созданый ранее контейнер
let ctx = canvas.getContext("2d");

//Монета убийца
let imageEnemyCoin = new Image();
imageEnemyCoin.src = 'img/test-coin.png';

// Пользователь
let imageTarget = new Image();
imageTarget.src = 'img/logo_for_site.png';
imageTarget.style.width = "10vh";
imageTarget.style.height = "auto";
imageTarget.style.top = "50%";
imageTarget.style.left = "50%";

// Столкновение обьектов
// enemyC, targetC - обьекты типа {x: 20, y: 20, radius: 40}
function checkEnemyTargetCollision(enemyC, targetC) {
	const distance = Math.sqrt(Math.pow(enemyC.x - targetC.x, 2) + Math.pow(enemyC.y - targetC.y, 2));

	return distance < (enemyC.radius + targetC.radius);
};

function enemyCoinLevel1(x, y, radius) {
	let enemyCoinWidht = 40;
	let enemyCoinHeight = 40;
	ctx.globalAlpha = 1; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)

	ctx.drawImage(imageEnemyCoin, x - enemyCoinWidht / 2, y - enemyCoinHeight / 2, enemyCoinWidht, enemyCoinHeight); // Размеры изображения можно изменить

	ctx.beginPath();
	ctx.ellipse(x, y, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
	ctx.strokeStyle = "#ff0000";
	ctx.globalAlpha = 0.1; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)

	ctx.stroke();
};

function target(x, y, radius) {
	//ctx.drawImage(imageTarget, x, y, 100, 100); // Размеры изображения можно изменить
	let width = 70;
    let height = 78;
    ctx.globalAlpha = 1; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)
    ctx.drawImage(imageTarget, x - width / 2, y - height / 2, width, height);

    color = "#ff0000"
    ctx.beginPath();
	ctx.ellipse(x, y, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
	// Устанавливаем прозрачность для обводки
    ctx.globalAlpha = 0.1; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)
	ctx.strokeStyle = color;
	ctx.stroke();
};

let = enemyCoinObject = {
	x: 180,
	y: 100,
	dx: 1,					// Направление движения и скорость
	dy: 1,					// Направление движения и скорость
	radius: 20
};

let = targetObject = {
	x: 180,
	y: 300,
	dx: 20,					// Направление движения и скорость
	dy: 20,					// Направление движения и скорость
	radius: 36
};

function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	targetObject.x += targetObject.dx
	targetObject.y += targetObject.dy

	if ((targetObject.y + targetObject.radius >= screenHeight) || (targetObject.y - targetObject.radius <= 0)) {
		targetObject.dy = targetObject.dy * (-1);
	};

	if ((targetObject.x + targetObject.radius >= screenWidth) || (targetObject.x - targetObject.radius <= 0)) {
		targetObject.dx = targetObject.dx * (-1);
	};


	if (checkEnemyTargetCollision(enemyCoinObject, targetObject)) {
		console.log('True')
	} else {
		console.log('False')
		enemyCoinObject.y += enemyCoinObject.dy
	}

	enemyCoinLevel1(enemyCoinObject.x, enemyCoinObject.y, enemyCoinObject.radius);
    target(targetObject.x, targetObject.y, targetObject.radius);


    window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render); // Начать анимацию


//imageEnemyCoin.onload = function() {
//    window.requestAnimationFrame(render); // Начать анимацию после загрузки изображения
//};




