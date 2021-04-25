import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col

} from "reactstrap";
import ProgramModal from "./programeModal"
import CategoryModal from "./categoryModal"
import {Edit,Trash,Trash2 } from "react-feather"
// import classnames from "classnames"
// import { history } from "../../../../history"
import {connect} from 'react-redux';
import {getProgramList,trashPrograme} from '../../../../redux/actions/programe';
// import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"
class UsersList extends React.Component {
  componentDidMount(){
    this.props.getProgramList();
    
}
state = {
  handleUpdateTask: null
}

  render() {
   
    return (
      <Row className="app-user-list">
        
        
        <Col sm="12">
      
          <Card>
            <CardHeader> 
             
              <ProgramModal/>
              <CategoryModal />
                
              
            </CardHeader>
            <CardBody >
            <Row style={{backgroundColor:"#F5F5F5"}}>
                
                <Col> 
                <br></br>
                    <h5 style={{fontSize:"20px"}}>Program</h5>
                <br></br>
                </Col>
            </Row>
            <Row style={{backgroundColor:"#F5F5F5"}}>
              {/* {console.log("programe>>>",this.props)} */}
            { this.props.program?.programList.length > 0 && 
                  this.props.program?.programList.reverse().map((v,i) => <Col lg="3" md="12" key={v._id}>
                    
                  <Card>
                        <CardHeader style={{background:`${v.color}`,padding:"5px 10px"}} >
                            <h6 style={{color:"#fff",margin:"0",fontWeight:"500", fontSize:"16px"}}>{v.programName}</h6>
                            <div>
                              <Edit size="18" color="#fff" 
                               />
                              <Trash size="18" color="#fff"
                                 onClick={e => {
                                  e.stopPropagation()
                                  this.props.trashPrograme(v._id)
                                  console.log("ljlkhj")
                                }}
                               />
                            </div>
                            

                        </CardHeader>
                        <CardBody style={{padding:"10px"}}>
                                <Row>
                                    <Col><p>Total Rank:</p></Col>
                                    <Col>{`${v.total_rank}`}</Col>
                                </Row>
                                <Row>
                                    <Col><p>Lable:</p></Col>
                                    <Col>{v.lable}</Col>
                                </Row>
                                <Row>
                                    <Col><p>Type:</p></Col>
                                    <Col><p>{v.type}</p></Col>
                                </Row>
                        </CardBody>
                  </Card> 
                </Col>)}
            
            </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      program : state.program
  }
}
export default connect(mapStateToProps, {getProgramList,trashPrograme})(UsersList);
