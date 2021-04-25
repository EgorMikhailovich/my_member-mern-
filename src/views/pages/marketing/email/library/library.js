
import React from "react"
import Sidebar from "react-sidebar"
import EmailList from "./EmailList"
import LibrarySidebar from "./librarySidebar"
import { Button } from "reactstrap"
import { ContextLayout } from "../../../../../utility/context/Layout"
import EditorControlled from "../compose/emailwriteEditor"
import "../../../../../assets/scss/pages/app-email.scss"
import { Plus } from "react-feather"

const mql = window.matchMedia(`(min-width: 992px)`)
class Library extends React.Component {
  state = {
    composeMailStatus: false,
    sidebarDocked: mql.matches,
    sidebarOpen: false,
    isEditor: false
  }
  handleComposeSidebar = status => {
    if (status === "open") {
      this.setState({
        composeMailStatus: true
      })
    } else {
      this.setState({
        composeMailStatus: false
      })
    }
  }

  UNSAFE_componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  handleMainAndComposeSidebar = () => {
    this.handleComposeSidebar("close")
    this.onSetSidebarOpen(false)
  }
  handleIsEditor = () => {
    this.setState({ isEditor: !this.state.isEditor })
  }
  
 
  render() {
    const { isEditor } = this.state
    return (
      <div>
        <div className="d-flex justify-content-end">
          <Button
            disabled={!isEditor}
            style={{ border: "1px solid #d9d9d9", color: "#d9d9d9" }}
            onClick={this.handleIsEditor}
            className="mr-1 mb-1">
            Cancel
        </Button>
          <Button color="success" disabled={isEditor} className="mb-1"
            onClick={this.handleIsEditor}
          >
            <Plus size={20} /> Create Email
        </Button>
        </div>
        <div className="email-application position-relative">
          <div
            className={`app-content-overlay ${this.state.composeMailStatus || this.state.sidebarOpen ? "show" : ""
              }`}
            onClick={this.handleMainAndComposeSidebar}
          />
          <ContextLayout.Consumer>
            {context => (
              <Sidebar
                sidebar={
                  <LibrarySidebar
                    handleComposeSidebar={this.handleComposeSidebar}
                    mainSidebar={this.onSetSidebarOpen}
                    routerProps={this.props}
                  />
                }
                docked={this.state.sidebarDocked}
                open={this.state.sidebarOpen}
                sidebarClassName="sidebar-content email-app-sidebar d-flex"
                touch={false}
                contentClassName="sidebar-children"
                pullRight={context.state.direction === "rtl"}>
                ""
              </Sidebar>
            )}
          </ContextLayout.Consumer>
          <div className="content-right">
            <div className="email-app-area">
              {
                isEditor ? <EditorControlled 
                 editExisting={false}
                 defaultTemplateData={null}
                showTemplate={this.handleIsEditor} /> :
                  <EmailList
                    mainSidebar={this.onSetSidebarOpen}
                    routerProps={this.props}
                  />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Library

