import React from "react"
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code, ChevronDown } from "react-feather"
import Filter from "./filter"
import DetailTable from "./detailTable"
const collapseItems = [
  {
    id: 1,
    title: "LT No Belt",
    content: ""
  },
  {
    id: 2,
    title: "LT White Belt",
    content: ""
  },
  {
    id: 3,
    title: "LT White Orange Tip",
    content: ""
  },
  {
    id: 4,
    title: "LT Black",
    content: ""
  }
]

class userManagementdata extends React.Component {
  state = {
    activeTab: "1",
    collapseID: "",
    status: "Closed"
  }


  render() {

    return (
      <React.Fragment>
        <Filter />
        <div className="vx-collapse">
          <Card
            className={'collapse-border-item'}
          >
            <CardBody>
              <DetailTable />
            </CardBody>
          </Card>
        </div>

      </React.Fragment>
    )
  }
}
export default userManagementdata
