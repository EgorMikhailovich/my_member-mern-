import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Collapse,
  Spinner,Button
} from "reactstrap"
import axios from "axios"
import {
  ChevronDown,
  Download,
  RotateCw,
  X
} from "react-feather"
import classnames from "classnames"
// import { history } from "../../../history"
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../assets/scss/pages/users.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
class UsersList extends React.Component {
  state = {
    rowData: null,
    pageSize: 20,
    isVisible: true,
    reload: false,
    collapse: true,
    status: "Opened",
    role: "All",
    selectStatus: "All",
    verified: "All",
    department: "All",
    defaultColDef: {
      sortable: true
    },
    searchVal: "",
    
  }

  async componentDidMount() {
    await axios.get("api/users/list").then(response => {
      let rowData = response.data
      this.setState({ rowData })
    })
  }

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }

  filterData = (column, val) => {
    var filter = this.gridApi.getFilterInstance(column)
    var modelObj = null
    if (val !== "all") {
      modelObj = {
        type: "equals",
        filter: val
      }
    }
    filter.setModel(modelObj)
    this.gridApi.onFilterChanged()
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        pageSize: val
      })
    }
  }
  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
    this.setState({
      searchVal: val
    })
  }

  refreshCard = () => {
    this.setState({ reload: true })
    setTimeout(() => {
      this.setState({
        reload: false,
        role: "All",
        selectStatus: "All",
        verified: "All",
        department: "All"
      })
    }, 500)
  }

  toggleCollapse = () => {
    this.setState(state => ({ collapse: !state.collapse }))
  }
  onEntered = () => {
    this.setState({ status: "Opened" })
  }
  onEntering = () => {
    this.setState({ status: "Opening..." })
  }

  onEntered = () => {
    this.setState({ status: "Opened" })
  }
  onExiting = () => {
    this.setState({ status: "Closing..." })
  }
  onExited = () => {
    this.setState({ status: "Closed" })
  }
  removeCard = () => {
    this.setState({ isVisible: false })
  }

  render() {
    const { rowData, columnDefs, defaultColDef, pageSize } = this.state
    return (
      <Row className="app-user-list">
        <Col sm="12">
              <Breadcrumbs
                 breadCrumbTitle="Student By Program"
                 breadCrumbParent="Home"
                 breadCrumbActive="Student By Program"
               />
          <Card
            className={classnames("card-action card-reload", {
              "d-none": this.state.isVisible === false,
              "card-collapsed": this.state.status === "Closed",
              closing: this.state.status === "Closing...",
              opening: this.state.status === "Opening...",
              refreshing: this.state.reload
            })}
          >
            <CardHeader>
              <CardTitle>Filter Student By Program</CardTitle>
              <div className="actions">
                <ChevronDown
                  className="collapse-icon mr-50"
                  size={15}
                  onClick={this.toggleCollapse}
                />
                <RotateCw
                  className="mr-50"
                  size={15}
                  onClick={() => {
                    this.refreshCard()
                    this.gridApi.setFilterModel(null)
                  }}
                />
                <X size={15} onClick={this.removeCard} />
              </div>
            </CardHeader>
            <Collapse
              isOpen={this.state.collapse}
              onExited={this.onExited}
              onEntered={this.onEntered}
              onExiting={this.onExiting}
              onEntering={this.onEntering}
            >
              <CardBody>
                {this.state.reload ? (
                  <Spinner color="primary" className="reload-spinner" />
                ) : (
                  ""
                )}
                <Row>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                      <Label for="role">Program</Label>
                      <Input
                        type="select"
                        name="role"
                        id="role"
                      >
                        <option value="All">All</option>
                        <option value="User">Little Tigers</option>
                        <option value="Staff">Taekwondo</option>
                        <option value="Admin">Kickboxing</option>
                        <option value="Admin">Tasma</option>
                        <option value="Admin">Teen & Adult</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                      <Label for="status">Category</Label>
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
                        <option value="All">All</option>
                        <option value="Active">Level1</option>
                        <option value="Blocked">Level2</option>
                        <option value="Deactivated">Level3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                      <Label for="verified">Select SubCategory</Label>
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
                        <option value="All">All</option>
                        <option value="True">adult master club</option>
                        <option value="False">False</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="6" sm="12">
                    <FormGroup className="mb-0">
                    
                             <Button.Ripple color="primary"  style={{marginTop:"16px"}} outline>
                                <Download size="15" />
                                <span className="align-middle ml-50">Export</span>
                         </Button.Ripple>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>
        </Col>
    
      </Row>
    )
  }
}

export default UsersList

