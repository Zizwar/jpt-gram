import { } from "dotenv/config";
import Telegraf from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN || "";
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    const welcomeMessage = "أهلاً وسهلاً بك في بوت ملسون";
    ctx.reply(welcomeMessage);
  });
  
  bot.launch();