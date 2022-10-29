module.exports = {
    PREFIX: "+", //prefix for the bot here
    owner: {
      id: "YOUR ID",  //put your owner Id in here so you can bypass cooldown for the generator commands and use the nitrogen command
      username: "username#4982"
    },

    channels: {
      generator: '', //ID of the generator channel
      nitro: '', //ID of the nitro generator channel
      twitch: '' //ID of the Twitch follows channel
    },

    links: {
      HandlerInvite: 'https://discord.com/api/oauth2/authorize?client_id=890940507902062642&permissions=8&scope=bot',
      website: 'https://github.com/french-dev',
      GenIcon: '' //G.I.F icon for the generator embed here
    },

    colors: {               //keep these colors like this too make it look clean but feel free to change if  you feel like it
      Default: '#18191c',
      Red: '#ff0000', 
      Yellow: '#daff00',  
      Orange: '#ff8400',
      Green: '#71fd71',
      LightGreen: '#5ac18e'
    },

    emojis: {
      success: '', //Emoji when succeding
      error: '', //Emoji when wrong
      loading: '', //Emoji when loading
      arrow: '', //Arrow Emoji
      pingpong: '', //Pingpong racket Emoji

      Generator: '', //Generator emoji for !help embed
      Twitch: '', //Twitch emoji for !help embed
      Other: '', //Other emoji for !help embed
      Nitro: '', //Nitro emoji for !help embed

    },

    Token:{
      Discord: 'TOKEN',
    },

    blacklistedUsers:{
      ID: ['ID', 'ID2', 'ID3'] //Blacklist any users from the bot by putting their Id's in here
    }                          //Just copy the pattern if you want to blacklist more people
  }