/* MISSION 15 */
const mission15 = [
  {
    id: 1,
    title: "Ubuntu 15 — BACKUP",
    speaker: "EVA",
    text: "Перед обновлением сервера нужно сохранить каталог /srv/project. Архив должен быть создан в /backup и после этого проверен.\n\nEVA:\n\n\"Это практическая миссия.\nНе спеши. Сначала пойми задачу,\nпотом выбери команду.\"\n\nПлан: 6–12 минут.\nОшибки не ломают систему — они дают подсказку.",
    answers: [
      { text: "Начать миссию", next: 2 },
    ]
  },
  {
    id: 2,
    title: "Каталог назначения",
    speaker: "EVA",
    text: "Создай каталог для резервных копий.\n\nЧто выбираешь?",
    answers: [
      { text: "mkdir -p /backup", next: 3 },
      { text: "rm -rf /backup", next: 103 },
      { text: "chmod 000 /backup", next: 104 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm -rf /backup\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod 000 /backup\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 2 },
    ]
  },
  {
    id: 3,
    title: "Архив",
    speaker: "EVA",
    text: "Создай gzip-архив каталога /srv/project.\n\nЧто выбираешь?",
    answers: [
      { text: "zip -r /backup/project.tar.gz /srv/project", next: 103 },
      { text: "tar -czf /backup/project.tar.gz /srv/project", next: 4 },
      { text: "cp -z /srv/project /backup", next: 105 },
    ]
  },
  {
    id: 103,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nzip -r /backup/project.tar.gz /srv/project\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncp -z /srv/project /backup\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 3 },
    ]
  },
  {
    id: 4,
    title: "Проверка",
    speaker: "EVA",
    text: "Не распаковывая архив, посмотри его содержимое.\n\nЧто выбираешь?",
    answers: [
      { text: "cat /backup/project.tar.gz", next: 104 },
      { text: "tar -tzf /backup/project.tar.gz", next: 5 },
      { text: "rm /backup/project.tar.gz", next: 106 },
    ]
  },
  {
    id: 104,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\ncat /backup/project.tar.gz\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm /backup/project.tar.gz\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 4 },
    ]
  },
  {
    id: 5,
    title: "Контроль",
    speaker: "EVA",
    text: "Путь к архиву правильный?\n\nЧто выбираешь?",
    answers: [
      { text: "/tmp/project.tar.gz", next: 105 },
      { text: "/backup/project.tar.gz", next: 6 },
      { text: "/srv/project.tar.gz", next: 107 },
    ]
  },
  {
    id: 105,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\n/tmp/project.tar.gz\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\n/srv/project.tar.gz\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 5 },
    ]
  },
  {
    id: 6,
    title: "Безопасность",
    speaker: "EVA",
    text: "До обновления нельзя удалять единственную копию. Оставь архив на месте.\n\nЧто выбираешь?",
    answers: [
      { text: "rm /backup/project.tar.gz", next: 106 },
      { text: "Оставить архив", next: 7 },
      { text: "chmod 000 /backup/project.tar.gz", next: 108 },
    ]
  },
  {
    id: 106,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nrm /backup/project.tar.gz\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 108,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nchmod 000 /backup/project.tar.gz\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 6 },
    ]
  },
  {
    id: 7,
    title: "Завершение",
    speaker: "EVA",
    text: "Резервная копия создана и проверена.\n\nЧто выбираешь?",
    answers: [
      { text: "Удалить архив", next: 107 },
      { text: "Завершить миссию", next: 8 },
      { text: "Перезагрузить сервер", next: 109 },
    ]
  },
  {
    id: 107,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nУдалить архив\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 109,
    title: "EVA // ОШИБКА",
    speaker: "EVA",
    text: "Вариант:\nПерезагрузить сервер\n\nЭто не лучший шаг.\n\nПравило администратора:\nсначала определяем цель команды,\nпотом выполняем изменение.\n\nПопробуй ещё раз.",
    answers: [
      { text: "Вернуться к заданию", next: 7 },
    ]
  },
  {
    id: 8,
    title: "Ubuntu 15 — BACKUP // COMPLETE",
    speaker: "EVA",
    text: "МИССИЯ ВЫПОЛНЕНА.\n\nРезервная копия.\n\nТы не просто выбрал команду —\nты прошёл последовательность действий\nи проверок.\n\nВремя на эту миссию рассчитано примерно\nна 10–12 минут реальной работы ученика.",
    answers: [
      { text: "Вернуться к списку миссий", action: ()=>{ showMainMenu(); } },
    ]
  },
];