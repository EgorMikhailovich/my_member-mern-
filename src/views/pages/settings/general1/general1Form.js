import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  Row
} from "reactstrap"

import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { User, Clock } from "react-feather"
import img from "../../../../assets/img/pages/1-apex.png"


class HorizontalForm extends React.Component {
  render() {
    return (

      <Row>
        <div className="col-lg-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <User size="18" />
            Organization Setup
          </CardTitle>
            </CardHeader>
            <hr></hr>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Col md="4">
                    <span>Account Name:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="name"
                      id="merch"
                      placeholder="wantaghcma"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="4">
                    <span>Account Number:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="number"
                      name="Account Number"
                      id="Transa"
                      placeholder="Account Number"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span>Business Name:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="Business Name"
                      id="business"
                      placeholder="Business Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span>School Id:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="number"
                      name="School Id"
                      id="school"
                      placeholder="School Id"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span>Website:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="Website"
                      id="Website"
                      placeholder="Website url"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span>Business Email:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="email"
                      name="Business Email"
                      id="BusinessEmail"
                      placeholder="Business Email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span> Email:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="email"
                      name="Email"
                      id="email"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span>Address:</span>
                  </Col>
                  <Col md="8">
                    <Row>
                      <Col md="6">
                        <Input
                          type="text"
                          name="name"
                          id="add1"
                          placeholder="Address"

                        />
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="name"
                          id="add2"
                          placeholder="City"

                        />
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="name"
                          id="add3"
                          placeholder="State"

                        />
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="name"
                          id="add4"
                          placeholder="Country"

                        />
                      </Col>
                    </Row>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span> Phone Number:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="Number"
                      name="mobile"
                      id="num"
                      placeholder="Phone Number"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span> Tax Id:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="Number"
                      name="Tax"
                      id="Tax"
                      placeholder="Tax Id"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span> Password:</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="Password"
                      name="Password"
                      id="Password"
                      placeholder="Password"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span>Landing Page</span>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      name="Landing Page"
                      id="Landing Page"
                      placeholder="Landing Page"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="4">
                    <span>Logo</span>
                  </Col>
                  <Col sm="8">

                    <img src={img} width="100px" />
                    <Input
                      type="file"
                      name="filename"
                      id="fileFloating"
                      placeholder="Program Name"
                    />


                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 8, offset: 4 }}>
                    <Button.Ripple
                      color="primary"
                      type="submit"
                      className="mr-1 mb-1"
                      onClick={e => e.preventDefault()}
                    >
                      Update
                </Button.Ripple>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <Clock size="18" />
                  Operational Hours
                </CardTitle>
            </CardHeader>
            <hr></hr>
            <CardBody>
              <Row>
                <Col md="3">
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="4" style={{ padding: "0" }}>
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        defaultChecked={false}
                      /></Col>
                    <Col md="8" style={{ padding: "0" }}>
                      <h2 style={{ fontSize: "0.8rem" }}>Monday</h2>
                    </Col>


                  </Row>
                </Col>
                <Col md="9" style={{ border: "1px solid #c7c7c7", backgroundColor: "#f5f5f5", height: "45px" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            Start time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            End time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>

                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Col md="3">
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="4" style={{ padding: "0" }}>
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        defaultChecked={false}
                      /></Col>
                    <Col md="8" style={{ padding: "0" }}>
                      <h2 style={{ fontSize: "0.8rem" }}>Tuesday</h2>
                    </Col>


                  </Row>
                </Col>
                <Col md="9" style={{ border: "1px solid #c7c7c7", backgroundColor: "#f5f5f5", height: "45px" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            Start time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            End time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>

                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px", marginTop: "10px" }}>
                <Col md="3">
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="4" style={{ padding: "0" }}>
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        defaultChecked={false}
                      /></Col>
                    <Col md="8" style={{ padding: "0" }}>
                      <h2 style={{ fontSize: "0.8rem" }}>Wednesday</h2>
                    </Col>


                  </Row>
                </Col>
                <Col md="9" style={{ border: "1px solid #c7c7c7", backgroundColor: "#f5f5f5", height: "45px" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            Start time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            End time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>

                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px", marginTop: "10px" }} >
                <Col md="3">
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="4" style={{ padding: "0" }}>
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        defaultChecked={false}
                      /></Col>
                    <Col md="8" style={{ padding: "0" }}>
                      <h2 style={{ fontSize: "0.8rem" }}>Thursday</h2>
                    </Col>


                  </Row>
                </Col>
                <Col md="9" style={{ border: "1px solid #c7c7c7", backgroundColor: "#f5f5f5", height: "45px" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            Start time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            End time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>

                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px", marginTop: "10px" }} >
                <Col md="3">
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="4" style={{ padding: "0" }}>
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        defaultChecked={false}
                      /></Col>
                    <Col md="8" style={{ padding: "0" }}>
                      <h2 style={{ fontSize: "0.8rem" }}>Friday</h2>
                    </Col>


                  </Row>
                </Col>
                <Col md="9" style={{ border: "1px solid #c7c7c7", backgroundColor: "#f5f5f5", height: "45px" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            Start time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            End time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>

                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px", marginTop: "10px" }} >
                <Col md="3">
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="4" style={{ padding: "0" }}>
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        defaultChecked={false}
                      /></Col>
                    <Col md="8" style={{ padding: "0" }}>
                      <h2 style={{ fontSize: "0.8rem" }}>Saturday</h2>
                    </Col>


                  </Row>
                </Col>
                <Col md="9" style={{ border: "1px solid #c7c7c7", backgroundColor: "#f5f5f5", height: "45px" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            Start time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            End time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>

                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px", marginTop: "10px" }} >
                <Col md="3">
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="4" style={{ padding: "0" }}>
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        defaultChecked={false}
                      /></Col>
                    <Col md="8" style={{ padding: "0" }}>
                      <h2 style={{ fontSize: "0.8rem" }}>Sunday</h2>
                    </Col>


                  </Row>
                </Col>
                <Col md="9" style={{ border: "1px solid #c7c7c7", backgroundColor: "#f5f5f5", height: "45px" }}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            Start time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                      <Row>
                        <Col md="6">
                          <h4 style={{ fontSize: "0.8rem" }}>
                            End time:
                          </h4>
                        </Col>
                        <Col md="6">
                          <input type="time" />
                        </Col>
                      </Row>

                    </Col>

                  </Row>
                </Col>
              </Row>

              <Row>
                <div className="card-title" style={{marginTop:"15px"}}>
                  24 Hrs Email
                </div>
              </Row>
              <hr></hr>

              <Row>
                <Col md="6">
                 <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Name:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="text"
                      name="name"
                      id="Name"
                      placeholder="Name"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
                <Col md="6">
                <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Email:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="email"
                      name="Email"
                      id="BusinessEmail"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                 <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Name:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="text"
                      name="name"
                      id="Name"
                      placeholder="Name"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
                <Col md="6">
                <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Email:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="email"
                      name="Email"
                      id="BusinessEmail"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                 <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Name:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="text"
                      name="name"
                      id="Name"
                      placeholder="Name"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
                <Col md="6">
                <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Email:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="email"
                      name="Email"
                      id="BusinessEmail"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                 <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Name:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="text"
                      name="name"
                      id="Name"
                      placeholder="Name"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
                <Col md="6">
                <Form>
                 <FormGroup row>
                  <Col md="4">
                    <span>Email:</span>
                  </Col>
                  <Col md="8" style={{padding:"0"}}>
                    <Input
                      type="email"
                      name="Email"
                      id="BusinessEmail"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>
                 </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>

        </div>
      </Row>

    )
  }
}
export default HorizontalForm
