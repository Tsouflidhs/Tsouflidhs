const { create } = require('combined-stream');
const { MessageActivityType, TeamMemberMembershipState } = require('discord-api-types/v9');
const Discord = require('discord.js')
const {
  Client,
  Intents
} = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_INVITES, [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS]]
});
const prefix = '!'
const { Message, MessageButton, MessageComponent, MessageActionRow } = require('discord.js');
const { set } = require('lodash');
const alt = require("discord-anti-alt");
const account = new alt.config({
  days: 7,// only user who has less than 2 days ages will got kick
  options: "kick"
});
const moment = require('moment')
const fs = require('fs')
const ms = require('ms');
const { userInfo } = require('os');
const superagent = require("superagent");
const { count } = require('console');
const translate = require("translate")
const fetch = require("axios")

client.on('ready', () => {
  console.log(`${client.user.tag} is now Ready !`);
});

client.on('ready', () => {
  client.user.setActivity(`Extreme Project`, { type: 'WATCHING' });
  client.user.setStatus('dnd');
})

client.on('messageCreate', async message => {
  if(message.channel.id === '1018274588897050624') {
    await message.react('<a:Yes_Animated:1019934943528362006>')
      await message.react('<:No:1019593138937004113>')
  }})



client.on('guildMemberAdd', member => {
  let minAge = ms('7 days')
  let createdAt = new Date(member.user.createdAt).getTime()
  let diff = Date.now() - createdAt
  if (minAge > diff) {
    const LogChannel = client.channels.cache.get('1022516085892845598')
    const embed = new Discord.MessageEmbed()
      .setDescription(`**Ο** <@${member.user.id}> **κατά 99% έχει alt account** \n **Account Age** \`${member.userAge}`)
  }
})

client.on("message", async message => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let text = message.content.split(" ").slice(1).join(" ")
  if (command === 'say') {
    message.delete({ timeout: 1500 })
    const emb = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setDescription(text)
      .setThumbnail(message.guild.iconURL({ format: "png" }))
    message.channel.send({ embeds: [emb] })
  }
})


client.on('messageCreate', async message => {


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "staff-app") {
    const channel = message.mentions.channels.first()
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setEmoji("<a:manuteno:1006243432374734988>")
          .setCustomId('8')

          .setStyle('SECONDARY'),
      );

    const embed = new Discord.MessageEmbed()
    embed.setAuthor(message.guild.name, message.guild.iconURL({ format: "png" }))


      .setTitle('** Staff Application | Dεzzε  Project !**')
      .setColor(`#2F3136`)
      .setDescription("Για να δημιουργήσετε την αίτησή σας αντιδράστε με <a:manuteno:1006243432374734988> , θα επικοινωνήσουμε μαζί σας πολύ σύντομα.")
      .setThumbnail(message.guild.iconURL())
      .setFooter("")
    await message.channel.send({ embeds: [embed], components: [row] });

  }
});


const logsappstaff = `1021163645801078785`
let staff = {
  prwti: "Η ηλικία σας",
  defterh: "Πόσες ώρες την ημέρα μπορείς να είσαι ενεργός ;",
  trith: "Έχετε προϋπηρεσία σε άλλο server σαν staff? Εάν ναι σε ποιόν server",
  tetarth: "Γιατί θα πρέπει να σας επιλέξουμε σε σχέση με κάποιον άλλον χρήστη; ",
  pemth:"Ποιές μέρες της εβδομάδας θα μπορείς να είσαι ενεργός ;",
}



