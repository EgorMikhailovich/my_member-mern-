import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,CustomInput
} from "reactstrap"
import img from "../../../../assets/img/pages/1-apex.png"
import { CREATE_SUB_USER } from '../../../../redux/actions/settings/schedule';
import {connect} from 'react-redux';

class FloatingLabels extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fullName : "",
      userName : "",
      password : "",
      email : "",
      phone : "",
      status : "",
      profile_type : "",
      profile_image:""  
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }

  changeHandler(e){
    
      this.setState({...this.state, [e.target.name] : e.target.value});
      
  }

  onsubmit(e){
    console.log(">>>>>>>>>>>>>>",this.state)
    e.preventDefault();
    this.props.CREATE_SUB_USER(this.state);
    setTimeout(() => {
      this.props.toggle();
    }, 600)
  }
  render() {

    return (
      <Card>
        <CardHeader>
          {/* <CardTitle>Vertical Form With Floating Labels</CardTitle> */}
        </CardHeader>
        <CardBody>
          <Form className="mt-10" onSubmit={this.onsubmit}>
            <Row>
            <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.changeHandler}
                    id="fullName"
                    placeholder="Full Name"
                  />
                  <Label for="nameFloating">Full Name</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.changeHandler}
                    id="userName"
                    placeholder="User Name"
                  />
                  <Label for="nameFloating">User Name</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                    id="password"
                    placeholder="Password"
                  />
                  <Label for="passwordFloating">Password</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="password"
                    name="retype password"
                    id="nameFloating"
                    placeholder="Retype Password"
                  />
                  <Label for="nameFloating">Retype Password</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                   type="email"
                   name="email"
                   value={this.state.email}
                   onChange={this.changeHandler}
                   id="email"
                   placeholder="Email"
                  />
                  <Label for="EmailFloating">Email</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                   type="phone"
                   name="phone"
                   value={this.state.phone}
                   onChange={this.changeHandler}
                   id="phone"
                   placeholder="Phone"
                  />
                  <Label for="mobileFloating">Mobile</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                        <FormGroup className="form-label-group">
                            <Label> Status </Label>
                            <CustomInput type="select" name="status" value={this.state.status} onChange={this.changeHandler} id="status">
                                <option>Active</option>
                                <option>Inactive</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                            <Label> Profile Type </Label>
                            <CustomInput type="select" name="profile_type" value={this.state.profile_type} onChange={this.changeHandler} id="profile_type">
                                <option>Profile Type</option>
                                <option>Administrator</option>
                                <option>Employee</option>
                                <option>Global Admin</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                    <FormGroup className="form-label-group">
                          <img src={!!this.state.profile_image ? URL.createObjectURL(this.state.profile_image) : img} width="100px"/>
                              <Input
                                type="file"
                                name="profile_image"
                                // value={this.state}
                                onChange={(e) => this.setState({...this.state, profile_image : e.target.files[0]})}
                                id="fileFloating"
                               
                              />
                        {/* <Label for="nameFloating">Program Image</Label> */}
                    </FormGroup>  
                </Col>
             
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    // onClick={e => e.preventDefault()}
                  >
                    Save
                  </Button.Ripple>
                  <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                   Delete
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
const mapStateToProps = (state) => {
  return {

  };
}
export default connect(mapStateToProps, {CREATE_SUB_USER})(FloatingLabels);


// import React from "react"
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   FormGroup,
//   Row,
//   Col,
//   Input,
//   Form,
//   Button,
//   Label,CustomInput
// } from "reactstrap"

// import "../../../../assets/scss/pages/users.scss"
// import img from "../../../../assets/img/pages/1-apex.png"
// import { CREATE_SUB_USER } from '../../../../redux/actions/stripe';
// import {connect} from 'react-redux';
// class FloatingLabels extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       stripeName : "",
//       color : "",
//       lable : "",
//       total_stripe : "",
//       progression : "",
//       candidate : "",
//       age_requirement : "",
//       profile_image : "",      
//     }
//     this.changeHandler = this.changeHandler.bind(this);
//     this.onsubmit = this.onsubmit.bind(this);
//   }

//   changeHandler(e){
//       this.setState({...this.state, [e.target.name] : e.target.value});
//   }

//   onsubmit(e){
//     e.preventDefault();
//     this.props.CREATE_SUB_USER(this.state);
//     setTimeout(() => {
//       this.props.toggle();
//     }, 600)
//   }
  
