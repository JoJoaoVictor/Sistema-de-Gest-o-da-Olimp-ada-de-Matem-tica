import styles from './Input.module.css';

function Select({ text, name, options =[0,1,2,3,4,5], handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                
                <option value="">Selecione uma opção</option>
        {options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option value="">Nenhuma opção disponível</option>
        )}
            </select>

        </div>
    )
}
export default Select