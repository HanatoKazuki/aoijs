module.exports = [{
  name: "createPing",
  description: "Create a slash ping slash command.",
  category: "Setup",
  code: `
  Slash "Ping" command have been created successfully!
  $createApplicationCommand[$guildID;ping;Display ping ms;true;slash]
  $onlyForIDs[$clientOwnerIDs[;];]`
}]
