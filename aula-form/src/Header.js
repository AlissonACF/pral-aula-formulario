import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className='flex p-4 gap-2 bg-blue-400 text-white font-bold'>
                <Link to="/">INICIO</Link>
                <Link to="/cadastro">CADASTRAR</Link>
            </nav>
        </header>
    )
}