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
import {
    Edit,
    Trash2,
    ChevronDown,
    Clipboard,
    Printer,
    Download,
    Info,
    Mail,
    Phone,
    Eye,
    RotateCw,
    Home,
    X,
    Plus,
    User,
    Share, Star
} from "react-feather"
import classnames from "classnames"
// import { User, Info, Share } from "react-feather"
import DetailsTab from "./createStudent"
// import InfoTab from "./Information"
// import SocialTab from "./Social"
import "../../../assets/scss/pages/users.scss"
import img from "../../../assets/img/portrait/small/avatar-s-11.jpg"
import Topheader from './createStudentTop'
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
                    <Topheader/>
                </Row>
                <Row>
                    <Col sm="3">
                        <Card>
                            <CardBody>
                            <Media className="rounded-circle" object src={img} alt="User" height="64" width="64"/>
         
                                <Media className="mt-25" body>
                                    <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                                        <Button.Ripple
                                            tag="label"
                                            className="mr-50 cursor-pointer"
                                            color="primary"
                                            outline
                                        >
                                            Upload Photo
                                        <Input type="file" name="file" id="uploadImg" hidden />
                                        </Button.Ripple>
                                        <Button.Ripple color="flat-danger">Remove</Button.Ripple>
                                    </div>
                                    <p className="text-muted mt-50">
                                        <small>Allowed JPG, GIF or PNG. Max size of 800kB</small>
                                    </p>
                                </Media>

                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm="5">
                        <Card>
                            <CardHeader>
                                <h5>
                                    Membership
                                 </h5>
                                <Button.Ripple className="mr-1 mb-1" color="flat-success">
                                    <Printer size={14} />
                            Print
                            </Button.Ripple>
                            </CardHeader>
                            <hr></hr>

                            <CardBody>
                                <h5>Program Type: N/A</h5>
                                <h5>Starts: N/A</h5>
                                <h5>Ends: N/A</h5>
                            </CardBody>
                            <CardFooter>
                                <Button.Ripple className="mr-1 mb-1" outline color="primary">
                                    <Star size={14} />
                                    Freez
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-danger">
                                    <Star size={14} />
                                    Terminate
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-dark">
                                    <Printer size={14} />
                                    Invoice
                                </Button.Ripple>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardHeader>
                                <h5>
                                    My Family
                            </h5>
                            </CardHeader>
                            <hr></hr>
                            <CardBody>
                                <h5>
                                    Family name:
                                </h5>
                                <h5>
                                    Total Members:
                                </h5>
                                <h5>
                                    Members:
                                </h5>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody className="pt-2">
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
                                            <span className="align-middle ml-50">Details</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled>
                                            Billing
                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled>
                                            Membership
                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled>
                                            Ranks
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled>
                                            Activity
                                `       </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled>
                                            Invoice
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <DetailsTab />
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
