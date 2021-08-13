let ChatModule, WapModule, CmdModule, MsgKey;
let modernWAChat;

setTimeout(async ()=>{
    ChatModule = window.mR.findModule('Chat')[0].default;
    WapModule = window.mR.findModule('Wap')[0].default;
    CmdModule = window.mR.findModule('Cmd')[0].default;
    MsgKey = window.mR.findModule((module) => module.default && module.default.fromString)[0].default;
    modernWAChat = ChatModule.Chat._models[1];
}, 5000);

console.log('WWA Crack Injected');
