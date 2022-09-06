import { getModeTheme, writeLocalStorage, setTheme } from './function';

export const handleControlTheme = event => {
  const mode = getModeTheme(event.target.checked);

  writeLocalStorage('theme', mode);

  setTheme();
};
