import React from "react"
import {
  Row,
  Col
} from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import NewMembership from "./addMembershipModal"
import FavoriteMembership from "./favoriteMembership"
import AllMembership from "./allMembership"

class FloatingLabels extends React.Component {
  render() {
    return (
      <Row>
        
        <Col>
        <Breadcrumbs
          breadCrumbTitle="Store"
          breadCrumbParent="Shop"
          breadCrumbActive="Membership"
        />
        <NewMembership isEdit={false} userinfo={null} />
        <FavoriteMembership/>
        <AllMembership/>
        </Col>
      </Row>
    )
  }
}
export default FloatingLabels
