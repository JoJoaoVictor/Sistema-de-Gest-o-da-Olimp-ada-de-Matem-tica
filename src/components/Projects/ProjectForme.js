import Input from '../form/Input.js';
import styles from './Projects.module.css'
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import ImageUploader from '../form/ImageUploader.js';

function ProjectForme({ btnText}) {
    return(
        <form className={styles.form}>
            <b>1.Identificação do Professor</b>
            <Input type="text" 
            text="Nome do Professor" 
            name="name"
            placeholder="Insira o nome do Professor"
            />
            <b>2.Identificação das Questões: etapa de elaboração</b>
            <Input type="text" 
            text="Nivel da Fase" 
            name="name"
            placeholder="Insira o Nivel da Fase"
            />
            <Select name="category_id" text="Selecione o Nivel de Dificuldade">Selecione o Nivel</Select>

            <Input type="text" 
            text="Objetos do conhecimento envolvidos na questão " 
            name="name"
            placeholder="Insira o Texto"
            />
            <b>3.BNCC: principal habilidade que deve ser mobilizada pelo discente</b>
            <Input type="text" 
            text="Tema da BNCC " 
            name="name"
            placeholder="Insira o Texto"
            />
            <Input type="text" 
            text="Código da habilidade" 
            name="name"
            placeholder="Insira o Texto"
            />
            <Input type="text" 
            text="Descrição da habilidade" 
            name="name"
            placeholder="Insira o Texto"
            />
            <b>4.Proposição da habilidade</b>
            <Input type="text" 
            text="Enunciado da questão (máximo de 50 palavras)" 
            name="name"
            placeholder="Insira o Texto"
            />
           
            <b>Área da imagem usada na questão (caso necessário) </b> <br/>
            <b>Observação: a imagem deve ter boa resolução e tamanhos de letras e figuras adequados. Sempre envie o arquivo editável da imagem juntamente com a ficha da questão.</b>
            <ImageUploader/>

            <Input type="text" 
            text="Apresentar 5 (cinco) alternativas (em ordem crescente, nos casos aplicáveis)" 
            name="name"
            placeholder="Insira o Texto"
            />
            <b>5.Resolução da Questão</b>
            <Input type="text" 
            text="Indicar a alternativa correta" 
            name="name"
            placeholder="Insira o Texto"
            />
            <Input type="text" 
            text="Resolução detalhada da questão (sem limite de linhas)" 
            name="name"
            placeholder="Insira o Texto"
            />

            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForme