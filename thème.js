function applyTheme(theme) {
  const root = document.documentElement.style;
  if (theme === 'dark') {
    root.setProperty('--bg', '#000000');
    root.setProperty('--surface', '#86868600');
    root.setProperty('--text', '#e9edf7');
    root.setProperty('--muted', '#a7b1c8');
    root.setProperty('--line', '#1b222e');
    root.setProperty('--shadow-1', '0 10px 30px rgba(14, 25, 76, .07)');
    root.setProperty('--shadow-2', '0 16px 50px rgba(14, 25, 76, .12)');
    document.body.classList.add('dark-mode');
  } else {
    root.setProperty('--bg', '#ffffff');
    root.setProperty('--surface', '#6a6b6b4f');
    root.setProperty('--text', '#212529');
    root.setProperty('--muted', '#6c757d');
    root.setProperty('--line', '#dee2e6');
    root.setProperty('--shadow-1', '0 10px 30px rgba(0, 0, 0, 0.07)');
    root.setProperty('--shadow-2', '0 16px 50px rgba(0, 0, 0, 0.12)');
    document.body.classList.remove('dark-mode');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = prefersDark ? 'dark' : 'light';
  applyTheme(systemTheme);
  localStorage.setItem('theme', systemTheme);
}

const toggleButton = document.getElementById('toggle-theme');

function updateButton() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}
updateButton();

toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  updateButton();
});
