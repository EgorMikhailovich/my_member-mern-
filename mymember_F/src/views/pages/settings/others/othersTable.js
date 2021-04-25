import React from "react"
import {
  Card,
  CardBody,
  Input,
  Row,
  Col

} from "reactstrap"
import SweetAlert from 'react-bootstrap-sweetalert';
import { ContextLayout } from "../../../../utility/context/Layout"
import { AgGridReact } from "ag-grid-react"
import OthersModal from "./othersModal"
import {connect} from 'react-redux';
import {Get_CAMP_LIST,trashCamp} from '../../../../redux/actions/settings/schedule';
import {
  Edit,
  Trash2
} from "react-feather"
import { history } from "../../../../history"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"
import { addData } from "../../../../redux/actions/data-list"
import { icon } from "leaflet"
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
    defaultAlert : false, 
   confirmAlert : false, 
   cancelAlert : false, 
    defaultColDef: {
      sortable: true,
      resizable:true
    },
    searchVal: "",
    columnDefs: [
     
      // {
      //   headerName: "Photo",
      //   field: "memberprofileImage",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: params => {
  
      //     return (
      //       <div
      //         className="d-flex align-items-center cursor-pointer"
      //         onClick={() => history.push({
      //           pathname : "/student-info",
      //           state : {
      //             userId : params.data.userId,
      //             studentId : params.data._id,
      //             data : params.data
      //           }
      //         })}
      //       >
      //         <img
      //           className="rounded-circle mr-50"
      //           src={params.value}
      //           alt="user avatar"
      //           height="50"
      //           width="50"
      //         />
      //         {/* <span>{params.data.name}</span> */}
      //       </div>
      //     )
      //   }
      // },
      {
        headerName: "Camp",
        field: "campName",
        filter: true,
        width: 140,
        // cellRendererFramework : (params) => {
        //   return `${params.value[0].toUpperCase()}${params.value.substr(1).toLowerCase()}`;
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
    // await axios.get("api/users/list").then(response => {
    //   let rowData = response.data
    //   this.setState({ rowData })
    // })
    this.props.Get_CAMP_LIST();
  }
  renderButton(params) {
    // console.log("????",params.data["_id"]);
    return (
      <>
      <Trash2   
        className="mr-50"
        size={18}
        onClick={() =>
          this.props.trashCamp(params.data["_id"])
        }
      />
      <Edit  
        className="mr-50"
        size={18} 
        />
      </>
      
    );
  }
  handleAlert = (state, value) => {
    this.setState({ [state] : value })
  }
  componentDidUpdate(prevProps){
     if(prevProps.campInfolist !== this.props.campInfolist){
      this.handleAlert("defaultAlert", true)
       this.setState({
         rowData : this.props.campInfolist
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
                  <OthersModal/>
                   
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
               {/* <div>
               <SweetAlert title="Are you sure?" 
                 warning
                 show={this.state.defaultAlert}
                 showCancel
                 reverseButtons
                 cancelBtnBsStyle="danger"
                 confirmBtnText="Yes, delete it!"
                 cancelBtnText="Cancel"
                 onConfirm={() => {
                   this.handleAlert("basicAlert", false)
                   this.handleAlert("confirmAlert", true)
                 }}
                 onCancel={() => {
                   this.handleAlert("basicAlert", false)
                   this.handleAlert("cancelAlert", true)
                 }}
               >
                 You won't be able to revert this!
               </SweetAlert>
               
               <SweetAlert success title="Deleted!" 
                 confirmBtnBsStyle="success"
                 show={this.state.confirmAlert} 
                 onConfirm={() => {
                   this.handleAlert("defaultAlert", false)
                   this.handleAlert("confirmAlert", false)
                 }}
               >
                   <p className="sweet-alert-text">Your file has been deleted.</p>
               </SweetAlert>
               
               <SweetAlert error title="Cancelled" 
                 confirmBtnBsStyle="success"
                 show={this.state.cancelAlert} 
                 onConfirm={() =>{
                   this.handleAlert("defaultAlert", false)
                   this.handleAlert("cancelAlert", false)
                 }}
               >
                   <p className="sweet-alert-text">
                     Your imaginary file is safe :)
                   </p>
               </SweetAlert>
                </div> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      campInfolist : state.setting.campInfolist
    }
}

export default connect(mapStateToProps, {Get_CAMP_LIST,trashCamp})(UsersList)
