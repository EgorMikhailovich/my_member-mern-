import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  ListGroup,
  ListGroupItem
} from "reactstrap"
import { ChevronDown } from "react-feather"
import Chart from "react-apexcharts"
import NewCategoryModal from "./CategoryManagement"
import { connect } from 'react-redux';
import { ExpenseCategoryList, trashCategory } from '../../../../redux/actions/mymoney/index';
import {
  Edit,
  Trash} from "react-feather"
  import SweetAlert from 'react-bootstrap-sweetalert';




class Productorders extends React.Component {
  state = {
    options: {
      chart: {
        dropShadow: {
          enabled: false,
          blur: 5,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: [this.props.primary, this.props.warning, this.props.danger],
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: [
            this.props.primaryLight,
            this.props.warningLight,
            this.props.dangerLight
          ]
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: { show: false },
      stroke: {
        width: 5
      },
      labels: ["Rent", "Payroll", "Others"]
    },
    series: [690, 258, 149],
    defaultAlert: false
  }
  componentDidMount() {
    this.props.ExpenseCategoryList();

  }
  deleteMemberShip = ()=>{
    this.setState({defaultAlert:true})
}

handleAlert = (action,id)=>{
  if(action === 'confirmAlert'){
   this.props.trashCategory(id)
  }
  this.setState({defaultAlert:false})
}

  render() {
    return (
      <Card>
        <CardHeader className="pd-add cd-h3">
          <CardTitle style={{ color: "white" }}>Expenses By Category</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            height={290} />

        </CardBody>


        <ListGroup flush>
          <div>
            <NewCategoryModal isEdit={false} userinfo={null} />
          </div>
          {/* {console.log("??????",this.props.expenseCategoryList)} */}
          {this.props.expenseCategoryList?.expenseCategoryList.length > 0 &&
            this.props.expenseCategoryList?.expenseCategoryList.reverse().map((v, i) =>

              <ListGroupItem className="d-flex justify-content-between">
                <div className="item-info">
                  <div
                    // className="bg-primary"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      margin: "0 5px",
                      backgroundColor:`${v.color}`
                    }}
                  />
                  <span className="text-bold-600">{v.expense_category_type}</span>
                </div>
                <div className="product-result">
                <NewCategoryModal isEdit={true} userinfo={v} />
                <Trash size="16" onClick={this.deleteMemberShip} />
                {/* <Trash size="16" 
                                 onClick={e => {
                                  e.stopPropagation()
                                  this.props.trashCategory(v._id)
                                  console.log("ljlkhj")
                                }}
                               /> */}
                </div>
                <SweetAlert title="Are you sure?" 
                            warning
                            show={this.state.defaultAlert}
                            showCancel
                            reverseButtons
                            cancelBtnBsStyle="danger"
                            confirmBtnText="Yes, delete it!"
                            cancelBtnText="Cancel"
                            onConfirm={() => {
                            this.handleAlert("confirmAlert", v._id)
                            }}
                            onCancel={() => {
                            this.handleAlert("cancelAlert", true)
                            }}
                        >
                            You won't be able to revert this!
                        </SweetAlert>
              </ListGroupItem>
            )}
         

        </ListGroup>
      </Card>
    )
  }
}
// export default Productorders
const mapStateToProps = (state) => {
  return {
    expenseCategoryList: state.mymoney
  }
}
export default connect(mapStateToProps, { ExpenseCategoryList,trashCategory })(Productorders);