client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    if (interaction.customId === '8') {

      const embed2 = new Discord.MessageEmbed()
        .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**To application channel άνοιξε εδώ** #💼staff-app- ${interaction.user.username} `)
        .setTitle("")
        .setColor("#2F3136")


      interaction.reply({ embeds: [embed2], ephemeral: true });


      try {
        const kanali = await interaction.guild.channels.create(`💼staff-app-${interaction.user.username}`, {

          type: "text",
          parent: interaction.message.channel.parentId,



          permissionOverwrites: [
            {
              id: interaction.guild.roles.everyone,
              deny: ['VIEW_CHANNEL']
            },
            {
              id: interaction.user.id,
              allow: ['VIEW_CHANNEL'],
              deny: ['']
            },



          ],
        }).then(async channel => {

          const embed14 = new Discord.MessageEmbed()
            .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
          .setColor("#2F3136")

            .setDescription('> **Καλώς ήρθες στην αίτηση σου**')



          let sent3 = await channel.send({ embeds: [embed14] });





          const embed1 = new Discord.MessageEmbed()
            .setTitle('**Ερώτηση 1/5**')
            .setDescription(`\`\`\`${staff.prwti}\`\`\``)
            .setColor("#2F3136")


          let sent = await channel.send({ embeds: [embed1] }).then(msg => {
            const filter1 = (i) => i.author.id === interaction.user.id;
            msg.channel.awaitMessages({ filter: filter1, max: 1 })
              .then((messages) => {


                let msg1 = messages.first().content
                const embed2 = new Discord.MessageEmbed()

                  .setColor("#2F3136")
                  .setTitle('**Ερώτηση 2/5**')
                  .setDescription(`\`\`\`${staff.defterh}\`\`\``)
                channel.send({ embeds: [embed2] }).then(msg => {
                  const filter1 = (i) => i.author.id === interaction.user.id;
                  msg.channel.awaitMessages({ filter: filter1, max: 1 })
                    .then((messages) => {
                      let msg2 = messages.first().content
                      const embed3 = new Discord.MessageEmbed()
                        .setTitle('**Ερώτηση 3/5**')
                        .setColor("#2F3136")
                        .setDescription(`\`\`\`${staff.trith}\`\`\``)
                      channel.send({ embeds: [embed3] }).then(msg => {
                        const filter1 = (i) => i.author.id === interaction.user.id;
                        msg.channel.awaitMessages({ filter: filter1, max: 1 })
                          .then((messages) => {
                            let msg3 = messages.first().content
                            const embed4 = new Discord.MessageEmbed()
                              .setTitle('**Ερώτηση 4/5**')
                              .setColor("#2F3136")
                              .setDescription(`\`\`\`${staff.tetarth}\`\`\``)
                            channel.send({ embeds: [embed4] }).then(msg => {
                              const filter1 = (i) => i.author.id === interaction.user.id;
                              msg.channel.awaitMessages({ filter: filter1, max: 1 })
                                .then((messages) => {
                                  let msg4 = messages.first().content
                                  const embed5 = new Discord.MessageEmbed()
                                    .setTitle('**Ερώτηση 5/5**')
                                    .setColor("#2F3136")
                                    .setDescription(`\`\`\`${staff.pemth}\`\`\``)
                                  channel.send({ embeds: [embed5] }).then(msg => {
                                    const filter1 = (i) => i.author.id === interaction.user.id;
                                    msg.channel.awaitMessages({ filter: filter1, max: 1 })
                                      .then((messages) => {
                                        let msg5 = messages.first().content
                                        const embed6 = new Discord.MessageEmbed()
                                          .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
                                          .setDescription("**Η αίτηση σου στάλθηκε με επιτυχία!\n\nΤο κανάλι θα διαγραφεί σε 5 δευτερόλεπτα**")
                                        channel.send({ embeds: [embed6] }).then(msg => {
                                          setTimeout(async () => {
                                            channel.delete()
                                          }, 5000)
                                          interaction.message.client.channels.cache.get('1021163645801078785').send({
                                            embeds: [
                                              new Discord.MessageEmbed()
                                                .setTimestamp()
                                                .setColor("#2F3136")
                                                .setDescription(`\`\`\`Nέα Αίτηση\`\`\`\nΗ αίτηση έγινε από:\n> ${interaction.member}\n\n\`\`\`${staff.prwti}\`\`\`\n> **${msg1}**\n\n\`\`\`${staff.defterh}\`\`\`\n> **${msg2}**\n\n\`\`\`${staff.trith}\`\`\`\n> **${msg3}**\n\n\`\`\`${staff.tetarth}\`\`\`\n> **${msg4}**\n\n\`\`\`${staff.pemth}\`\`\`\n> **${msg5}**`)]
                                          }
                                          )

                                        })
                                      })
                                  })
                                })
                            })
                          })
                      })
                    })
                })
              })
          })

        })
      } catch (e) {
        console.log(e.message)
      }


    }
  }
})

