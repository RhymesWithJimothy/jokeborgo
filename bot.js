const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: 'with Bats ❤️🔪', type: 0 } })
});

const prefix ="j!"



bot.on('message', message => {
  if(message.author.bot)return;



if(message.content.toLowerCase().includes( ['bepsi'] ) || message.content.toLowerCase().includes( ['pepsi'] ) ){
       message.react(":bepsi:403237730919645224");
   }

 

if (message.content.startsWith(prefix + "help"))  {
message.channel.sendMessage(":sparkles: :oden: A  **B A T J O K E S**  Bot   |   Prefix: `j!`\nCurrent commands: `joker` , `chibita` , `stab` , `clap` , `house` |  Command example: `j!joker`");
}


if (message.content.toLowerCase().startsWith(prefix + "stab <@!")) {
  var odene= message.cleanContent.replace("j!stab @", "")
  message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has stabbed **" + odene + "** !");
}


if (message.content.startsWith(prefix + "house"))  {
    var saying= message.cleanContent.replace("j!house", " ")
message.channel.sendMessage("┏┓\n┃┃╱╲ In this \n┃╱╱╲╲ house \n╱╱╭╮╲╲ we love \n▔▏┗┛▕▔ & appreciate \n╱▔▔▔▔▔▔▔▔▔▔╲ \n"+saying+"\n╱╱┏┳┓╭╮┏┳┓ ╲╲ \n▔▏┗┻┛┃┃┗┻┛▕▔ ");
}


    
var randombatmanninjapic = ["https://78.media.tumblr.com/d3243b5a3c601dd0873f730fdf865237/tumblr_p5keajjxaW1u9l2uco2_r1_1280.png",
"https://78.media.tumblr.com/d3243b5a3c601dd0873f730fdf865237/tumblr_p5keajjxaW1u9l2uco2_r1_1280.png",
"https://68.media.tumblr.com/bb10005a5fa8d4265cfd29dfa65eccb5/tumblr_on3qcu7tVy1w6skzno2_1280.png",
"https://78.media.tumblr.com/cded32ae3b967aeba7e7f55747346b06/tumblr_p5keajjxaW1u9l2uco1_r1_1280.png",
"https://68.media.tumblr.com/a3f1bafa09dd1fb0fab1b60ca3d0b162/tumblr_p4y3zqVUgv1uyk2yjo2_r1_1280.png",
"https://78.media.tumblr.com/8ed726b073f19da999b6e0aa271f81dd/tumblr_og6t1eFbOs1vui3hno1_540.gif",
"https://78.media.tumblr.com/dc53b2fa79693e2e48cfa182fc0cf09d/tumblr_p2us04ikNN1x29pn0o1_1280.png",
"https://78.media.tumblr.com/c257b0a52aff6afc9fd1ce01f610cc22/tumblr_osolgwBb0m1u9l2uco1_540.jpg",
"https://78.media.tumblr.com/b4b6b6116a9fee34bb15bf1847ebf2ef/tumblr_p4u4nsci7l1ucuqq2o1_540.png",
"https://78.media.tumblr.com/6d69d4e9a9b567beec9701ac953fb2ac/tumblr_orgnpwX48W1wnxmhto5_1280.png",
"https://78.media.tumblr.com/2d53c528f9a2b8221634fc7c3a92c28c/tumblr_ox2yha1LBU1v0jfnlo1_540.png",
"https://78.media.tumblr.com/eda63fcda9e8710d5866bc0b7414a11d/tumblr_p4s9udSafx1wnxmhto1_540.png",
"https://78.media.tumblr.com/f30416d0beb0d8886d0b7228647aa6b3/tumblr_oy22emQytz1v2ncnco5_r1_540.png",
"https://78.media.tumblr.com/c82bbcac167cb9db5fd9291af280e9ce/tumblr_opwmtrkVYY1u9l2uco1_r1_540.png",
"https://78.media.tumblr.com/ca7fdbb6b603021fa52842b95e0bc7d5/tumblr_owtk4grx9s1r70ngto2_1280.png",
"https://68.media.tumblr.com/0b52cf6923c2abc9154432b473f67af5/tumblr_oxu754lE8M1voo29lo1_1280.png",
"https://78.media.tumblr.com/ccc565044a6fd5cc23d9ed1013d18438/tumblr_ow00cs1VBk1spqku9o3_540.png",
"https://78.media.tumblr.com/def980d29401db9f57c1c72d45b72857/tumblr_oq8ll7Wl1u1wnxmhto1_540.png",
"https://78.media.tumblr.com/2bf0b0a3d8f2b8a2ad3cbaff1947b32c/tumblr_oumuie0Y1g1rkeqcso1_540.png",
"https://68.media.tumblr.com/6e51b0a88814c31f97cb719688396dbc/tumblr_p041thsbkl1vo54gzo1_1280.png",
"https://78.media.tumblr.com/90a942e1f9e28a274e47309649dae946/tumblr_p0trfxjet21qlrt64o1_540.png",
"https://78.media.tumblr.com/c0ce0602c3bd5227468efde904b7dbff/tumblr_p0trfxjet21qlrt64o2_1280.png",
"https://78.media.tumblr.com/b89d1c8469aac7708c8aab91925f57be/tumblr_p0trfxjet21qlrt64o4_1280.png",
"https://78.media.tumblr.com/e17dc1baefbc215da711c15f3f9940b5/tumblr_p0trfxjet21qlrt64o3_1280.png",
"https://78.media.tumblr.com/0d30d2750da715bc4b729bf73fd971c1/tumblr_o9sb6wMqvJ1qlrt64o9_1280.jpg",
"https://68.media.tumblr.com/64d5d158250c9b400c5a66053fa08b58/tumblr_oukajb1WaN1u9l2uco1_1280.png",
"https://68.media.tumblr.com/4c50b3c938a70efc71261c9476144744/tumblr_om4g45kCfR1siq85mo1_1280.png",
"https://78.media.tumblr.com/2ba6242543e033d222327e0533b37a51/tumblr_oku1wk1au81tryr1lo1_540.jpg",
"https://68.media.tumblr.com/ee9d0c8e1f6deb376825249f64c2a992/tumblr_p16gvrPzM51u9l2uco1_1280.png",
"https://68.media.tumblr.com/e9208c9b504a69a844c04de8bcb13c00/tumblr_oxbfi4i1Bk1spqku9o1_1280.png",
"http://78.media.tumblr.com/0501e538ff1d680514c95a0e14d39232/tumblr_ovj9viiUIg1vo54gzo1_500.png",
"https://78.media.tumblr.com/d568afe5fb0e0dcbc52f16b346eb0614/tumblr_inline_ouk32vVpOj1und9l2_540.png",
"https://68.media.tumblr.com/d1c70d6b91c5a0d2108b30a62ce88b21/tumblr_ou1pssEb801u9l2uco1_1280.png",
"https://68.media.tumblr.com/b6d58e359908e2946669d7a9eccaf5ca/tumblr_p46c8lhl8m1vo9mkko1_1280.png",
"https://68.media.tumblr.com/f12e4ff2ae8eb61bc2947fbb390d6d33/tumblr_p0b3xxoSXN1thnv5bo1_1280.png",
"https://78.media.tumblr.com/e8f030cd1c06a8ead29482502679d2f2/tumblr_o744pvpWow1v4dluuo2_540.png"];
  

var numberofninjapics = randombatmanninjapic.length - 1;
var countninjabatman = Math.round(Math.random() * (numberofninjapics - 1) + 1)


 
const BATMANNINJAJOKER = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setFooter("© Batman Ninja 2018")
  .setImage(randombatmanninjapic[countninjabatman]);
  
  
   
  if (message.content.startsWith(prefix + "joker"))  {
    
       if (message.content.includes("batman ninja"))  {
       
        if (message.content.includes("number"))  {
            message.channel.sendMessage("This category currently has" + numberofninjapics + "pictures");
            else message.channel.sendEmbed(BATMANNINJAJOKER);
}  
    else message.channel.sendEmbed(BATMANNINJAJOKER);
}


  

 if (message.content.startsWith(prefix + "clap"))  {
   var menos=message.cleanContent.replace("cb!clap", "")
    var clappy= menos.toUpperCase().replace(/ /g," :clap: ")
message.channel.sendMessage(clappy + " :clap: ");
}


});








bot.login(process.env.BOT_TOKEN);
