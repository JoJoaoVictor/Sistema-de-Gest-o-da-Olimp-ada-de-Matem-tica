import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from './../../img/logov.png';

function Navbar(){
    return(
        <nav className={styles.navbar}>
            
            <Container>
                <Link to="/">
                <img src={logo} alt="Costs" style={{ width: '5vw' }} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/usuario">Usuario</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/newproject">Novo Projeto</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}
export default Navbar