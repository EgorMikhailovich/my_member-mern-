import React from "react"
import {
    Card,
    CardBody,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    CardHeader,
    Button,
    CardFooter,
    Media,Input
} from "reactstrap"
import "../../../assets/scss/pages/users.scss"
import MembershipTable from './infoStudentMemberShip'
import Membershipinvoice from './infoMembershipInvoice'


class UserEdit extends React.Component {
    state = {
       
    }

   
    render() {
        return (
            <div>
                 <MembershipTable/>
                 <Membershipinvoice />
            </div>

        )
    }
}
export default UserEdit
