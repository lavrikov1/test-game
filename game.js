//document.body.addEventListener('touchmove', function(e) {
//    e.preventDefault();
//}, { passive: false });


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

//Пуля
let imageBullet = new Image();
imageBullet.src = 'img/bullet.png';

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

function target(x, y, radius, directionX, directionY) {
	// Вычисляем угол, учитывая исходное направление изображения
    let angle = Math.atan2(directionY - y, directionX - x) + Math.PI / 2; // Корректируем на 90 градусов
	ctx.save(); // Сохраняем текущее состояние контекста
	ctx.translate(x, y); // Перемещаем контекст к положению персонажа
    ctx.rotate(angle); // Поворачиваем контекст на вычисленный угол

	let width = 70;
    let height = 78;

    ctx.globalAlpha = 1; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)
    ctx.drawImage(imageTarget, -width / 2, -height / 2, width, height);

    ctx.restore(); // Возвращаем контекст в исходное состояние

    color = "#ff0000"
    ctx.beginPath();
	ctx.ellipse(x, y, radius, radius, Math.PI / 4, 0, 2 * Math.PI);

	// Устанавливаем прозрачность для обводки
    ctx.globalAlpha = 0.1; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)
	ctx.strokeStyle = color;
	ctx.stroke();
};


function bullet(x, y, radius) {
	let bulletWidht = 20;
	let bulletHeight = 20;
	ctx.globalAlpha = 1; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)

	ctx.drawImage(imageBullet, x - bulletWidht / 2, y - bulletHeight / 2, bulletWidht, bulletHeight); // Размеры изображения можно изменить

	ctx.beginPath();
	ctx.ellipse(x, y, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
	ctx.strokeStyle = "#ff0000";
	ctx.globalAlpha = 0.8; // Здесь значение от 0 (полностью прозрачно) до 1 (полностью непрозрачно)

	ctx.stroke();
};

let enemyCoinObject = {
	x: 20,
	y: 20,
	dx: 1,					// Направление движения и скорость
	dy: 1,					// Направление движения и скорость
	radius: 20
};

let targetObject = {
	x: 180,
	y: 300,
	dx: 0.8,					// Направление движения и скорость
	dy: 0.4,					// Направление движения и скорость
	directionX: 130,
	directionY: 80,
	radius: 36
};

let bulletObject = {
	x: 150,
	y: 150,
	dx: 1,
	dy: 1,
	radius: 10
}

const listEnemy = {};
function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Перебор внешних словарей
	for (const outerKey in listEnemy) {
	    if (listEnemy.hasOwnProperty(outerKey)) {
	        // Получаем объект врага
	        const enemy = listEnemy[outerKey];
	        // Преследование пользователя
	        // Обновляем координаты объекта, чтобы он двигался в направлении цели
	        const killTarget = moveObjectTowardsDirection(enemy['x'], enemy['y'], targetObject.x, targetObject.y, 0.3);
	        // Обновляем текущие координаты объекта
	        enemy['x'] = killTarget.x;
	        enemy['y'] = killTarget.y;
	        enemyCoinLevel1(enemy['x'], enemy['y'], enemy['radius'].radius);
	    }
	}



	targetObject.x += targetObject.dx
	targetObject.y += targetObject.dy


	// Колизия с ограничением поля движения
	if ((targetObject.y + targetObject.radius >= screenHeight) || (targetObject.y - targetObject.radius <= 0)) {
		targetObject.dy = targetObject.dy * (-1);
	};
	if ((targetObject.x + targetObject.radius >= screenWidth) || (targetObject.x - targetObject.radius <= 0)) {
		targetObject.dx = targetObject.dx * (-1);
	};


	if (checkEnemyTargetCollision(enemyCoinObject, targetObject)) {
		//console.log('True')
	} else {
		//console.log('False')
	}



    target(targetObject.x, targetObject.y, targetObject.radius, targetObject.directionX, targetObject.directionY);
    


    // Обновляем координаты объекта, чтобы он двигался в направлении цели
    const newPosition = moveObjectTowardsDirection(bulletObject.x, bulletObject.y, targetObject.x, targetObject.y, 0.3);
    // Обновляем текущие координаты объекта
    bulletObject.x = newPosition.x;
    bulletObject.y = newPosition.y;
    bullet(bulletObject.x, bulletObject.y, bulletObject.radius);

    window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render); // Начать анимацию