client.on("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === `warn`) {

    const member = message.mentions.members.first() || message.guild.members.cache.get(argument[0]) || message.guild.members.cache.find(x => user.username.toLowerCase() === argument.slice(0).join(" " || x.user.username === argument[0]));

    if (!argument[0]) return message.channel.send("**Πρέπει να κάνεις κάποιο mention μαζί με το command**")

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`**Δεν έχεις permissions για να κάνεις use αυτο το command !**`)
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send(`**Δεν έχω permissions για να κάνω warn κάποιο Member**`)
    if (message.member === member) return message.channel.send(`**Δεν μπορείς να κάνεις warn τον εαυτό σου !**`)
    if (!member.kickable) return message.channel.send(`**Δεν μπορώ να κάνω warn members όπου έχουνε μεγαλύτερα Permissions απο εμένα ! **`)

    let reason = argument.slice(1).join(" ") || '**Δεν δόθηκε αιτία για Warn ! **'

    const dmEmbed = new Discord.MessageEmbed()
      .setDescription(`:white_check_mark: | Έφαγες Wanrning στον Server ${message.guild.name} για τον λόγο ${reason}`)
      .setColor(`#2F3136`)
      .setThumbnail(message.guild.iconURL({ format: "gif" }))

    const embed = new Discord.MessageEmbed()
      .setDescription(`:white_check_mark: | Ο/Η ${member.tag} έγινε warned για τον λόγο ${reason} `)
      .setColor(`#2F3136`)
      .setThumbnail(message.guild.iconURL({ format: "gif" }))

    message.channel.send({ embeds: [embed] })
    member.send({ embeds: [dmEmebd] }).catch(err => { console.log("Αυτός ο χρήστης έχει τα Dms του OFF !") })

  }

})

client.on('messageCreate', async message => {


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "ticket") {
    const channel = message.mentions.channels.first()
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setEmoji("<:extremeprojectlogo:1019934336197341225>")
          .setCustomId('tsouflidhsticket')

          .setStyle('SECONDARY')
      );

    const embed = new Discord.MessageEmbed()
    embed.setAuthor(message.guild.name, message.guild.iconURL({ format: "png" }))

      .setTitle('**Ticket | Eποικηνωνήστε Μαζί Μας ! **')
      .setColor(`#2F3136`)
      .setDescription("**Για την καλύτερη εξυπηρέτησή σας μπορείτε να ανοίξετε ένα ticket πιέζοντας το κουμπί <:extremeprojectlogo:1019934336197341225> ,θα εποικηνωνήσουμε άμεσα μαζί σας !**")
      .setThumbnail(message.guild.iconURL({ format: "png" }))
    await message.channel.send({ embeds: [embed], components: [row] });



    message.channel.send({ embeds: [embed] })

  }
});


`  `


