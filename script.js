const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.bot_token)
bot.start((ctx) => ctx.reply(text.start))
bot.help((ctx) => ctx.reply(text.commands))


bot.command('course', async (ctx) => {
    await ctx.replyWithHTML('<b>Пока у меня есть только один курс, максимально крутой и особенно полезный для новичков. Но скоро здесь можно будет найти целых 3 курса, в том числе и для продвинутых!</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Для начинающих🚀🚀', 'btn_1'), Markup.button.callback('Для продвинутых🚀🚀', 'btn_2')],
            [Markup.button.callback('Курс від Дія🔥', 'btn_3')]

        ]
    ))
})

bot.command('jointheteam', async (ctx) => {
    await ctx.reply(text.joinTeam, Markup.inlineKeyboard(
        [
            Markup.button.callback('Instagram', 'btn_soc_1'), Markup.button.callback("Telegram", 'btn_soc_2')
        ]
    ))
})

bot.command('traningplan', async (ctx) => {
    await ctx.replyWithHTML('Здесь будет информация о наших собственных курсах!', Markup.inlineKeyboard(
        [
            Markup.button.callback('План', "btn_plan")
        ]
    ))
})




function AddActionBot (name, src, text) {

    bot.action(name, async (ctx) => {
        await ctx.answerCbQuery()
        if (src !== false ) {
            await ctx.replyWithPhoto ({
                source: src
        })
        await ctx.replyWithHTML(text, {
            disable_web_page_preview: true
        })
        }
    })
}





AddActionBot('btn_soc_1','./img/1.jpeg', text.text1)

AddActionBot('btn_soc_2', './img/2.PNG', text.text2 )

AddActionBot('btn_3', './img/course_3.png', text.text3)

AddActionBot('btn_1', './img/course_none.jpeg', "Здесь пока пусто. Мы работаем.")

AddActionBot('btn_2', './img/course_none.jpeg', "Здесь пока пусто. Мы работаем.")

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))