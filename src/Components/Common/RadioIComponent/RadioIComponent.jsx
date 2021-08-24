import styles from './RadioIComponent.module.scss';

const RadioIComponent = ({ onChange, filterState, filtervalue, lbl }) => {
    return ( 
        <div
        className={`shadow-md relative text-sm py-1 w-14 ml-2 rounded-full ${styles.inputContainer}`}
      >
        <input
          id={filtervalue}
          className={`hidden w-full h-full`}
          type="radio"
          checked={filterState === {filtervalue} && true}
          value={filtervalue}
          onChange={onChange}
        />
        <label className={`flex justify-center items-center`} htmlFor={filtervalue}>{lbl}</label>
      </div>
     );
}
 
export default RadioIComponent;