client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {

    if (interaction.customId === 'tsouflidhsticket') {



      const channel8 = await interaction.guild.channels.create(`🎫ticket-${interaction.user.username}`, {
        type: "text",
        parent: interaction.message.channel.parentId,


        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: ['VIEW_CHANNEL']
          },
          {
            id: interaction.user.id,
            allow: ['VIEW_CHANNEL'],
            deny: ['']
          },
        ],
      })





      const embedcobra = new Discord.MessageEmbed()
        .setColor(`#2F3136`)
        .setTitle(`Ticket ||${interaction.user.username}`)

        .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true }))
        .setDescription('**Καλησπέρα σας ! Παραρακλώ περιμένετε υπομονετικά μέχρι ο αρμόδιος να σας εξυπηρετήσει** ')
        .setFooter(`Για να κλείσετε αυτό το ticket πιέστε το κουμπί 🔒`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/1009389346094317588/1022514705148936232/Extreme_project_new_text_logo.jpg`)



      const row1 = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setEmoji("🔒")
            .setLabel('')
            .setCustomId('closecobra')
            .setStyle('SECONDARY'),


        );


      channel8.send({ embeds: [embedcobra], components: [row1] })


      const channel12 = interaction.guild.channels.cache.get('1018585325137829989')
      const embed12ds = new Discord.MessageEmbed()
        .setDescription(`ο χρήστης ${interaction.user.username} άνοιξε ticket`)
        .setColor(`#2F3136`)
        .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
      channel12.send({ embeds: [embed12ds] })

      const embed12 = new Discord.MessageEmbed()
        .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Το Ticket σου άνοιξε εδώ** <#${channel8.id}>`)
        .setTitle("")
        .setColor(`#2F3136`)

      interaction.reply({ embeds: [embed12], ephemeral: true })



    }
  }
})
  ;


client.on('interactionCreate', async (interaction) => {

  if (interaction.customId === 'closecobra') {
    if (interaction.isButton()) {



      const embed1ds1 = new Discord.MessageEmbed()
        .setDescription('**Είσαι σιγουρος οτι θες να κλεισεις το ticket?**')
        .setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/attachments/1009389346094317588/1022514705148936232/Extreme_project_new_text_logo.jpg`)
        .setColor(`#2F3136`)

      const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setEmoji("<a:Yes_Animated:1019934943528362006>")
            .setLabel('')
            .setCustomId('closegalaxy')
            .setStyle('SECONDARY'),

          new MessageButton()
            .setEmoji("<:No:1019593138937004113>")
            .setLabel('')
            .setCustomId('closegalaxy2')
            .setStyle('SECONDARY')

        );





      interaction.reply({ embeds: [embed1ds1], components: [row], ephemeral: true })







    }
  }
})


client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === 'closegalaxy') {




      const channel19 = interaction.guild.channels.cache.get('1018585325137829989')
      const embed2ds = new Discord.MessageEmbed()
        .setDescription('> **Closed Channel**:' + `\`\`${interaction.channel.name}\`\``)
        .setTimestamp()
        .setColor(`#2F3136`)
      channel19.send({ embeds: [embed2ds] })
      await interaction.channel.delete()

    }
  }
})

client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === 'closegalaxy2') {





      const embed13ds = new Discord.MessageEmbed()
        .setDescription(`**Συνέχισε το ticket σου**`)
        .setTimestamp()
        .setColor(`#2F3136`)
      interaction.reply({ embeds: [embed13ds], ephemeral: true })



    }
  }
})

client.on("messageCreate", async message => {
  if (message.content === '!support') {
    const embed = new Discord.MessageEmbed().setDescription(`**Η Ομάδα <@&1015723320433451111> παρακαλείστε να εξυπήρεσετε άμεσα τον χρήστη** <@!${message.author.id}>`).setTimestamp()
      .setColor(`#2F3136`)
      .setThumbnail(message.guild.iconURL())
      .setFooter(``)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
    console.log('Support System Ready')
  }
})




client.on("messageCreate", async message => {
  if (message.content === '!ip') {
    const embed = new Discord.MessageEmbed().setDescription("**Για να συνδεθείτε στον Server μας πατήστε `F8` και γράψτε `connect 301.301.31` ** ").setTimestamp()
      .setColor(`#2F3136`)
      .setThumbnail(message.guild.iconURL())
      .setFooter(``)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
})

client.on("messageCreate", async message => {
  if (message.content === '!rr') {
    const embed = new Discord.MessageEmbed().setDescription("**O Server μας κάνει restart τις εξής ώρες **  : `00:00, 04:00, 08:00, 12:00, 16:00, 20:00`").setTimestamp()
      .setColor(`#2F3136`)
      .setThumbnail(message.guild.iconURL())
      .setFooter(``)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
})


client.on("messageCreate", message => {
  if (message.content === "!lock") {
    message.delete()
    const embed10 = new Discord.MessageEmbed().setDescription(`**Channel** <#${message.channel.id}> **κλειδώθηκε απο τον <@${message.author.id}>**`).setTimestamp()
      .setColor(`#2F3136`)
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      message.channel.send({ embeds: [embed10] });
      message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SEND_MESSAGES: false
      });
    } else {
      const embed11 = new Discord.MessageEmbed().setDescription("Δεν έχεις permissions να κάνεις use αυτο το command !").setTimestamp()
      message.channel.send({ embeds: [embed11] });
    }
  }
})

