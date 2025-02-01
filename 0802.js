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

