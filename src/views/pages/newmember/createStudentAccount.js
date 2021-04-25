import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button
} from "reactstrap"
import { Edit} from "react-feather"
import { Link } from "react-router-dom"
// import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import userImg from "../../../assets/img/portrait/small/profiledemo.png"
import "../../../assets/scss/pages/users.scss"
class UserView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardBody>
                <Row  col="12" sm="12">
                  <Col sm="3" md="3" lg="3">
                  <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={userImg}
                          alt="Generic placeholder image"
                          height="130"
                          width="130"
                        />
                      
                      </Media>
                      <br></br>
                      {/* <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/app/user/edit">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Add Profile</span>
                      </Link>
                    </Button.Ripple> */}
                  </Col>
                      
                   
                          <Col sm="5" md="5" lg="5">
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                First Name:
                                </div>
                                <div className="text-truncate">
                                  <span>N/A</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Member Since:
                                </div>
                                <div>N/A</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Active Membership:
                                </div>
                                <div>N/A</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Rank:
                                </div>
                                <div className="text-truncate">
                                  <span>N/A</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Program:
                                </div>
                                <div className="text-truncate">
                                  <span>N/A</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Program category:
                                </div>
                                <div className="text-truncate">
                                  <span>N/A</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col sm="4" md="4" lg="4">
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Candidate:
                                </div>
                                <div className="text-truncate">
                                  <span>N/A</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Stripe:
                                </div>
                                <div>N/A</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Lessons Attended:
                                </div>
                                <div>N/A</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Last Stripe Given:
                                </div>
                                <div>
                                  <span>N/A</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Last Attended:
                                </div>
                                <div>
                                  <span>N/A</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Last Promoted:
                                </div>
                                <div>
                                  <span>N/A</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                 
                
              </CardBody>
            </Card>
          </Col>
    </Row>
      </React.Fragment>
    )
  }
}
export default UserView
