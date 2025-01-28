import styles from './Newproject.module.css'
import ProjectForm from '../project/ProjectForm'


function Newproject() {
    return (
        <div className={styles.Newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )}
    

export default Newproject