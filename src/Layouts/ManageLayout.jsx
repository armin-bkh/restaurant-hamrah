import ManageFooter from "../Components/ManageFooter/ManageFooter"
import ManageHeader from "../Components/ManageHeader/ManageHeader"

const ManageUserLayout = ({children}) =>{
    return (
        <div className={`bgDark`}>
            <ManageHeader />
            {children}
            <ManageFooter />
        </div>
    )
}

export default ManageUserLayout;