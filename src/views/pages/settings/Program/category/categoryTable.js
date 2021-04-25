import React from "react"
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  CardHeader


} from "reactstrap"
import { ContextLayout } from "../../../../../utility/context/Layout"
import {Get_SUBUSER_LIST,trashSubUser} from '../../../../../redux/actions/settings/schedule';
import { AgGridReact } from "ag-grid-react";
import {Edit,Trash2} from "react-feather";
import {connect} from 'react-redux';
import AddSubUser from './subCategoryModal'
import { history } from "../../../../../history"
// import StudentlistuserEyeModal from "./studentlistuserEyeModal"
import "../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../../assets/scss/pages/users.scss"
class UrgentCallList extends React.Component {
  state = {
    rowData: null,
    pageSize: 10,
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
        headerName: "Program",
        field: "fullName",
        filter: true,
        width: 150
      },
      {
        headerName: "Category",
        field: "userName",
       filter: true,
        width: 150
      },
      {
        headerName: "Sub Category",
        field: "phone",
       filter: true,
        width: 180
      },
      {
        headerName: "Label",
        field: "email",
       filter: true,
        width: 180
      },
      {
        headerName: "Manage",
        field: "",
        filter: false,
        width: 110,
        cellRendererFramework: this.renderButton.bind(this)
      },
      
    ],
    getRowHeight: function (params) {
      return 70;
    }
  }

  componentDidMount() {
   this.props.Get_SUBUSER_LIST();
  }

  renderButton(params) {
    // console.log("????",params.data["_id"]);
    return (
      <>
      <Trash2   
        className="mr-50"
        size={18}
        onClick={() =>
          this.props.trashSubUser(params.data["_id"])
        }
      />
      <Edit  
        className="mr-50"
        size={18} 
        />
      </>
      
    );
  }
  componentDidUpdate(prevProps){
    // console.log("???????????????",this.props.subuserlist)

    if(prevProps.subuserlist !== this.props.subuserlist){
      this.setState({
        rowData : this.props.subuserlist
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

  // refreshCard = () => {
  //   this.setState({ reload: true })
  //   setTimeout(() => {
  //     this.setState({
  //       reload: false,
  //       role: "All",
  //       selectStatus: "All",
  //       verified: "All",
  //       department: "All"
  //     })
  //   }, 500)
  // }

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
           <h5 style={{fontSize:"20px"}}>Categories</h5>
           </CardHeader>
            <CardBody>
              <div className="ag-theme-material ag-grid-table">
                <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
                  <div className="sort-dropdown">
                    <AddSubUser/>
                    
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
                {/* {console.log(">>>>432", this.state)} */}
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
                        animateRows={false}
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
    subuserlist : state.setting.subuserlist
  }
}
export default connect(mapStateToProps, {Get_SUBUSER_LIST,trashSubUser})(UrgentCallList)