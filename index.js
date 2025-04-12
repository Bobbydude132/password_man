if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';  // Prevent automatic scroll restoration
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.anim').forEach(el => {
        el.classList.add('load');
  });
});

function showalert() {
    alert("Linux is under development. Try again later.");
}