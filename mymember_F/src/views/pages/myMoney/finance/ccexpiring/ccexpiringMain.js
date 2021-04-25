import React from "react"
import {
  Card,
  CardBody,
  Input,
  Row,
  Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap"
import { ContextLayout } from "../../../../../utility/context/Layout"
import { CCExpiringList } from '../../../../../redux/actions/mymoney/index';
import { AgGridReact } from "ag-grid-react";
import { ChevronDown } from "react-feather";
import { connect } from 'react-redux';
import Breadcrumbs from "../../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../../assets/scss/pages/users.scss"
class UrgentCallList extends React.Component {
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
      resizable: true
    },
    searchVal: "",
    columnDefs: [

      {
        headerName: "First Name",
        field: "firstName",
        filter: false,
        width: 150,
        cellRendererFramework: params => {

          return (


            <div className="">
              {console.log(params)}
              <span>{params.firstName}</span>
            </div>
          )
        }

      },
      {
        headerName: "Last Name",
        field: "lastName",
        filter: false,
        width: 160
      },
      {
        headerName: "Primary Phone",
        field: "primaryPhone",
        filter: false,
        width: 150
      },
      {
        headerName: "Email",
        field: "email",
        filter: false,
        width: 150
      },
      {
        headerName: "Expiry Date",
        field: "cardExpiry",
        filter: false,
        width: 160
      },
      {
        headerName: "Status",
        field: "",
        filter: false,
        width: 150,


      },
      {
        headerName: "Password",
        field: "password",
        filter: false,
        width: 150
      },


      // {
      //   headerName: "Manage",
      //   field: "",
      //   filter: false,
      //   width: 150,
      //   cellRendererFramework: this.renderButton.bind(this)
      // },
      // {
      //     headerName: "Result",
      //     field: "",
      //     filter: false,
      //     width: 150
      // },
    ],
    getRowHeight: function (params) {
      return 70;
    }
  }

  componentDidMount() {
    this.props.CCExpiringList();
  }

  // renderButton(params) {
  //   // console.log("????",params.data["_id"]);
  //   return (
  //     <>
  //     <Trash2   
  //       className="mr-50"
  //       size={18}
  //       onClick={() =>
  //         this.props.trashSubUser(params.data["_id"])
  //       }
  //     />
  //     <Edit  
  //       className="mr-50"
  //       size={18} 
  //       />
  //     </>

  //   );
  // }
  componentDidUpdate(prevProps) {
    console.log("???????????????", this.props.ccExpirylist)

    if (prevProps.ccExpirylist !== this.props.ccExpirylist) {
      this.setState({
        rowData: this.props.ccExpirylist
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
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Finance"
          breadCrumbParent="My Money"
          breadCrumbActive="CC Expiring"
        />
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
                  {/* {console.log(">>>>432", this.state.rowData)} */}
                  {this.state.rowData !== null ? (
                    <ContextLayout.Consumer>
                      {context => (
                        <AgGridReact

                          // gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
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
      </React.Fragment>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    ccExpirylist: state.mymoney.monthlyCCexpiryList,
  }
}
export default connect(mapStateToProps, { CCExpiringList })(UrgentCallList)