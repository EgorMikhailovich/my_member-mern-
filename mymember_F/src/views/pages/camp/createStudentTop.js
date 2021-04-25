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
                            <div>
                            <Button.Ripple className="mr-1 mb-1" outline color="primary">
                                    <Star size={14} />
                                    Clone
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-danger">
                                    <Star size={14} />
                                    Contact
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-dark">
                                    <Printer size={14} />
                                   Candidate
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-dark">
                                    <Printer size={14} />
                                   Test
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-dark">
                                    <Printer size={14} />
                                   Print
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-dark">
                                    <Printer size={14} />
                                   Buy
                                </Button.Ripple>
                                <Button.Ripple className="mr-1 mb-1" outline color="flat-dark">
                                    <Printer size={14} />
                                   Sign
                                </Button.Ripple>
                                <Button.Ripple  color="primary">Cancel</Button.Ripple>
                                <Button.Ripple  color="success">Save Changes </Button.Ripple>
                            </div>
                        </Col>
                    </Row>
            </div>

        )
    }
}
export default UserEdit
