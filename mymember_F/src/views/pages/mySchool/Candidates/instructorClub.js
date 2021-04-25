import React from "react"
import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
  {
    name: "Programs",
    selector: "first_name"
  },
  {
    name: "LT",
    selector: "id"
  },
  {
    name: "TKD",
    selector: "id"
  },
  {
    name: "TKD",
    selector: "id"
  },
  {
    name: "Boxing",
    selector: "id"
  },
  {

    name: "TASMA",
    selector: "id"
  },
  {

    name: "Teen & Adult",
    selector: "id"
  },
  {

    name: "fm",
    selector: "id"
  },
  {

    name: "3",
    selector: "id"
  }
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
  {
    id: 4,
    first_name: "Phaedra",
    last_name: "Jerrard",
    email: "pjerrard3@blogs.com",
    gender: "Female"
  },
  {
    id: 5,
    first_name: "Conn",
    last_name: "Plose",
    email: "cplose4@geocities.com",
    gender: "Male"
  },
  {
    id: 6,
    first_name: "Tootsie",
    last_name: "Brandsma",
    email: "tbrandsma5@theatlantic.com",
    gender: "Female"
  },
  {
    id: 7,
    first_name: "Sibley",
    last_name: "Bum",
    email: "sbum6@sourceforge.net",
    gender: "Female"
  },
  {
    id: 8,
    first_name: "Kristoffer",
    last_name: "Thew",
    email: "kthew7@amazon.com",
    gender: "Male"
  }
]

class DataTableFixedHeader extends React.Component {
  render() {
    return (
      <Card>
         <CardHeader style={{background:"#d8002a"}}>
          <CardTitle style={{color:"#fff",textAlign:"center"}}>Instructor Club</CardTitle>
        </CardHeader>
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

