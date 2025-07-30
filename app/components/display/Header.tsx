import { useTheme } from "../context/ThemeContext";
import DarkModeToggle from "../input/DarkModeToggle";

export default function Header() {
  const { isDark } = useTheme();

    return (
        <header className="header">
            <h1>TODO</h1>
            <DarkModeToggle />
        </header>
    );
};