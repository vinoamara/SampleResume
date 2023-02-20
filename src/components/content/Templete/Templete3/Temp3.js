import React,{component} from 'react';
import UserDetails from './UserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success'


export class Temp3 extends component  {
  state={
     step:1,
    firstName:'',
    lastName: '',
    email:'',
    occupation:'',
    city:'',
    bio:''
  }
  nextStep = ()=> {
    const {step} =this.state;
    this.setState({step:step+1});
}
 prevStep = ()=>{
  const {step} = this.state;
  this.setState({step:step-1});
 }
 handleChange = input => e=>{
  this.setState({[input]:e.target.values});
}

render() {
      const{step} = this.state;
      const{firstName,lastName,email,occupation,city,bio} = this.state;
      const values = {firstName,lastName,email,occupation,city,bio}
      switch(step) {
        case 1:
          return[
            <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
              />

          ];
          case 2:
          return [
            <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
              />
          ];
          case 3:
            return [
              <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values ={values}
              />
            ];
            case 4 :
              return <Success/>;
  
      }

}
  
}

export default Temp3

