import '../../styles/components/_darkModeToggle.scss';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {

  // 1. create a state variable to track the theme
  const [isDark, setIsDark] = useState(false);

  // 2. check if the theme is set in the localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    }
  }, []);

  // 3. function to toggle state
  function toggleTheme(){
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  }

  // 4. return the component
  return (
    <label className='dark-mode-toggle'>
       <input
         type="checkbox"
         checked={isDark}
         onChange={toggleTheme}
         className='dark-mode-toggle__checkbox'
       />
       <span className='dark-mode-toggle__label'>Dark mode</span>
    </label>
  );
}