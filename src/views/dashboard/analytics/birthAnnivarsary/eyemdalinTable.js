import React from "react"
import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
  {
    name: "Candidate Status",
    selector: "first_name"
  },
  {
    name: "Last Stripe",
    selector: "id"
  },
  {
    name: "Current Stripe",
    selector: "id"
  },
  
]

const data = [
  {
    id: 1,
    first_name: "Total",
    last_name: "Lillecrop",
    email: "alillecrop0@twitpic.com",
    gender: "Female"
  },
  {
    id: 2,
    first_name: "Shep",
    last_name: "Pentlow",
    email: "spentlow1@home.pl",
    gender: "Male"
  },
  {
    id: 3,
    first_name: "Gasper",
    last_name: "Morley",
    email: "gmorley2@chronoengine.com",
    gender: "Male"
  },
  
]

class DataTableFixedHeader extends React.Component {
  render() {
    return (
      <Card>
         {/* <CardHeader style={{background:"#000"}}>
        </CardHeader> */}
        <CardBody>
          <DataTable
            data={data}
            columns={columns}
            noHeader
            fixedHeader
            fixedHeaderScrollHeight="50px"
          />
        </CardBody>
      </Card>
    )
  }
}

export default DataTableFixedHeader

