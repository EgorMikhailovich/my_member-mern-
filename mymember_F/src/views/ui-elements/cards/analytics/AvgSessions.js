import React from "react"
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Progress
} from "reactstrap"

class AvgSessions extends React.Component {
  state = {
    options: {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      states: {
        hover: {
          filter: "none"
        }
      },
      colors: [
        this.props.labelColor,
        this.props.labelColor,
        this.props.primary,
        this.props.labelColor,
        this.props.labelColor,
        this.props.labelColor
      ],
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded"
        }
      },
      tooltip: {
        x: { show: false }
      },
      xaxis: {
        type: "numeric"
      }
    },
    series: [
      {
        name: "Sessions",
        data: [75, 125, 225, 175, 125, 75, 25]
      }
    ]
  }
  render() {
    return (
      <Card>
        <CardBody>
          <Row className="pb-50">
            <Col
              lg={{ size: 12, order: 1 }}
              sm={{ size: 12, order: 2 }}
              xs={{ order: 2 }}
              className="d-flex justify-content-between flex-column mt-lg-0 mt-2"
            >
              <CardTitle>Student Statistics</CardTitle>
              
            </Col>
            
          </Row>
          <hr />
          <Row className="pt-50">
            <Col md="6" sm="12">
            <a href="/app/users/list">
              <p className="mb-0">Active Students: 102</p>
              <Progress className="mt-25" value="50" />
              </a>
            </Col>
            <Col md="6" sm="12">
            <a href="/app/student/active-trail/list">
              <p className="mb-0">Active Trail: 100</p>
              <Progress className="mt-25" color="warning" value="60" />
              </a>
            </Col>
            <Col md="6" sm="12">
            <a href="/app/student/former-student/list">
              <p className="mb-0">Former Students: 12</p>
              <Progress className="mt-25" color="danger" value="70" />
              </a>
            </Col>
            <Col md="6" sm="12">
            <a href="/app/student/lead-list/list">
              <p className="mb-0">Lead Students: 5</p>
              <Progress className="mt-25" color="success" value="80" />
            </a>
            </Col>
          </Row>
          
        </CardBody>
      </Card>
    )
  }
}
export default AvgSessions
