import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  Row,
  Col
} from "reactstrap"
import { Eye, Code, PhoneCall, Phone } from "react-feather"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"

class TabsVerticalLeft extends React.Component {
  state = {
    activeTab: "1",
    active: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }
  render() {
    return (
      <React.Fragment>
             <Breadcrumbs
                breadCrumbTitle="Home"
                breadCrumbParent="My School"
                breadCrumbActive="Renewals"
             />
            <TabContent activeTab={this.state.activeTab}>
              
            </TabContent>
                {/* rohit code start */}
            <Row>
              <Col lg="4" md="12">
                <Card>
                    <CardHeader className="pd-add cd-h card-blue">
                        <CardTitle style={{textAlign:"center",fontSize:"16px",color:"white"}}>Expired</CardTitle>
                    </CardHeader>
                
                    <CardBody style={{textAlign:"center",fontSize:"20px"}} className="cr-pdd">
                      <div className="bx-main">
                        <a href="#">
                        <div className="bx-1">
                          <p>image</p>
                          <button className="btn_st_mi">N/A</button>
                        </div>
                        <div className="bx-2">
                          <h3 className="st-name"> Jessica Konecky </h3>
                          <p className="st-p">Last Atended</p>
                          <p className="st-s">Last Contacted</p>
                        </div>
                        <div className="bx-1">
                          <button className="btn_st_mis">N/A</button>
                           <p className="circle_1">10</p>
                        </div>
                        </a>
                     </div>
                     <div className="bx-main">
                        <a href="#">
                        <div className="bx-1">
                          <p>image</p>
                          <button className="btn_st_mi">N/A</button>
                        </div>
                        <div className="bx-2">
                          <h3 className="st-name"> Jessica Konecky </h3>
                          <p className="st-p">Last Atended</p>
                          <p className="st-s">Last Contacted</p>
                        </div>
                        <div className="bx-1">
                          <button className="btn_st_mis">N/A</button>
                          <p className="circle_1">10</p>
                        </div>
                        </a>
                     </div>
                     <div className="bx-main">
                        <a href="#">
                        <div className="bx-1">
                          <p>image</p>
                          <button className="btn_st_mi">N/A</button>
                        </div>
                        <div className="bx-2">
                          <h3 className="st-name"> Jessica Konecky </h3>
                          <p className="st-p">Last Atended</p>
                          <p className="st-s">Last Contacted</p>
                        </div>
                        <div className="bx-1">
                          <button className="btn_st_mis">N/A</button>
                          <p className="circle_1">10</p>
                        </div>
                        </a>
                     </div>
                     
                     
                    </CardBody>
              </Card>
             </Col>
             <Col lg="4" md="12">
                <Card>
                    <CardHeader className="pd-add cd-h card-blue">
                        <CardTitle style={{textAlign:"center",fontSize:"16px",color:"white"}}>Expires in less than 60 days</CardTitle>
                    </CardHeader>
                
                    <CardBody style={{textAlign:"center",fontSize:"20px"}} className="cr-pdd">
                      <div className="bx-main">
                        <a href="#">
                        <div className="bx-1">
                          <p>image</p>
                          <button className="btn_st_mi">N/A</button>
                        </div>
                        <div className="bx-2">
                          <h3 className="st-name"> Jessica Konecky </h3>
                          <p className="st-p">Last Atended</p>
                          <p className="st-s">Last Contacted</p>
                        </div>
                        <div className="bx-1">
                          <button className="btn_st_mis">N/A</button>
                           <p className="circle_1">10</p>
                        </div>
                        </a>
                     </div>
                     <div className="bx-main">
                        <a href="#">
                        <div className="bx-1">
                          <p>image</p>
                          <button className="btn_st_mi">N/A</button>
                        </div>
                        <div className="bx-2">
                          <h3 className="st-name"> Jessica Konecky </h3>
                          <p className="st-p">Last Atended</p>
                          <p className="st-s">Last Contacted</p>
                        </div>
                        <div className="bx-1">
                          <button className="btn_st_mis">N/A</button>
                          <p className="circle_1">10</p>
                        </div>
                        </a>
                     </div>
                     <div className="bx-main">
                        <a href="#">
                        <div className="bx-1">
                          <p>image</p>
                          <button className="btn_st_mi">N/A</button>
                        </div>
                        <div className="bx-2">
                          <h3 className="st-name"> Jessica Konecky </h3>
                          <p className="st-p">Last Atended</p>
                          <p className="st-s">Last Contacted</p>
                        </div>
                        <div className="bx-1">
                          <button className="btn_st_mis">N/A</button>
                          <p className="circle_1">10</p>
                        </div>
                        </a>
                     </div>
                     
                     
                    </CardBody>
              </Card>
             </Col>
             <Col lg="4" md="12">
                <Card>
                    <CardHeader className="pd-add cd-h card-red">
                        <CardTitle style={{textAlign:"center",fontSize:"16px",color:"white"}}>Renewals History</CardTitle>
                    </CardHeader>
                
                    <CardBody style={{textAlign:"center",fontSize:"20px"}} className="cr-pdd">
                    <table class="table table-striped" style={{textAlign:"center",fontSize:"16px"}}>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Call Activity</th>
                              <th>Type</th>
                              <th>Duration</th>
                              <th>Days Missed	</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                              <td>john</td>
                              <td>john</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                              <td>john</td>
                              <td>john</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                              <td>john</td>
                              <td>john</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                              <td>john</td>
                              <td>john</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                              <td>john</td>
                              <td>john</td>
                            </tr>
                          </tbody>
                        </table>
                     
                    </CardBody>
              </Card>
             </Col>
          </Row>
          {/* rohit code end */}
      </React.Fragment>
    )
  }
}
export default TabsVerticalLeft
