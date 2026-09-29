const MAP_URL = "https://maps.app.goo.gl/AGxH7QYEtcCYokZC6";

function shareInvitation() {
  const shareData = {
    title: "Invitation VIP — Lina Siline",
    text: "دعوة خاصة VIP — Lina Siline",
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      showToast("تم نسخ رابط الدعوة");
    }).catch(() => {
      showToast("انسخي رابط الصفحة من شريط المتصفح");
    });
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

const particles = document.getElementById("particles");

function createParticle() {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.bottom = (-10 - Math.random() * 20) + "px";
  const size = 2 + Math.random() * 4;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.animationDuration = (5 + Math.random() * 7) + "s";
  particles.appendChild(p);
  setTimeout(() => p.remove(), 13000);
}

setInterval(createParticle, 420);
for (let i = 0; i < 16; i++) setTimeout(createParticle, i * 150);

const card = document.querySelector(".card");
if (window.matchMedia("(pointer:fine)").matches) {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(1200px) rotateY(${x * 2.2}deg) rotateX(${-y * 1.5}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
}
