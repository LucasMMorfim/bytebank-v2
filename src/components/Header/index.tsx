import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <div className="image-logo" role="img" aria-label='drawer Logo'></div>
            <img className='participant' src="/images/participante.png" alt="Participante com um presente na mão" />
        </header>
    )
}

export default Header
