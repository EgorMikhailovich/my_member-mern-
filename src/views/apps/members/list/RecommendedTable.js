import React from "react"
import {
  Card,
  CardBody,
  Label,
  Row,
  Col,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,

} from "reactstrap"
import axios from "axios"
import { ContextLayout } from "../../../../utility/context/Layout"
import { AgGridReact } from "ag-grid-react"
import {
  ChevronDown,
  Info,
  Mail,
  Phone,
  Eye,
} from "react-feather"
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
        width: 50,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true
      },
      
      {
        headerName: "Full Name",
        field: "name",
        filter: true,
        width: 200
      },
      {
        headerName: "Date of Exam",
        field: "status",
        filter: true,
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
        headerName: "Current Rank",
        field: "country",
        filter: true,
        width: 200
      },
      {
        headerName: "Next Rank",
        field: "status",
        filter: true,
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
        headerName: "Belt Size",
        field: "",
        filter: true,
        width: 150
      },
      {
        headerName: "Program Type",
        field: "",
        filter: true,
        width: 150
      },
      {
        headerName: "Print Test Paper",
        field: "",
        filter: true,
        width: 150
      },

      
      {
        headerName: "Register",
        field: "",
        filter: true,
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
        headerName: "Delete",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
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
      }
    ],
    getRowHeight: function (params) {
      return 70;
    }
  }

  async componentDidMount() {
    await axios.get("api/users/list").then(response => {
      let rowData = response.data
      console.log(rowData);
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
                      {/* <Button.Ripple className="mr-1 mb-1" color="primary">
                        Strip
                      </Button.Ripple>{" "} */}
                    <div className="dropdown actions-dropdown">
                      <UncontrolledButtonDropdown>
                        <Label>SortBy:</Label>
                        <DropdownToggle className="px-2 py-75" color="white">
                        Sort By
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <span className="align-middle ml-50">View All</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <span className="align-middle ml-50">Master Club</span>
                          </DropdownItem>
                          <DropdownItem tag="a">                           
                            <span className="align-middle ml-50">Instructor Club</span>
                          </DropdownItem>
                          <DropdownItem tag="a">                            
                            <span className="align-middle ml-50">Black Belt Club</span>
                          </DropdownItem>
                          

                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
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
