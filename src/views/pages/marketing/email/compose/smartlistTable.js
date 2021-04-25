import React from "react"
import {
    Card,
    CardBody,
    Row,
    Col,
    Table,
    Button
} from "reactstrap"
import { ContextLayout } from "../../../../../utility/context/Layout"
import { GET_SMARTLIST } from '../../../../../redux/actions/compose/index';
import { connect } from 'react-redux';
import "../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../../assets/scss/pages/users.scss"
import Spinner from "../../../../../components/@vuexy/spinner/Loading-spinner"
import { ArrowLeft, Check } from 'react-feather'
import Checkbox from "../../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Fragment } from "react";

class SmartListTable extends React.Component {
    state = {
        rowData: null,
        loading: true,
        viewRecipient: false,
        viewRecipientData: null,
        selectedSmartList : []
    }

    componentDidMount =async()=> {
        this.props.GET_SMARTLIST();
        this.setState({rowData: await this.props.smartlist})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.smartlist !== this.props.smartlist) {
            this.setState({
                rowData: this.props.smartlist,
                loading: false
            })
        }

    }
 
    handleViewRecipient = (item) => {
        this.setState({
            viewRecipient: true,
            viewRecipientData: item
        })
    }
    backTolist = ()=>{
        this.setState({
            viewRecipient: false,
        })
    }

    

    render() {
      
        const { loading, rowData, viewRecipientData, viewRecipient } = this.state
        return (
            <Row className="app-user-list">
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <div className="ag-theme-material ag-grid-table">
                                {
                                    !viewRecipient ? <Table>
                                        <thead>
                                            <tr>
                                                <th>Select</th>
                                                <th>List Name</th>
                                                <th>Recipient Count</th>
                                                <th>View Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {!this.state.loading ? (
                                                <>
                                                    {this.state.rowData !== null ? (
                                                        <ContextLayout.Consumer>
                                                            {context => (
                                                                rowData.msg.map((item, i) => {
                                                                    return (
                                                                        <tr key={i}>
                                                                            <th>
                                                                                <Checkbox
                                                                                    color="primary"
                                                                                    onClick={() => this.props.handleSelectSmartList(item.list)}
                                                                                    icon={<Check className="vx-icon" size={16} />}
                                                                                />
                                                                            </th>
                                                                            <td>{item._id}</td>
                                                                            <td>{item.count}</td>
                                                                            <td><Button color="link" onClick={() => this.handleViewRecipient(item.list)}>View</Button></td>

                                                                        </tr>
                                                                    )
                                                                })
                                                            )}
                                                        </ContextLayout.Consumer>
                                                    ) : null}

                                                </>) : (<div id="loading-bar">

                                                    <Spinner loading={true} />
                                                </div>
                                                )}
                                        </tbody>
                                    </Table> :
                                        <Fragment>
                                           <div className="d-flex align-items-center">
                                               <Button onClick={this.backTolist} className="text-muted"> 
                                                    <ArrowLeft />
                                                </Button> 
                                               <h6>Recipient details</h6>
                                            </div>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                    <th>Select</th>
                                                        <th>Fullname</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        {/* <th>Status</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {!loading ? (
                                                        <>
                                                            {viewRecipientData !== null ? (
                                                                <ContextLayout.Consumer>
                                                                    {context => (
                                                                        viewRecipientData.map((item, i) => {
                                                                            return (
                                                                                <tr key={i}>
                                                                                     <th>
                                                                                <Checkbox
                                                                                    color="primary"
                                                                                    onClick={() => this.props.handleSelectSmartListDetail(item.email)}
                                                                                    icon={<Check className="vx-icon" size={16} />}
                                                                                />
                                                                            </th>
                                                                                    <td>{item.firstName}{' '}{item.lastName}</td>
                                                                                    <td>{item.email}</td>
                                                                                    <td>{item.primaryPhone}</td>
                                                                                    {/* <td>{item.status}</td> */}
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    )}
                                                                </ContextLayout.Consumer>
                                                            ) : null}

                                                        </>) : (<div id="loading-bar">

                                                            <Spinner loading={true} />
                                                        </div>
                                                        )}
                                                </tbody>
                                            </Table>
                                        </Fragment>
                                }
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        smartlist: state.EmailComposeMarketing.smartlist
    }
}

export default connect(mapStateToProps, { GET_SMARTLIST })(SmartListTable)
