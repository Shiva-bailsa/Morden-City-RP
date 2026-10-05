const DISCORD_URL = "https://discord.gg/MT3WS8eXx";
const TELEGRAM_URL = "https://t.me/+jA1CWJy15Uk4Yzc1";
const DOWNLOAD_URL = ""; // Add your real APK URL here when ready.
const promo = "GAMEON";

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.querySelectorAll("[data-download]").forEach(link => link.addEventListener("click", e => {
  if (!DOWNLOAD_URL) {
    e.preventDefault();
    showToast("The game download link is not configured yet.");
  } else {
    e.currentTarget.href = DOWNLOAD_URL;
  }
}));

document.getElementById("copyPromo")?.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(promo); showToast("Promo code copied: GAMEON"); }
  catch { showToast("Your promo code is GAMEON"); }
});

document.querySelectorAll(".rule-tabs button").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".rule-tabs button").forEach(x => x.classList.remove("active"));
  btn.classList.add("active");
  const filter = btn.dataset.filter;
  document.querySelectorAll(".rule").forEach(rule => rule.style.display = filter === "all" || rule.dataset.cat === filter ? "block" : "none");
}));

document.getElementById("supportForm")?.addEventListener("submit", e => {
  e.preventDefault();
  showToast("Inquiry prepared. Connect this form to your backend or email service to receive submissions.");
  e.currentTarget.reset();
});

function showToast(message) {
  const old = document.querySelector(".toast"); if (old) old.remove();
  const toast = document.createElement("div"); toast.className = "toast"; toast.textContent = message;
  document.body.appendChild(toast); setTimeout(() => toast.remove(), 3000);
}