client.on("messageCreate", message => {
  if (message.content === "!unlock") {
    message.delete()
    const embed10 = new Discord.MessageEmbed().setDescription(`**Το κανάλι** <#${message.channel.id}> **ξεκλειδώθηκε απο τον <@${message.author.id}>**`).setTimestamp().setColor(`#2F3136`)
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      message.channel.send({ embeds: [embed10] });
      message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SEND_MESSAGES: true
      });
    } else {
      const embed11 = new Discord.MessageEmbed().setDescription("Δεν έχεις permissions να κάνεις use αυτο το command !.").setTimestamp()
      message.channel.send({ embeds: [embed11] });
    }
  }
})



client.on("messageCreate", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'application') {
    const row = new MessageActionRow()
      .addComponents(          
              new MessageButton()
      .setEmoji("<a:blackcheck:1000392079324745768>")
      .setLabel("MANAGMENT")
      .setStyle("LINK")
      .setURL(`https://docs.google.com/forms/d/e/1FAIpQLSdy8bvdfY5MSO-PgTStybsHaYH7f-8LafzCvE0iRRmDURKE3g/viewform`) );
      

    

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ format: "png" }))
      .setColor(`#2F3136`)
      .setTitle('**Extreme Project | Application**')
      .setDescription('**Για να ενταχθείς στο Extreme Project Team πάτησε το παρακάτω κουμπί, εκεί συμπλήρωσε την φόρμα! **')
      .setThumbnail(message.guild.iconURL({ format: "png" }))

    await message.channel.send({ embeds: [embed], components: [row] });


}

if(command === "close.staff"){
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const row1 = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setEmoji("<a:Yes_Animated:1019934943528362006>")
    .setCustomId("CloseStaff")
    .setStyle("SECONDARY")
  ) 

  const emb2 = new Discord.MessageEmbed()
  .setColor(`#2F3136`)
  .setDescription(`**Για να κλείσεις τα STAFF APPLICATIONS πρέπει να πιέσεις το παρακάτω κουμπί** `)
  
   message.channel.send({embeds: [emb2], components: [row1] })
  }

})

client.on("interactionCreate", async interaction =>{
  if (!interaction) return;
  if (interaction.isButton()) {
      if(interaction.customId === `CloseStaff`){
      const emb1 = new Discord.MessageEmbed()
      .setColor('#2F3136')
      .setDescription(`** Ο ${interaction.user.username} έκανε Closed τα STAFF Applications **`)
      interaction.message.edit({embeds: [emb1] })

      const row2 = new MessageActionRow()
  .addComponents(          
              new MessageButton()
      .setEmoji("<a:Yes_Animated:1019934943528362006>")
      .setLabel("MANAGMENT")
      .setStyle("LINK")
      .setURL(`https://docs.google.com/forms/d/1LHCuttA4NUa3sc2zjdZ1HWo_zdzMrXMSrI8vfcuE8W0/edit`)
      .setDisabled(true) );
      
    const emb = new Discord.MessageEmbed()
      .setAuthor(interaction.guild.name, interaction.guild.iconURL({ format: "png" }))
      .setColor(`#2F3136`)
      .setTitle('**Extreme Project | Application**')
      .setDescription('**Για να ενταχθείς στο Extreme Project Team πάτησε το παρακάτω κουμπί, εκεί συμπλήρωσε την φόρμα! **')
      .setThumbnail(interaction.guild.iconURL({ format: "png" }))

      interaction.channel.send({ embeds: [emb], components: [row2] });

      const row3 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setEmoji("<a:Yes_Animated:1019934943528362006>")
        .setCustomId("CloseStaff")
        .setStyle("SECONDARY")
        .setDisabled()
      ) 
      interaction.channel.edit({components: [row3] })
 
      
      }}
})






