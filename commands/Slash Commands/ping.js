module.exports = {
  name: "ping",
  category: "Utilities",
  description: "Slash ping command.",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[$ping ms;;;;everyone;true]`
}
// Using the functions $interactionReply would reply to your message in epehemeral, in order to make it visible to others again change the last parameter from "true" to "false" to make it visible to others again.
// Please take note that $interactionReply function would only useable if the type of commands was buttons, select menu or slashes.
