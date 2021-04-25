import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Nav,
  TabContent,
  TabPane
} from "reactstrap"
// import classnames from "classnames"
import RegisterFirebase from "./RegisterFirebase"
import RegisterAuth0 from "./RegisterAuth0"
import RegisterJWT from "./RegisterJWT"
import registerImg from "../../../../assets/img/pages/register.jpg"
import LogoImg from "../../../../assets/img/logo/logo.png"
import "../../../../assets/scss/pages/authentication.scss"

class Register extends React.Component {
  state = {
    activeTab: "1"
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <div className="bg-full-screen-image1">
        <div className="flexbox-container">
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                 <img src={LogoImg} style={{width:"50%"}} />
                <img className="mr-1" src={registerImg} alt="registerImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 p-2">
                  <CardHeader className="pb-1 pt-50">
                    <CardTitle>
                      <h4 className="mb-0">Create Account</h4>
                    </CardTitle>
                  </CardHeader>
                  <p className="px-2 auth-title mb-0">
                    Fill the below form to create a new account.
                  </p>
                  <Nav tabs className="px-2">
                  </Nav>
                  <CardBody className="pt-1 pb-50">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <RegisterJWT />
                      </TabPane>
                      <TabPane tabId="2">
                        {/* <RegisterFirebase /> */}
                      </TabPane>
                      <TabPane tabId="3">
                        <RegisterAuth0 />
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      </div>
      </div>
    )
  }
}
export default Register
