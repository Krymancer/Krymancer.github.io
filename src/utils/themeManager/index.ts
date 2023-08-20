function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getTheme() {
  return localStorage.getItem('theme') || getPreferredTheme();
}

function saveTheme(theme: string) {
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const theme = getTheme();
  saveTheme(theme === 'dark' ? 'light' : 'dark');
  document.documentElement.classList.toggle('dark');
}

export default {
  getTheme,
  saveTheme,
  toggleTheme,
};
