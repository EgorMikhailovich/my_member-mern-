import React from "react"
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,Row,Col,FormGroup, Label,Input,Button
} from "reactstrap"
import classnames from "classnames"
import {ChevronDown } from "react-feather"
import DetailTable from "./detailTable"
const collapseItems = [
    {
      id: 1,
      title: "1st",
      content:""
    },
    {
      id: 2,
      title: "5",
      content:""    
    },
    {
      id: 3,
      title: "10",
      content:""
    },
    {
      id: 4,
      title: "15",
      content:""   
    },
    {
        id: 5,
        title: "20",
        content:"" 
    },
    {
        id: 6,
        title: "25",
        content:"" 
    },
    {
        id: 7,
        title: "31",
        content:"" 
    }
  ]
  
  class AccordionBorder extends React.Component {
    state = {
      activeTab: "1",
      collapseID: "",
      status: "Closed"
    }
  
  
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
            {/* <Filter/> */}
            <Row style={{padding:"15px 0"}}>

                <Col sm="4" >
                    <FormGroup className="mb-0">
                        <h4 style={{verticalAlign:"center" }}>Daily Report- Grand Total $ 0</h4>
                        <div style={{display:"flex"}}>
                        <p><b>Cash</b>:$0</p>
                        <p><b>| Check</b>:$0</p>
                        <p><b>| Credit Card </b>:$0</p>
                        </div>
                       

                    </FormGroup>
                  </Col>

                  <Col sm="2" >
                   
                    <FormGroup className="mb-0">
                      <Label for="role">All Payments</Label>
                      <Input
                        type="select"
                        name="role"
                        id="role"
                      //   value={this.state.role}
                      //   onChange={e => {
                      //     this.setState(
                      //       {
                      //         role: e.target.value
                      //       },
                      //       () =>
                      //         this.filterData(
                      //           "role",
                      //           this.state.role.toLowerCase()
                      //         )
                      //     )
                      //   }
                      // }
                      >
                        <option value="All">In-house Payments</option>
                        <option value="User">Auto Payments</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <FormGroup className="mb-0">
                      <Label for="status">Months</Label>
                      <Input
                        type="select"
                        name="status"
                        id="status"
                        // value={this.state.selectStatus}
                        // onChange={e => {
                        //   this.setState(
                        //     {
                        //       selectStatus: e.target.value
                        //     },
                        //     () =>
                        //       this.filterData(
                        //         "status",
                        //         this.state.selectStatus.toLowerCase()
                        //       )
                        //   )
                        // }}
                      >
                        <option value="All">Months</option>
                        <option value="January">January</option>
                        <option value="Febuary">Febuary</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <FormGroup className="mb-0">
                      <Label for="verified">Years</Label>
                      <Input
                        type="select"
                        name="verified"
                        id="verified"
                        // value={this.state.verified}
                        // onChange={e => {
                        //   this.setState(
                        //     {
                        //       verified: e.target.value
                        //     },
                        //     () =>
                        //       this.filterData(
                        //         "is_verified",
                        //         this.state.verified.toLowerCase()
                        //       )
                        //   )
                        // }}
                      >
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                  <FormGroup className="mb-0" >
                     <Button.Ripple
                      color="success"
                      style={{marginTop:"20px",padding:"0.8rem 2rem"}}
                      onClick={() => window.location.reload(false)}
                      >
                            View
                      </Button.Ripple>
                  </FormGroup>
                  </Col>
                  
                </Row>

          <div className="vx-collapse">{accordionBorderItems}</div>
          
        </React.Fragment>
      )
    }
  }
export default AccordionBorder
