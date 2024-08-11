function Header() {
    return (
        <header className='banner'>
            <hgroup>
                <h1><a href='/'>Chase Nickel</a></h1>
            </hgroup>
            <ul className='header-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='https://github.com/nickelca'>Github</a></li>
            </ul>
        </header>);
}

export default Header;