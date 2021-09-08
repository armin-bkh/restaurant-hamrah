import ManageFooter from "../Components/ManageFooter/ManageFooter"
import ManageHeader from "../Components/ManageHeader/ManageHeader"

const ManageUserLayout = ({children}) =>{
    return (
        <>
            <ManageHeader />
            {children}
            <ManageFooter />
        </>
    )
}

export default ManageUserLayout;