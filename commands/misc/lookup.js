exports.run = (client, message, args) => {
    let [table, item1, item2, item3] = args;
    if (!table || !item1) return;
    if (item3) {
        value = `${item1} ${item2} ${item3}`
    } else if (item2) {
        value = `${item1} ${item2}`;
    } else
        value = `${item1}`;

    // Fish Lookup
    if (table == 'fish') {
        Fish = client.getFish.get(value);
        if (!Fish) {
            return client.error(message.channel, 'No Fish Found!', `<@${message.author.id}> there is no such fish in our Museum right now.`);
        } else
            embed = new Discord.MessageEmbed()
                .setAuthor(`${Fish.name}`, null)
                .setDescription(`\`\`\`${Fish.quote}\`\`\``)
                .addField(`Price`, `${Fish.price} <:bells:698107158805348373>`, true)
                .addField(`Shadow Size`, `${Fish.size}`, true)
                .addField(`Time of Day`, `${Fish.time}`, true)
                .addField(`Location`, `${Fish.location}`, true)
                .addField(`Avalible (Northern Hemisphere)`, `${Fish.nh}`, false)
                .addField(`Avalible (Southern Hemisphere)`, `${Fish.sh}`, false)
                .setThumbnail(Fish.image)
                .setColor(client.getRandomColor());
        return message.channel.send(embed);
    }

    // Bug Lookup
    if (table == 'bug') {
        Bug = client.getBug.get(value);
        if (!Bug) {
            return client.error(message.channel, 'No Bug Found!', `<@${message.author.id}> there is no such bug in our Museum right now.`);
        } else
            embed = new Discord.MessageEmbed()
                .setAuthor(`${Bug.name}`, null)
                .setDescription(`\`\`\`${Bug.quote}\`\`\``)
                .addField(`Price`, `${Bug.price} <:bells:698107158805348373>`, true)
                .addField(`Time of Day`, `${Bug.time}`, true)
                .addField(`Location`, `${Bug.location}`, true)
                .addField(`Avalible (Northern Hemisphere)`, `${Bug.nh}`, false)
                .addField(`Avalible (Southern Hemisphere)`, `${Bug.sh}`, false)
                .setThumbnail(Bug.image)
                .setColor(client.getRandomColor());
        return message.channel.send(embed).catch(error => { console.error('LOOKUP COMMANMD', error); });
    }
};

module.exports.conf = {
    enabled: true,
    permLevel: 'User',
    aliases: ['search'],
};

module.exports.help = {
    name: 'lookup',
    category: 'misc',
    description: 'Lookup a certain fish/bug from the Museum',
    usage: 'lookup <type> <name>',
    details: "<type> => The lookup type ie: fish or bug.\n<name> => The name of the fish or bug required to lookup.",
};