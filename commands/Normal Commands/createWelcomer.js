module.exports = {
    name: "createWelcomer",
    description: "Create a slash welcomer slash command.",
    category: "Welcomer",
    code: `
    Slash "Welcomer" command have been created successfully!
    $createApplicationCommand[$guildID;welcomer;Setup a brand new welcomer command.;true;slash;[{
        "name": "channel",
        "description": "Welcomer channel",
        "required": true,
        "type": 7         
    },{
        "name": "message",
        "description": "Welcomer message",
        "required": true,
        "type": 3
    }]]
    $onlyForIDs[$clientOwnerIDs[;];]`
  }
  // The first parameter of $createApplicationCommand function can be changes to either to a specify guild id or as a global.
  // Using $onlyForIDs function will return the error message if the user's id was not match to the specific IDs.
  