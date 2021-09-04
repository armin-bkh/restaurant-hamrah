const Table = ({resForm}) => {
    const clickHandler = () => {
        alert("hello")
    }
    return ( 
        <article onClick={clickHandler} className={`flex w-64 h-96`}>
            <div className={`bg-gray-700`}></div>
            <div className={`flex-grow bg-gray-700`}></div>
            <div className={`bg-gray-700`}></div>
        </article>
     );
}
 
export default Table;