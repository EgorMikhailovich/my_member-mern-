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
  DropdownToggle

} from "reactstrap"
import { ContextLayout } from "../../../../utility/context/Layout"
import { GetExpenseList, trashExpense } from '../../../../redux/actions/mymoney/index';
import { connect } from 'react-redux';
import { AgGridReact } from "ag-grid-react"
import {

  ChevronDown,
  Trash2,
  Edit
} from "react-feather"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"
import Spinner from "../../../../components/@vuexy/spinner/Loading-spinner"
import NewExpense from "./addExpenseModal"
import SweetAlert from 'react-bootstrap-sweetalert';


class UsersLists extends React.Component {
  state = {
    rowData: null,
    // defaultAlert : false,
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
        field: "expense_image",
        width: 120,
        cellRendererFramework: params => {

          return (
            <div
              className="d-flex align-items-center cursor-pointer"
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
        headerName: "Category",
        field: "category",
        width: 140,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.category}</span>
             
            </div>
          )
        }
      },

      {
        headerName: "Type",
        field: "expenses",
        width: 140,
        cellRendererFramework: (params) => {
          return `${params.value[0].toUpperCase()}${params.value.substr(1).toLowerCase()}`;
        }
      },

      {
        headerName: "Subject",
        field: "subject",
        width: 180,
      },
      {
        headerName: "Amount",
        field: "amount",
        width: 120,
      },
      
      
      {
        headerName: "Date",
        field: "date",
        filter: true,
        width: 150,
        // cellRendererFramework: params => {
        //   return (
        //     <div className="d-flex align-items-center cursor-pointer">
        //       <span>{params.date.category}</span>
             
        //     </div>
        //   )
        // }
      },
      {
        headerName: "Manage",
        field: "",
        width: 150,
        cellRendererFramework: this.renderButton.bind(this)
       
      }
    ],
    getRowHeight: function (params) {
      return 70;
    }
  }

  componentDidMount() {

    this.props.GetExpenseList();
  }
//   deleteMemberShip = ()=>{
//     this.setState({defaultAlert:true})
// }
// handleAlert = (action,id)=>{
//   console.log("+++++++++++++alert",action)
//   if(action === 'confirmAlert'){
//    this.props.trashExpense(id)
//   }
//   this.setState({defaultAlert:false})
// }

  renderButton(params) {
    // console.log("????",params);
    return (
      <>
      <Trash2   
        className="mr-50"
        size={18}
        onClick={() => 
          this.props.trashExpense(params.data["_id"])
        }
      />
      <Edit  
        className="mr-50"
        size={18} 
        />
      </>
      
    );
  }
  componentDidUpdate(prevProps) {
    // console.log("}}}}",this.props.expenseList.all_total)
    this.props.expenseList.all_total.map((item,i)=>
    {
      // console.log("}}}}",item.exp_List)
      if (prevProps.expenseList !== this.props.expenseList) {
        this.setState({
          rowData: item.exp_List,
          loading: false
         
        })
      }
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
                  <div className="sort-dropdown" style={{display:"flex"}}>
                    <UncontrolledDropdown className="ag-dropdown p-1" >
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
                    <NewExpense/>
                   
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
                        floatingFilter={false}
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
    expenseList: state.mymoney.expenseList
  }
}

export default connect(mapStateToProps, { GetExpenseList, trashExpense })(UsersLists)
