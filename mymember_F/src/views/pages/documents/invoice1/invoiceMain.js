import React from "react"
import {
  Card,
  Row,
  Col
} from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DocumentsSidebar from "./documentSidebar"
import "../../../../assets/scss/pages/invoice.scss"
import DocumnetListing from "./documentList"

class Nurturing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Documents"
          breadCrumbParent="Pages"
          breadCrumbActive="Documents"
        />
        <Row>
          <Col sm="3">
            <DocumentsSidebar/>
          </Col>
          <Col sm="9">

            <DocumnetListing />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Nurturing
