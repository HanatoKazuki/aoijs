module.exports = {
    name: "eval",
    category: "Developer",
    description: "A Powerful Developer Command.",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[;{newEmbed: {title:Eval Executed}{description:Input#COLON#\n\`\`\`js\n$slashOption[input]\`\`\`\nOutput#COLON#\n\`\`\`js\n$eval[$slashOption[input];true;true;true;false]\`\`\`}{color:Red}};;;everyone;false]
    $onlyForIDs[$clientOwnerIDs[;];Only the bot developer are allowed to use this command! {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]`
  }
  // Using the functions $interactionReply would reply to your message in epehemeral, in order to make it visible to others again change the last parameter from "true" to "false" to make it visible to others again.
  // Please take note that $interactionReply function would only useable if the type of commands was buttons, select menu or slashes.
  