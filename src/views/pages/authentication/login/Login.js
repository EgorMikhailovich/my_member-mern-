import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Nav,
  TabContent,
  TabPane
} from "reactstrap"
import loginImg from "../../../../assets/img/pages/login.png"
import LogoImg from "../../../../assets/img/logo/logo.png"
import "../../../../assets/scss/pages/authentication.scss"
import LoginJWT from "./LoginJWT"

class Login extends React.Component {
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
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                 <img src={LogoImg} style={{width:"50%"}} />
                <img src={loginImg} alt="loginImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 login-tabs-container">
                  <CardHeader className="pb-1">
                    <CardTitle>
                      <h4 className="mb-0">Login</h4>
                    </CardTitle>
                  </CardHeader>
                  <p className="px-2 auth-title">
                    Welcome back, please login to your account.
                  </p>
                  <Nav tabs className="px-2">
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1"
                        })}
                        onClick={() => {
                          this.toggle("1")
                        }}
                      >
                        JWT
                      </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2"
                        })}
                        onClick={() => {
                          this.toggle("2")
                        }}
                      >
                        Firebase
                      </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "3"
                        })}
                        onClick={() => {
                          this.toggle("3")
                        }}
                      >
                        Auth0
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <LoginJWT />
                    </TabPane>
                    {/* <TabPane tabId="2">
                      <LoginFirebase />
                    </TabPane> */}
                    {/* <TabPane tabId="3">
                      <LoginAuth0 />
                    </TabPane> */}
                  </TabContent>
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
export default Login
