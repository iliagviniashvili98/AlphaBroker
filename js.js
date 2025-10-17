// live ticker simulation
function startMockTicker() {
  const tickerEl = document.getElementById("marketTicker");
  const timeEl = document.getElementById("tickerTime");
  if (!tickerEl || !timeEl) return;

  function update() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString("en-GB");
    tickerEl.querySelectorAll(".row").forEach((row, i) => {
      const valEl = row.children[1];
      const base =
        parseFloat(valEl.textContent.replace(/,/g, "")) ||
        (i === 0 ? 1.234 : i === 1 ? 0.318 : 1954.2);
      const delta = (Math.random() - 0.5) * (i === 2 ? 1 : 0.01);
      valEl.textContent = (base + delta).toFixed(3);
    });
  }

  update();
  setInterval(update, 30000);
}
startMockTicker();

// smooth scroll to contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// live chat mock
function openLiveChat() {
  alert("Live Chat დემო რეჟიმშია");
}

// dynamic year
document.getElementById("copyYear").textContent = new Date().getFullYear();

// working form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("openAccountForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const email = data.get("email");
    const phone = data.get("phone");
    const accepted = document.getElementById("terms").checked;

    if (!email || !phone) {
      alert("გთხოვთ მიუთითოთ ელფოსტა და ტელეფონი");
      return;
    }

    if (!accepted) {
      alert("გთხოვთ დაეთანხმოთ წესებს და პირობებს");
      return;
    }

    alert(
      "✅ მადლობა! თქვენი განაცხადი მიღებულია. ჩვენი გუნდი დაგიკავშირდებათ მას შემდეგ, რაც KYC გაივლით."
    );
    form.reset();
  });
});
