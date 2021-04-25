import React from "react"
import { Card, CardBody, Button, Row, Col } from "reactstrap"
import underMaintenance from "../../../assets/img/pages/maintenance-2.png"

class Maintenance extends React.Component {
  render() {
    return (
      <div className="bg-full-screen-image1">
        <div className="flexbox-container">
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <img
                src={underMaintenance}
                alt="underMaintenance"
                className="img-fluid align-self-center mt-75"
              />
              <h1 className="font-large-2 my-1">You have registered successfully!</h1>
              <p className="px-2 mb-0">
                Thank You for Registration, Our team will get back to you soon!
              </p>
              <p className="px-2">
               We will notify you on your account activation!
              </p>
              <Button.Ripple
                tag="a"
                href="/pages/login"
                color="primary"
                size="lg"
                className="mt-1"
              >
                Back to Login
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
      </div>
    )
  }
}
export default Maintenance
