const AuthInput = ({ ...rest }) => {
    return ( 
        <input className={`w-full Casablanca px-3 border border-transparent focus:border-blue-500 py-1 boxShadow mb-5 Dirooz bgLight rounded-md outline-none`} {...rest} />
     );
}
 
export default AuthInput;