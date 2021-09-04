import ManageFooter from "../Components/ManageFooter/ManageFooter"
import ManageUserHeader from "../Components/ManageUserHeader/ManageUserHeader"
const ManageUserLayout = ({children}) =>{
    return (
        <>
            <ManageUserHeader />
            {children}
            <ManageFooter />
        </>
    )
}

export default ManageUserLayout;