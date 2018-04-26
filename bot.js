const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: 'with Bats <3 [ j!help ]', type: 0 } })
});

const prefix ="j!"



bot.on('message', message => {
  if(message.author.bot)return;



if(message.content.toLowerCase().includes( ['bepsi'] ) || message.content.toLowerCase().includes( ['pepsi'] ) ){
       message.react(":bepsi:403237730919645224");
   }

 

if (message.content.startsWith(prefix + "help"))  {
message.channel.sendMessage(":bat: :black_joker:  A  **B A T J O K E S**  Bot   |   Prefix: `j!`\nCurrent commands: `joker` , `stab` , `clap` , `house` |  Command example: `j!joker`");
}


if (message.content.toLowerCase().startsWith(prefix + "stab")) {
  if (message.cleanContent.includes("@")) {
        var odene= message.mentions.members.first()
        message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has stabbed **" + odene + "**!");  

    } else if (message.cleanContent.includes("j!stab ")) { 
        var odene= message.cleanContent.replace("j!stab ", "")
        message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has stabbed **" + odene + "**!");  

    } else message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** stabbed themselves! What a nerd.");
}


if (message.content.startsWith(prefix + "house"))  {
    var saying= message.cleanContent.replace("j!house", " ")
message.channel.sendMessage("┏┓\n┃┃╱╲ In this \n┃╱╱╲╲ house \n╱╱╭╮╲╲ we love \n▔▏┗┛▕▔ & appreciate \n╱▔▔▔▔▔▔▔▔▔▔╲ \n"+saying+"\n╱╱┏┳┓╭╮┏┳┓ ╲╲ \n▔▏┗┻┛┃┃┗┻┛▕▔ ");
}


    
var randombatmanninjapic = ["https://i.imgur.com/OLQZDTA.png",
"https://i.imgur.com/KAAwiIx.jpg",
"https://i.imgur.com/tPc9GWR.jpg",
"https://i.imgur.com/A4w4HjC.jpg",
"https://i.imgur.com/FcreVRa.jpg",
"https://i.imgur.com/V7PyHbs.jpg",
"https://i.imgur.com/cnibFxN.jpg",
"https://i.imgur.com/p0RMfFH.jpg",
"https://i.imgur.com/gMgeZrf.jpg",
"https://i.imgur.com/a18yRJD.jpg",
"https://i.imgur.com/sE3jgqF.jpg",
"https://i.imgur.com/x8HTx6p.jpg",
"https://i.imgur.com/dNUFvJA.jpg",
"https://i.imgur.com/mNEabR7.jpg",
"https://i.imgur.com/F77xora.jpg",
"https://i.imgur.com/5hBhHfZ.jpg",
"https://i.imgur.com/kzWCLSF.jpg",
"https://i.imgur.com/X5U3pW1.jpg",
"https://i.imgur.com/dYzYUZB.jpg",
"https://i.imgur.com/g1r8Dgp.jpg",
"https://i.imgur.com/VkmTKi0.jpg",
"https://i.imgur.com/FSBd62k.jpg",
"https://i.imgur.com/vGnreG6.jpg",
"https://i.imgur.com/o3kDoOb.jpg",
"https://i.imgur.com/OURbXWD.jpg",
"https://i.imgur.com/awvkjdu.jpg",
"https://i.imgur.com/ShfY2XA.jpg",
"https://i.imgur.com/g74pgcf.jpg",
"https://i.imgur.com/P6IP8sM.jpg",
"https://i.imgur.com/Kl4gLBl.jpg",
"https://i.imgur.com/2SOKeX3.jpg",
"https://i.imgur.com/CMISG6T.jpg",
"https://i.imgur.com/PLIjluj.jpg",
"https://i.imgur.com/3ItOY7H.jpg",
"https://i.imgur.com/xqMKnzi.jpg",
"https://i.imgur.com/SYgxH5p.jpg",
"https://i.imgur.com/vWs5USM.jpg",
"https://i.imgur.com/1CZ5j6q.jpg",
"https://i.imgur.com/RshAHCy.jpg",
"https://i.imgur.com/nwkyagv.jpg",
"https://i.imgur.com/CoDECvU.jpg",
"https://i.imgur.com/sW14Yps.jpg",
"https://i.imgur.com/VtyMfb4.jpg",
"https://i.imgur.com/BbNQuzC.jpg",
"https://i.imgur.com/kGQBks3.jpg",
"https://i.imgur.com/OALGe4o.jpg",
"https://i.imgur.com/mwV3OYM.jpg",
"https://i.imgur.com/P2c1QXm.jpg",
"https://i.imgur.com/ehAetHi.jpg",
"https://i.imgur.com/Ia6kT2f.jpg",
"https://i.imgur.com/DJiQvhs.jpg",
"https://i.imgur.com/aXsfad7.jpg",
"https://i.imgur.com/ihOVqCs.jpg",
"https://i.imgur.com/tVgjiHd.jpg",
"https://i.imgur.com/RijrSag.jpg",
"https://i.imgur.com/E0numAk.jpg",
"https://i.imgur.com/Cg21koU.jpg",
"https://i.imgur.com/mXANdkT.jpg",
"https://i.imgur.com/C4plnYb.jpg",
"https://i.imgur.com/UrSE1ZK.jpg",
"https://i.imgur.com/WMOOn45.jpg",
"https://i.imgur.com/Upegxy4.jpg",
"https://i.imgur.com/fAaD6Wm.jpg",
"https://i.imgur.com/tIpSFc0.jpg",
"https://i.imgur.com/83L2zfc.jpg",
"https://i.imgur.com/uGPPfTf.jpg",
"https://i.imgur.com/Hsh5Zan.jpg",
"https://i.imgur.com/WuMZEpj.jpg",
"https://i.imgur.com/5Vesj72.jpg",
"https://i.imgur.com/XUiceOf.jpg",
"https://i.imgur.com/46CV3JR.jpg",
"https://i.imgur.com/ftwvJ38.jpg",
"https://i.imgur.com/LwIK6py.jpg",
"https://i.imgur.com/qAkNmVc.jpg",
"https://i.imgur.com/X8Ow8VT.jpg",
"https://i.imgur.com/onkQTFy.jpg",
"https://i.imgur.com/vrDxpdZ.jpg",
"https://i.imgur.com/baArjSE.jpg",
"https://i.imgur.com/h0vsjmx.jpg",
"https://i.imgur.com/BOFrXb0.jpg",
"https://i.imgur.com/sx1ECQD.jpg",
"https://i.imgur.com/UZN7TGG.jpg",
"https://i.imgur.com/5zwdPhv.jpg",
"https://i.imgur.com/yGOF9l4.jpg",
"https://i.imgur.com/st54pGG.jpg",
"https://i.imgur.com/6XqeVVi.jpg",
"https://i.imgur.com/UeicI4W.jpg",
"https://i.imgur.com/KVbqPH9.jpg",
"https://i.imgur.com/J3tpGYb.jpg",
"https://i.imgur.com/HzT21KC.jpg",
"https://i.imgur.com/mCeG5Ax.jpg",
"https://i.imgur.com/pUxJDVy.jpg",
"https://i.imgur.com/5AVEZxK.jpg",
"https://i.imgur.com/HWmtCr4.jpg",
"https://i.imgur.com/dmMRCGj.jpg",
"https://i.imgur.com/QeIN8io.jpg",
"https://i.imgur.com/aBhnOzP.jpg",
"https://i.imgur.com/JTRZg3Z.jpg",
"https://i.imgur.com/tr5Ik2h.jpg",
"https://i.imgur.com/jYpGL1D.jpg",
"https://i.imgur.com/WfkjiEu.jpg",
"https://i.imgur.com/rfskVaN.jpg",
"https://i.imgur.com/6nlFBaP.jpg",
"https://i.imgur.com/pHq2Krg.jpg",
"https://i.imgur.com/SPRe1bq.jpg",
"https://i.imgur.com/1Laj7NR.jpg",
"https://i.imgur.com/O2SLHgU.jpg",
"https://i.imgur.com/ZaueGD1.jpg",
"https://i.imgur.com/5QuXitB.jpg",
"https://i.imgur.com/xRpKfDI.jpg",
"https://i.imgur.com/ZtSddVC.jpg",
"https://i.imgur.com/J9QKj3F.jpg",
"https://i.imgur.com/KrkB56E.jpg",
"https://i.imgur.com/IC1dqoa.jpg",
"https://i.imgur.com/2Ch9T5l.jpg",
"https://i.imgur.com/zeA3CPT.jpg",
"https://i.imgur.com/QyFiYn6.jpg",
"https://i.imgur.com/PqWmZZq.jpg",
"https://i.imgur.com/yGyj77c.jpg",
"https://i.imgur.com/iUnHWrw.jpg",
"https://i.imgur.com/drRi1xK.jpg",
"https://i.imgur.com/EEUYGZp.jpg",
"https://i.imgur.com/e7rTJ2n.jpg",
"https://i.imgur.com/TczCBLb.jpg",
"https://i.imgur.com/zQwrvep.jpg",
"https://i.imgur.com/1aLoThb.jpg",
"https://i.imgur.com/TQHjnow.jpg",
"https://i.imgur.com/mBQs1dU.jpg",
"https://i.imgur.com/BzJLDdz.jpg",
"https://i.imgur.com/xIf5W2P.jpg",
"https://i.imgur.com/w54ltXQ.jpg",
"https://i.imgur.com/T7KFf5v.jpg",
"https://i.imgur.com/kFj9c8g.jpg",
"https://i.imgur.com/EpZBbnV.jpg",
"https://i.imgur.com/iUITvAu.jpg",
"https://i.imgur.com/mI7Rsi7.jpg",
"https://i.imgur.com/5MZMQuk.jpg",
"https://i.imgur.com/ZqLMIux.jpg",
"https://i.imgur.com/22vvcsm.jpg",
"https://i.imgur.com/4cARCvW.jpg",
"https://i.imgur.com/JNkXlw3.jpg",
"https://i.imgur.com/HuXo9E5.jpg",
"https://i.imgur.com/wzph0V8.jpg",
"https://i.imgur.com/WxiYlyu.jpg",
"https://i.imgur.com/3JUCGP0.jpg",
"https://i.imgur.com/C885FeT.jpg",
"https://i.imgur.com/mqg2QqH.jpg",
"https://i.imgur.com/PKAh8Od.jpg",
"https://i.imgur.com/fjkEJeH.jpg",
"https://i.imgur.com/zzyU5k2.jpg",
"https://i.imgur.com/vKuC1pa.jpg",
"https://i.imgur.com/PGSMKHw.jpg",
"https://i.imgur.com/pJ053tn.jpg",
"https://i.imgur.com/HlcVmOF.jpg",
"https://i.imgur.com/VZMhqiG.jpg",
"https://i.imgur.com/0DuBhvQ.jpg",
"https://i.imgur.com/5qOHpdm.jpg",
"https://i.imgur.com/ZbwnawT.jpg",
"https://i.imgur.com/aFlTDwC.jpg",
"https://i.imgur.com/LsCMmy7.jpg",
"https://i.imgur.com/9I6OLmj.jpg",
"https://i.imgur.com/eiF5jNN.jpg",
"https://i.imgur.com/fldxLy3.jpg",
"https://i.imgur.com/rP6Tdf1.jpg",
"https://i.imgur.com/d3HiDl3.jpg",
"https://i.imgur.com/wFiETYh.jpg",
"https://i.imgur.com/Iq9ijkO.jpg",
"https://i.imgur.com/psZJ3rb.jpg",
"https://i.imgur.com/tkxfnYt.jpg",
"https://i.imgur.com/y0eJvjh.jpg",
"https://i.imgur.com/nDkQ1ho.jpg",
"https://i.imgur.com/t89X8fp.jpg",
"https://i.imgur.com/Jf66mQQ.jpg",
"https://i.imgur.com/Nbs4PLk.jpg",
"https://i.imgur.com/cOYTZe4.jpg",
"https://i.imgur.com/zitZ598.jpg",
"https://i.imgur.com/5ERe3jA.jpg",
"https://i.imgur.com/CZcCmp8.jpg",
"https://i.imgur.com/JczzCXb.jpg",
"https://i.imgur.com/YJ28DO0.jpg",
"https://i.imgur.com/uboZlEf.jpg",
"https://i.imgur.com/gjknqcP.jpg",
"https://i.imgur.com/KDBO4Xa.jpg",
"https://i.imgur.com/QKiwLWt.jpg",
"https://i.imgur.com/kdAL169.jpg",
"https://i.imgur.com/2ks83hi.jpg",
"https://i.imgur.com/dm7sZzq.jpg",
"https://i.imgur.com/xJEFyTR.jpg",
"https://i.imgur.com/JXA4d0p.jpg",
"https://i.imgur.com/EHPFhgH.jpg",
"https://i.imgur.com/3ddw6da.jpg",
"https://i.imgur.com/rB2OH2n.jpg",
"https://i.imgur.com/0KMVuLe.jpg",
"https://i.imgur.com/ey0lDfH.jpg",
"https://i.imgur.com/9iwcc54.jpg",
"https://i.imgur.com/5TzPUFF.jpg",
"https://i.imgur.com/EtudMu8.jpg",
"https://i.imgur.com/ugiZ8ur.jpg",
"https://i.imgur.com/50fp4EU.jpg",
"https://i.imgur.com/DjQXOcb.jpg",
"https://i.imgur.com/H7Injln.jpg",
"https://i.imgur.com/z7Gb6xX.jpg",
"https://i.imgur.com/6C5VlLF.jpg",
"https://i.imgur.com/00CRVS7.jpg",
"https://i.imgur.com/6uEngRk.jpg",
"https://i.imgur.com/Zor8ozB.jpg",
"https://i.imgur.com/q7WrZuT.jpg",
"https://i.imgur.com/EDGzn1O.jpg",
"https://i.imgur.com/49ofoPf.jpg",
"https://i.imgur.com/votsjMl.jpg",
"https://i.imgur.com/LygDW5D.jpg",
"https://i.imgur.com/wNyOIZ5.jpg",
"https://i.imgur.com/j1YslJF.jpg",
"https://i.imgur.com/zKshIMs.jpg",
"https://i.imgur.com/rgAT0lz.jpg",
"https://i.imgur.com/dhZtF5v.jpg",
"https://i.imgur.com/tcoCNQG.jpg",
"https://i.imgur.com/L0vC2Uf.jpg",
"https://i.imgur.com/69qJCKS.jpg",
"https://i.imgur.com/0tK3TAj.jpg",
"https://i.imgur.com/mkjNokP.jpg",
"https://i.imgur.com/4QtJW9T.jpg",
"https://i.imgur.com/FAVpFoS.jpg",
"https://i.imgur.com/4dUIkaC.jpg",
"https://i.imgur.com/Ob7Z7Lt.jpg",
"https://i.imgur.com/aFGORIO.jpg",
"https://i.imgur.com/Y75hpO0.jpg",
"https://i.imgur.com/NJGFg0A.jpg",
"https://i.imgur.com/fdDhbHO.jpg",
"https://i.imgur.com/kqneEG8.jpg",
"https://i.imgur.com/09N7VjP.jpg",
"https://i.imgur.com/Tpv6hGS.jpg",
"https://i.imgur.com/YaLlSvo.jpg",
"https://i.imgur.com/deAvxau.jpg",
"https://i.imgur.com/CMEk8T1.jpg",
"https://i.imgur.com/FKq5LSe.jpg",
"https://i.imgur.com/xgLTbhL.jpg",
"https://i.imgur.com/RrDTHDb.jpg",
"https://i.imgur.com/iRwmNTQ.jpg",
"https://i.imgur.com/JkpLgHE.jpg",
"https://i.imgur.com/cXdKhmW.jpg",
"https://i.imgur.com/SN1mW36.jpg",
"https://i.imgur.com/S3n2Qh7.jpg",
"https://i.imgur.com/JaTOnkR.jpg",
"https://i.imgur.com/PphHXXs.jpg",
"https://i.imgur.com/i0YAPcX.jpg",
"https://i.imgur.com/vf8FaJa.jpg",
"https://i.imgur.com/mtjGSt4.jpg",
"https://i.imgur.com/OyP8CsF.jpg",
"https://i.imgur.com/BC00njP.jpg",
"https://i.imgur.com/gSdiHbB.jpg",
"https://i.imgur.com/yt6WPH3.jpg",
"https://i.imgur.com/pQ8Z5va.jpg",
"https://i.imgur.com/RkGqtYR.jpg",
"https://i.imgur.com/2QpgZXz.jpg",
"https://i.imgur.com/jiNlFVL.jpg",
"https://i.imgur.com/UzRH4UJ.jpg",
"https://i.imgur.com/wLCormr.jpg",
"https://i.imgur.com/VnKJaYG.jpg",
"https://i.imgur.com/Z4V2ONX.jpg",
"https://i.imgur.com/tl1pjrX.jpg",
"https://i.imgur.com/ZIJf3n9.jpg",
"https://i.imgur.com/1eCuIvy.jpg",
"https://i.imgur.com/Z6nVwqU.jpg",
"https://i.imgur.com/Ww30fjW.jpg",
"https://i.imgur.com/zMrI0wh.jpg",
"https://i.imgur.com/Ok2XMCb.jpg",
"https://i.imgur.com/Uo8ChuR.jpg",
"https://i.imgur.com/kCZ0dCZ.jpg",
"https://i.imgur.com/4WzOuDC.jpg",
"https://i.imgur.com/zuh5Kd6.jpg",
"https://i.imgur.com/j4HFaSn.jpg",
"https://i.imgur.com/htATMu3.jpg",
"https://i.imgur.com/2HB4GAP.jpg",
"https://i.imgur.com/dTegw7X.jpg",
"https://i.imgur.com/tHxrUmC.jpg",
"https://i.imgur.com/aBZ8LXe.jpg",
"https://i.imgur.com/Yd2rNLE.jpg",
"https://i.imgur.com/RyYHV4Y.jpg",
"https://i.imgur.com/SzVSHBt.jpg",
"https://i.imgur.com/F1yYC6K.jpg",
"https://i.imgur.com/1FrkAIY.jpg",
"https://i.imgur.com/nJKNYsw.jpg",
"https://i.imgur.com/eQ4bzIb.jpg",
"https://i.imgur.com/YL7FcDe.jpg",
"https://i.imgur.com/PANsX3M.jpg",
"https://i.imgur.com/NV4icku.jpg",
"https://i.imgur.com/vIOB183.jpg",
"https://i.imgur.com/Ctg40EU.jpg",
"https://i.imgur.com/aK2WZbK.jpg",
"https://i.imgur.com/fmgkgDX.jpg",
"https://i.imgur.com/cRjcv2M.jpg",
"https://i.imgur.com/KOF0ozr.jpg",
"https://i.imgur.com/WRFjdhI.jpg",
"https://i.imgur.com/o3E3pjW.jpg",
"https://i.imgur.com/FQfedNy.jpg",
"https://i.imgur.com/NpBz1Cj.jpg",
"https://i.imgur.com/18buddG.jpg",
"https://i.imgur.com/vh3GR1A.jpg",
"https://i.imgur.com/3CBT8M1.jpg",
"https://i.imgur.com/Mkx3YBx.jpg",
"https://i.imgur.com/baX4H7D.jpg",
"https://i.imgur.com/cXIQrw2.jpg",
"https://i.imgur.com/0cHZV6g.jpg",
"https://i.imgur.com/in2yi6l.jpg",
"https://i.imgur.com/fw71usg.jpg",
"https://i.imgur.com/rZbfFLP.jpg",
"https://i.imgur.com/okbhcnd.jpg",
"https://i.imgur.com/AVaZ5xX.jpg",
"https://i.imgur.com/fBJcGqq.jpg",
"https://i.imgur.com/USsaX9h.jpg",
"https://i.imgur.com/EMa5Lz4.jpg",
"https://i.imgur.com/4y8Iczy.jpg",
"https://i.imgur.com/0tYrZNx.jpg",
"https://i.imgur.com/p5JnGeF.jpg",
"https://i.imgur.com/sINApKz.jpg",
"https://i.imgur.com/lXiWLtW.jpg",
"https://i.imgur.com/kjFSB2K.jpg",
"https://i.imgur.com/JsVzOL7.jpg",
"https://i.imgur.com/rvdh92b.jpg",
"https://i.imgur.com/pDZK2qt.jpg",
"https://i.imgur.com/to78BiG.jpg",
"https://i.imgur.com/sWVnD2d.jpg",
"https://i.imgur.com/Qb3ulI4.jpg",
"https://i.imgur.com/nBTbPRE.jpg",
"https://i.imgur.com/ETJQpcG.jpg",
"https://i.imgur.com/8KUStek.jpg",
"https://i.imgur.com/74QXsnH.jpg",
"https://i.imgur.com/C2gS8CU.jpg",
"https://i.imgur.com/eHoy8JR.jpg",
"https://i.imgur.com/lOvkFbq.jpg",
"https://i.imgur.com/ueTFZwK.jpg",
"https://i.imgur.com/fkKMZrO.jpg",
"https://i.imgur.com/SaVDkH0.jpg",
"https://i.imgur.com/HdQ330M.jpg",
"https://i.imgur.com/85NwBVV.jpg",
"https://i.imgur.com/AoHxu6Y.jpg",
"https://i.imgur.com/OMpsWX1.jpg",
"https://i.imgur.com/yGwgN76.jpg",
"https://i.imgur.com/qYvuQ6r.jpg",
"https://i.imgur.com/Ljv57e2.jpg",
"https://i.imgur.com/M1HLPXG.jpg",
"https://i.imgur.com/xCvSPIi.jpg",
"https://i.imgur.com/Tp6M5oF.jpg",
"https://i.imgur.com/6Teegze.jpg",
"https://i.imgur.com/FwM8HfZ.jpg",
"https://i.imgur.com/NZfs19v.jpg",
"https://i.imgur.com/r9rH4HY.jpg",
"https://i.imgur.com/KbJUu7C.jpg",
"https://i.imgur.com/qEmiQiV.jpg",
"https://i.imgur.com/NecBjxE.jpg",
"https://i.imgur.com/lfS6DMv.jpg",
"https://i.imgur.com/6kvn6MI.jpg",
"https://i.imgur.com/nE5yIn6.jpg",
"https://i.imgur.com/jB4jw4c.jpg",
"https://i.imgur.com/YuauUaP.jpg",
"https://i.imgur.com/wSqJyRi.jpg",
"https://i.imgur.com/jAjyAC0.jpg",
"https://i.imgur.com/4ew6TUp.jpg",
"https://i.imgur.com/WqpJVec.jpg",
"https://i.imgur.com/T3LZLeE.jpg",
"https://i.imgur.com/JzB9l2I.jpg",
"https://i.imgur.com/CtnBa0n.jpg",
"https://i.imgur.com/YSdSO1N.jpg",
"https://i.imgur.com/85i2axN.jpg",
"https://i.imgur.com/dGw1KIu.jpg",
"https://i.imgur.com/Fu1cbQG.jpg",
"https://i.imgur.com/pBXdxst.jpg",
"https://i.imgur.com/Qda5GLl.jpg",
"https://i.imgur.com/gh3jSgk.jpg",
"https://i.imgur.com/taAfhBU.jpg",
"https://i.imgur.com/HCvoClB.jpg",
"https://i.imgur.com/ZDnGu64.jpg",
"https://i.imgur.com/Qv74Qgs.jpg",
"https://i.imgur.com/zJL5cfT.jpg",
"https://i.imgur.com/1VhUDX7.jpg",
"https://i.imgur.com/dQuVfi7.jpg",
"https://i.imgur.com/kGs19EJ.jpg",
"https://i.imgur.com/MjJ97GK.jpg",
"https://i.imgur.com/aO8TyI9.jpg",
"https://i.imgur.com/KVvzECd.jpg",
"https://i.imgur.com/L3HWr15.jpg",
"https://i.imgur.com/moSGob2.jpg",
"https://i.imgur.com/aDWCMPo.jpg",
"https://i.imgur.com/ImBKZBc.jpg",
"https://i.imgur.com/C2qO8qJ.jpg",
"https://i.imgur.com/u7DQvTN.jpg",
"https://i.imgur.com/Z5eCTOq.jpg",
"https://i.imgur.com/GBFmQY7.jpg",
"https://i.imgur.com/A0ge8Ah.jpg",
"https://i.imgur.com/HIqNdSi.jpg",
"https://i.imgur.com/9ovM3Zq.jpg",
"https://i.imgur.com/VjoS7nL.jpg",
"https://i.imgur.com/61DTF6Q.jpg",
"https://i.imgur.com/vdBkbLl.jpg",
"https://i.imgur.com/6GcOLfR.jpg",
"https://i.imgur.com/SzrLKvG.jpg",
"https://i.imgur.com/82B5Yo6.jpg",
"https://i.imgur.com/N1A82bx.jpg",
"https://i.imgur.com/2EIpdxQ.jpg",
"https://i.imgur.com/GzCror1.jpg",
"https://i.imgur.com/dGkl5Xu.jpg",
"https://i.imgur.com/voV35Fp.jpg",
"https://i.imgur.com/l3oCBoZ.jpg",
"https://i.imgur.com/F4bpxxa.jpg",
"https://i.imgur.com/njVLbG3.jpg",
"https://i.imgur.com/NWZcHw0.jpg",
"https://i.imgur.com/itHY3tK.jpg",
"https://i.imgur.com/5HevxIX.jpg",
"https://i.imgur.com/WsgeoTb.jpg",
"https://i.imgur.com/yh959QJ.jpg",
"https://i.imgur.com/BpPuEgU.jpg",
"https://i.imgur.com/IBLinzO.jpg",
"https://i.imgur.com/T5oWTqM.jpg",
"https://i.imgur.com/7q1dkCw.jpg",
"https://i.imgur.com/zGw7ghy.jpg",
"https://i.imgur.com/xmh9Uft.jpg",
"https://i.imgur.com/AhD2CxU.jpg",
"https://i.imgur.com/yZmigkP.jpg",
"https://i.imgur.com/HrhqoPW.jpg",
"https://i.imgur.com/A7LmtdZ.jpg",
"https://i.imgur.com/87NEzSm.jpg",
"https://i.imgur.com/EmWMN4v.jpg",
"https://i.imgur.com/7fMqXC8.jpg",
"https://i.imgur.com/q6oQ5SP.jpg",
"https://i.imgur.com/6oUcZMb.jpg",
"https://i.imgur.com/MDgirv0.jpg",
"https://i.imgur.com/AkXef36.jpg",
"https://i.imgur.com/1WsT1yH.jpg",
"https://i.imgur.com/gKFDUi6.jpg",
"https://i.imgur.com/5lypw1Q.jpg",
"https://i.imgur.com/B1pbbCd.jpg",
"https://i.imgur.com/tPEFN5l.jpg",
"https://i.imgur.com/jCh1GMM.jpg",
"https://i.imgur.com/0nWRzOZ.jpg",
"https://i.imgur.com/kSO324W.jpg",
"https://i.imgur.com/AJYiPOF.jpg",
"https://i.imgur.com/jR8yUEX.jpg",
"https://i.imgur.com/B4IIo0q.jpg",
"https://i.imgur.com/AGhlShm.jpg",
"https://i.imgur.com/HESWlbr.jpg",
"https://i.imgur.com/nLGQr76.jpg",
"https://i.imgur.com/fSkbsuV.jpg",
"https://i.imgur.com/Oc5qWAR.jpg",
"https://i.imgur.com/o0GIqtZ.jpg",
"https://i.imgur.com/GgK5F6G.jpg",
"https://i.imgur.com/dRHR51E.jpg",
"https://i.imgur.com/q5NNR9G.jpg",
"https://i.imgur.com/RI7uC4f.jpg",
"https://i.imgur.com/CMLcRDU.jpg",
"https://i.imgur.com/zYKBokR.jpg",
"https://i.imgur.com/EQYaXSq.jpg",
"https://i.imgur.com/I8XCSln.jpg",
"https://i.imgur.com/e8vmsYK.jpg",
"https://i.imgur.com/Ml9tqWs.jpg",
"https://i.imgur.com/YnU9cbU.jpg",
"https://i.imgur.com/ZuZYfnI.jpg",
"https://i.imgur.com/nSNiPW8.jpg",
"https://i.imgur.com/toWUisp.jpg",
"https://i.imgur.com/rfbWga0.jpg",
"https://i.imgur.com/34YzE4l.jpg",
"https://i.imgur.com/ztmUsIY.jpg",
"https://i.imgur.com/ZzvjKOf.jpg",
"https://i.imgur.com/MhJHJvR.jpg",
"https://i.imgur.com/V1BnjLw.jpg",
"https://i.imgur.com/ulJRAfP.jpg",
"https://i.imgur.com/Pxdtesg.jpg",
"https://i.imgur.com/MX2J2OP.jpg",
"https://i.imgur.com/2r3xIZT.jpg",
"https://i.imgur.com/AKFTOfC.jpg",
"https://i.imgur.com/iVQrOPu.jpg",
"https://i.imgur.com/SFAjZgK.jpg",
"https://i.imgur.com/7LhLk20.jpg",
"https://i.imgur.com/ulhDL6I.jpg",
"https://i.imgur.com/zQKbHkQ.jpg",
"https://i.imgur.com/ImtoC7s.jpg",
"https://i.imgur.com/h8Ga2Yt.jpg",
"https://i.imgur.com/mjVM2Q9.jpg",
"https://i.imgur.com/po4KSz8.jpg",
"https://i.imgur.com/6a9tEh8.jpg",
"https://i.imgur.com/NwPvGWM.jpg",
"https://i.imgur.com/38f3f8h.jpg",
"https://i.imgur.com/XlEPhb7.jpg",
"https://i.imgur.com/vRicS8K.jpg",
"https://i.imgur.com/fj3v1ex.jpg",
"https://i.imgur.com/M9Q0wb1.jpg",
"https://i.imgur.com/raWITUA.jpg",
"https://i.imgur.com/rbhlbGB.jpg",
"https://i.imgur.com/IYGeEX5.jpg",
"https://i.imgur.com/vBo3hqH.jpg",
"https://i.imgur.com/c0GRTU8.jpg",
"https://i.imgur.com/eBJg9uE.jpg",
"https://i.imgur.com/Ciydhi5.jpg",
"https://i.imgur.com/rjUHVco.jpg",
"https://i.imgur.com/ABc5foT.jpg",
"https://i.imgur.com/zcAaRS9.jpg",
"https://i.imgur.com/2GstKwM.jpg",
"https://i.imgur.com/Pc4ypUz.jpg",
"https://i.imgur.com/jOu7gPX.jpg",
"https://i.imgur.com/6NjludT.jpg",
"https://i.imgur.com/f7crcqJ.jpg",
"https://i.imgur.com/J6qxEPJ.jpg",
"https://i.imgur.com/nONXDVw.jpg",
"https://i.imgur.com/YWpWgLF.jpg",
"https://i.imgur.com/mNmdKAI.jpg",
"https://i.imgur.com/u7tgzTa.jpg",
"https://i.imgur.com/Ynss11m.jpg",
"https://i.imgur.com/NsJYNNI.jpg",
"https://i.imgur.com/xaMehiw.jpg",
"https://i.imgur.com/oyv9i7c.jpg",
"https://i.imgur.com/fa8GjI5.jpg",
"https://i.imgur.com/pz42O4r.jpg",
"https://i.imgur.com/bIyTUFq.jpg",
"https://i.imgur.com/3e6ltIj.jpg",
"https://i.imgur.com/BNnc22Y.jpg",
"https://i.imgur.com/bwO3yFH.jpg",
"https://i.imgur.com/KiF1xy4.jpg",
"https://i.imgur.com/ZxC96ap.jpg",
"https://i.imgur.com/8TlVJWq.jpg",
"https://i.imgur.com/8cVwgUY.jpg",
"https://i.imgur.com/0AmeYuf.jpg",
"https://i.imgur.com/nJIZGqB.jpg",
"https://i.imgur.com/eESJVgH.jpg",
"https://i.imgur.com/R7i3iQJ.jpg",
"https://i.imgur.com/UyW5g8I.jpg",
"https://i.imgur.com/KfAqP2t.jpg",
"https://i.imgur.com/UzbgEjM.jpg",
"https://i.imgur.com/t6DyvrO.jpg",
"https://i.imgur.com/D36dAPK.jpg",
"https://i.imgur.com/JelEIdQ.jpg",
"https://i.imgur.com/ttovnVH.jpg",
"https://i.imgur.com/cxMw2JV.jpg",
"https://i.imgur.com/J2lTeV9.jpg",
"https://i.imgur.com/U8UoSsJ.jpg",
"https://i.imgur.com/SduUkg7.jpg",
"https://i.imgur.com/OhoFKv3.jpg",
"https://i.imgur.com/226Ym5S.jpg",
"https://i.imgur.com/7IfTYvX.jpg",
"https://i.imgur.com/oQgy3PQ.jpg",
"https://i.imgur.com/8Rd3Wfe.jpg",
"https://i.imgur.com/4K1B69C.jpg",
"https://i.imgur.com/I8E1sfY.jpg",
"https://i.imgur.com/2juDRbx.jpg",
"https://i.imgur.com/eUMbIMd.jpg",
"https://i.imgur.com/M15umLu.jpg",
"https://i.imgur.com/dQPX7iZ.jpg",
"https://i.imgur.com/8dtvv1h.jpg",
"https://i.imgur.com/Rb48R1V.jpg",
"https://i.imgur.com/qSx5dNr.jpg",
"https://i.imgur.com/Wgt08MQ.jpg",
"https://i.imgur.com/Wb2sa6Y.jpg",
"https://i.imgur.com/F5clV1c.jpg",
"https://i.imgur.com/tsaCN3y.jpg",
"https://i.imgur.com/breM1US.jpg",
"https://i.imgur.com/STrILZM.jpg",
"https://i.imgur.com/ljZipwx.jpg",
"https://i.imgur.com/ijC4UdJ.jpg",
"https://i.imgur.com/VVRzSqm.jpg",
"https://i.imgur.com/39DxIXu.jpg",
"https://i.imgur.com/MKeyFuv.jpg",
"https://i.imgur.com/vPxUG27.jpg",
"https://i.imgur.com/eZpqRN3.jpg",
"https://i.imgur.com/V5PxVSX.jpg",
"https://i.imgur.com/zx51Yxu.jpg",
"https://i.imgur.com/dOvuVX4.jpg",
"https://i.imgur.com/0m23Vyp.jpg",
"https://i.imgur.com/NuGAWIV.jpg",
"https://i.imgur.com/PoneZiL.jpg",
"https://i.imgur.com/7veJpKa.jpg",
"https://i.imgur.com/XnAGQ6w.jpg",
"https://i.imgur.com/YciSux3.jpg",
"https://i.imgur.com/cOWyB7l.jpg",
"https://i.imgur.com/lQGvyB7.jpg",
"https://i.imgur.com/flALbva.jpg",
"https://i.imgur.com/emxPA07.jpg",
"https://i.imgur.com/VEb6Iow.jpg",
"https://i.imgur.com/g6c1iEh.jpg",
"https://i.imgur.com/8WCu1wg.jpg",
"https://i.imgur.com/gQeBmqo.jpg",
"https://i.imgur.com/dRZtdoT.jpg",
"https://i.imgur.com/9N1YvPm.jpg",
"https://i.imgur.com/mbMRgDa.jpg",
"https://i.imgur.com/Iy5rfoB.jpg",
"https://i.imgur.com/RnQpyZP.jpg",
"https://i.imgur.com/OYKwC1z.jpg",
"https://i.imgur.com/6A29Bb5.jpg",
"https://i.imgur.com/4TciU2K.jpg",
"https://i.imgur.com/iPXqZE7.jpg",
"https://i.imgur.com/oYOxQqF.jpg",
"https://i.imgur.com/AaSrDCd.jpg",
"https://i.imgur.com/yLgp982.jpg",
"https://i.imgur.com/Bv18irR.jpg",
"https://i.imgur.com/O1IJ689.jpg",
"https://i.imgur.com/lYSSJ5U.jpg",
"https://i.imgur.com/ZyjQ7tj.jpg",
"https://i.imgur.com/YRCeBwv.jpg",
"https://i.imgur.com/A56Pgaf.jpg",
"https://i.imgur.com/A3RGmKe.jpg",
"https://i.imgur.com/5IQn0vs.jpg",
"https://i.imgur.com/zPO00Tb.jpg",
"https://i.imgur.com/AVb7Blz.jpg",
"https://i.imgur.com/C2NuOLz.jpg",
"https://i.imgur.com/b4L7zmA.jpg",
"https://i.imgur.com/LJXxcNk.jpg",
"https://i.imgur.com/dPvdinx.jpg",
"https://i.imgur.com/hFfwQWc.jpg",
"https://i.imgur.com/I7Olrfj.jpg",
"https://i.imgur.com/Busylh5.jpg",
"https://i.imgur.com/qT1GtJ5.jpg",
"https://i.imgur.com/QzYUhTp.jpg",
"https://i.imgur.com/7kD1qBD.jpg",
"https://i.imgur.com/m8fEiSi.jpg",
"https://i.imgur.com/dEhIXbw.jpg",
"https://i.imgur.com/chkRzoq.jpg",
"https://i.imgur.com/3092KkN.jpg",
"https://i.imgur.com/32GRwZa.jpg",
"https://i.imgur.com/dSrTgRI.jpg",
"https://i.imgur.com/SOuBMT7.jpg",
"https://i.imgur.com/4XZn6xo.jpg",
"https://i.imgur.com/z66xWMd.jpg",
"https://i.imgur.com/QhOONW6.jpg",
"https://i.imgur.com/Rg0jywg.jpg",
"https://i.imgur.com/0pWLBaA.jpg",
"https://i.imgur.com/wdUwinz.jpg",
"https://i.imgur.com/n5PAbDH.jpg",
"https://i.imgur.com/8BuqqAT.jpg",
"https://i.imgur.com/VQknGCK.jpg",
"https://i.imgur.com/FR9u6al.jpg",
"https://i.imgur.com/1AVf5hJ.jpg",
"https://i.imgur.com/412Lyas.jpg",
"https://i.imgur.com/aB52XZM.jpg",
"https://i.imgur.com/cPyl5kp.jpg",
"https://i.imgur.com/QShbkI0.jpg",
"https://i.imgur.com/fuNtPdL.jpg",
"https://i.imgur.com/ZpSYS91.jpg",
"https://i.imgur.com/1DPxc2x.jpg",
"https://i.imgur.com/pb6DxOA.jpg",
"https://i.imgur.com/VMzJ5Wn.jpg",
"https://i.imgur.com/Z6gYsHZ.jpg",
"https://i.imgur.com/bNg11tr.jpg",
"https://i.imgur.com/ePKgDH5.jpg",
"https://i.imgur.com/hJRXfe4.jpg",
"https://i.imgur.com/Qkey4Su.jpg",
"https://i.imgur.com/B8rlnZJ.jpg",
"https://i.imgur.com/qhGifLm.jpg",
"https://i.imgur.com/ADUhdcr.jpg",
"https://i.imgur.com/NVfOVC2.jpg",
"https://i.imgur.com/YbmeC4j.jpg",
"https://i.imgur.com/LEEH9Eu.jpg",
"https://i.imgur.com/jMjWJjc.jpg",
"https://i.imgur.com/DfVsWdZ.jpg",
"https://i.imgur.com/eoMr6a0.jpg",
"https://i.imgur.com/W8b8vaS.jpg",
"https://i.imgur.com/t4UOH3b.jpg",
"https://i.imgur.com/oOH8J5J.jpg",
"https://i.imgur.com/rtako1P.jpg",
"https://i.imgur.com/hCAdsql.jpg",
"https://i.imgur.com/daReP3J.jpg",
"https://i.imgur.com/Kru6ChZ.jpg",
"https://i.imgur.com/d1z5Zxn.jpg",
"https://i.imgur.com/W4nCJqa.jpg",
"https://i.imgur.com/nzFnyPB.jpg",
"https://i.imgur.com/V6aSB5G.jpg",
"https://i.imgur.com/GFJ5osr.jpg",
"https://i.imgur.com/YO4YY4n.jpg",
"https://i.imgur.com/SHTY458.jpg",
"https://i.imgur.com/VjR369p.jpg",
"https://i.imgur.com/N3OntNr.jpg",
"https://i.imgur.com/QDd2DaE.jpg",
"https://i.imgur.com/hXy0yAT.jpg",
"https://i.imgur.com/b1ZtUz3.jpg"];
  

var numberofninjapics = randombatmanninjapic.length - 1;
var countninjabatman = Math.round(Math.random() * (numberofninjapics - 1) + 1)


 
const BATMANNINJAJOKER = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setFooter("© Batman Ninja 2018")
  .setImage(randombatmanninjapic[countninjabatman]);
  
  
   
  if (message.content.startsWith(prefix + "joker"))  {
    
       if (message.content.includes("batman ninja"))  {
       
        if (message.content.includes("number"))  {
            message.channel.sendMessage("The **Batman Ninja** category currently has **" + numberofninjapics + "** Joker pictures") }
        else message.channel.sendEmbed(BATMANNINJAJOKER) 
       }   
    else message.channel.sendEmbed(BATMANNINJAJOKER);
}


  

 if (message.content.startsWith(prefix + "clap"))  {
   var menos=message.cleanContent.replace("j!clap", "")
    var clappy= menos.toUpperCase().replace(/ /g," :clap: ")
message.channel.sendMessage(clappy + " :clap: ");
}


});







bot.login(process.env.BOT_TOKEN);
