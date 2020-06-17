// where you import your packages
const mpvAPI = require('node-mpv');
// where you want to initialise the API
const mpv = new mpvAPI(
  {
    binary: 'C:\\Users\\Chris\\source\\repos\\Cinema-Control-App\\MPV\\mpv.exe'
  },[
    "--no-config",
    "--load-scripts=no"
  ]
);
// Binary options:
// C:\\Program Files\\MPV\\mpv.exe
// C:\\Users\\Chris\\source\\repos\\Cinema-Control-App\\MPV\\mpv.exe
(async () => {
  await (async () => {
    // somewhere within an async context
    // starts MPV
    try{
      await mpv.start()
      // loads a file
      await mpv.load('W:\\Movies\\First Man (2018)\\First Man.mkv');
      // file is playing
      // sets volume to 70%
      await mpv.volume(70);
    }
    catch (error) {
      // handle errors here
      console.log('test');
      console.log(error);
    }
    throw 'hi';
  })();
})();
console.log('func done')