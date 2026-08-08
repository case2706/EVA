/* MISSION 16 */
const mission16 = [
  {
    id: 1,
    title: "Ubuntu 16 — ADMINISTRATOR",
    speaker: "EVA",
    text: "Последняя миссия объединяет всё, что ты изучил. Есть новый сотрудник, новая группа, рабочий каталог и отчёт. Выполняй действия в правильном порядке.\n\nEVA:\n\n\"Это практическая миссия.\nНе спеши. Сначала пойми задачу,\nпотом выбери команду.\"\n\nПлан: 6–12 минут.\nОшибки не ломают систему — они дают подсказку.",
    answers: [
      { text: "Начать миссию", next: 2 },
    ]
  },
  {
    id: 2,
    title: "Контекст",
    speaker: "EVA",
    text: "Определи текущего пользователя перед началом работы.\n\nЧто выбираешь?",
    answers: [
      { text: "whoami", next: 3 },
      { text: "rm -rf /", next: 103 },
      { text: "chmod 777 /", next: 104 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf /\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
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
    title: "Группа",
    speaker: "EVA",
    text: "Создай группу audit для новой команды.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo useradd audit", next: 103 },
      { text: "sudo groupadd audit", next: 4 },
      { text: "sudo chmod audit", next: 105 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo useradd audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chmod audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 4,
    title: "Пользователь",
    speaker: "EVA",
    text: "Создай analyst с домашним каталогом.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo groupadd analyst", next: 104 },
      { text: "sudo useradd -m analyst", next: 5 },
      { text: "sudo rm analyst", next: 106 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo groupadd analyst\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo rm analyst\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 5,
    title: "Доступ к группе",
    speaker: "EVA",
    text: "Добавь analyst в audit, сохранив его остальные дополнительные группы.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo usermod -G audit analyst", next: 105 },
      { text: "sudo usermod -aG audit analyst", next: 6 },
      { text: "sudo chown audit analyst", next: 107 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo usermod -G audit analyst\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chown audit analyst\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 6,
    title: "Каталог",
    speaker: "EVA",
    text: "Создай рабочий каталог /srv/audit.\n\nЧто выбираешь?",
    answers: [
      { text: "mkdir /srv/audit", next: 7 },
      { text: "touch /srv/audit", next: 107 },
      { text: "rm -rf /srv", next: 108 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ntouch /srv/audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 108,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf /srv\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 7,
    title: "Владелец",
    speaker: "EVA",
    text: "Передай каталог analyst:audit.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo chmod analyst:audit /srv/audit", next: 107 },
      { text: "sudo chown analyst:audit /srv/audit", next: 8 },
      { text: "sudo mv analyst:audit /srv/audit", next: 109 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chmod analyst:audit /srv/audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 109,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo mv analyst:audit /srv/audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 8,
    title: "Права каталога",
    speaker: "EVA",
    text: "Дай владельцу и группе полный доступ, остальным ничего.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo chmod 777 /srv/audit", next: 108 },
      { text: "sudo chmod 755 /srv/audit", next: 109 },
      { text: "sudo chmod 770 /srv/audit", next: 9 },
    ]
  },
  {
    id: 108,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chmod 777 /srv/audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 8 },
    ]
  },
  {
    id: 109,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chmod 755 /srv/audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 8 },
    ]
  },
  {
    id: 9,
    title: "Файл и права",
    speaker: "EVA",
    text: "Создай report.txt и выставь владельца analyst:audit и режим 660.\n\nЧто выбираешь?",
    answers: [
      { text: "sudo touch /srv/audit/report.txt → chown analyst:audit → chmod 660", next: 10 },
      { text: "sudo chmod 777 /srv/audit/report.txt", next: 110 },
      { text: "sudo rm /srv/audit/report.txt", next: 111 },
    ]
  },
  {
    id: 110,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo chmod 777 /srv/audit/report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 9 },
    ]
  },
  {
    id: 111,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nsudo rm /srv/audit/report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 9 },
    ]
  },
  {
    id: 10,
    title: "Проверка",
    speaker: "EVA",
    text: "Проверь пользователя, каталог и файл.\n\nЧто выбираешь?",
    answers: [
      { text: "cat /etc/passwd", next: 110 },
      { text: "id analyst + ls -ld /srv/audit + ls -l /srv/audit/report.txt", next: 11 },
      { text: "rm -rf /srv/audit", next: 112 },
    ]
  },
  {
    id: 110,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncat /etc/passwd\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 10 },
    ]
  },
  {
    id: 112,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf /srv/audit\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 10 },
    ]
  },
  {
    id: 11,
    title: "Ubuntu 16 — ADMINISTRATOR // COMPLETE",
    speaker: "EVA",
    text: "МИССИЯ ВЫПОЛНЕНА.\n\nФинальная смена администратора.\n\nТы не просто выбрал команду —\nты прошёл последовательность действий\nи проверок.\n\nВремя на эту миссию рассчитано примерно\nна 10–12 минут реальной работы ученика.",
    answers: [
      { text: "Вернуться к списку миссий", action: ()=>{ showMainMenu(); } },
    ]
  },
];