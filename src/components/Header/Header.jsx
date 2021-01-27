import s from './Header.module.css'
const Header = () => {
    return <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/JetBrains_Logo_2016.svg/1200px-JetBrains_Logo_2016.svg.png" alt="logo" />
        <span>App</span>
    </header>
}
export default Header;