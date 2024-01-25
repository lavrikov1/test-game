function updateRectangleWidth(shotsFired, maxShots) {
    var rectangle = document.querySelector('.rectangleHp');
    if (rectangle) {
        var widthPercentage = 100 - (shotsFired / maxShots * 100);
        widthPercentage = Math.max(0, Math.min(widthPercentage, 100)); // Ограничиваем диапазон от 0% до 100%
        rectangle.style.width = `calc(${widthPercentage}% - 20px)`;
    }
}