module.exports = {
    name: "welcomer",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[;{newEmbed: {author:Welcomer Setup Complete!:$authorAvatar}{description:Your Message#COLON#\n\`\`\`\n$slashOptions[message]\`\`\`}{footer:$replaceText[$replaceText[$checkCondition[$getGuildVar[welcomer]==false];true;The welcomer message won't be sended since it is not enable yet!];false;This will be your welcome message when a user join!]}{color:Green}};;;everyone;true]
    $setGuildVar[welcomermessage;$slashOption[message]]
    $setGuildVar[welcomerchannel;+$slashOption[channel]]
    $onlyPerms[managechannels;You need "Manage Channels" permission to use this command!{options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]`
}