import React from "react"
import {
  Card,
  CardHeader,
  CardBody,Row,Col
} from "reactstrap"
import {Edit,Trash } from "react-feather"
import {connect} from 'react-redux';
import BuyNowModal from "./buyNowModal"
import {getTests,trashTestPaper} from '../../../../redux/actions/shop';

class TestPaper extends React.Component {
    
    componentDidMount(){
        this.props.getTests();
    }
    
    render() {
    return (
      <React.Fragment>
            <Row>
                
                <Col> 
                <br></br>
                    <h6> All Test</h6>
                <br></br>
                </Col>
            </Row>
            <Row>
                { this.props.shop?.testpaperList.length > 0 && 
                  this.props.shop?.testpaperList.reverse().map((v,i) => <Col lg="3" md="12" key={v._id}>
                    
                  <Card>
                        <CardHeader style={{background:`${v.color}`,padding:"5px 10px"}} >
                            <h6 style={{color:"#fff",margin:"0",fontWeight:"500", fontSize:"16px"}}>{v.fees_name}</h6>
                            <div>
                              <Edit size="15" color="#fff"/>
                              <Trash size="15" color="#fff"
                               onClick={e => {
                                e.stopPropagation()
                                this.props.trashTestPaper(v._id)
                                console.log("ljlkhj")
                              }}
                              />
                            </div>
                        </CardHeader>
                        <CardBody style={{padding:"10px"}}>
                                <Row>
                                    <Col><p>Program:</p></Col>
                                    <Col>{v.programName}</Col>
                                </Row>
                                <Row>
                                    <Col><p>Price:</p></Col>
                                    <Col>{v.total_price}</Col>
                                </Row>
                                <Row>
                                    <Col><p>Fees Description:</p></Col>
                                    <Col><p>{v.fees_description}</p></Col>
                                </Row>
                                <Row>
                                   <Col></Col>
                                   <Col> <BuyNowModal/> </Col>
                                </Row>
                        </CardBody>
                  </Card> 
                </Col>)}
            </Row>
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
   return {
       shop : state.shop
   }
}

export default connect(mapStateToProps, {getTests,trashTestPaper})(TestPaper);