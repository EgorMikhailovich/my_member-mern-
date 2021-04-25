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
import { GET_ACTIVE_MEMBER } from '../../../../redux/actions/newmember/index';
import { connect } from 'react-redux';
import { AgGridReact } from "ag-grid-react"
import {
  ChevronDown,
  Printer,
  Plus,
  Mail,
  FileText,
  Upload
} from "react-feather"
import { history } from "../../../../history"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"
import CandidateModal from "./CandidateModal"
import TestModal from "./TestModal"
import Spinner from "../../../../components/@vuexy/spinner/Loading-spinner"


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
                pathname: "/member-info",
                state: {
                  userId: params.data.userId,
                  studentId: params.data._id,
                  data: params.data
                }
              })}
            >
              <img
                className="rounded-circle mr-50"
                src={params.data.logo}
                alt="photo"
                height="50"
                width="50"
              />
              <span>{params.data.firstname}</span>
            </div>
          )
        }
      },
      {
        headerName: "Full Name",
        field: "fullname",
        filter: true,
        width: 140,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.firstname}</span>
              <span>{params.data.lastname}</span>
            </div>
          )
        }
      },
      {
        headerName: "Username",
        field: "username",
        filter: true,
        width: 140,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.username}</span>
            </div>
          )
        }
      },
      {
        headerName: "Password",
        field: "password",
        filter: true,
        width: 140,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.password}</span>
            </div>
          )
        }
      },
      {
        headerName: "Phone",
        field: "phone",
        filter: true,
        width: 140,
        cellRendererFramework: (params) => {
          return <div className="d-flex align-items-center cursor-pointer">
          <span>{params.data.phone}</span>
        </div>
        }
      },
      {
        headerName: "Email",
        field: "email",
        filter: true,
        width: 140,
        cellRendererFramework: (params) => {
          return <div className="d-flex align-items-center cursor-pointer">
          <span>{params.data.email}</span>
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
        headerName: "Status",
        field: "status",
        filter: true,
        width: 130,
        cellRendererFramework: params => {
          return params.data.status.toLowerCase() === "active" ? (
            <div className="badge badge-pill badge-light-success">
              Active
            </div>
          ) : params.data.status.toLowerCase() === "deactivate" ? (
            <div className="badge badge-pill badge-light-danger">
              Inactive
            </div>
          ) : params.data.status.toLowerCase() === "passdue" ? (
            <div className="badge badge-pill badge-light-danger">
            Passdue
            </div>
          ):null
        }
      },
      {
        headerName: "Action",
        field: "action",
        filter: true,
        width: 120,
        cellRendererFramework: params => {

          return (
            <Button
            className="btn-lg fides btn waves-effect waves-light"
          >
              Login  
          </Button>
          )
        }
      },
    ],
    getRowHeight: function (params) {
      return 70;
    }
  }

  componentDidMount() {
    this.props.GET_ACTIVE_MEMBER();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active_member !== this.props.active_member) {
      this.setState({
        rowData: this.props.active_member,
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
            breadCrumbTitle="All Members"
            breadCrumbParent="Home"
            breadCrumbActive="user management"
          />
          <Card>
            <CardHeader>
              <div className="list-icon">
                <a href="/data-list/add-new-member">
                  <Button
                    className="btn-lg fides btn waves-effect waves-light"
                    onClick={this.toggleModal}
                  >
                    <Plus size={21} />
                    <br></br>
                  Add New
                </Button>
                </a>
                <Button className="btn-lg fides5 btn waves-effect waves-light">
                  <Mail size={21} />
                  <br></br>
                  Email
                </Button>
                <Button className="btn-lg fides1 btn waves-effect waves-light">
                  <Upload size={21} />
                  <br></br>
                  Bulk upload
                </Button>
                <CandidateModal />
                <TestModal />
                <Button className="btn-lg fides2 btn waves-effect waves-light">
                  <FileText size={21} />
                  <br></br>
                  Text
                </Button>
                <Button className="btn-lg fides1 btn waves-effect waves-light">
                  <Printer size={21} />
                  <br></br>
                  Print
                </Button>
               
              </div>
            </CardHeader>
            <CardBody>
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
    active_member: state.member.active_member
  }
}

export default connect(mapStateToProps, { GET_ACTIVE_MEMBER })(UsersLists)
