import React from "react"
import "../../../assets/scss/pages/users.scss"
import MembershipTable from './createStudentMemberShip'
import Membershipinvoice from './createMembershipInvoice'


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
