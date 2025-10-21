
    // live clock
    const clockEl = document.getElementById('clock');
    function tick(){
      const now = new Date();
      const h = String(now.getHours()).padStart(2,'0');
      const m = String(now.getMinutes()).padStart(2,'0');
      const s = String(now.getSeconds()).padStart(2,'0');
      clockEl.textContent = `${h}:${m}:${s}`;
    }
    tick(); setInterval(tick, 1000);

    // toggles
    document.querySelectorAll('.toggle').forEach(t => {
      const key = t.dataset.key;
      const state = localStorage.getItem('toggle:'+key);
      if(state === 'on') t.classList.add('active');
      t.addEventListener('click', () => {
        t.classList.toggle('active');
        localStorage.setItem('toggle:'+key, t.classList.contains('active') ? 'on' : 'off');
      });
    });

    // bottom tabs interactivity (demo only)
    document.querySelectorAll('.bottom .tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.bottom .tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    // ambient particles in hero
    const center = document.querySelector('.center');
    function addParticles(){
      for(let i=0;i<80;i++){
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random()*100 + '%';
        p.style.bottom = Math.random()*40 + 'px';
        p.style.animationDuration = (5 + Math.random()*10) + 's';
        center.appendChild(p);
        setTimeout(()=>p.remove(), 15000);
      }
    }
    document.addEventListener("DOMContentLoaded", () => {
  const musicToggle = document.querySelector('.toggle[data-key="music"]');
  const bgMusic = document.getElementById("bg-music");

  if (!musicToggle || !bgMusic) {
    console.error("Music toggle or audio element not found!");
    return;
  }

  bgMusic.volume = 0.5;
  let isMusicOn = false;

  musicToggle.addEventListener("click", () => {
    if (isMusicOn) {
      bgMusic.pause();
      musicToggle.classList.remove("active"); // remove glow
    } else {
      bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
      musicToggle.classList.add("active"); // add glow
    }
    isMusicOn = !isMusicOn;
  });
});

