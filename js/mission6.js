/*
==========================================
MISSION 6
FINAL INCIDENT
==========================================
*/

const mission6 = [

{
    id:1,

    title:"MISSION 06",

    speaker:"EVA",

    text:`FINAL INCIDENT

Финальная проверка.

Никаких подсказок больше не будет.

Все предыдущие миссии
готовили тебя именно
к этому моменту.`,

    answers:[
        {
            text:"Начать",
            next:2
        }
    ]
},

{
    id:2,

    title:"08:30",

    speaker:"EVA",

    text:`Начало смены.

Все системы работают.

Тревог нет.

В компании спокойно.`,

    answers:[
        {
            text:"Продолжить",
            next:3
        }
    ]
},

{
    id:3,

    title:"08:47",

    speaker:"EVA",

    text:`Первая жалоба.

"Компьютер завис."`,

    answers:[

        {
            text:"Задать вопросы",

            next:4
        },

        {
            text:"Перезагрузить",

            next:5
        }

    ]
},

{
    id:4,

    title:"Опрос",

    speaker:"EVA",

    text:`Сотрудник сообщает.

Перед зависанием
открывал вложение
из письма.`,

    answers:[
        {
            text:"Продолжить",
            next:6
        }
    ]
},

{
    id:5,

    title:"Перезагрузка",

    speaker:"EVA",

    text:`После перезагрузки
ничего не изменилось.`,

    answers:[
        {
            text:"Продолжить",
            next:6
        }
    ]
},

{
    id:6,

    title:"08:54",

    speaker:"EVA",

    image:"assets/images/missions/soc_dashboard.png",

    text:`Количество обращений:

5

Все сотрудники
открывали похожие письма.`,

    answers:[

        {
            text:"Изолировать ПК",

            next:7
        },

        {
            text:"Ждать",

            next:8
        }

    ]
},

{
    id:7,

    title:"Изоляция",

    speaker:"EVA",

    text:`Часть компьютеров
отключена от сети.

Распространение
замедлилось.`,

    answers:[
        {
            text:"Продолжить",
            next:9
        }
    ]
},

{
    id:8,

    title:"Ошибка",

    speaker:"EVA",

    text:`Количество заражённых
увеличивается.`,

    answers:[
        {
            text:"Продолжить",
            next:9
        }
    ]
},

{
    id:9,

    title:"09:02",

    speaker:"EVA",

    text:`Директор требует
объяснить ситуацию.`,

    answers:[

        {
            text:"Сообщить факты",

            next:10
        },

        {
            text:"Сказать, что всё под контролем",

            next:11
        }

    ]
},

{
    id:10,

    title:"Доклад",

    speaker:"EVA",

    text:`Руководство получает
достоверную информацию
и начинает помогать
расследованию.`,

    answers:[
        {
            text:"Продолжить",
            next:12
        }
    ]
},

{
    id:11,

    title:"Ошибка",

    speaker:"EVA",

    text:`Через несколько минут
становится понятно,
что ситуация серьёзнее,
чем предполагалось.`,

    answers:[
        {
            text:"Продолжить",
            next:12
        }
    ]
},

{
    id:12,

    title:"09:15",

    speaker:"EVA",

    text:`На рабочих станциях
появляется файл

README.txt`,

    answers:[

        {
            text:"Открыть",

            next:13
        },

        {
            text:"Удалить",

            next:14
        }

    ]
},

{
    id:13,

    title:"Требование",

    speaker:"EVA",

    text:`Файлы зашифрованы.

Требуется выкуп.`,

    answers:[
        {
            text:"Продолжить",
            next:15
        }
    ]
},

{
    id:14,

    title:"Ошибка",

    speaker:"EVA",

    text:`Удаление записки
ничего не меняет.`,

    answers:[
        {
            text:"Продолжить",
            next:15
        }
    ]
},

{
    id:15,

    title:"09:24",

    speaker:"EVA",

    text:`Необходимо принять
главное решение.`,

    answers:[

        {
            text:"Изолировать сеть",

            next:16
        },

        {
            text:"Продолжить работу",

            next:17
        }

    ]
},

{
    id:16,

    title:"Локализация",

    speaker:"EVA",

    text:`Распространение
остановлено.`,

    answers:[
        {
            text:"Продолжить",
            next:18
        }
    ]
},

{
    id:17,

    title:"Ошибка",

    speaker:"EVA",

    text:`Инцидент охватывает
почти всю сеть.`,

    answers:[
        {
            text:"Продолжить",
            next:18
        }
    ]
},

{
    id:18,

    title:"09:40",

    speaker:"EVA",

    image:"assets/images/missions/backup.png",

    text:`Начинается анализ
резервных копий.`,

    answers:[

        {
            text:"Проверить Backup",

            next:19
        }

    ]
},

{
    id:19,

    title:"Backup",

    speaker:"EVA",

    text:`Резервные копии
не повреждены.`,

    answers:[
        {
            text:"Продолжить",
            next:20
        }
    ]
},

{
    id:20,

    title:"09:55",

    speaker:"EVA",

    text:`Инцидент локализован.

Начинается восстановление
рабочих мест.`,

    answers:[
        {
            text:"Продолжить",
            next:21
        }
    ]
},

{
    id:21,

    title:"ОТЧЁТ",

    speaker:"EVA",

    text:`Время реакции:
18 минут

Причина:
Фишинговое письмо

Распространение:
ОСТАНОВЛЕНО

Резервные копии:
СОХРАНЕНЫ

Компания продолжает работу.`,

    answers:[
        {
            text:"Итоги",
            next:22
        }
    ]
},

{
    id:22,

    title:"EVA",

    speaker:"EVA",

    text:`Ты завершил
все базовые тренировки.

Теперь ты понимаешь,
что информационная безопасность —

это не поиск вирусов.

Это принятие правильных решений
в правильное время.`,

    answers:[
        {
            text:"Получить сертификат",
            next:23
        }
    ]
},

{
    id:23,

    title:"ПОЗДРАВЛЯЕМ",

    speaker:"EVA",

    image:"assets/images/missions/certificate.png",

    text:`ВСЕ БАЗОВЫЕ МИССИИ

УСПЕШНО ЗАВЕРШЕНЫ

Tutorial

✔ PHISHING

✔ SOCIAL ENGINEERING

✔ WORKPLACE SECURITY

✔ INCIDENT RESPONSE

✔ FINAL INCIDENT`,

    answers:[
    {
        text:"Завершить",

        action:()=>{

            UI.showMissionComplete(

                "MISSION 06",

    		"Все базовые тренировки EVA успешно завершены."

            );

        }
    }
]

}

];