(() => {
  const code = "arrowup arrowup arrowdown arrowdown arrowleft arrowright arrowleft arrowright b a";
  const n = code.split(" ").length;
  let keys = [];

  document.addEventListener("keydown", (e) => {
    keys = [...keys, e.key.toLowerCase()].slice(-n);
    if (keys.join(" ") === code) {
      keys = [];
      // code to run after the Konami code goes here
    }
  });
})();
