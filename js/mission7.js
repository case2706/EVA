/* MISSION 7 */
const mission7 = [
  {
    id: 1,
    title: "Ubuntu 07 — NEW USER",
    speaker: "EVA",
    text: "Сотрудник Илья Петров выходит в отдел IT. Его учётной записи ещё нет. Ты отвечаешь за подготовку доступа.\n\nEVA:\n\n\"Это практическая миссия.\nНе спеши. Сначала пойми задачу,\nпотом выбери команду.\"\n\nПлан: 6–12 минут.\nОшибки не ломают систему — они дают подсказку.",
    answers: [
      { text: "Начать миссию", next: 2 },
    ]
  },
  {
    id: 2,
    title: "Проверка контекста",
    speaker: "EVA",
    text: "Перед изменениями нужно понять, под кем ты работаешь.\n\nЧто выбираешь?",
    answers: [
      { text: "ls", next: 102 },
      { text: "whoami", next: 3 },
      { text: "chmod 777 /", next: 104 },
    ]
  },
  {
    id: 102,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nls\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod 777 /\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 3,
    title: "Создание учётной записи",
    speaker: "EVA",
    text: "Создай пользователя petrov вместе с домашним каталогом.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo passwd petrov", next: 103 },
      { text: "sudo useradd -m petrov", next: 4 },
      { text: "sudo userdel petrov", next: 105 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo passwd petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo userdel petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 4,
    title: "Пароль",
    speaker: "EVA",
    text: "Учётная запись есть. Теперь установи пароль.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo chmod petrov", next: 104 },
      { text: "sudo passwd petrov", next: 5 },
      { text: "sudo chown petrov petrov", next: 106 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chmod petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chown petrov petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 5,
    title: "Группа",
    speaker: "EVA",
    text: "Petrov должен работать с командой developers. Добавь его в дополнительную группу, сохранив остальные группы.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo usermod -G developers petrov", next: 105 },
      { text: "sudo usermod -aG developers petrov", next: 6 },
      { text: "sudo chown developers petrov", next: 107 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo usermod -G developers petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chown developers petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 6,
    title: "Проверка",
    speaker: "EVA",
    text: "Убедись, что пользователь существует и состоит в developers.\n\nЧто выбираешь?",
    answers: [
      { text: "groups developers", next: 106 },
      { text: "id petrov", next: 7 },
      { text: "ls -l /home/petrov", next: 108 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ngroups developers\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 108,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nls -l /home/petrov\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 7,
    title: "Ubuntu 07 — NEW USER // COMPLETE",
    speaker: "EVA",
    text: "МИССИЯ ВЫПОЛНЕНА.\n\nНовый сотрудник.\n\nТы не просто выбрал команду —\nты прошёл последовательность действий\nи проверок.\n\nВремя на эту миссию рассчитано примерно\nна 10–12 минут реальной работы ученика.",
    answers: [
      { text: "Вернуться к списку миссий", action: ()=>{ showMainMenu(); } },
    ]
  },
];