//   render() {
//     return (
//       <Card>
//         <CardHeader>
//           {/* <CardTitle>Vertical Form With Floating Labels</CardTitle> */}
//         </CardHeader>
//         <CardBody>
//         <Form className="mt-10" onSubmit={this.onsubmit}>
//             <Row>
//               <Col sm="12">
//                 <FormGroup className="form-label-group">
//                   <Input
//                     type="text"
//                     name="stripeName"
//                     value={this.state.stripeName}
//                     onChange={this.changeHandler}
//                     id="stripeFloating"
//                     placeholder="Stripe Name"
//                   />
//                   <Label for="nameFloating">Stripe Name</Label>
//                 </FormGroup>
//               </Col>
//               <Col sm="12">
//                 <FormGroup className="form-label-group">
//                   <Row>
//                         <div className="col-md-3 col-sm-12 col-xs-12">
//                         <Label for="nameFloating">color</Label>
//                         </div>
//                         <div className="col-md-9 col-sm-12 col-xs-12">
//                         <Input
//                           name="color"
//                           value={this.state.color}
//                           onChange={this.changeHandler}
//                           type="color"
//                           id="colorFloating"
//                           className="npt-1"
//                         />
//                         </div>
//                   </Row>
//                 </FormGroup>
//               </Col>
//               <Col sm="12">
//                 <FormGroup className="form-label-group">
//                   <Input
//                     type="text"
//                     name="lable"
//                     value={this.state.lable}
//                     onChange={this.changeHandler}
//                     id="labelFloating"
//                     placeholder="label"
//                   />
//                   <Label for="passwordFloating">Label</Label>
//                 </FormGroup>
//               </Col>
//               <Col sm="12">
//                 <FormGroup className="form-label-group">
//                   <Input
//                     type="text"
//                     name="total_stripe"
//                     value={this.state.total_stripe}
//                     onChange={this.changeHandler}
//                     id="totalstripeFloating"
//                     placeholder="Total Stripe"
//                   />
//                   <Label for="nameFloating">Total Stripe</Label>
//                 </FormGroup>
//               </Col>
//               <Col sm="12">
//                         <FormGroup className="form-label-group">
//                             <div>
//                             <Label> Progression </Label>
//                             </div>
//                             <CustomInput type="select" name="progression" 
//                             value={this.state.progression} id="Progression"
//                             onChange={this.changeHandler}>
//                                 <option>Progression</option>
//                                 <option>By Time Only</option>
//                                 <option>By Time Only & Lession</option>
//                                 <option>By Lession Only </option>
//                             </CustomInput>
//                         </FormGroup>
//                 </Col>
//                 <Col sm="12">
//                         <FormGroup className="form-label-group">
//                             <div>
//                             <Label> Candidate </Label>
//                             </div>
//                             <CustomInput type="select" name="candidate" value={this.state.candidate} onChange={this.changeHandler} id="Candidate">
//                                 <option>Orange Belt</option>
//                                 <option>Red Tip</option>
//                                 <option>Black Belt</option>
//                             </CustomInput>
//                         </FormGroup>
//                 </Col>
//               <Col sm="12">
//                         <FormGroup className="form-label-group">
//                             <div>
//                             <Label> Age Requirement </Label>
//                             </div>
//                             <CustomInput type="select" name="age_requirement" value={this.state.age_requirement} onChange={this.changeHandler} id="AgeRequirementatus">
//                                 <option>Requirement</option>
//                                 <option>1</option>
//                                 <option>2</option>
//                                 <option>3</option>
//                                 <option>4</option>

//                             </CustomInput>
//                         </FormGroup>
//                 </Col>
//                 <Col sm="12">
//                     <FormGroup className="form-label-group">
//                           <img src={!!this.state.profile_image ? URL.createObjectURL(this.state.profile_image) : img} width="100px"/>
//                               <Input
//                                 type="file"
//                                 name="profile_image"
//                                 // value={this.state}
//                                 onChange={(e) => this.setState({...this.state, profile_image : e.target.files[0]})}
//                                 id="fileFloating"
//                                 placeholder="Program Name"
//                               />
//                           <Label for="nameFloating">Program Image</Label>
//                     </FormGroup>
//                 </Col>
                
//               <Col sm="12">
//                 <FormGroup className="form-label-group">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                     // onClick={e => e.preventDefault()}
//                   >
//                     Save
//                   </Button.Ripple>
//                   <Button.Ripple
//                     outline
//                     color="warning"
//                     type="reset"
//                     className="mb-1"
//                   >
//                    Delete
//                   </Button.Ripple>
//                 </FormGroup>
//               </Col>
//             </Row>
//           </Form>
//         </CardBody>
//       </Card>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {

//   };
// }

// export default connect(mapStateToProps, {CREATE_SUB_USER})(FloatingLabels);
