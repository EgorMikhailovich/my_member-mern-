import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,CustomInput
} from "reactstrap"

import { Check } from "react-feather"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import NewTestingModal from "./addTestingModal"
import FavoriteTesting from "./favoriteTesting"
import AllTesting from "./allTesting"

class FloatingLabels extends React.Component {
  render() {
    return (
      <Row>
        
        <Col>
        <Breadcrumbs
          breadCrumbTitle="Store"
          breadCrumbParent="Shop"
          breadCrumbActive="Testing"
        />
        <NewTestingModal/>
        <FavoriteTesting/>
        <AllTesting/>
        </Col>
      </Row>
    )
  }
}
export default FloatingLabels
