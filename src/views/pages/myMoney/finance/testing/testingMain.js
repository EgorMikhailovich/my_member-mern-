import React from "react"
import {
  Button,
  Progress,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,Row,Col
} from "reactstrap"
import Breadcrumbs from "../../../../../components/@vuexy/breadCrumbs/BreadCrumb"
// import ThumbViewConfig from "./DataListConfig"
import {
  Edit,
  Trash,
  ChevronDown,
  Plus,
  Check,
  ChevronLeft,
  ChevronRight,Download
} from "react-feather"
import queryString from "query-string"
import ExpenseCard from "./expenseCard"
import PieChartCategory from "./pieChart"
import "../../../../../assets/scss/pages/users.scss"

let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7"

class ThumbView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Finance"
          breadCrumbParent="My Money"
          breadCrumbActive="Testing"
        />
        <Row>
          <Col sm="12">
          <div className="data-list-header d-flex justify-content-between flex-wrap pd-b">
      <div className="actions-left d-flex flex-wrap">
        <UncontrolledDropdown className="data-list-dropdown mr-1">
          <DropdownToggle className="p-1" color="primary">
            <span className="align-middle mr-1">Month</span>
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu tag="div" right>
            <DropdownItem tag="a">January</DropdownItem>
            <DropdownItem tag="a">Febuary</DropdownItem>
            <DropdownItem tag="a">March</DropdownItem>
            <DropdownItem tag="a">April</DropdownItem>
            <DropdownItem tag="a">May</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="data-list-dropdown mr-1">
          <DropdownToggle className="p-1" color="primary">
            <span className="align-middle mr-1">Year</span>
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu tag="div" right>
            <DropdownItem tag="a">2020</DropdownItem>
            <DropdownItem tag="a">2019</DropdownItem>
            <DropdownItem tag="a">2018</DropdownItem>
            <DropdownItem tag="a">2017</DropdownItem>
            <DropdownItem tag="a">2016</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Button
          className="add-new-btn"
          color="primary"
        //   onClick={() => props.handleSidebar(true, true)}
          outline>
          <Download size={15} />
          <span className="align-middle">Export</span>
        </Button>
       
      </div>
      <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
      <Button
          className="add-new-btn"
          color="primary"
         
          outline>
          <Plus size={15} />
          <span className="align-middle">Add New</span>
        </Button>
       
        
      </div>
    </div>
            <ExpenseCard/>
            
            {/* <ThumbViewConfig thumbView={true} parsedFilter={queryString.parse(this.props.location.search)}/> */}
          </Col>
          
          
        </Row>
      </React.Fragment>
    )
  }
}

export default ThumbView
