import { useTheme } from '../context/ThemeContext';
import '../../styles/components/_darkModeToggle.scss';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

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
