const body = document.body;
const toggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

function setTheme(theme) {
    if (theme === 'light') {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

toggleButton.addEventListener('click', () => {
    const currentTheme = body.classList.contains('theme-dark') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

window.addEventListener('load', initializeTheme);