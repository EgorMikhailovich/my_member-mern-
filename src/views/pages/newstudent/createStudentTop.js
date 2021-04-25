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
    Share, Star, FileText, DollarSign, CheckSquare
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
            <div className="icon-list">
                <Row>
                    <Col sm="12">
                    <div className="list-icon">
                <a href="/data-list/add-new-student">
                <Button className="btn-lg fides btn waves-effect waves-light btn-2">
                  <Plus size={21} />
                  <br></br>
                  Clone
                </Button>
                </a>
                <Button className="btn-lg fides5 btn waves-effect waves-light btn-2">
                  <Phone size={21} />
                  <br></br>
                  Contact
                </Button>
                <Button className="btn-lg fides4 btn waves-effect waves-light btn-2">
                  <User size={21} />
                  <br></br>
                  Candidate
                </Button>
                <Button className="btn-lg fides3 btn waves-effect waves-light btn-2">
                  <FileText size={21} />
                  <br></br>
                  Test
                </Button>
                <Button className="btn-lg fides2 btn waves-effect waves-light btn-2">
                  <Printer size={21} />
                  <br></br>
                  Print
                </Button>
                <Button className="btn-lg fides1 btn waves-effect waves-light btn-2">
                  <DollarSign size={21} />
                  <br></br>
                  Buy
                </Button>
                <Button className="btn-lg fides0 btn waves-effect waves-light btn-2">
                  <CheckSquare size={21} />
                  <br></br>
                  Sign
                </Button>
              </div>
                        </Col>
                    </Row>
            </div>

        )
    }
}
export default UserEdit
