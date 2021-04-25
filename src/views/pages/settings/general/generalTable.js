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
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
  Spinner,Button

} from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import axios from "axios"
import { ContextLayout } from "../../../../utility/context/Layout"
import { AgGridReact } from "ag-grid-react"
import UserModal from "./usersModal"
import {
  Edit,
  Trash2,
  ChevronDown,
  Clipboard,
  Printer,
  Download,
  Info,
  Mail,
  Phone,
  Eye,
  RotateCw,
  Home,
  X,
  Plus,
  User,
  Delete
} from "react-feather"
import classnames from "classnames"
import { history } from "../../../../history"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"
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
      sortable: true,
      resizable:true
    },
    searchVal: "",
    columnDefs: [
      {
        headerName: "",
        field: "",
        width: 80,
        // filter: false,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true
      },
      {
        headerName: "Photo",
        field: "username",
        // filter: false,
        width: 120,
        cellRendererFramework: params => {
          return (
            <div
              className="d-flex align-items-center cursor-pointer"
              onClick={() => history.push("/student-info")}
            >
              <img
                className="rounded-circle mr-50"
                src={params.data.avatar}
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
        field: "name",
        // filter: false,
        width: 200
      },
      {
        headerName: "User Name",
        field: "name",
        // filter: false,
        width: 200
      },
      {
        headerName: "Primary Phone",
        field: "name",
        // filter: false,
        width: 200
      },
      {
        headerName: "Email",
        field: "name",
        // filter: false,
        width: 200
      },
      {
        headerName: "Status",
        field: "status",
        // filter: false,
        width: 150,
        cellRendererFramework: params => {
          return params.value === "active" ? (
            <div className="badge badge-pill badge-light-danger">
             None
            </div>
          ) : params.value === "blocked" ? (
            <div className="badge badge-pill badge-light-danger">
              None
            </div>
          ) : params.value === "deactivated" ? (
            <div className="badge badge-pill badge-light-danger">
               None
            </div>
          ) : null
        }
      },
      
      
     
      {
        headerName: "Profile Type",
        field: "status",
        // filter: false,
        width: 200,
        cellRendererFramework: params => {
          return params.value === "active" ? (
            <div className="badge badge-pill badge-light-success">
             Regular
            </div>
          ) : params.value === "blocked" ? (
            <div className="badge badge-pill badge-light-danger">
              {/* {params.value} */}
              N/A

            </div>
          ) : params.value === "deactivated" ? (
            <div className="badge badge-pill badge-light-warning">
              {params.value}
            </div>
          ) : null
        }
      },
      {
        headerName: "Permissions",
        field: "",
        // filter: false,
        width: 150
      },
      {
        headerName: "Password",
        field: "",
        // filter: false,
        width: 150
      },
      
      
      {
        headerName: "Manage",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              
              
              <Eye
               className="mr-50"
               size={20}
              />
              <Edit 
               className="mr-50"
               size={20} 
               />
              <Delete
               className="mr-50"
               size={20}
              />
            </div>
          )
        }
      }
    ],
    getRowHeight: function (params) {
      return 70;
    }
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
      
          <Card>
            <CardHeader> 
             
              <UserModal/>
                
              
            </CardHeader>
            <CardBody>
              <div className="ag-theme-material ag-grid-table">
                
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
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default UsersList
