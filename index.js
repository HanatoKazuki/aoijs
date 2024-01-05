const { AoiClient } = require("aoi.js");

 const client = new AoiClient({
  token: "Discord Bot Token", // Your Bot Token
  prefix: "Discord Bot Prefix", // Your default bot prefix.
  intents: ["MessageContent", "Guilds", "GuildMessages"], // Default Intents
  events: ["onMessage", "onInteractionCreate"], // Default Events
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here", // Don't change anything here if you're not sure what you're doing.
  }
 });
// The dictionary of your commands handle folder locations.
client.loadCommands("./commands/", true);
// The dictionary of your variables handle file locations.
require("./handler/variables.js")(client)
