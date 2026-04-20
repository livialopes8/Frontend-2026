import avatar from '../assets/avatar.svg'

function Topbar() {
    return (
        <header>
            <h1>Olá, Aluno!</h1>
            <img src={avatar}/>
        </header>
    )
}

export default Topbar;