// Чи вони однакові ?

function loadScript(src) {
    return new Promise((resolve, reject) => {
      /* let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => {
        console.log(`${src} loaded`);
        resolve(script)
      };
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
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