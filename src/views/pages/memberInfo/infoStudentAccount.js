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
import userImg from "../../../assets/img/portrait/small/avatar-s-18.jpg"
import "../../../assets/scss/pages/users.scss"
class UserView extends React.Component {
  render() {
    let {data} = this.props.info;
    
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
                          // className="rounded mr-2"
                          object
                          src={!!data.logo? data.logo : userImg}
                          alt="Generic placeholder image"
                          height="150"
                          width="150"
                        />
                      
                      </Media>
                      
                  </Col>
                      
                   
                          <Col sm="5" md="5" lg="5">
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Full Name:
                                </div>
                                <div className="text-truncate">
                                  <span>{data.firstname}&nbsp;{data.lastname}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Member Since:
                                </div>
                                <div>--</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Active Membership:
                                </div>
                                <div>--</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Rank:
                                </div>
                                <div className="text-truncate">
                                  <span>{data.email}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Program:
                                </div>
                                <div className="text-truncate">
                                  <span>{data.program}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Program category:
                                </div>
                                <div className="text-truncate">
                                  <span>{data.category}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col sm="4" md="4" lg="4">
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Email:
                                </div>
                                <div className="text-truncate">
                                  <span>{data.email}</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Stripe:
                                </div>
                                <div>--</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Lessons Attended:
                                </div>
                                <div>--</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Last Stripe Given:
                                </div>
                                <div>
                                  <span>12/12/2020</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Last Attended:
                                </div>
                                <div>
                                  <span>12/12/2020</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                Last Promoted:
                                </div>
                                <div>
                                  <span>12/12/2020</span>
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



