import React from "react"
import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"
import "../../../assets/scss/pages/users.scss"

// import 
import { FETCH_ATTENDEE_LIST } from '../../../redux/actions/calendar';
import { connect } from "react-redux"

const columns = [
  {
    name: "Photo",
    selector: "firstphoto",
    sortable: true
  },
  {
    name: "Name",
    selector: "firstName",
    sortable: true
  },
  {
    name: "Classes",
    selector: "class",
    sortable: true
  },
  {
    name: "Date & Time Attended	",
    selector: "date",
    sortable: true
  },
  {
    name: "Action",
    selector: "id",
    sortable: true
  }
]

const customStyles = {

  headCells: {
    style: {
      background: "#1387b0",
      color: "#fff"
    },
  }
};

class DataTableFixedHeader extends React.Component {

  componentDidMount() {
    this.props.FETCH_ATTENDEE_LIST()
  };

  render() {
    return (
      <Card>
        <CardBody className="cd-body-rm pd-body">
          <DataTable
            data={this.props.calendar && this.props.calendar?.attendeeList}
            columns={columns}
            noHeader
            fixedHeader
            fixedHeaderScrollHeight="300px"
            customStyles={customStyles}
          />
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    calendar: state.calendar
  }
}

export default connect(mapStateToProps, { FETCH_ATTENDEE_LIST })(DataTableFixedHeader)


// export default DataTableFixedHeader




