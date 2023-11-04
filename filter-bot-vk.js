const { Keyboard, VK } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const bot = new HearManager();

const vk = new VK({
    token: 'TOKEN VK'
});

vk.updates.on('message_new', bot.middleware);
vk.updates.start().catch(console.error);
console.log('[VK] Bot started succesfully.');

const words = ["Бля", "сука", "пидор"]

vk.updates.on('message_new', next => {
for (const word of words) {
if (next.text.includes(`${word}`)) {
vk.api.messages.send ({ message:`@id${next.senderId} Ваше сообщение содержит запрещенное слово`, peer_id: next.peerId, random_id: 0});
}
}
}) 
