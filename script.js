onload = () => {
  const music = document.getElementById("bgmusic");

  // start animation
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // unmute & play music AFTER animation starts
    music.muted = false;
    music.volume = 0.7;
    music.play().catch(() => {
      console.log("Autoplay blocked until user interaction");
    });

    clearTimeout(c);
  }, 1000);
};
