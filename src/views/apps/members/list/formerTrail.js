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
  Button

} from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import axios from "axios"
import { ContextLayout } from "../../../../utility/context/Layout"
import {GET_FORMER_TRAIL_LIST} from '../../../../redux/actions/newstudent/index';
import {connect} from 'react-redux';
import { AgGridReact } from "ag-grid-react"
import {
  Edit,
  Trash2,
  ChevronDown,
  Printer,
  Download,
  Info,
  Mail,
  Phone,
  Eye,
  Plus,
  User
} from "react-feather"
import { history } from "../../../../history"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import Spinner from "../../../../components/@vuexy/spinner/Loading-spinner"
import "../../../../assets/scss/pages/users.scss"
import CandidateModal from "./CandidateModal"
import TestModal from "./TestModal"

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
    loading:true,
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
                pathname : "/student-info",
                state : {
                  userId : params.data.userId,
                  studentId : params.data._id,
                  data : params.data
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
        headerName: "First Name",
        field: "firstName",
        filter: true,
        width: 140,
        cellRendererFramework : (params) => {
          return `${params.value[0].toUpperCase()}${params.value.substr(1).toLowerCase()}`;
        }
      },
      {
        headerName: "Last Name",
        field: "lastName",
        filter: true,
        width: 140,
        cellRendererFramework : (params) => {
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
          ): params.value.toLowerCase() === "Freezed" ? (
            <div className="badge badge-pill badge-light-yellow">
              Frozen
            </div>
          ): params.value.toLowerCase() === "overdue" ? (
            <div className="badge badge-pill badge-light-orange">
              Overdue
            </div>
          ): params.value.toLowerCase() === "terminate" ? (
            <div className="badge badge-pill badge-light-danger">
              Terminate
            </div>
          ): params.value.toLowerCase() === "inactive" ? (
            <div className="badge badge-pill badge-light-grey">
             None
            </div>
          ):<div className="badge badge-pill badge-light-light"> 
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
      // {
      //   headerName: "Program",
      //   field: "program",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework : (params) => {
      //     return `${params.value.split(" ").map(v => `${v.charAt(0).toUpperCase()}${v.substr(1).toLowerCase()}`).join(" ")}`;
      //   }
      // },
      {
        headerName: "Program Category",
        field: "category",
        filter: true,
        width: 190,
        // cellRendererFramework: params => {
        //   return `${params.value.split(" ").map(v => `${v.charAt(0).toUpperCase()}${v.substr(1).toLowerCase()}`).join(" ")}`;
          // return params.value === "active" ? (
          //   <div className="badge badge-pill badge-light-success">
          //    Regular
          //   </div>
          // ) : params.value === "blocked" ? (
          //   <div className="badge badge-pill badge-light-danger">
          //     {/* {params.value} */}
          //     N/A

          //   </div>
          // ) : params.value === "deactivated" ? (
          //   <div className="badge badge-pill badge-light-warning">
          //     {params.value}
          //   </div>
          // ) : null
        // }
      },
      {
        headerName: "Gender",
        field: "gender",
        filter: true,
        width: 150
      },
      {
        headerName: "Country",
        field: "country",
        filter: true,
        width: 200,
        cellRendererFramework: params => {
          return params.value.toUpperCase();
        }
      },
      // {
      //   headerName: "Email",
      //   field: "email",
      //   filter: true,
      //   width: 250
      // },
      
      {
        headerName: "Belt Size",
        field: "studentBeltSize",
        filter: true,
        width: 150,
        cellRendererFramework : (params) => {
          return `${params.value[0].toUpperCase()}${params.value.substr(1).toLowerCase()}`;
        }
      },
      // {
      //   headerName: "Rating",
      //   field: "",
      //   filter: true,
      //   width: 125,
      //   cellRendererFramework: params => {
      //     return params.value === "active" ? (
      //       <div className="badge badge-pill badge-light-warning">
      //        876
      //       </div>
      //     ) : params.value === "blocked" ? (
      //       <div className="badge badge-pill badge-light-warning">
      //         8768
      //       </div>
      //     ) : params.value === "deactivated" ? (
      //       <div className="badge badge-pill badge-light-warning">
      //          786
      //       </div>
      //     ) : null
      //   }
       
      // },
      // {
      //   headerName: "Department",
      //   field: "department",
      //   filter: true,
      //   width: 160
      // },
      {
        headerName: "Manage",
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
              size={18}
              />
              <Eye
               className="mr-50"
               size={18}
              />
              <Mail 
               className="mr-50"
               size={18} 
               />
              <Phone
               className="mr-50"
               size={18}
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

  componentDidMount() {
    // await axios.get("api/users/list").then(response => {
    //   let rowData = response.data
    //   this.setState({ rowData })
    // })
    this.props.GET_FORMER_TRAIL_LIST();
  }

  componentDidUpdate(prevProps){
     if(prevProps.former_trial_student !== this.props.former_trial_student){
       this.setState({
         rowData : this.props.former_trial_student,
         loading:false
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
          breadCrumbTitle="Former Trail"
          breadCrumbParent="Home"
          breadCrumbActive="Former Trail"
        />
          <Card>
            <CardHeader> 
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
                    {/* <div className="dropdown actions-dropdown">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle className="px-2 py-75" color="white">
                          Actions
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <Trash2 size={15} />
                            <span className="align-middle ml-50">Delete</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Clipboard size={15} />
                            <span className="align-middle ml-50">Archive</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Printer size={15} />
                            <span className="align-middle ml-50">Print</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Download size={15} />
                            <span className="align-middle ml-50">CSV</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div> */}
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
      former_trial_student : state.student.former_trial_student
    }
}

export default connect(mapStateToProps, {GET_FORMER_TRAIL_LIST})(UsersList)
