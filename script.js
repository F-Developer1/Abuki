document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".flip-card");
  
    // Flip the card on click
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  
    // Falling emojis
    const emojis = ["🎂", "🎉", "🎁", "🎈", "🍰"];
    setInterval(() => {
      const emoji = document.createElement("div");
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.classList.add("emoji");
      emoji.style.left = `${Math.random() * 100}vw`;
      emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(emoji);
  
      // Remove emoji after animation
      emoji.addEventListener("animationend", () => {
        emoji.remove();
      });
    }, 300);
  });
  
