import React from "react"
import {
  Card,
  CardHeader,
  CardBody,Row,Col,Button
} from "reactstrap"
import DocImg from "../../../../assets/img/pages/box11.svg"
// import MergeImg from "../../../../assets/img/pages/marge.png"
import StudentModal from "./studentListModal"
import SampleDocxButton from "./sampleDocx"
import UploadDocxButton from "./documentUploadModal"


class AllMembershipList extends React.Component {
    
  render() {
    return (
      <React.Fragment>
        <Row  style={{paddingBottom:"30px",paddingTop:"1rem"}}>
          <Col sm="4" style={{display:"flex", justifyContent:"space-around"}}>
          
            <UploadDocxButton />
            
            <SampleDocxButton/>
          </Col>

        </Row>
            <Row>

                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)",textAlign:"center"}}>
                    <img src={DocImg} />
                    
                    {/* <Button.Ripple className='btn-icon' color='flat-secondary'>
                    <img src={MergeImg} width="14px"/>
                        Merge
                    </Button.Ripple> */}
                    <StudentModal />
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                    
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                    
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                    
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                  </Card>
                </Col>
                <Col sm="2"> 
                  <Card style={{padding:"1rem",backgroundColor:"rgb(140 139 139 / 24%)"}}>
                    <img src={DocImg} />
                    <StudentModal />
                  </Card>
                </Col>
            </Row>
            
        </React.Fragment>
    )
  }
}



export default AllMembershipList;