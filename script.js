<head>
  <meta property="og:title" content="⚠️ OFFICIAL HATER REGISTRY ⚠️">
  <meta property="og:description" content="Log your grievance and fund my Petty Cash. $1.00 per complaint.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://your-screenshot-link.com/preview.jpg">
</head>
let count = 0;

function logHater() {
  const nameInput = document.getElementById('haterName');
  const reasonInput = document.getElementById('haterReason');
  const list = document.getElementById('haterList');
  const cash = document.getElementById('cashCounter');

  if (nameInput.value.trim() !== "") {
    const li = document.createElement('li');
    const reason = reasonInput.value.trim() || "ERROR: NO_BRAIN_CELLS_DETECTED";
    
    li.innerHTML = `
      <span style="color:var(--neon-green);">[LOGGED_ID]:</span> ${nameInput.value}<br>
      <span style="color:var(--neon-pink);"> >> STATUS: ${reason}</span>
    `;
    list.prepend(li);

    // Increment Counter
    count += 1.00;
    cash.textContent = `$${count.toFixed(2)}`;

    // Reset and Flash
    nameInput.value = "";
    reasonInput.value = "";
    nameInput.focus();
  }
}

function shareFB() {
  const url = window.location.href;
  const text = "Receipts logged. Profit secured. Sign the board and fund my future: ";
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
}
