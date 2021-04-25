import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexAreaCharts extends React.Component {
  state = {
    options: {
      chart: {
        id: "areaChart"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2020-09-18T00:00:00",
          "2020-09-18T01:00:00",
          "2020-09-18T02:00:00",
          "2020-09-18T03:00:00",
          "2020-09-18T04:00:00",
          "2020-09-18T05:00:00",
          "2020-09-18T06:00:00"
        ]
      },
      stroke: {
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Product Trends by Time",
        align: "left"
      },
      colors: this.props.themeColors,
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      legend: {
        offsetY: -10
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Area Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexAreaCharts
