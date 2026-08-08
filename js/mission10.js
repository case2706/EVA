/* MISSION 10 */
const mission10 = [
  {
    id: 1,
    title: "Ubuntu 10 — OWNERSHIP",
    speaker: "EVA",
    text: "Файл report.txt оказался владельцем root, хотя его должен обслуживать пользователь petrov из группы developers. Нужно исправить владельца и группу.\n\nEVA:\n\n\"Это практическая миссия.\nНе спеши. Сначала пойми задачу,\nпотом выбери команду.\"\n\nПлан: 6–12 минут.\nОшибки не ломают систему — они дают подсказку.",
    answers: [
      { text: "Начать миссию", next: 2 },
    ]
  },
  {
    id: 2,
    title: "Осмотр",
    speaker: "EVA",
    text: "Сначала выясни текущего владельца и группу файла.\n\nЧто выбираешь?",
    answers: [
      { text: "cat report.txt", next: 102 },
      { text: "ls -l report.txt", next: 3 },
      { text: "chmod 777 report.txt", next: 104 },
    ]
  },
  {
    id: 102,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncat report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod 777 report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 3,
    title: "Решение",
    speaker: "EVA",
    text: "Файл должен обслуживаться petrov из developers. Как изменить владельца и группу одной командой?\n\nЧто выбираешь?",
    answers: [
      { text: "chmod petrov:developers report.txt", next: 103 },
      { text: "chown petrov:developers report.txt", next: 4 },
      { text: "mv petrov:developers report.txt", next: 105 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod petrov:developers report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nmv petrov:developers report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 4,
    title: "Проверка владельца",
    speaker: "EVA",
    text: "Проверь результат.\n\nЧто выбираешь?",
    answers: [
      { text: "id report.txt", next: 104 },
      { text: "ls -l report.txt", next: 5 },
      { text: "groups report.txt", next: 106 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nid report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ngroups report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 5,
    title: "Проверка доступа",
    speaker: "EVA",
    text: "Теперь установи права, при которых владелец и группа могут читать/изменять файл, а остальные только читать.\n\nЧто выбираешь?",
    answers: [
      { text: "777", next: 105 },
      { text: "664", next: 6 },
      { text: "600", next: 107 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\n777\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\n600\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 6,
    title: "Применение",
    speaker: "EVA",
    text: "Примени правильный режим.\n\nЧто выбираешь?",
    answers: [
      { text: "chmod 600 report.txt", next: 106 },
      { text: "chmod 777 report.txt", next: 107 },
      { text: "chmod 664 report.txt", next: 7 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod 600 report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod 777 report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 7,
    title: "Финальная проверка",
    speaker: "EVA",
    text: "Ещё раз проверь строку файла.\n\nЧто выбираешь?",
    answers: [
      { text: "ls -l report.txt", next: 8 },
      { text: "rm report.txt", next: 108 },
      { text: "cat /etc/shadow", next: 109 },
    ]
  },
  {
    id: 108,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 109,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncat /etc/shadow\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 8,
    title: "Ubuntu 10 — OWNERSHIP // COMPLETE",
    speaker: "EVA",
    text: "МИССИЯ ВЫПОЛНЕНА.\n\nЧужой файл.\n\nТы не просто выбрал команду —\nты прошёл последовательность действий\nи проверок.\n\nВремя на эту миссию рассчитано примерно\nна 10–12 минут реальной работы ученика.",
    answers: [
      { text: "Вернуться к списку миссий", action: ()=>{ showMainMenu(); } },
    ]
  },
];