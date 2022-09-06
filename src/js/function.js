const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export const writeLocalStorage = mode => {
  localStorage.setItem('theme');
};
