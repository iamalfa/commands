// script.js

function copyCommand(button){
  const card = button.closest('.command-card');
  const cmd = card.querySelector('.cmd code').innerText.trim();
  navigator.clipboard.writeText(cmd).then(() => {
    flashButton(button, 'Copied!');
  }, () => {
    flashButton(button, 'Failed');
  });
}

function copyDesc(button){
  const card = button.closest('.command-card');
  const desc = card.querySelector('.desc').innerText.trim();
  navigator.clipboard.writeText(desc).then(() => {
    flashButton(button, 'Copied!');
  }, () => {
    flashButton(button, 'Failed');
  });
}

function flashButton(btn, text){
  const old = btn.innerText;
  btn.innerText = text;
  setTimeout(()=> btn.innerText = old, 1400);
}

/* Search: filter by command text or description text */
function filterCommands(){
  const q = document.getElementById('search').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.command-card');
  cards.forEach(card => {
    const cmd = card.querySelector('.cmd').innerText.toLowerCase();
    const desc = card.querySelector('.desc').innerText.toLowerCase();
    const match = q === '' || cmd.includes(q) || desc.includes(q);
    card.style.display = match ? 'grid' : 'none';
  });
}
