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
  Spinner,
  Button, Modal, ModalBody, ModalHeader
} from "reactstrap"
import axios from "axios"
import { ContextLayout } from "../../../utility/context/Layout"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import {
  Edit,
  Trash2,
  ChevronDown
} from "react-feather"
import classnames from "classnames"
import { history } from "../../../history"
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../assets/scss/pages/users.scss"
import memberShipModal from './memberShipModal';
import AllMembershipList from "../shop/membership/allMembership";
import { getStudentPurchaseList } from '../../../redux/actions/shop';
import { connect } from 'react-redux';

class UsersList extends React.Component {
  state = {
    modal: false,
    purchaseList: null,
    pageSize: 20,
    isVisible: true,
    reload: false,
    collapse: true,
    status: "Opened",
    role: "All",
    selectStatus: "All",
    verified: "All",
    department: "All",
    // defaultColDef: {
    //   sortable: true
    // },
    searchVal: "",
    columnDefs: [
      {
        headerName: "Membership Name",
        field: "membership_name",
        width: 200
      },
      {
        headerName: "Status",
        field: "membership_status",
        filter: false,
        width: 130,
        cellRendererFramework: params => {
          return params.value.toLowerCase() === "paid" ? (
            <div className="badge badge-pill badge-light-success">
              Paid
            </div>
          ) : params.value.toLowerCase() === "overdue" ? (
            <div className="badge badge-pill badge-light-danger">
              Overdue
            </div>
          ) : params.value.toLowerCase() === "due" ? (
            <div className="badge badge-pill badge-light-orange">
              Due
            </div>
          )
          : params.value.toLowerCase() === "terminate" ? (
            <div className="badge badge-pill badge-light-danger">
              Terminate
            </div>
          ): params.value.toLowerCase() === "freezed" ? (
            <div className="badge badge-pill badge-light-yellow">
              Frozen
            </div>
          ) 
          : <div className="badge badge-pill badge-light-light">
                  ---
       </div>
        }
      },
   
      {
        headerName: "Start Date",
        field: "mactive_date",

        width: 150
      },
      {
        headerName: "Expiry Date",
        field: "expiry_date",

        width: 150
      },
      {
        headerName: "Days Left",
        field: "country",

        width: 100
      },
      {
        headerName: "Type",
        field: "payment_type",

        width: 100
      },
      {
        headerName: "Method",
        field: "pay_inout",

        width: 150
      },

      {
        headerName: "Manage",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              <Edit
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
              />
            </div>
          )
        }
      }
    ]
  }

  getPurchaseList = async () => {
    try {
      let response = await axios.get(`https://www.mymember.com:8080/api/member/member_info/${localStorage.getItem("user_id")}/${this.props.info.studentId}`,
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`
          }
        })
      if (response.data && response.status === 200) {
        let purchaseList = response.data.membership_details

        this.setState({
          purchaseList, loading: false
        }, () => {
          console.log("row data", purchaseList)
        })

        // dispatch({
        //     type: "GET_STUDENT_PURCHASE_LIST",
        //     payload: response.data.membership_details
        // })
      }
    } catch (error) {
      console.log("something went wrong")
    }
  }

  componentDidMount() {

    this.getPurchaseList()

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

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }


  render() {
    const { purchaseList, columnDefs, defaultColDef, pageSize } = this.state

    return (
      <Row className="app-user-list">
        <Col sm="12">
          {/* {console.log("*************", this.props)} */}
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              {/* <memberShipModal /> */}
              <Button.Ripple color="success" onClick={this.toggleModal} >Add New +</Button.Ripple>

              <Modal
                isOpen={this.state.modal}
                toggle={this.toggleModal}
                className="modal-dialog-centered modal-lg"
              >
                <ModalHeader toggle={this.toggleModal}>
                  Add New Membership
                </ModalHeader>
                <ModalBody>
                  <AllMembershipList type={"student profile"} info={this.props.info} />
                </ModalBody>
              </Modal>
              {/* <div className="actions">
                <ChevronDown
                  className="collapse-icon mr-50"
                  size={15}
                  onClick={this.toggleCollapse}
                />
                <RotateCw
                  className="mr-50"
                  size={15}
                  onClick={() => {
                    this.refreshCard()
                    this.gridApi.setFilterModel(null)
                  }}
                />
                <X size={15} onClick={this.removeCard} />
              </div> */}
            </CardHeader>

          </Card>
        </Col>
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
                      className="w-80 mr-1 mb-1 mb-sm-0"
                      type="text"
                      placeholder="search..."
                      onChange={e => this.updateSearchQuery(e.target.value)}
                      value={this.state.searchVal}
                    />
                  </div>
                </div>
                {this.state.purchaseList !== null ? (
                  <ContextLayout.Consumer>
                    {context => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={purchaseList}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        pivotPanelShow="always"
                        paginationPageSize={pageSize}
                        resizable={true}
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
    shop: state.shop
  }
}

export default connect(mapStateToProps, { getStudentPurchaseList })(UsersList);
// export default UsersList
