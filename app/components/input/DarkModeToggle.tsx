import { useTheme } from '../context/ThemeContext';
import '../../styles/components/_darkModeToggle.scss';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <label className="dark-mode-toggle">

        <span className='dark-mode-toggle__span'>
          <img src="./assets/icon-moon.svg" alt="icon" className={isDark ? 'show header__icon' : 'header__icon'} />
          <img src="./assets/icon-sun.svg" alt="icon" className={isDark ? ' header__icon' : 'show header__icon'} />
        </span>

      {/* className={isActive ? 'active' : ''} */}


    
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          className="dark-mode-toggle__checkbox"
        />
        <span className="dark-mode-toggle__label">Dark mode</span>
      </label>
    </>
  );
}
