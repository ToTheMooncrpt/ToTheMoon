const command = `
Для того чтобы получить интересующую тебя информацию просто нажми на любую из этих команд, отправь их вручную или выбери из списка доступных команд в специальном меню.

/start - Перезапустить бота
/help - Список команд
/course - Курсы от нас
/jointheteam - Присоединится к команде
/traningplan - План обученя
`


const start = `
Йоу ! Я официальный бот команды ToTheMoon. Очень рад вас видеть. Нажмите “Меню„ -> “/help„ что бы увидеть список команд :)
`

const joinTeam = `
У нас очень крутая, партнерская программа. Возьмем в команду и обучим наших будущих сотрудников. Готовы сотрудничать с вашей компанией. По этому поводу прошу написать нам в Instagram либо Telegram:
`



module.exports.joinTeam = joinTeam

module.exports.commands = command

module.exports.start = start


const text_1 = `
По вопросам сотрудничества и безопасности наших клиентов в проекте ToTheMoon, вы можете обратится к нам в соц сетях :

<a href="https://instagram.com/tothemoon.invests?igshid=YmMyMTA2M2Y="><b>Instagram</b></a>
`

const text_2 = `
По вопросам сотрудничества и безопасности наших клиентов в проекте ToTheMoon, вы можете обратится к нам в соц сетях :

<a href="https://t.me/zazikXXXbet"><b>Telegram</b></a>
`


const text_3 = `
Йоу🔥Перший криптовалютний курс котрий ми рекомендуємо , громадянам України. Він створений національною, державною програмою Дія. Успіхів. <a href="https://osvita.diia.gov.ua/courses/blockchain-bitcoin-cryptocurrency">Курс тут.</a>

`


//const text_4 = ``

module.exports.text1 = text_1

module.exports.text2 = text_2

module.exports.text3 = text_3




