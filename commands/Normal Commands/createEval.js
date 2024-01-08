module.exports = {
    name: "createEval",
    description: "Create a slash eval slash command.",
    category: "Developer",
    code: `
    Slash "Eval" command have been created successfully!
    $createApplicationCommand[$guildID;eval;A Powerful Developer Command;true;slash;[{
        "name": "input",
        "description": "What's the function you want to execute?",
        "required": true,
        "type": 3
    }]]
    $onlyForIDs[$clientOwnerIDs[;];]`
  }
  // The first parameter of $createApplicationCommand function can be changes to either to a specify guild id or as a global.
  // Using $onlyForIDs function will return the error message if the user's id was not match to the specific IDs.
  