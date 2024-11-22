
import styles from './Input.module.css';

function Input({type, text, name, placeholder, handleOnChange, value , img}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            handleOnChange={handleOnChange} 
            value={value}
            img={img}
             />
            

        </div>
    )
}
export default Input