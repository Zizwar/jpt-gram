import { } from "dotenv/config";
import Telegraf from "telegraf";
const { reply, Markup,Extra } = Telegraf;

const BOT_TOKEN = process.env.BOT_TOKEN || "";
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  const welcomeMessage = "أهلاً وسهلاً بك في البوت!";
  const keyboard = Markup.inlineKeyboard([
    Markup.urlButton('❤️', 'http://mlsn.me'),
    Markup.callbackButton('register', 'register'),
    Markup.callbackButton("هل ترغب في البحث؟", "search") ,
    Markup.callbackButton("رسالة صوتية", "voice_message")
  ]);


  ctx.reply(welcomeMessage,Extra.markup(keyboard) );
});

bot.action("search", (ctx) => {
  const searchQuery = "بحثك هنا"; 
  const searchResult = "نتيجة البحث";
  const replyMessage = `بحثك: ${searchQuery}\n\n${searchResult} (ID: ${ctx.from.id})`; 
  ctx.reply(`[${replyMessage}]`);
});

bot.action("register", (ctx) => {
  const registerKeyboard = Markup.inlineKeyboard([
    Markup.callbackButton("عضوية عادية", "regular_membership"),
    Markup.callbackButton("عضوية مدفوعة", "premium_membership")
  ]);
  ctx.reply("مرحبًا بك في ملسون! ما هو اسمك؟", Extra.markup(registerKeyboard));
});

bot.action("regular_membership", (ctx) => {
  ctx.reply("مرحبًا بك في عضوية عادية في ملسون!");
});

bot.action("premium_membership", (ctx) => {
  ctx.reply("مرحبًا بك في عضوية مدفوعة في ملسون!");
});

bot.action("voice_message", async (ctx) => {
    const voiceFilePath = "static/voices/testino.mp3"; 
  
    try {
      await ctx.replyWithVoice({ source: voiceFilePath });
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال الرسالة الصوتية:", error);
    }
  });

bot.launch();
