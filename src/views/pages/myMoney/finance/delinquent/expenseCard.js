import React from "react"
import { Row, Col,CardBody,Card,CardHeader, CardTitle } from "reactstrap"
import "../../../../../assets/scss/pages/users.scss"
import { GetMonthlyPaymentList } from '../../../../../redux/actions/mymoney/index';
import { connect } from 'react-redux';



class TopProgram extends React.Component {


   componentDidMount() {
      this.props.GetMonthlyPaymentList();
 }
  render() {
    return (
      <React.Fragment>
        
        <Row>
          <Col lg="3" md="12">
          <Card>
                <CardHeader className="pd-add cd-h">
                    <CardTitle style={{textAlign:"center",fontSize:"17px",color:"white"}}>Monthly Payment</CardTitle>
                </CardHeader>
                {console.log(">>>>>",this.props.monthlyPaymentList)}
                {/* { this.props?.monthlyPaymentList.pay.length > 0 && 
                  this.props?.monthlyPaymentList.pay.reverse().map((v,i) =>  */}
              <CardBody className="cd_height1" >
                  <Row>
                     <div className="box">
                        <div className="lf-text">
                          <p className="st-1">In House Received:</p>
                        </div>
                        <div className="rh-text">
                           <p className="st-2">$0</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Auto Pay Received:</p>
                        </div>
                        <div className="rh-text">
                         <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Total Recieved:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-2">${this.props.monthlyPaymentList.total_recieve}</p>
                        </div>
                     </div>
                     
                  </Row>
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
     monthlyPaymentList: state.mymoney.monthlyPaymentList
   }
 }
 
 export default connect(mapStateToProps, { GetMonthlyPaymentList })(TopProgram)

