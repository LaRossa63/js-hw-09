import { ref } from './refElement';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export const getModeTheme = mode => {
  return mode ? Theme.DARK : Theme.LIGHT;
};

export const writeLocalStorage = (key, mode) => {
  localStorage.setItem(key, mode);
};

const getLocalStorage = key => {
  return localStorage.getItem(key);
};

export const setTheme = () => {
  const mode = getLocalStorage('theme') || Theme.LIGHT;

  if (mode === Theme.DARK) {
    ref.toggleControlTheme.checked = true;
  }

  ref.body.className = mode;
};
