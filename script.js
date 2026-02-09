const heart = document.getElementById("startHeart");
const intro = document.getElementById("intro");
const world = document.getElementById("world");
const tree = document.querySelector(".tree");
const counter = document.getElementById("time");
const leavesContainer = document.querySelector(".leaves");

let startDate = new Date(2024, 4, 17);

// CLICK SUL CUORE
heart.addEventListener("click", () => {
    // dissolve intro
    intro.style.transition = "opacity 1s ease";
    intro.style.opacity = 0;
  
    setTimeout(() => {
      intro.style.display = "none";
      world.classList.add("active");
      tree.style.opacity = 1;
  
      // tronco
      const trunk = document.querySelector(".trunk");
      setTimeout(() => {
      trunk.style.transition = "height 2.5s ease-out";
      trunk.style.height = "280px";
      trunk.style.opacity = 1;
      }, 1500);
  
      // rami dopo 2.5s
      const branches = document.querySelector(".branches");
      setTimeout(() => {
        branches.style.transition = "opacity 2s ease-out";
        branches.style.opacity = 1;
      }, 2500);
  
      // chioma dopo 4.5s
      const leaves = document.querySelector(".leaves");
      setTimeout(() => {
        leaves.style.transition = "opacity 2s ease-out";
        leaves.style.opacity = 1;
        growLeaves(); // genera foglie dinamiche
      }, 2500);
  
      startCounter();
  
    }, 1000);
  });
  

// TIMER
function startCounter() {
  setInterval(() => {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);

    const seconds = diff % 60;
    diff = Math.floor(diff / 60);

    const minutes = diff % 60;
    diff = Math.floor(diff / 60);

    const hours = diff % 24;
    diff = Math.floor(diff / 24);

    const days = diff % 30;
    const months = Math.floor(diff / 30);

    counter.textContent =
      `${months} mesi · ${days} giorni · ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

// FOGLIE
function growLeaves() {
  const leafInterval = setInterval(createLeaf, 120);
  setTimeout(() => clearInterval(leafInterval), 8000);
}

// CREAZIONE FOGLIE
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  const centerX = 130;
  const centerY = 110;

  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() ** 0.6 * 100;

  const x = centerX + Math.cos(angle) * radius;
  const y = centerY + Math.sin(angle) * radius;

  const size = 14 + Math.random() * 10;
  leaf.style.width = `${size}px`;
  leaf.style.height = `${size}px`;

  const colors = ["#ff6b81", "#ff9ff3", "#e84393"];
  leaf.style.background = colors[Math.floor(Math.random() * colors.length)];

  leaf.style.left = `${x}px`;
  leaf.style.top = `${y}px`;

  leavesContainer.appendChild(leaf);
}
