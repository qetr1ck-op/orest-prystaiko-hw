function loadScript(src) {
  return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.src = src;

      script.onload = () => {
          console.log(`${src} loaded`);
          resolve(script);
      };
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
<<<<<<< HEAD

      document.head.append(script);
  });
}

loadScript("test1.js")
  .then(() => loadScript("test2.js"))
  .then(() => loadScript("test3.js"))
  .then(() => {
      console.log('All scripts loaded successfully');
  })
  .catch(error => console.error(error));

=======
  
      document.head.append(script); */
      setTimeout(() => {
        console.log(`emulate ${src} loading...`);
        resolve(src);
      }, 1000)
    });
  }
  
  loadScript("/article/promise-chaining/one.js")
    .then( (src) => {
      console.log(`emulate ${src} loaded!`);
      loadScript("/article/promise-chaining/two.js")
    })
    .then( () => loadScript("/article/promise-chaining/three.js"))
    .then( () => {
      console.log('Hello learning async');
    })
    .catch(error => console.error(error));




//sdadwdawdawdawdawd
>>>>>>> 64740361d2348b04899f6eff9a84cc71b3c11271
