import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ApexLineChart from "./ApexLineChart"
import ApexAreaChart from "./ApexAreaCharts"
import ApexColumnChart from "./ApexColumnCharts"
import ApexBarChart from "./ApexBarChart"
import ApexMixedChart from "./ApexMixedChart"
import ApexCandlestickChart from "./ApexCandlestickChart"
import ApexBubbleChart from "./ApexBubbleChart"
import ApexScatterChart from "./ApexScatterChart"
import ApexHeatmapChart from "./ApexHeatmapChart"
import ApexPieChart from "./ApexPieChart"
import ApexDonutChart from "./ApexDonutChart"
import ApexRadialChart from "./ApexRadialChart"
import ApexRadarChart from "./ApexRadarChart"
import "../../../assets/scss/plugins/charts/apex-charts.scss"
let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $label_color_light = "#dae1e7"

let themeColors = [$primary, $success, $danger, $warning, $info]

class ApexCharts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Apex Charts"
          breadCrumbParent="Charts"
          breadCrumbActive="Apex"
        />
        <Row>
          <Col sm="12">
            <p>
              A React.js component for ApexCharts. Read full documnetation{" "}
              <a
                href="https://github.com/apexcharts/react-apexcharts"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </p>
          </Col>
          <Col lg="6" md="12">
            <ApexLineChart themeColors={themeColors} />
          </Col>
          <Col lg="6" md="12">
            <ApexAreaChart themeColors={themeColors} />
          </Col>
          <Col lg="6" md="12">
            <ApexColumnChart themeColors={themeColors} />
          </Col>
          <Col lg="6" md="12">
            <ApexBarChart themeColors={themeColors} />
          </Col>
          <Col sm="12">
            <ApexMixedChart themeColors={themeColors} />
          </Col>
          <Col sm="12">
            <ApexCandlestickChart themeColors={themeColors} />
          </Col>
          <Col lg="6" sm="12">
            <ApexBubbleChart themeColors={themeColors} />
          </Col>
          <Col lg="6" sm="12">
            <ApexScatterChart themeColors={themeColors} />
          </Col>
          <Col sm="12">
            <ApexHeatmapChart primary={[$primary]} />
          </Col>
          <Col lg="6" sm="12">
            <ApexPieChart themeColors={themeColors} />
          </Col>
          <Col lg="6" sm="12">
            <ApexDonutChart themeColors={themeColors} />
          </Col>
          <Col lg="6" sm="12">
            <ApexRadialChart themeColors={themeColors} />
          </Col>
          <Col lg="6" sm="12">
            <ApexRadarChart
              themeColors={themeColors}
              labelColor={$label_color_light}
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ApexCharts
