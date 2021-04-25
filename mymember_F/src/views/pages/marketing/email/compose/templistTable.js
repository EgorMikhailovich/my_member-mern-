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
import { GET_TEMPLIST } from '../../../../../redux/actions/compose/index';
import { connect } from 'react-redux';
import "../../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../../assets/scss/pages/users.scss"
import Spinner from "../../../../../components/@vuexy/spinner/Loading-spinner"
import { ArrowLeft, Check } from 'react-feather'
import Checkbox from "../../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Fragment } from "react";

class TempListTable extends React.Component {
    state = {
        rowData: null,
        loading: true,
        selectedSmartList : []
    }

    componentDidMount =async()=> {
        this.props.GET_TEMPLIST();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.templist !== this.props.templist) {
            this.setState({
                rowData: this.props.templist,
                loading: false
            })
        }
    } 

    render() {
        const { loading, rowData,viewRecipient} = this.state
        return (
            <Row className="app-user-list">
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <div className="ag-theme-material ag-grid-table">
                                     <Table>
                                        <thead>
                                            <tr>
                                                <th>Select</th>
                                                <th>firstName  </th>
                                                <th>Recipient Count</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                            
                                        {this.state.rowData !== null ? (
                                                        <ContextLayout.Consumer>
                                                            {context => (
                                                               rowData ? rowData.msg.map((item, i) => {
                                                                    return (
                                                                        <tr key={i}>
                                                                            <th>
                                                                                <Checkbox
                                                                                    color="primary"
                                                                                    onClick={() => this.props.handleSelectTempListDetail(item.email)}
                                                                                    icon={<Check className="vx-icon" size={16} />}
                                                                                />
                                                                            </th>
                                                                            <td>{item.firstName}</td>
                                                                            <td>{item.email}</td>
 
                                                                        </tr>
                                                                    )
                                                                }):(<div id="loading-bar">

                                                                <Spinner loading={true} />
                                                            </div>
                                                            )
                                                            )}
                                                        </ContextLayout.Consumer>
                                                    ) : null}
                                        </tbody>
                                    </Table>  
                 
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
        templist: state.EmailComposeMarketing.templist
    }
}

export default connect(mapStateToProps, {GET_TEMPLIST })(TempListTable)