client.on('messageCreate', message => {
  if (message.content === "!invites") {
    var user = message.author;

    message.guild.invites.fetch()
      .then(invites => {
        const userInvites = invites.filter(o => o.inviter.id === user.id);

        var userInviteCount = userInvites.size;

        const welcome = new Discord.MessageEmbed()
          .setTitle(``)
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**O χρήστης** <@${message.author.id}>  **έχει** \`${userInviteCount}\` **invite/invites ** `)
          .setTimestamp()
          .setColor("#2F3136")
          .setThumbnail(message.guild.iconURL({ format: "png" }))
        message.channel.send({ embeds: [welcome] })
      })
  }
})

client.on('guildMemberUpdate', async (oldMember, newMember) => {

  if (oldMember.roles.cache.size < newMember.roles.cache.size) {

    const fetchedLogs = await oldMember.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_ROLE_UPDATE',
    });

    const channel = oldMember.guild.channels.cache.get('1019593285548904599')

    const roleAddLog = fetchedLogs.entries.first();
    if (!roleAddLog) return;
    const { executor, target, changes } = roleAddLog;
    const embed = new Discord.MessageEmbed()
      .setDescription(`**Role** \`${changes[0].new[0].name}\` \n\n**προστέθηκε στον**  <@${target.id}> \n\n**από τον** <@${executor.id}>`)
      .setTimestamp()
      .setTitle('ROLE LOGS')
      .setColor(`#2F3136`)
    channel.send({ embeds: [embed] })
  }
})

client.on('guildMemberUpdate', async (oldMember, newMember) => {



  if (oldMember.roles.cache.size > newMember.roles.cache.size) {

    const fetchedLogs = await oldMember.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_ROLE_UPDATE',
    });

    const channel = oldMember.guild.channels.cache.get('1019593285548904599')

    const roleRemoveLog = fetchedLogs.entries.first();
    if (!roleRemoveLog) return console.log('1019593285548904599')
    const { executor, target, changes } = roleRemoveLog;
    const embed = new Discord.MessageEmbed()
      .setDescription(`**Role** \`${changes[0].new[0].name}\` \n\n**αφαιρέθηκε στον**  <@${target.id}> \n\n**από τον** <@${executor.id}>`)
      .setTimestamp()
      .setTitle('ROLE LOGS')
      .setColor(`#2F3136`)
    channel.send({ embeds: [embed] })
  }
})

client.on("messageDelete", (messageDelete) => {

  const LogChannel = client.channels.cache.get('1019593966825504788')
  const EditedLog = new Discord.MessageEmbed()
    .setTitle("**MESSAGE DELETED**")
    .setColor("#2F3136")
    .setDescription(`**Χρήστης** <@${messageDelete.author.id}> \n**Κανάλι** <#${messageDelete.channel.id}> \n**Μήνυμα** ${messageDelete.content} `)
  LogChannel.send({ embeds: [EditedLog] })
});

client.on('messageCreate', async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "legit?") {
    const channel = message.mentions.channels.first()
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setEmoji("<a:Yes_Animated:1019934943528362006>")
          .setCustomId('activity')
          .setStyle('SECONDARY'),

        new MessageButton()
          .setEmoji("<:No:1019593138937004113>")
          .setCustomId('activity2')

          .setStyle('SECONDARY')
      );

    const embed = new Discord.MessageEmbed()
    embed.setAuthor(message.guild.name, message.guild.iconURL({ format: "png" }))
      .setTitle("Are We Legit ? | Extreme  Project")
      .setColor(`#2F3136`)
      .setDescription("**Εάν είμαστε Legit πιέστε το <a:Yes_Animated:1019934943528362006>.\n  Εάν δεν είμαστε Legit πιέστε το <:No:1019593138937004113>** ")
      .setThumbnail(message.guild.iconURL({ format: "png" }))
      .setFooter("")
      .setTimestamp()
    await message.channel.send({ embeds: [embed], components: [row] });

  }
});


