import styles from './home.module.css'
import pig from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto!"/>
            <img src={pig} alt="Costs"/>
        </section>
    )
}

export default Home