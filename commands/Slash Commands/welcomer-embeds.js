module.exports = {
    name: "welcomer-embeds",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[Welcomer setup complete!\n$replaceText[$replaceText[$checkCondition[$getGuildVar[welcomer]==false];true;The welcomer message won't be sended since it is not enable yet!];false;This will be your welcome message when a user join!]\nPreview#COLON#;{newEmbed: {title:$slashOption[title]}{description:$slashOption[description]}{color:$get[color]}};;;everyone;true]
    $setGuildVar[welcomerembedsmessage;$getObject[welcomerembeds]]
    $setGuildVar[welcomerchannel;+$slashOption[channel]]
    $setObjectProperty[welcomerembeds;color;$get[color]]
    $setObjectProperty[welcomerembeds;description;$slashOption[description]]
    $setObjectProperty[welcomerembeds;title;$slashOption[title]]
    $createObject[welcomerembeds;$getGuildVar[welcomerembedsmessage]]
    $let[color;$replaceText[$replaceText[$checkCondition[$slashOption[color]==];true;White];false;$slashOption[color]]]
    $onlyPerms[managechannels;You need "Manage Channels" permission to use this command!{options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]`
}