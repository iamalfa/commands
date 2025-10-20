// script.js

function copyCommand(button) {
  const codeText = button.parentElement.querySelector('code').innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    button.innerText = 'Copied!';
    setTimeout(() => {
      button.innerText = 'Copy';
    }, 1500);
  });
}
