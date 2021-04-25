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
import SupportTab1 from "./supportTab1/ticketsupportForm"
import SupportTab2 from "./supportTab2/tableSupportTab2"
import SupportTab3 from "./supportTab3/tableSupportTab3"

// import { pillsJustified } from "./TabPillsSourceCode"

class PillsJustified extends React.Component {
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
            {/* <CardTitle>Justified</CardTitle> */}
            <div className="views">
              <Nav tabs>
                {/* <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTab("2")
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem> */}
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            {/* <p>
              For equal-width elements, use
              <code>.nav-justified</code> All horizontal space will be occupied
              by nav links, but unlike the <code>.nav-fill</code> above, every
              nav item will be the same width.
            </p> */}
            <TabContent className="py-50" activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Nav pills className="nav-justified">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.active === "1"
                      })}
                      onClick={() => {
                        this.toggle("1")
                      }}
                    >
                     Open Support Ticket
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
                      View Your Ticket
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
                      Closed
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.active}>
                  <TabPane tabId="1">
                   <SupportTab1/>
                  </TabPane>
                  <TabPane tabId="2">
                    <SupportTab2/>
                  </TabPane>
                  <TabPane tabId="3">
                    <SupportTab3/>
                  </TabPane>
                </TabContent>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {/* {pillsJustified} */}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PillsJustified
