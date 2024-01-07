module.exports = {
  name: "createPing",
  description: "Create a slash ping slash command.",
  category: "Setup",
  code: `
  Slash "Ping" command have been created successfully!
  $createApplicationCommand[$guildID;ping;Display ping ms;true;slash]
  $onlyForIDs[$clientOwnerIDs[;];]`
}
// The first parameter of $createApplicationCommand function can be changes to either to a specify guild id or as a global.
// Using $onlyForIDs function will return the error message if the user's id was not match to the specific IDs.
