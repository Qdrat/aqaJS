/** Задача 1. Фабрика фейковых юзеров */
function generateEmail(domain) {
  const email =
    domain.split(".")[0] +
    "_user_" +
    Math.floor(Math.random() * 100) +
    "@" +
    domain;
  return email;
}
console.log(generateEmail("test.com"));

const maskPassword = function (password) {
  return "*".repeat(8);
};
console.log(maskPassword("dsamdsad"));

const createTestUser = (name, domain) => {
  return {
    userName: name,
    email: generateEmail(domain),
    password: maskPassword("dsamdsad"),
  };
};
console.log(createTestUser("QA_Ninja", "gmail.com"));

/** Задача 2.  Борьба с флаки тестами (Замыкания) */
function createRetryCounter() {
  let attempts = 0;
  return function () {
    attempts++;
    return `Попытка запуска: ${attempts}`;
  };
}

const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();
// потому что переменные loginRetry и paymentRetry создают свои отдельные независимые окружения,
// в которых внутряя функции сохраняет ссылку на переменную счетчик attempts.

console.log(loginRetry());
console.log(loginRetry());
console.log(loginRetry());
console.log(paymentRetry());

/** Задача 3. Упрямый ожидатор (Рекурсия) */
function waitForElement(elementName, attemptsLeft) {
  if (attemptsLeft === 0) return `Ошибка: Элемент ${elementName} не найден`;
  const isFound = Math.random() < 0.2;
  if (isFound) return `Успех: Элемент ${elementName} появился!`;
  else {
    console.log(
      `Ищем элемент ${elementName}... Осталось попыток: ${attemptsLeft}`,
    );
    return waitForElement(elementName, attemptsLeft - 1);
  }
}

console.log(waitForElement("Кнопка оплаты", 5));
