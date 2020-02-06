var mypromise = new Promise( (resolve, reject) => {
  resolve("my promise");
})

mypromise
  .then(()=>{},(result) => {console.log(result)})