import React from "react"
import { Row, Col } from "reactstrap"
import SalesCard from "./SalesCard"
import SuberscribersGained from './TestCandidateGained'
import OrdersReceived from "./TotalCandidateGain"
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
import SupportTracker from "./SupportTracker"
// import MyTask from "./MyTask"
// import LatestMember from "./LatestMembers"
// import ActiveTrail from "./ActiveTrails"
// import MemberShip from "./Membership"
// import MissYouCall from "./MissYouCall"
// import Leads from "./Leads"
// import BirthDayAnniversary from "./BirthdayAnnivarsary"
// import MemberShipManagement from "./MembershipManagement"
// import Candidates from "./Candidates"
import Mytask from "./mytask/mytaskMain"
import ActiveTrail from "./activetrail/activetrailMain"
import LatestMember from "./latestmember/latestmemberMain"
import MemberShip from "./memberships/memberShipExpiredMain"
import MissYouCall from "./missyouCall/missYouCallMain"
import Leads from "./Leads/LeadListMain"
import BirthDayAnniversary from "./birthAnnivarsary/birthdayMain"
import Candidates from "./candidates/candidateMain"

import "../../../assets/scss/pages/dashboard-analytics.scss"

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="6" md="12">
            <SalesCard />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SuberscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived />
          </Col>
        </Row>
        <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col md="6" sm="12">
            <Mytask />
          </Col>
          <Col md="6" sm="12">
            <LatestMember
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col md="6" sm="12">
            <ActiveTrail />
          </Col>
          <Col md="6" sm="12">
            <MemberShip
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col md="6" sm="12">
            <MissYouCall/>
          </Col>
          <Col md="6" sm="12">
            <Leads/>
          </Col>
        </Row>
        <Row className="match-height">
          <Col md="6" sm="12">
            {/* <BirthDayAnniversary/> */}
          </Col>
          {/* <Col md="6" sm="12">
            <MemberShipManagement/>
          </Col> */}
           <Col md="6" sm="12">
            <Candidates/>
          </Col>
        </Row>
        <Row className="match-height">
         
          <Col md="6" sm="12">
            
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
