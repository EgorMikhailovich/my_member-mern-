import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button

} from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
// import axios from "axios"
import { ContextLayout } from "../../../../utility/context/Layout"
import { GET_ACTIVE_STUDENT } from '../../../../redux/actions/newstudent/index';
import { connect } from 'react-redux';
import { AgGridReact } from "ag-grid-react"
import {

  ChevronDown,
  Printer,
  Download,
  Info,
  // Mail,
  Phone,
  // Eye,
  Plus
} from "react-feather"
// import classnames from "classnames"
import { history } from "../../../../history"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"
import CandidateModal from "./CandidateModal"
import TestModal from "./TestModal"
// import Spinner from ""
import Spinner from "../../../../components/@vuexy/spinner/Loading-spinner"

// import { css } from "@emotion/core";
import StudentlistuserEyeModal from "./studentlistuserEyeModal"
import StudentlistuserEmailModal from "../../../pages/studentlistEmailicon/studentlistuserEmailModal"
import StusercalliconModal from "../../../pages/studentlisticoncall/stusercalliconModal"

// const override = css`
//   display: block;
//   margin: 0 auto;
//   margin-top: 45px;
//   border-color: red;
// `;

class UsersLists extends React.Component {
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
    loading: true,
    defaultColDef: {
      sortable: true,
      resizable: true
    },
    searchVal: "",
    columnDefs: [
      {
        headerName: "",
        field: "",
        width: 50,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true
      },
      {
        headerName: "Photo",
        field: "memberprofileImage",
        filter: true,
        width: 120,
        cellRendererFramework: params => {

          return (
            <div
              className="d-flex align-items-center cursor-pointer"
              onClick={() => history.push({
                pathname: "/student-info",
                state: {
                  userId: params.data.userId,
                  studentId: params.data._id,
                  data: params.data
                }
              })}
            >
              <img
                className="rounded-circle mr-50"
                src={params.value}
                alt="user avatar"
                height="50"
                width="50"
              />
              {/* <span>{params.data.name}</span> */}
            </div>
          )
        }
      },
      {
        headerName: "Full Name",
        field: "firstName",
        filter: true,
        width: 140,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.firstName}</span>
              <span>{params.data.lastName}</span>
            </div>
          )
        }
      },
      {
        headerName: "Last Name",
        field: "lastName",
        filter: true,
        width: 140,
        cellRendererFramework: (params) => {
          return `${params.value[0].toUpperCase()}${params.value.substr(1).toLowerCase()}`;
        }
      },

      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 130,
        cellRendererFramework: params => {
          return params.value.toLowerCase() === "active" ? (
            <div className="badge badge-pill badge-light-success">
              Active
            </div>
          ) : params.value.toLowerCase() === "expired" ? (
            <div className="badge badge-pill badge-light-danger">
              Expired
            </div>
          ) : params.value.toLowerCase() === "Freezed" ? (
            <div className="badge badge-pill badge-light-yellow">
              Frozen
            </div>
          ) : params.value.toLowerCase() === "overdue" ? (
            <div className="badge badge-pill badge-light-orange">
              Overdue
            </div>
          ) : params.value.toLowerCase() === "terminate" ? (
            <div className="badge badge-pill badge-light-danger">
              Terminate
            </div>
          ) : params.value.toLowerCase() === "inactive" ? (
            <div className="badge badge-pill badge-light-grey">
              None
            </div>
          ) : <div className="badge badge-pill badge-light-light">
                        ---
       </div>
        }
      },
      {
        headerName: "Primary Phone",
        field: "primaryPhone",
        filter: true,
        width: 170
      },
     
      {
        headerName: "Program Category",
        field: "category",
        filter: true,
        width: 190,
        cellRendererFramework: params => {
          return params.value=== "program3" ? (
            <div className="badge badge-pill badge-light-orange">
             Pragrame3
            </div>
          ) : params.value === "Program 4" ? (
            <div className="badge badge-pill badge-light-grey">
             Program 4

            </div>
          ) : <div className="badge badge-pill badge-light-light">
          <div className="badge badge-pill badge-light-grey">
            N/A
          </div>
       </div>
        }
      },
      {
        headerName: "Start Date",
        field: "createdAt",
        filter: true,
        width: 150
      },
      {
        headerName: "Expiry Date",
        field: "createdAt",
        filter: true,
        width: 150,
        // cellRendererFramework: params => {
        //   return params.value.toUpperCase();
        // }
      },
      {
        headerName: "Rating",
        field: "rating",
        filter: true,
        width: 120,
        cellRendererFramework: params => {
          return params.value == 0 ? (
            <div className="badge-light-dangers">
              {params.value}
            </div>
          ) :params.value <= 7 ? (
            <div className="badge-light-successs">
              {params.value}
            </div>
          ) : params.value <= 15 ? (
            <div className="badge-light-yellows">
              {params.value}
            </div>
          ): params.value <= 1000 ? (
            <div className="badge-light-dangers">
             {params.value}
            </div>
          ) : <div className="badge badge-pill badge-light-light">
                        ---
       </div>
        }
       
      },

      {
        headerName: "Belt Rank",
        field: "belt_rank",
        filter: true,
        width: 120,
        cellRendererFramework: params => {

          return (
            <div
              className="">
              <img
                className="mr-50"
                src={params.value}
                alt="user avatar"
                height="30"
                width="40"
              />
              {/* <span>{params.data.name}</span> */}
            </div>
          )
        }
      },
      {
        headerName: "Manage",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              <Info
                className="mr-50"
                size={18}
              />
              <StudentlistuserEyeModal />

              <StudentlistuserEmailModal />
              <StusercalliconModal />
              {/* <Phone
               className="mr-50"
               size={20}
              /> */}

            </div>
          )
        }
      }
    ],
    getRowHeight: function (params) {
      return 70;
    }
  }

  componentDidMount() {

    this.props.GET_ACTIVE_STUDENT();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active_student !== this.props.active_student) {
      this.setState({
        rowData: this.props.active_student,
        loading: false
       
      })
    }
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
            breadCrumbTitle="Active Student"
            breadCrumbParent="Home"
            breadCrumbActive="Active Student"
          />
          <Card>
            <CardHeader style={{padding:"0.5rem 1.5rem 0"}}>
              <div className="list-icon">
                <a href="/data-list/add-new-student">
                  <Button
                    className="btn-lg fides btn waves-effect waves-light"
                    onClick={this.toggleModal}
                  >
                    <Plus size={21} />
                    <br></br>
                  Add
                </Button>
                </a>

                <Button className="btn-lg fides5 btn waves-effect waves-light">
                  <Phone size={21} />
                  <br></br>
                  Contact
                </Button>
                {/* <Button className="btn-lg fides4 btn waves-effect waves-light">
                  <User size={21} />
                  <br></br>
                  Candidate
                </Button> */}
                <CandidateModal />
                <TestModal />
                {/* <Button className="btn-lg fides3 btn waves-effect waves-light">
                  <Plus size={21} />
                  <br></br>
                  Test
                </Button> */}
                <Button className="btn-lg fides2 btn waves-effect waves-light">
                  <Printer size={21} />
                  <br></br>
                  Print
                </Button>
                <Button className="btn-lg fides1 btn waves-effect waves-light">
                  <Download size={21} />
                  <br></br>
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardBody style={{padding:"0.5rem 1rem"}}>
              <div className="ag-theme-material ag-grid-table">
                <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
                  <div className="sort-dropdown">
                    <UncontrolledDropdown className="ag-dropdown p-1">
                      <DropdownToggle tag="div">
                        1 - {pageSize} of 150
                        <ChevronDown className="ml-50" size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(20)}
                        >
                          20
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(50)}
                        >
                          50
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(100)}
                        >
                          100
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(150)}
                        >
                          150
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="filter-actions d-flex">
                    <Input
                      className="w-70 mr-1 mb-1 mb-sm-0"
                      type="text"
                      placeholder="search..."
                      onChange={e => this.updateSearchQuery(e.target.value)}
                      value={this.state.searchVal}
                    />
                  </div>
                </div>
                {!this.state.loading ? (
                  <>
                {this.state.rowData !== null ? (
                  <ContextLayout.Consumer>
                    {context => (
                      <AgGridReact

                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={true}
                        pagination={true}
                        pivotPanelShow="always"
                        paginationPageSize={pageSize}
                        resizable={true}
                        getRowHeight={this.state.getRowHeight}
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                ) : null}
               
               </> ):( <div id="loading-bar">
           
            <Spinner loading={true}/>
          </div>
          )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    active_student: state.student.active_student
  }
}

export default connect(mapStateToProps, { GET_ACTIVE_STUDENT })(UsersLists)
