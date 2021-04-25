import React from "react"
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "reactstrap"
import classnames from "classnames"
import {  ChevronDown } from "react-feather"
import Filter from "./filter"
import DetailTable from "./detailTable"
const collapseItems = [
    {
      id: 1,
      title: "LT No Belt",
      content:""
    },
    {
      id: 2,
      title: "LT White Belt",
      content:""    
    },
    {
      id: 3,
      title: "LT White Orange Tip",
      content:""
    },
    {
      id: 4,
      title: "LT Black",
      content:""    }
  ]
  
  class AccordionBorder extends React.Component {
    state = {
      activeTab: "1",
      collapseID: "",
      status: "Closed"
    }
  
    // toggleTab = tab => {
    //   if (this.state.activeTab !== tab) {
    //     this.setState({ activeTab: tab })
    //   }
    // }
  
    toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }
  
    onEntered = id => {
      if (id === this.state.collapseID) this.setState({ status: "Opened" })
    }
    onEntering = id => {
      if (id === this.state.collapseID) this.setState({ status: "Opening..." })
    }
  
    onExited = id => {
      if (id === this.state.collapseID) this.setState({ status: "Closed" })
    }
  
    onExiting = id => {
      if (id === this.state.collapseID) this.setState({ status: "Closing..." })
    }
  
    render() {
      const accordionBorderItems = collapseItems.map(collapseItem => {
        return (
          <Card
            key={collapseItem.id}
            onClick={() => this.toggleCollapse(collapseItem.id)}
            className={classnames("collapse-border-item", {
              "collapse-collapsed":
                this.state.status === "Closed" &&
                this.state.collapseID === collapseItem.id,
              "collapse-shown":
                this.state.status === "Opened" &&
                this.state.collapseID === collapseItem.id,
              closing:
                this.state.status === "Closing..." &&
                this.state.collapseID === collapseItem.id,
              opening:
                this.state.status === "Opening..." &&
                this.state.collapseID === collapseItem.id
            })}
          >
            <CardHeader>
              <CardTitle className="lead collapse-title collapsed">
                {collapseItem.title}
              </CardTitle>
              <ChevronDown size={15} className="collapse-icon" />
            </CardHeader>
            <Collapse
              isOpen={collapseItem.id === this.state.collapseID}
              onEntering={() => this.onEntering(collapseItem.id)}
              onEntered={() => this.onEntered(collapseItem.id)}
              onExiting={() => this.onExiting(collapseItem.id)}
              onExited={() => this.onExited(collapseItem.id)}
            >
              <CardBody>{collapseItem.content}
                <DetailTable />
              </CardBody>
              
            </Collapse>
          </Card>
        )
      })
  
      return (
        <React.Fragment>
            <Filter/>
          <div className="vx-collapse">{accordionBorderItems}</div>
          
        </React.Fragment>
      )
    }
  }
export default AccordionBorder
