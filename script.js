let count = 0;

function logHater() {
  const nameInput = document.getElementById('haterName');
  const reasonInput = document.getElementById('haterReason');
  const list = document.getElementById('haterList');
  const cash = document.getElementById('cashCounter');

  if (nameInput.value.trim() !== "") {
    const li = document.createElement('li');
    const reason = reasonInput.value.trim() || "ERROR: NO_VALID_REASON_FOUND";
    
    li.innerHTML = `
      <span style="color:var(--neon-green);">[LOGGED]:</span> ${nameInput.value}<br>
      <span style="color:var(--neon-pink);"> >> WHY: ${reason}</span>
    `;
    list.prepend(li);

    // Update the Petty Cash
    count += 1.00;
    cash.textContent = `$${count.toFixed(2)}`;

    // Reset for next hater
    nameInput.value = "";
    reasonInput.value = "";
    nameInput.focus();
  }
}

function shareFB() {
  const url = window.location.href;
  const text = "Receipts logged. Petty Cash fund growing. Sign the board here: ";
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
}