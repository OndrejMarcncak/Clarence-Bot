const { Client, CommandInteraction, Permissions } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    ...new SlashCommandBuilder()
	.setName('ban')
	.setDescription('Ban a member!')
	.addUserOption(option =>
		option.setName('target').setDescription('The member to ban')),
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        let user = interaction.options.getUser("user")
        const reason = interaction.options.getString('reason')
        const member = interaction.guild.members.cache.get(user.id)
        if (!args[0]) return interaction.reply({ content: `Please specify a user to ban` });
        if(member.id == interaction.user.id) return message.reply("You cant ban yourself!")
        
        return ((await member.ban({ reason })) + interaction.reply({content: `User ${member} has been banned`}))

    },
};