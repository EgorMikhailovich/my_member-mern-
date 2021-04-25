import React from "react"
import {
  Card,
  CardBody,
 DropdownItem,UncontrolledButtonDropdown,DropdownToggle,DropdownMenu
} from "reactstrap"
import DataTable from "react-data-table-component"
import { ChevronDown } from "react-feather"
import "../../../../assets/scss/pages/users.scss"


class DataTableCustom extends React.Component {
  state = {
    columns: [
      {
        name: "Program Name ",
        selector: "name",
        sortable: true,
        minWidth: "100px",
        maxWidth: "100px",
       
      },
      {
        name: "Type",
        selector: "Dec",
        sortable: true,
        minWidth: "70px",
        maxWidth: "70px",
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
        )
      },
      {
        name: "Total",
        selector: "id",
        sortable: true,
        minWidth: "40px",
        maxWidth: "40px",
       
      }
    ],
    data: [
      {
        id:1,
        name: "Alyss Lillecrop",
        email: "alillecrop0@twitpic.com",
        date: "May 13, 2018",
        status: "active",
        revenue: "$32,000",
        ratings: "good"
      },
      {
        id:2,
        name: "Shep Pentlow",
        email: "spentlow1@home.pl",
        date: "June 5, 2019",
        status: "active",
        revenue: "$50,000",
        ratings: "good"
      },
      {
       
        name: "Gasper Morley",
        email: "gmorley2@chronoengine.com",
        date: "December 24, 2019",
        status: "active",
        revenue: "$78,000",
        ratings: "average"
      },
      {
        name: "Phaedra Jerrard",
        email: "pjerrard3@blogs.com",
        date: "November 30, 2018",
        status: "inactive",
        revenue: "$10,000",
        ratings: "bad"
      },
      
    ],
    filteredData: [],
    value: ""
  }

 

  render() {
    let { data, columns, value, filteredData } = this.state
    return (
      <Card>
        <CardBody className="rdt_Wrapper pd-body">
        <div className="ag-theme-material ag-grid-table">
                <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
                  <div className="sort-dropdown">
                  </div>
                  <h6 className="th-fixd">Student Tracking</h6>
                    <div className="dropdown actions-dropdown">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle className="px-2 py-75" color="white">
                          Sort by
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                          
                            <span className="align-middle ml-50">Teen & Adult</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            
                            <span className="align-middle ml-50">Tasma</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                           
                            <span className="align-middle ml-50">KickBoxing</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            
                            <span className="align-middle ml-50">Little Tiger</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            
                            <span className="align-middle ml-50">Taekwondo</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                      
                    </div>
                  </div>
                </div>
          <DataTable
            className="dataTable-custom"
            data={value.length ? filteredData : data}
            columns={columns}
            noHeader
            // pagination
            
          />
        </CardBody>
      </Card>
    )
  }
}

export default DataTableCustom
