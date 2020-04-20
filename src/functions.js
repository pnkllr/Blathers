module.exports = (client) => {

  // Status Messages
  client.success = (channel, suc, msg) => {
    channel.send(`<:tick:701739061131345920> **${suc}**\n${msg}`);
  };

  client.error = (channel, err, msg) => {
    channel.send(`<:cross:701739087400534016> **${err}**\n${msg}`);
  };

  // Perm Levels
  client.permLevel = (message) => {
    let permName = 'User';
    let permlvl = 0;
    const permOrder = client.config.permLevels.slice(0)
      .sort((p, c) => (p.level < c.level ? 1 : -1));

    while (permOrder.length) {
      const currentlvl = permOrder.shift();

      if (currentlvl.check(client, message)) {
        permName = currentlvl.name;
        permlvl = currentlvl.level;
        break;
      }
    }
    return [permName, permlvl];
  };

  // Random Color
  client.getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '0x';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  Object.defineProperty(String.prototype, 'toProperCase', {
    value() {
      return this.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    },
  });
};