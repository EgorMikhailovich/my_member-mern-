import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
// import { pillActiveBorder } from "./TabPillsSourceCode"
import Tabletransction1 from "./tabletransction1"
import Tabletransction2 from "./tabletransction2"
import Tabletransction3 from "./tabletransction3"
import Tabletransction4 from "./tabletransction4"
import DataListConfig   from "./DataListConfig"


class PillActiveBorder extends React.Component {
  state = {
    activeTab: "1",
    active: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            {/* <div className="views">
              <Nav tabs>
              
              </Nav>
            </div> */}
          </CardHeader>
          <CardBody>
            
            <TabContent className="py-50" activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Nav pills className="nav-active-bordered-pill">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.active === "1"
                      })}
                      onClick={() => {
                        this.toggle("1")
                      }}
                    >
                      Invoices
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.active === "2"
                      })}
                      onClick={() => {
                        this.toggle("2")
                      }}
                    >
                      SMS Activity
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.active === "3"
                      })}
                      onClick={() => {
                        this.toggle("3")
                      }}
                    >
                     Voice Activity
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.active === "4"
                      })}
                      onClick={() => {
                        this.toggle("4")
                      }}
                    >
                     withdraw Activity
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.active}>
                  <TabPane tabId="1">
                     <Tabletransction1/>
                  </TabPane>
                  <TabPane tabId="2">
                     <Tabletransction2/>  
                  </TabPane>
                  <TabPane tabId="3">
                     <Tabletransction3/>
                  </TabPane>
                  <TabPane tabId="4">
                     <Tabletransction4/>
                  </TabPane>
                </TabContent>
              </TabPane>
              {/* <TabPane className="component-code" tabId="2">
                {pillActiveBorder}
              </TabPane> */}
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PillActiveBorder
