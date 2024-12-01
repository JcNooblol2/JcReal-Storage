let express = require("express");let app = express(); app.listen(3000); console.log('up')
let rss = require("rss-parser");
let axios = require("axios").default
const SpotifyWebApi = require('spotify-web-api-node');
const { v4: uuidv4 } = require('uuid');
let mongoose = require("mongoose")
let Discord = require("discord.js");
 let client = new  Discord.Client(); client.login("MTI4OTkzODkzMDA0ODgyNzUxNQ.GwJ0dI.xWB_TVCaif7i00Ryao7GJuiOh4OAlo2ZMaMnX0").then(() => {console.log("spotify api discord edition currently working")})
let prorss = new rss()
let canvacord = require("canvacord")
let {GoogleGenerativeAI} = require("@google/generative-ai")
let cors = require("cors")
//allowed  any website to run ma real api 
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const spotifyApi = new SpotifyWebApi({
    clientId: '2b170e273c12401b865907ab8da2e313',
    clientSecret: '11d610998ec348e5b164e3906f695030',
    redirectUri: 'https://api.jcmainclr.lol/spotify/v3/callback'
  });
   client.on("ready",() => {
    const guild = client.guilds.cache.get("1289938609813848145");
    const allMembers = guild.members.cache.filter((m) => !m.user.bot).size;
    client.user.setPresence({

       status: "dnd",
       activity:{
        name: `Watching ${allMembers} listening on spotify -help` 
       }
      
    })
   })
app.use(express.json());
let path = require("path")
app.get("/",(req,res) => {
 res.send(`<head>
 <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JcBlak</title>
    <link rel="stylesheet" href="https://files.jcmainclr.lol/scripts/loader.css">
    </head>
    <script src="https://files.jcmainclr.lol/scripts/loader.js" defer></script>
    <body>
    <br><BR> <br> 
    <section class="card">
      <img src="https://files.jcmainclr.lol/uploads/main.png" >
      <p>Hello uh this site is just a development or making some test stuff yeah</p>
      <a href="/api">Api</a> 
        <a href="/v/upload">v-fucker dc assets uploader</a> 
    </section>
    <section class="hiddenv2">
     <h2>NOTIF: Soon Fixing stuff</h2>
    </section>
    </body>
    <style>
    
    body {
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    font-size: 30px;
    background-color: #111;
    color: #333;
    }
    section {
    color: #FFF;
    border: 3px solid #fff;
    padding: 20px;
    text-align: center;
    }
    .hidden{
    opacity: 0;
    transition: all 1s;
    filter: blur(10px);
    transform: translateY(-100%);
    }
    .show{
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    }
    a{
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    transition: ease-in 0.3s;
    }
    a:hover{color: cornflowerblue;}
    </style>`)
})
///ads 
app.get('/reg_ads',(req,res) => {
  res.send("soon")
})

//ads api

