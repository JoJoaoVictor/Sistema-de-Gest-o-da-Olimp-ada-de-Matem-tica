import ProjectForme from '../Projects/ProjectForme';
import styles from './NewProjects.module.css';

function NewProject(){
    return( 
    <div className={styles.newproject_container}>
        <h1>Criar Projeto </h1>
        <ProjectForme btnText="Submeter Questão"/>   
    </div>
    )
}
export default NewProject