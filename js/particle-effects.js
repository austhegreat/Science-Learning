// High-Performance Ambient Particle Canvas & Visual FX Engine
// Powers interactive glowing particles, chemical synthesis sparks, and nuclear physics visuals

const VisualFx = {
  // Ambient background canvas
  initHeroCanvas: function(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Particle constructor
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? 'rgba(16, 185, 129, ' : 'rgba(56, 189, 248, ';
        this.alpha = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.fill();
      }
    }

    const count = Math.min(width > 768 ? 45 : 20, 60);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nearby particles with subtle glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  },

  // Confetti celebration effect on achievement unlock
  triggerConfetti: function() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);

    const colors = ['#10b981', '#38bdf8', '#f59e0b', '#8b5cf6', '#ec4899', '#f43f5e'];
    for (let i = 0; i < 75; i++) {
      const piece = document.createElement('div');
      piece.style.position = 'absolute';
      piece.style.width = `${Math.random() * 8 + 6}px`;
      piece.style.height = `${Math.random() * 14 + 8}px`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.top = '-20px';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.opacity = '1';
      piece.style.borderRadius = '3px';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      piece.style.transition = `transform ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 1, 0.5, 1), top ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease 1.5s`;
      container.appendChild(piece);

      setTimeout(() => {
        piece.style.top = `${Math.random() * 80 + 20}vh`;
        piece.style.transform = `rotate(${Math.random() * 720}deg) scale(${Math.random() * 0.5 + 0.5})`;
        piece.style.opacity = '0';
      }, 50);
    }

    setTimeout(() => {
      container.remove();
    }, 3000);
  },

  // Achievement Toast Notification
  showAchievementToast: function(title, description, icon = '🏆') {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-white p-4 rounded-2xl border border-emerald-500 shadow-2xl flex items-center gap-3.5 animate-bounce-in max-w-sm';
    toast.innerHTML = `
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/30 flex-shrink-0">
        ${icon}
      </div>
      <div>
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">Achievement Unlocked!</div>
        <div class="text-sm font-black text-slate-100">${title}</div>
        <div class="text-xs text-slate-400 leading-tight mt-0.5">${description}</div>
      </div>
    `;
    document.body.appendChild(toast);
    
    // Play celebratory chime
    if (window.ScienceGamesEngine) {
      window.ScienceGamesEngine.playSfx('fanfare');
    }

    setTimeout(() => {
      toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 500);
    }, 4500);
  }
};

if (typeof window !== 'undefined') {
  window.VisualFx = VisualFx;
}
