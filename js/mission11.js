/* MISSION 11 */
const mission11 = [
  {
    id: 1,
    title: "Ubuntu 11 — FILES",
    speaker: "EVA",
    text: "На сервере накопились файлы отчётов. Нужно создать backup, скопировать туда текущий отчёт, старый отчёт переименовать и удалить временный файл.\n\nEVA:\n\n\"Это практическая миссия.\nНе спеши. Сначала пойми задачу,\nпотом выбери команду.\"\n\nПлан: 6–12 минут.\nОшибки не ломают систему — они дают подсказку.",
    answers: [
      { text: "Начать миссию", next: 2 },
    ]
  },
  {
    id: 2,
    title: "Осмотр",
    speaker: "EVA",
    text: "Посмотри содержимое рабочего каталога.\n\nЧто выбираешь?",
    answers: [
      { text: "pwd", next: 102 },
      { text: "ls -l", next: 3 },
      { text: "rm -rf *", next: 104 },
    ]
  },
  {
    id: 102,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\npwd\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf *\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 3,
    title: "Каталог backup",
    speaker: "EVA",
    text: "Создай отдельный каталог для копии.\n\nЧто выбираешь?",
    answers: [
      { text: "touch backup", next: 103 },
      { text: "mkdir backup", next: 4 },
      { text: "chmod backup", next: 105 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ntouch backup\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod backup\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 4,
    title: "Копирование",
    speaker: "EVA",
    text: "Сохрани текущий report.txt в backup под тем же именем.\n\nЧто выбираешь?",
    answers: [
      { text: "mv report.txt backup/report.txt", next: 104 },
      { text: "cp report.txt backup/report.txt", next: 5 },
      { text: "cp backup/report.txt report.txt", next: 106 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nmv report.txt backup/report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncp backup/report.txt report.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 5,
    title: "Переименование",
    speaker: "EVA",
    text: "Старый report_old.txt нужно переименовать в archive.txt в текущем каталоге.\n\nЧто выбираешь?",
    answers: [
      { text: "cp report_old.txt archive.txt", next: 105 },
      { text: "mv report_old.txt archive.txt", next: 6 },
      { text: "rm report_old.txt", next: 107 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncp report_old.txt archive.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm report_old.txt\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 6,
    title: "Удаление мусора",
    speaker: "EVA",
    text: "Удаляй только временный файл temp.txt.\n\nЧто выбираешь?",
    answers: [
      { text: "rm -rf .", next: 106 },
      { text: "rm temp.txt", next: 7 },
      { text: "rm -rf backup", next: 108 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf .\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 108,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf backup\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 7,
    title: "Проверка",
    speaker: "EVA",
    text: "Убедись, что резервная копия есть, имя старого отчёта изменилось, а temp.txt исчез.\n\nЧто выбираешь?",
    answers: [
      { text: "rm -rf *", next: 107 },
      { text: "ls -l && ls -l backup", next: 8 },
      { text: "cat backup", next: 109 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf *\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 109,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncat backup\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 8,
    title: "Ubuntu 11 — FILES // COMPLETE",
    speaker: "EVA",
    text: "МИССИЯ ВЫПОЛНЕНА.\n\nПорядок в каталоге.\n\nТы не просто выбрал команду —\nты прошёл последовательность действий\nи проверок.\n\nВремя на эту миссию рассчитано примерно\nна 10–12 минут реальной работы ученика.",
    answers: [
      { text: "Вернуться к списку миссий", action: ()=>{ showMainMenu(); } },
    ]
  },
];