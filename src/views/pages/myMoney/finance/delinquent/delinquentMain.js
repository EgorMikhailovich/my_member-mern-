import React from "react"
import {
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,Row,Col
} from "reactstrap"
import Breadcrumbs from "../../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import {
  ChevronDown,
  Plus,Download
} from "react-feather"
import ExpenseCard from "./expenseCard"
import "../../../../../assets/scss/pages/users.scss"
import FilterData from "./filterData"

class ThumbView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Finance"
          breadCrumbParent="My Money"
          breadCrumbActive="Delinquent"
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
            <DropdownItem tag="a">June</DropdownItem>
            <DropdownItem tag="a">July</DropdownItem>
            <DropdownItem tag="a">August</DropdownItem>
            <DropdownItem tag="a">September</DropdownItem>
            <DropdownItem tag="a">October</DropdownItem>
            <DropdownItem tag="a">November</DropdownItem>
            <DropdownItem tag="a">December</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="data-list-dropdown mr-1">
          <DropdownToggle className="p-1" color="primary">
            <span className="align-middle mr-1">Year</span>
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu tag="div" right>
            <DropdownItem tag="a">2021</DropdownItem>
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
  
    </div>

            <ExpenseCard/>
            <FilterData/>  
            
          </Col>
          
          
        </Row>
      </React.Fragment>
    )
  }
}

export default ThumbView
