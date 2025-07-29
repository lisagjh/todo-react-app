import { useTheme } from "../context/ThemeContext";
import DarkModeToggle from "../input/DarkModeToggle";

export default function Header() {
  const { isDark } = useTheme();

    return (
        <header className="header">
            {isDark ? (
                <img src="./assets/favicon-dark.svg" alt="icon" className="header__icon" />

            ) : (
                <img src="./assets/favicon.svg" alt="icon" className="header__icon" />
            )}

            <DarkModeToggle />
        </header>
    );
};