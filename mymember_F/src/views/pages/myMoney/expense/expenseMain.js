import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ThumbViewConfig from "./DataListConfig"
import queryString from "query-string"
import ExpenseCard from "./expenseCard"
import PieChartCategory from "./pieChart"


let $primary = "#7367F0",
  // $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292"
  // $stroke_color = "#b9c3cd",
  // $label_color = "#e7eef7"

class ThumbView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Expense"
          breadCrumbParent="My Money"
          breadCrumbActive="Expense"
        />
        <Row>
          <Col sm="8">
            <ExpenseCard/>
            <ThumbViewConfig thumbView={true} parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
          <Col sm="4" className="text-center align-middle">
              <PieChartCategory
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
              />
              
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

export default ThumbView
