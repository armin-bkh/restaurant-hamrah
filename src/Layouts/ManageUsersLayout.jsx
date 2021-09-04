import ManageUserHeader from "../Components/ManageUserHeader/ManageUserHeader"
const ManageUserLayout = ({children}) =>{
    return (
        <>
            <ManageUserHeader />
            {children}
            <footer>footer</footer>
        </>
    )
}

export default ManageUserLayout;