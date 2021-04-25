import React from "react"
import { Row, Col,CardBody,Card,CardHeader, CardTitle } from "reactstrap"
import "../../../../assets/scss/pages/users.scss"
import { connect } from 'react-redux';
import { GetExpenseList } from '../../../../redux/actions/mymoney/index';


class TopProgram extends React.Component {


  componentDidMount() {

    this.props.GetExpenseList();
  }
  render() {
    return (
      <React.Fragment>
        {/* {console.log("+++++",this.props.expenseList)} */}
        
        <Row>
          <Col lg="4" md="12">
          <Card>
                <CardHeader className="pd-add cd-h">
                    <CardTitle style={{textAlign:"center",fontSize:"16px",color:"white"}}>Total Expenses</CardTitle>
                </CardHeader>
                
              { this.props.expenseList?.all_total.length > 0 && 
                  this.props.expenseList?.all_total.reverse().map((v,i) =>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}} key={v._id}>
                
                  <p>{v.total}</p>
              </CardBody>
                  )}
          </Card>
            
          </Col>
          <Col lg="4" md="12">
          <Card>
                <CardHeader  className="pd-add cd-h1">
                    <CardTitle style={{textAlign:"center",fontSize:"16px",color:"white"}}>Total Gross Income</CardTitle>
                </CardHeader>
               
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>0</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="4" md="12">
          <Card>
                <CardHeader  className="pd-add cd-h2">
                    <CardTitle style={{textAlign:"center",fontSize:"16px",color:"white"}}>Total Net Profit</CardTitle>
                </CardHeader>
                
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>0</p>
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
    expenseList: state.mymoney.expenseList
  }
}

export default connect(mapStateToProps, { GetExpenseList })(TopProgram)