app.get("/api/v3/ads",(req,res) => {
  res.json({content: 'soon.'})
})
app.get("/api/v1/christmas-countdown",(req,res) => {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);  
  if (today.getMonth() == 11 && today.getDate() > 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
  }
  const diffTime = Math.abs(christmas - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  res.json({days: diffDays})
})
app.get("/api/v1/yt_latestpost",async(req,res) => {
    try{
    let id = req.query.id;
    let data = await prorss.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${id}&gl=RU`).catch(console.error)
      res.json({id: data.items[0].id})
    }catch(e){
        res.status(404).json({msg: 'not found to find the youtube id: https://commentpicker.com/youtube-channel-id.php (soon ima make my own api for dis rel)'})
        console.error(e)
   

    }
})
  app.get("/loptop-specs",(req,res) => {

    res.send(`
    <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Loptop specs 💀</title>
       <script src="https://kit.fontawesome.com/1dba893193.js" crossorigin="anonymous"></script>
   </head>
   
   <body>
       <section class="hidden">
          <h1>My Loptop specs:  </h1>
          <h1>Main</h1>
          <img src="https://jc-blakman-rel.oki2.repl.co/wp-content/2023/all_files/IMG20231008093710.jpg" width="400">
          <p> <i class="fa-solid fa-laptop fa-fade"></i>System Model: Aspire A514-53</p>
          <p><i class="fa-solid fa-microchip fa-fade"></i> CPU: Intel(R) Core(Tm) i3-100G1 CPU @ 1.20GHz,1190 Mhz,2Core(s)</p>
           <p><i class="fa-solid fa-memory fa-fade"></i></i> RAM: 4GB (Upgrading 8gb Soon <img src='https://jc-blakman-rel.oki2.repl.co/wp-content/2023/all_files/ok.png' width="20">)</p>
           <p><i class="fa-solid fa-hard-drive"></i> Storage: 1TB HHD  128 SSD</p>
           <p><i class="fa-solid fa-tv fa-flip"></i> Screen: 60HZ</p>
       </section>
       <section class="hidden">
           <h1>real hard drive shot</h1>
           <img src="https://jc-blakman-rel.oki2.repl.co/wp-content/2023/all_files/IMG20231011100628.jpg" width="500">
           </section>
   </body>
   <script>
       let oberv = new IntersectionObserver((entires) => {
           entires.forEach((entry) => {
               if(entry.isIntersecting){
                   entry.target.classList.add('show');
               }else{
                   entry.target.classList.remove('show')
               }
           })
       })
       let hidden = document.querySelectorAll('.hidden')
       hidden.forEach((el) =>  oberv.observe(el))
   </script>
   <style>
   body{
       background-color: #131316;
       color: #fff;
       font-family: 'Roboto',sans-serif;
       padding: 0;
       margin: 0;
   }
   section{
       display: grid;
       place-items: center;
       align-items: center;
       min-height: 100vh;
   }
   .hidden{
       opacity: 0;
      transition: all 5s;
      filter: blur(5px);
      transform:  translateY(-100%)
   }
   .show{
       opacity: 1;
       filter: blur(0);
       transform: translateY(0);
   }
   </style>
   
    `)
   })
app.get('/api',(req,res) => {
  res.send(`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://files.jcmainclr.lol/scripts/loader.css">
<title>JcBlak - Api page</title>
</head>
<body>
    <div class="hiddenv2">
        <h1>Api Page </h1>
        <a href="/api/v2/gapi?c=hello" class="api">Google Gemini Api</a><br>
         <a href="/api/v2/yt_mp4?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBhc3RsZXk%3D" class="api">Youtube Downloader</a><br>
        <a href="/spotify"  class="lol">Spotify (working the token)</a><br>
        <a href="/api/v3/robloxpfp_info?id=1" >Roblox Search Api</a><br>
        <a href="/api/v1/yt_latestpost?id=2qy0B_JPx5g">Youtube latest video list api</a><br>
         <a href="/api/v3/discord_spotify?id=1237396673098027029">Spotify Discord Activity</a>
         <br>
           <a href='/api/v1/christmas/countdown'>Christmas Countdown</a>
         <h1>Special Api</h1>
          <br>
           <a href="/api/sepcial/v1/ph_news">Philipines Api news</a>
          <br>
        

    </div>
</body>
<style>
    body{background-color: #111; color: #fff; font-family: 'Ubantu',sans-serif; font-size: 30px;}
    .hiddenv2{align-items: center;text-align: center;  }
    a{color: cornflowerblue; text-decoration: none;} a:hover{color: blueviolet;}
    a.lol {
  pointer-events: none;
  cursor: default;
}
  
 
</style>
<script src="https://files.jcmainclr.lol/scripts/loader.js" defer></script>`)
})
app.get("/api/v2/gapi",async(req,res) => {
    let MODEL = 'gemini-pro';
let api_key = 'AIzaSyB92vVZnIFe1DHEH0WoBi0vSEpH4b75huY'
let g_ch = '1210584579430158376';
let ai= new GoogleGenerativeAI(api_key);
let model  = ai.getGenerativeModel({model: MODEL});
   let c = req.query.c
  try{
  //the cooking stuff 🔥
   let  respones  =  await model.generateContentStream(c)
 res.json ({res: ((await respones.response).text())})
  }catch(e){
    console.log(e)
  }
})
 

     app.get("/api/v5/ipon_status",(req,res) => {
        res.json({
            main: `
              IPON STATUS NI KYL:
              null
            
            `


        })
     })
     // Define a schema for the tokens
const tokenSchema = new mongoose.Schema({
    tokenId: String,
    accessToken: String,
    refreshToken: String,
  });
  app.get("/spotify",(req,res) => {
    res.send(`
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://files.jcmainclr.lol/scripts/loader.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <title>hi</title>
  </head>
  <script src="https://files.jcmainclr.lol/scripts/loader.js" defer></script>
  <body>
    <br><br>    <br><br>    <br><br>    <br><br>    <br><br>    <br><br>    <br><br>
    <div  class="card">
        <h1>Spotify Sound Tracker</h1>
        <a class="spo" href="/spotify/v3/login">LOGIN IN TO SPOTIFY</a>
    </div>
  </body>
  <style>
    body{background-color: #111; color: #fff; font-family: 'Roboto',sans-serif;}
    .card{
       
        border-radius: 5px;
         
        text-align: center;
        align-items: center;
    }
    .spo{
        font-size: 30px;
        background-color: rgb(29, 185, 84);
        color: #FFF;
        letter-spacing: 2px;
        border-radius: 30px;
        padding: 17px 35px;
        padding: 17px 35px;
    margin: 20px 0px 70px;
    min-width: 160px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    }
  </style>
    `)
  })
  // Create a Mongoose model based on the schema
  const Token = mongoose.model('Token', tokenSchema);
  
  mongoose.connect("mongodb+srv://cool_data:james123@discord-bot-real.7xbja.mongodb.net/jac-db")
  
  // Start the server
   
  app.get('/spotify/v3/login', (req, res) => {
    const authorizeURL = spotifyApi.createAuthorizeURL(['user-read-currently-playing'], 'state');
    res.redirect(authorizeURL);
  });
  app.get('/spotify/v3/callback', async (req, res) => {
    const { code } = req.query;
    try {
      const data = await spotifyApi.authorizationCodeGrant(code);
      const accessToken = data.body['access_token'];
      const refreshToken = data.body['refresh_token'];
  
      // Generate a new UUID as the token ID
      const tokenId = uuidv4();
  
      // Store tokens in MongoDB
      const token = new Token({ tokenId, accessToken, refreshToken });
      await token.save();
  
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.setRefreshToken(refreshToken);
      res.redirect('/api/v3/track');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/api/v3/track', async (req, res) => {
    try {
      const token = await Token.findOne();
  
      if (!token) {
        throw new Error('Access token or refresh token not found');
      }
  
      const { accessToken, refreshToken, expiresAt } = token;
  
      // Set access token and refresh token on the Spotify API object
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.setRefreshToken(refreshToken);
  
      const now = Math.floor(Date.now() / 1000);
      if (now >= expiresAt) {
        // Token has expired, refresh it
        const data = await spotifyApi.refreshAccessToken();
        const newAccessToken = data.body['access_token'];
        const expiresIn = data.body['expires_in'];
        const newExpiresAt = now + expiresIn;
  
        // Update the access token and expiration time in the database
        await Token.updateOne({}, { accessToken: newAccessToken, expiresAt: newExpiresAt });
  
        // Set the new access token and expiration time on the Spotify API object
        spotifyApi.setAccessToken(newAccessToken);
        spotifyApi.setAccessTokenExpirationTime(newExpiresAt);
      }
  
      // Get the currently playing track
      const response = await spotifyApi.getMyCurrentPlayingTrack();
      const { name, artists, album } = response.body.item;
      const image = album.images.length > 0 ? album.images[0].url : null;
      res.json({
        name,
        artist: artists.map(artist => artist.name).join(', '),
        album: album.name,
        image,
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get("/spo/v1/display",async(req,res) => {
    res.sendfile(path.join(__dirname,'./spo.html'))
  })


  //roblox api more stuff soon ye i thin
  app.get("/api/v3/robloxpfp_info",async(req,res) => {
    try{
    let id = req.query.id
    let friends =   await  axios.get(`https://friends.roblox.com/v1/users/${id}/friends/count`);
     let avatar =  await axios.get(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${id}&size=420x420&format=Png&isCircular=false`)
     let user_info = await axios.get(`https://users.roblox.com/v1/users/${id}`)
     let followings = await axios.get(`https://friends.roblox.com/v1/users/${id}/followings/count`)
     let followers = await axios.get(`https://friends.roblox.com/v1/users/${id}/followers/count`)
     res.json({
      username: user_info.data.name,
      displayname: user_info.data.displayName,
      description: user_info.data.description,
      account_create: user_info.data.created,
      user_ban: user_info.data.isBanned,
      verify_badge: user_info.data.hasVerifiedBadgem,
      friend_count: friends.data.count,
      followings: followings.data.count,
      follwers: followers.data.count,
      avatar: avatar.data.data[0].imageUrl
    })
  }catch(e){
    console.log(e)
    res.send(`i thin yu didnt put the id or invalid roblox player id <br><br> ERROR: ${e} `)
  }
  })

//spotify api discord edition
 app.get("/api/v3/discord_spotify",async(req,res) => {
    let id = req.query.id;
    if(!id) return res.status(400).json({error:"i need da user id more information at: go.jcmainclr.lol/discord-id"});
    const guild = client.guilds.cache.get("1289938609813848145")
    if(!guild) return res.status(400).json({error:"server nut found report bug: go.jcmainclr.lol/bug-report-spotify"});
    let member;
  try {  
    member = await guild.members.fetch(id);} catch (error) { return res.status(404).send("user is nut on da server (invite link: (go.jcmainclr.lol/spotify-inv)).");}
    let status = null;
  if (member.presence.activities.length > 0) {
      status = member.presence.activities[0];  
      if (member.presence.activities.length > 1) {
        status = member.presence.activities[1];
    }
}
if (!status || (status.name !== "Spotify" && status.type !== "LISTENING")) {return res.send(`${member.user.username} nut listening to spotify `);}
if (status && status.name === "Spotify" && status.assets) {
    const imageUrl = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`;
    const title = status.details;
    let album = status.assets.largeText;
    let artist = status.state;
    return res.send({
         title,
        url_track: imageUrl,
        album: album,
        artist: artist,
        starttimestamps:status.timestamps,
        endtimestamps: status.timestamps.end
    });
} else {
    return res.send(`${member.user.username} spotify not detected (maybe your spotify app is not open)`);
}

})

 

app.get("/api/v3/discord_spotify_img", async (req, res) => {
  let id = req.query.id;
  if (!id) return res.status(400).json({ error: "i ned da usir id at: go.jcmainclr.lol/discord-id" });
  

  const guild = client.guilds.cache.get("1289938609813848145");
  if (!guild)  return res.status(400).json({ error: " server nut fund Report bug: go.jcmainclr.lol/bug-report-spotify" });

  let member;
  try {
      member = await guild.members.fetch(id);
  } catch (error) {
      return res.status(404).send(" user nut on serber (invite link: go.jcmainclr.lol/spotify-inv).");
  }

  const activities = member.presence.activities;
  if (!activities || activities.length === 0) {
      return res.send(`${member.user.username} is not listening to Spotify.`);
  }

  // Find the Spotify activity
  const spotifyActivity = activities.find(activity => activity.name === "Spotify" && activity.type === "LISTENING");

  if (spotifyActivity && spotifyActivity.assets) {
      const imageUrl = `https://i.scdn.co/image/${spotifyActivity.assets.largeImage.slice(8)}`;
      const trackName = spotifyActivity.details;
      const album = spotifyActivity.assets.largeText;
      const artist = spotifyActivity.state;

      const cord = await new canvacord.Spotify()
          .setTitle(trackName)
          .setAuthor(artist)
          .setAlbum(album)
          .setStartTimestamp(spotifyActivity.timestamps.start)
          .setEndTimestamp(spotifyActivity.timestamps.end)
          .setBackground("COLOR", '#fcba03')
          .setImage(imageUrl);

      const lol = await cord.build();
      const attachment = new Discord.MessageAttachment(lol, 'nowplaying.png');
      const channel = client.channels.cache.get('1290317275341000747');

      channel.send(attachment).then(async (rel) => {
          const fileURL = rel.attachments.first().url;
          await channel.send(`Music By: ${member.user.username}`);
          res.send(`<img src="${fileURL}">`);
      });

  } else {
      return res.send(`${member.user.username} Spotify not detected (maybe your Spotify app is not open).`);
  }
});
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.post("/api/v2/discord-assets",async(req,res) => {
  // Ensure the request includes the file
  if (!req.files || !req.files.file) {
    return res.status(400).send('No file uploaded.');
  }
  const file = req.files.file;
  // Find the Discord channel where you want to send the file
  const channel = client.channels.cache.get('1291256111676133458');
  if (!channel) return res.status(404).send('databas nat found');
  
  const attachment = new Discord.MessageAttachment(file.data,file.name);

  channel.send(attachment)
    .then((rel) => {
      const fileURL = rel.attachments.first().url;
      res.status(200).send(`
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Done!</title> 
        </head>
        <body>
          <h2>
            <a href="${fileURL}" target="_blank">Click me to get your file link</a>
          </h2>
          <h2>Link: ${fileURL}</h2>
        </body>
        <style>
          body {
            background-color: #000;
            color: #fff;
            font-family: 'Roboto', sans-serif;
          }
          h2 {
            font-size: 30px;
          }
          a {
            color: aliceblue;
            transition: ease-in 0.3s;
          }
          a:hover {
            color: darkgoldenrod;
          }
        </style>
      `);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while sending the file.');
    });
});
app.get("/api/sepcial/v1/ph_news",(req,res) => {
  axios.get("https://api.mediastack.com/v1/news?access_key=4c6d631d129fba2c11dee7787a647564&countries=ph").then((a) =>{
    res.send(a.data.data)
   })
})
app.get("/v/upload",(req,res) => {
  res.send(`
     <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>uploader fucker v2</title> 
        </head>
    <body>
<h1>file uploader fucker discord api pro shit ahh </h1>
<form action="/api/v2/discord-assets" method="POST" enctype="multipart/form-data">
  <input style="font-size: 30px; border: none; border-radius: 5px; "  type="file" name="file" required><br><br>
  <button class="btn" type="submit">Upload</button>
</form>
</body>
<style>
#button{color:#fff; background:#000; border:3px solid #fff;}
input#file-upload-button:{color:#fff; background:#000; border:3px solid #fff;}
body{
background:#000;
color:#fff;
   font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
  }
}
    `)
})
 

///api downloader 

app.get("/api/v2/yt_mp4",async (req,res) => {
  let url = req.query.url;
    let lol = ytdown(url)
   console.log(lol)
})
app.get("/api/v1/christmas/countdown",async(req,res) => {
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25); // December 25th
  if (today.getMonth() == 11 && today.getDate() > 25) {
      // If it's after Christmas this year, countdown for next year's Christmas
      christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const diffTime = Math.abs(christmas - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
     res.json({

      days: diffDays
     })
})
  //end cause 404 pag dai niga 
app.get("*",(req,res) => {
    res.send(`
<head>
<title>404 nut fund 💀</title>
<meta property="og:image" content="https://files.jcmainclr.lol/uploads/gamers.gif"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://files.jcmainclr.lol/scripts/loader.css">

</head>
<div class='hiddenv2'>
<h1>404 page not found ${req.url}<br><br></h1>
</div>
<div class="hiddenv2">

<h1>blake-kyle</h1>  <br>
<img src='https://files.jcmainclr.lol/uploads/wat.PNG' width='400'><br>
<p>redirect on home page in 3 seconds if doent work <a href='/'>home page </a> </p>

<script>
window.setTimeout(function(){


window.location.href = "/";

}, 5000);
</script>
<h1>sorry im listening to <img src='https://spotify-github-profile.kittinanx.com/api/view.svg?uid=odul82kwgnci0steg1h0nftsz&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' width='400'> -dev</h1>
</div>
<style>
body{
background:#111;
color:#FFF;
font-family: 'Roboto',sans-serif;
}
a{
font-size: 20px;
}
p{
font-size: 20px;
}
</style>

<script src="https://files.jcmainclr.lol/scripts/loader.js"></script>
    `,404)
})

app.get("*",(req,res) => {
  res.send(`
     <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>502 Errur</title>
</head>
<body>
    <div class="main">
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <h1>hi</h1>
        <p>dis websit is currently on maintenance or changing stuff on the api</p>
        <p>Status websiite: <a href='https://go.jcmainclr.lol/status-stuff'>Status</a></p>
        <p>Error site status: 502 Bad Gateway</p>
    <h1>Pawir by:  
            <a href="https://render.com/">
        <svg fill="currentColor" class="logo-render" aria-label="Render" width="69" height="13" viewBox="0 0 69 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.7321 2.14129C25.9243 2.14129 27.3494 3.3794 27.3494 5.36795C27.3494 6.82386 26.5113 7.90573 25.1975 8.36736L27.7731 12.7658H25.8627L23.4599 8.59225H20.8062V12.7658H19.1609V2.14129H23.7321ZM20.8038 3.62087V7.12924H23.654C24.9608 7.12924 25.6354 6.40011 25.6354 5.36795C25.6354 4.31213 24.9631 3.62087 23.654 3.62087H20.8038Z"/>
        <path d="M31.9585 5.09334C34.1506 5.09334 35.5757 6.72206 35.5757 8.73429C35.5757 8.96866 35.5592 9.21249 35.5142 9.45396H29.6812C29.7522 10.5808 30.7157 11.4662 32.0153 11.4662C32.9551 11.4662 33.7056 11.0661 34.269 10.1831L35.4124 11.014C34.7164 12.2663 33.3457 12.9245 32.0153 12.9245C29.7451 12.9245 28.0761 11.2484 28.0761 9.01837C28.0761 6.77651 29.6812 5.09334 31.9585 5.09334ZM34.0015 8.29397C33.9068 7.23814 33.0238 6.49243 31.9419 6.49243C30.7914 6.49243 29.9132 7.23577 29.719 8.29397H34.0015Z"/>
        <path d="M37.015 12.7658V5.24959H38.5727V6.19652C38.8237 5.81301 39.5362 5.09334 40.8832 5.09334C42.9499 5.09334 44.0388 6.37643 44.0388 8.20164V12.7658H42.4882V8.5307C42.4882 7.28549 41.8065 6.56582 40.6394 6.56582C39.496 6.56582 38.5656 7.28549 38.5656 8.5307V12.7658H37.015Z"/>
        <path d="M49.0906 5.09334C50.3666 5.09334 51.2117 5.56207 51.768 6.27464V1.74121H53.3186V12.7658H51.768V11.7408C51.2117 12.4534 50.3666 12.9221 49.0906 12.9221C46.953 12.9221 45.3172 11.2768 45.3172 8.96866C45.3172 6.65815 46.953 5.09334 49.0906 5.09334ZM46.8654 8.96866C46.8654 10.3535 47.8289 11.5277 49.2776 11.5277C50.7264 11.5277 51.7586 10.3535 51.7586 8.96866C51.7586 7.58377 50.717 6.4877 49.2776 6.4877C47.8289 6.48533 46.8654 7.5814 46.8654 8.96866Z"/>
        <path d="M58.5148 5.09334C60.707 5.09334 62.1321 6.72206 62.1321 8.73429C62.1321 8.96866 62.1155 9.21249 62.0705 9.45396H56.2375C56.3085 10.5808 57.272 11.4662 58.5717 11.4662C59.5115 11.4662 60.2619 11.0661 60.8253 10.1831L61.9687 11.014C61.2727 12.2663 59.9021 12.9245 58.5717 12.9245C56.3014 12.9245 54.6325 11.2484 54.6325 9.01837C54.6301 6.77651 56.2351 5.09334 58.5148 5.09334ZM60.5578 8.29397C60.4631 7.23814 59.5801 6.49243 58.4983 6.49243C57.3478 6.49243 56.4695 7.23577 56.2754 8.29397H60.5578Z"/>
        <path d="M63.6306 12.7658V5.24959H65.1883V6.27464C65.612 5.45318 66.3246 5.09334 67.146 5.09334C67.7331 5.09334 68.1805 5.28036 68.1805 5.28036L68.0172 6.70549C67.9319 6.67472 67.5934 6.53268 67.101 6.53268C66.2701 6.53268 65.1906 6.97063 65.1906 8.67037V12.7658H63.6306Z"/>
        <path d="M9.72722 0.0036066C8.06065 -0.0745152 6.65921 1.12572 6.42011 2.70709C6.41064 2.78048 6.39644 2.8515 6.3846 2.92252C6.01293 4.89213 4.28244 6.38355 2.20395 6.38355C1.46299 6.38355 0.767004 6.19416 0.160976 5.86274C0.0875901 5.82249 0 5.87457 0 5.95743V6.38118V12.7659H6.38223V7.97913C6.38223 7.09848 7.09716 6.38355 7.97779 6.38355H9.57335C11.3796 6.38355 12.8331 4.88503 12.7621 3.06219C12.6982 1.42163 11.3678 0.0817284 9.72722 0.0036066Z"/>
        </a>
    </svg></h1> <p>capirigh bai: © 2024 JcnigaCorp</p>
    </div>
</body>
</html>
<style>
    *{background-color: #000; color: #fff; font-family: 'Roboto',sans-serif; }
    .main{align-items: center;text-align: center;}
    a{color:mediumvioletred; text-decoration: none;} a:hover{color: coralx;}
</style>
    
    `,502)
}) 