//--=--=--=-- Трэкаем касание, чтобы стрелять в ту сторону! --=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=---=--
// Элемент, для которого будем отслеживать касания
const element = document.getElementById('image-container'); 		// Получаем элемент DOM по его ID, который будет использоваться для отслеживания касаний.
function handleTouch(event) {										// Функция-обработчик событий касания.
    event.preventDefault();											// Предотвращаем стандартное поведение браузера для события касания (например, прокрутку страницы).
    if (event.type === 'touchend' && event.touches.length === 0) {	// Проверяем, является ли событие событием 'touchend' и нет ли активных касаний.
        console.log('Нет активных касаний');						// Выводим сообщение в консоль, если это событие 'touchend' и касаний нет.
        return; 													// Завершаем обработчик, так как касаний нет.
    }
    // Получаем объект касания. Для 'touchend' используем 'changedTouches[0]', для остальных - 'touches[0]'.
    let touch = (event.type === 'touchend') ? event.changedTouches[0] : event.touches[0];
    // Получаем координаты X и Y касания относительно видового экрана (viewport).
    const touchX = touch.clientX;
    const touchY = touch.clientY;
    // Обновляем направление объекта targetObject на основе координат касания.
    targetObject.directionX = touchX;
    targetObject.directionY = touchY;
    if (event.type === 'touchmove') {								// Проверяем, является ли событие событием 'touchmove'.
        console.log('Удержание: X:', touchX, 'Y:', touchY);			// Выводим координаты в консоль при удержании пальца на экране.
    } else {
        console.log('Касание: X:', touchX, 'Y:', touchY);			// Выводим координаты в консоль при начальном касании или окончании касания.
    }
}
element.addEventListener('touchstart', handleTouch);				// Назначаем обработчик события 'touchstart' (начало касания) на элемент.
element.addEventListener('touchmove', handleTouch);					// Назначаем обработчик события 'touchmove' (движение пальца по экрану) на элемент.
element.addEventListener('touchend', handleTouch);					// Назначаем обработчик события 'touchend' (окончание касания) на элемент.
//--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=---=--=--=--=---=--=--=--=---=--=--=--=---=--=--=--=---






function moveObjectTowardsDirection(x, y, directionX, directionY, speed) {
    // Вычисляем разницу между текущим положением и целевым положением
    const deltaX = directionX - x;
    const deltaY = directionY - y;
    
    // Вычисляем угол между текущим положением и целевым положением
    const angle = Math.atan2(deltaY, deltaX);
    
    // Вычисляем новые координаты (x, y) на каждом шаге
    const newX = x + Math.cos(angle) * speed;
    const newY = y + Math.sin(angle) * speed;
    
    return { x: newX, y: newY };
}





// --=--=--=--=--=-- // Генерация новых врагов --=--=--=--=--=--=--=--=--=--=--=--
// Генерация IDName
function generateRandomEnemyName(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function countNestedObjects(obj) {
  let count = 0;

  for (const key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      // Если значение ключа - это объект (не массив), увеличиваем счетчик
      count++;
      // Рекурсивно вызываем функцию для подсчета вложенных объектов внутри этого объекта
      count += countNestedObjects(obj[key]);
    }
  }

  return count;
}
setInterval(function() {
	let countEnemyCoin = countNestedObjects(listEnemy);

	//Генерирую новых врагов если их меньше X
	if (countEnemyCoin < 20) {
		const newEnemy = {
			id: generateRandomEnemyName(15),
			x: 20,
			y: 20,
			dx: 1,					// Направление движения и скорость
			dy: 1,					// Направление движения и скорость
			radius: 20
		};
		listEnemy[newEnemy.id] = newEnemy;
		console.log("Добавил Врага!:  ", listEnemy);
	};
},1000)
// --=--=--=--=--=-- // Генерация новых врагов --=--=--=--=--=--=--=--=--=--=--=--



