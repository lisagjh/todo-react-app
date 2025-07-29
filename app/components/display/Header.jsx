import  DarkModeToggle  from '../input/DarkModeToggle';

export default function Header(){
    return (
        <header className="header">
            <img src="./assets/favicon.svg" alt="icon" className="header__icon" />
            <h1 className="header__title">TODOY</h1>

            <DarkModeToggle />
        </header>
    );
};