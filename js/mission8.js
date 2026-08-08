/* MISSION 8 */
const mission8 = [
  {
    id: 1,
    title: "Ubuntu 08 — GROUPS",
    speaker: "EVA",
    text: "В отделе developers появился новый проект. Нужно создать группу проекта и аккуратно добавить в неё двух сотрудников, не ломая их существующие группы.\n\nEVA:\n\n\"Это практическая миссия.\nНе спеши. Сначала пойми задачу,\nпотом выбери команду.\"\n\nПлан: 6–12 минут.\nОшибки не ломают систему — они дают подсказку.",
    answers: [
      { text: "Начать миссию", next: 2 },
    ]
  },
  {
    id: 2,
    title: "Создание группы",
    speaker: "EVA",
    text: "Для проекта нужна отдельная группа projectx.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo useradd projectx", next: 102 },
      { text: "sudo groupadd projectx", next: 3 },
      { text: "sudo chmod projectx", next: 104 },
    ]
  },
  {
    id: 102,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo useradd projectx\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chmod projectx\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 3,
    title: "Добавление сотрудника",
    speaker: "EVA",
    text: "Добавь petrov в projectx, не удаляя его другие дополнительные группы.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo usermod -G projectx petrov", next: 103 },
      { text: "sudo usermod -aG projectx petrov", next: 4 },
      { text: "sudo chgrp projectx petrov", next: 105 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo usermod -G projectx petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chgrp projectx petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 4,
    title: "Проверка группы",
    speaker: "EVA",
    text: "Проверь членство пользователя.\n\nЧто выбираешь?",
    answers: [
      { text: "id projectx", next: 104 },
      { text: "groups petrov", next: 5 },
      { text: "ls -l /home/petrov", next: 106 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nid projectx\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nls -l /home/petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 5,
    title: "Второй сотрудник",
    speaker: "EVA",
    text: "Добавь analyst в projectx тем же безопасным способом.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo usermod -aG projectx analyst", next: 6 },
      { text: "sudo usermod -G projectx analyst", next: 106 },
      { text: "sudo groupadd analyst", next: 107 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo usermod -G projectx analyst\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo groupadd analyst\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 6,
    title: "Финальная проверка",
    speaker: "EVA",
    text: "Проверь существование группы и членство обоих сотрудников.\n\nЧто выбираешь?",
    answers: [
      { text: "getent group projectx", next: 7 },
      { text: "rm /etc/group", next: 107 },
      { text: "chmod 777 /etc/group", next: 108 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm /etc/group\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 108,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod 777 /etc/group\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 7,
    title: "Ubuntu 08 — GROUPS // COMPLETE",
    speaker: "EVA",
    text: "МИССИЯ ВЫПОЛНЕНА.\n\nГруппа разработчиков.\n\nТы не просто выбрал команду —\nты прошёл последовательность действий\nи проверок.\n\nВремя на эту миссию рассчитано примерно\nна 10–12 минут реальной работы ученика.",
    answers: [
      { text: "Вернуться к списку миссий", action: ()=>{ showMainMenu(); } },
    ]
  },
];