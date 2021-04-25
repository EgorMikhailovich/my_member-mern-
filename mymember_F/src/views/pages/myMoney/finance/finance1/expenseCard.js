import React from "react"
import { Row, Col,CardBody,Card,CardHeader, CardTitle } from "reactstrap"
import "../../../../../assets/scss/pages/users.scss"
import { GetMonthlyPaymentList,ExpenseBreakDownList } from '../../../../../redux/actions/mymoney/index';
import { connect } from 'react-redux';


class TopProgram extends React.Component {
   
   
   componentDidMount() {
         this.props.GetMonthlyPaymentList();
         this.props.ExpenseBreakDownList();
    }
  render() {
    return (
      <React.Fragment>
        
        <Row>
          <Col lg="3" md="12">
          <Card>
             {console.log("?????????",this.props.monthlyPaymentList)}
               <CardHeader className="pd-add cd-h">
                    <CardTitle style={{textAlign:"center",fontSize:"17px",color:"white"}}>Monthly Payment</CardTitle>
                </CardHeader>
                
              <CardBody className="cd_height">
                  <Row>
                     <div className="box">
                        <div className="lf-text">
                          <p className="st-1">In House Received:</p>
                        </div>
                        <div className="rh-text">
                           <p className="st-1">
                              $2000
                           </p>
                  {/* { this.props?.monthlyPaymentList.length > 0 && 
                  this.props?.monthlyPaymentListy.reverse().map((v,i) =>
                          
                             
                           <p className="st-1" key={v._id}>$ 2000
                           {v.total_due}
                           </p>
                         
                  
                  )} */}
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">In House Due:</p>
                        </div>
                        <div className="rh-text">
                          
                         <p className="st-1">$4000</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">In House Total:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">${this.props.monthlyPaymentList.total_inHouse}</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Auto Pay Recived:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Auto Pay due:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Auto pay Total:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">${this.props.monthlyPaymentList.total_autoPay}</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Total due:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">${this.props.monthlyPaymentList.total_due}</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Total Recived:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">${this.props.monthlyPaymentList.total_recieve}</p>
                        </div>
                     </div>
                  </Row>
              </CardBody>
          </Card>
          </Col>
          <Col lg="3" md="12">
          <Card>
                <CardHeader  className="pd-add cd-h1">
                    <CardTitle style={{textAlign:"center",fontSize:"17px",color:"white"}}>Income Breakdown</CardTitle>
                </CardHeader>

               
                <CardBody className="cd_height">
                  <Row>
                     <div className="box">
                        <div className="lf-text">
                          <p className="st-1">Trial:</p>
                        </div>
                        <div className="rh-text">
                           <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">New Students:</p>
                        </div>
                        <div className="rh-text">
                         <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">BBC:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Lc/IC/MC:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Testing:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Camp:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Monthly:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                  </Row>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="3" md="12">
          <Card>
                <CardHeader  className="pd-add cd-h2">
                    <CardTitle style={{textAlign:"center",fontSize:"17px",color:"white"}}>Expense Breakdown</CardTitle>
                </CardHeader>
                
                <CardBody className="cd_height">
                   {/* {console.log(this.props)} */}
                { this.props?.expenseBreakList.length > 0 && 
                  this.props?.expenseBreakList.reverse().map((v,i) =>
                  <Row key={v._id}>
                     <div className="box">
                        <div className="lf-text">
                          <p className="st-1">{v._id}</p>
                        </div>
                        <div className="rh-text">
                           <p className="st-1">${v.total}</p>
                        </div>
                     </div>
                     
                  </Row>
                  )}
              </CardBody>
          </Card>
            
          </Col> 
          <Col lg="3" md="12">
          <Card>
                <CardHeader  className="pd-add cd-h2">
                    <CardTitle style={{textAlign:"center",fontSize:"17px",color:"white"}}>Month End Report</CardTitle>
                </CardHeader>
                
                <CardBody className="cd_height">
                  <Row>
                     <div className="box">
                        <div className="lf-text">
                          <p className="st-1">Monthly Payments:</p>
                        </div>
                        <div className="rh-text">
                           <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Income BreakDown:</p>
                        </div>
                        <div className="rh-text">
                         <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Gross Income:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Expense Breakdown:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Net Income:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Total Cash:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Total credit:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-1">$0 (0)</p>
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

// export default TopProgram
const mapStateToProps = (state) => {
   return {
     monthlyPaymentList: state.mymoney.monthlyPaymentList,
     expenseBreakList:state.mymoney.monthlyBreakDownList,
   }
 }
 
 export default connect(mapStateToProps, { GetMonthlyPaymentList,ExpenseBreakDownList })(TopProgram)
