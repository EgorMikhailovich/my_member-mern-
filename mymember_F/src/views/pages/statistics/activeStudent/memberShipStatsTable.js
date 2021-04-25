import React from "react"
import {
  Card,
  CardBody
} from "reactstrap"
import DataTable from "react-data-table-component"
import "../../../../assets/scss/pages/users.scss"


class DataTableCustom extends React.Component {
  state = {
    columns: [
      {
        name: "Program",
        selector: "name",
        sortable: true,
        minWidth: "100px",
        maxWidth: "100px",
       
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
        <div className="ag-theme-material">
                <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
                  <div className="sort-dropdown">
                  </div>
                  <p className="th-fixd">Membership stats by color</p>
                    
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
