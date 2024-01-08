module.exports = {
    name: "createEmbedsWelcomer",
    description: "Create a slash embeds welcomer slash command.",
    category: "Welcomer",
    code: `
    Slash "Embeds Welcomer" command have been created successfully!
    $createApplicationCommand[$guildID;welcomer-embeds;Setup a brand new welcomer command.;true;slash;[{
            "name": "channel",
            "description": "Embeds welcomer channel",
            "required": true,
            "type": 7         
        },{
            "name": "title",
            "description": "Embeds welcomer title message",
            "required": true,
            "type": 3
        },{
            "name": "description",
            "description": "Embeds welcomer description message",
            "required": true,
            "type": 3
        },{
            "name": "color",
            "description": "Embeds welcomer colors.",
            "required": false,
            "type": 3
    }]]
    $onlyForIDs[$clientOwnerIDs[;];]`
  }
  // The first parameter of $createApplicationCommand function can be changes to either to a specify guild id or as a global.
  // Using $onlyForIDs function will return the error message if the user's id was not match to the specific IDs.
  