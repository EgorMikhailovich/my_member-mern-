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
import classnames from "classnames"
// import "../../../assets/scss/pages/users.scss"
import "../../../../assets/scss/pages/users.scss"
import BBCTable from "./BBCTable.js"
import LcTable from "./LcTable.js"
import McTable from "./McTable.js"
import IcTable from "./IcTable.js"


class UserEdit extends React.Component {
    state = {
        activeTab: "1"
    }

    toggle = tab => {
        this.setState({
            activeTab: tab
        })
    }
    render() {
        return (
            <div>
               
              
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="headingtext"> Candidate & Stripe Management </CardHeader>
                            <CardBody className="pt-2">
                            <Row>
                             <div className="col-md-6">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "1"
                                            })}
                                            onClick={() => {
                                                this.toggle("1")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">BBC</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "2"
                                            })}
                                            onClick={() => {
                                                this.toggle("2")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">LC</span>
                                        </NavLink>
                                    </NavItem>
                                 
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "3"
                                            })}
                                            onClick={() => {
                                                this.toggle("3")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">IC</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "4"
                                            })}
                                            onClick={() => {
                                                this.toggle("4")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">MC</span>
                                        </NavLink>
                                    </NavItem>
                                        
                                   </Nav>
                                   </div>
                                   <div className="col-md-6 tx-right">
                                        <Button.Ripple className="mb-1 bt-s" color="success" size="sm">Export</Button.Ripple>
                                        <span>
                                        Candidate: 
                                        </span>
                                        <Button.Ripple className="mb-1 bt-s" color="dark" size="sm">BBC</Button.Ripple>
                                        <span>
                                        Total: 4
                                        </span>
                                   </div>
                                   </Row>
                               
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                       <BBCTable/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <LcTable /> 
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <IcTable/> 
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <McTable />
                                    </TabPane>
                                    <TabPane tabId="5">
                                        {/* <Activity/> */}
                                    </TabPane>
                                    <TabPane tabId="6">
                                        {/* <Invoice/> */}
                                    </TabPane>
                                    <TabPane tabId="7">
                                        {/* <MyFamily/> */}
                                    </TabPane>
                                    <TabPane tabId="8">
                                        {/* <MyGroup/> */}
                                    </TabPane>
                                </TabContent>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default UserEdit
