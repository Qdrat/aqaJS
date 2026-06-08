/** Задача 1. Умный дом и сломанный датчик */
const room = "kitchen";
const timeOfDay = 6;
const sensorTemp = null;

let currentTemp = sensorTemp ?? 22;

let isLightOn = timeOfDay >= 18 || timeOfDay < 6 ? true : false;

switch (room) {
  case "bedroom":
    console.log(
      `Спальня: Свет ${isLightOn ? "включен" : "выключен"}, Температура ${currentTemp}`,
    );
    break;

  case "kitchen":
    console.log(
      `Кухня: Работает вытяжка. Свет ${isLightOn ? "включен" : "выключен"}`,
    );
    break;

  default:
    console.log("Неизвестная комната");
    break;
}

room === "bedroom" && console.log("Увлажнитель воздуха включен");
/*
Для начала приводит к булевому значению.
Затем вычисляет операнды слева направо и если у нас сразу ложное условие,
то окончательное условие проигнорируется.
А если истина, вывод отобразится.
*/

/** Задача 2. Жадный гном */

let energy = 7;
let depth = 0;
let gold = 0;

while (energy > 0) {
  depth++;
  if (depth === 7) {
    console.log("Монстр! Гном в панике убегает!");
    break;
  }

  energy--;

  if (depth % 3 === 0) {
    gold++;
  }

  console.log(`Глубина: ${depth}м. Энергия: ${energy}. Золото: ${gold}.`);
}

console.log(
  `Смена окончена. Итоговая глубина: ${depth}, добыто золота: ${gold}.`,
);

/*
Финальный лог все равно выполнится, так как стоит вне цикла и в случае,
когда у нас глубина 7м, цикл завершается командой break. 
Поэтому у нас никак не влияет на наш итоговоый вывод.
*/
