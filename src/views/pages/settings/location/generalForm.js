import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row
} from "reactstrap"
import CreateNewLocation from "../../../../layouts/components/createLocation"

class AddLocation extends React.Component {
  render() {
    return (
      
      <Row>
        <div className="col-lg-7">
      <Card>
        <CardHeader>
          <CardTitle>Location Setup</CardTitle>
          <CreateNewLocation />
          
        </CardHeader>
        <CardBody>
          
        </CardBody>
      </Card>
      </div>
      </Row>
      
    )
  }
}
export default AddLocation
