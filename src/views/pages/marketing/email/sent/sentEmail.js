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
import { ContextLayout } from "../../../../../utility/context/Layout"
import { GetAllEmailList } from '../../../../../redux/actions/mymoney/index';
import { connect } from 'react-redux';
import { AgGridReact } from "ag-grid-react"
import {

  ChevronDown,
  Edit
} from "react-feather"
import "../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../../assets/scss/pages/users.scss"
import Spinner from "../../../../../components/@vuexy/spinner/Loading-spinner"


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
        headerName: "Date",
        field: "sent_date",
        width: 130,
        },
      {
        headerName: "From",
        field: "from",
        // cellRendererFramework: params => {
        //   return (
        //     <div className="d-flex align-items-center cursor-pointer">
        //       <span>{params.data.category}</span>
             
        //     </div>
        //   )
        // }
      },

      {
        headerName: "Sent To",
        field: "to",
        // cellRendererFramework: params => {
        //   return (
        //     <div className="d-flex align-items-center cursor-pointer">
        //       <span>{params}</span>
             
        //     </div>
        //   )
        // }
      },

      {
        headerName: "Subject",
        field: "subject",
        // width: 180,
      },
      {
        headerName: "Category",
        field: "category",
        width: 120,
      },
      
      
      {
        headerName: "Status",
        field: "email_type",
        width: 150,
      },
      {
        headerName: "View",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
               <a href="/email/sent">
               <Edit
                className="mr-50"
                size={16}
              />   
                </a> 
             

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

    this.props.GetAllEmailList();
  }

  componentDidUpdate(prevProps) {
    console.log("}}}}",this.props.emailList)
    // this.props.emailList.map((item,i)=>
    // {
    //   console.log("}}}}",item)
    //   if (prevProps.emailList !== this.props.emailList) {
    //     this.setState({
    //       rowData: item,
    //       loading: false
         
    //     })
    //   }
    // })
    if (prevProps.emailList !== this.props.emailList) {
        this.setState({
          rowData: this.props.emailList,
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
    emailList: state.mymoney.allEmailList
  }
}

export default connect(mapStateToProps, { GetAllEmailList })(UsersLists)