`  `
client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {

    if (interaction.customId === 'activity2') {
      interaction.reply({ content: `**Σε ευχαριστούμε για το vote σου !**`, ephemeral: true })

      const channel1 = interaction.guild.channels.cache.get('1022578549250596964')
      const embed1ds = new Discord.MessageEmbed()
        .setDescription(`**Ο χρήστης** <@${interaction.user.id}> **Έκανε αρνητική δήλωση !**`)
        .setTimestamp()
        .setColor(`#2F3136`)
      channel1.send({ embeds: [embed1ds] })

    }
  }
})

client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton()) {

    if (interaction.customId === 'activity') {
      interaction.reply({ content: `**Σε ευχαριστούμε για το vote σου !**`, ephemeral: true })

      const channel1 = interaction.guild.channels.cache.get('1022578549250596964')
      const embed1ds = new Discord.MessageEmbed()
        .setDescription(`**Ο χρήστης** <@${interaction.user.id}> **Δήλωσε ότι είστε Legit**`)
        .setTimestamp()
        .setColor(`#2F3136`)
      channel1.send({ embeds: [embed1ds] })

    }
  }
})



client.on("message", async message =>{
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "avatar"){
    let user = message.mentions.users.first() || client.users.cache.get(agrs[0]) || message.author;
    let embed = new Discord.MessageEmbed()
    .setColor(`#2F3136`)
    .setDescription(user.displayAvatarURL({size : 4096, dynamic : true}))
    message.channel.send({embeds: [embed]})
  }
})
  client.on("message", async message =>{
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if(command === "kick"){
      const member = message.mentions.users.first();
      if(member){
        const memberTarget = message.guild.members.cache.get(member.id)
        memberTarget.kick();
        message.channel.send("**O χρήστης έγινε kicked με ετιτυχία ! **");
      }
      else{
        message.channel.send("**Παρακαλώ κάνε mention τον χρήστη που θέλεις να κάνεις kick**")
      }
    }})

    client.on("message", async message =>{
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
        if(command === "ban"){
          const member = message.mentions.users.first();
          if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban();
            message.channel.send("**O χρήστης έγινε banned με ετιτυχία ! **");
          }
          else{
            message.channel.send("**Παρακαλώ κάνε mention τον χρήστη που θέλεις να κάνεις ban**")
          }
        }})

        client.on("guildMemberAdd", async member =>{
          const channel = client.channels.cache.get('1019594519219556452')
          const embed = new Discord.MessageEmbed()
          .setColor(`#2F3136`)
          .setTitle(`JOIN LOGS`)
          .setDescription(`**Member :  ${member.displayName} ** `)

          channel.send({embeds: [embed]})
        })

        client.on("guildMemberRemove", async member =>{
          const channel = client.channels.cache.get('1019594575439986831')
          const embed = new Discord.MessageEmbed()
          .setColor(`#2F3136`)
          .setTitle(`LEAVE LOGS`)
          .setDescription(`**Member :  ${member.displayName} **`)

          channel.send({embeds: [embed]})
        })


        client.on("messageCreate", async message =>{
          const {guild, member} = message             
     const args = message.content.slice(prefix.length).trim().split(/ +/);
           const command = args.shift().toLowerCase(); 
          if(command === 'dmall') {
          await guild.members.fetch()
   guild.members.cache.forEach((m) =>  m.send(`${args.join(" ")}`).catch(() => null))
          }})

         


  client.login("MTAyMjUxNDczNTg1MTI1NzkxNg.GVantV.Ms-hRhOCazdo8ExdipWBRdPTAtURtnOEGi6aYs")