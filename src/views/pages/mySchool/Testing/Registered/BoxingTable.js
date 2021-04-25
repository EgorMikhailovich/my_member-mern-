import React from "react"
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap"
import axios from "axios"
import { ContextLayout } from "../../../../../utility/context/Layout"
import { AgGridReact } from "ag-grid-react"
import {
  ChevronDown,
  Info,
  Mail,
  Phone,
  Eye,
} from "react-feather"
import { history } from "../../../../../history"
import "../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../../assets/scss/pages/users.scss"
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
        width: 50,
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
              onClick={() => history.push("/app/user/edit")}
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
        headerName: "Current Rank",
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
        headerName: "Next Rank",
        field: "country",
        // filter: false,
        width: 200
      },
      {
        headerName: "Phone",
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
        headerName: "Last Promoted",
        field: "",
        // filter: false,
        width: 150
      },
      {
        headerName: "Status",
        field: "country",
        // filter: false,
        width: 200
      },
      // {
      //   headerName: "Email",
      //   field: "email",
      //   // filter: false,
      //   width: 250
      // },
      
     
      {
        headerName: "Program",
        field: "",
        // filter: false,
        width: 150
      },
      {
        headerName: "Paid",
        field: "",
        // filter: false,
        width: 150
      },

      
      {
        headerName: "Method",
        field: "",
        // filter: false,
        width: 125,
        cellRendererFramework: params => {
          return params.value === "active" ? (
            <div className="badge badge-pill badge-light-warning">
             876
            </div>
          ) : params.value === "blocked" ? (
            <div className="badge badge-pill badge-light-warning">
              8768
            </div>
          ) : params.value === "deactivated" ? (
            <div className="badge badge-pill badge-light-warning">
               786
            </div>
          ) : null
        }
       
      },
      {
        headerName: "View Receipt",
        field: "",
        // filter: false,
        width: 150
      },
     
      // {
      //   headerName: "Department",
      //   field: "department",
      //   // filter: false,
      //   width: 160
      // },
      {
        headerName: "Print",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              {/* <Edit
                className="mr-50"
                size={15}
                onClick={() => history.push("/app/user/edit")}
              />
              <Trash2
                size={15}
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows()
                  this.gridApi.updateRowData({ remove: selectedData })
                }}
              /> */}
              <Info   
              className="mr-50"
              size={20}
              />
              <Eye
               className="mr-50"
               size={20}
              />
              <Mail 
               className="mr-50"
               size={20} 
               />
              <Phone
               className="mr-50"
               size={20}
              />
            </div>
          )
        }
      },
      {
        headerName: "Promoted",
        field: "",
        // filter: false,
        width: 150
      },
      
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
