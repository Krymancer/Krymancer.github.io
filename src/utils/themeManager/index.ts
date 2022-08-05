function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getTheme() {
  return localStorage.getItem('theme') || getPreferredTheme();
}

function saveTheme(theme: string) {
  localStorage.setItem('theme', theme);
}

export default {
  getTheme,
  saveTheme,
};
