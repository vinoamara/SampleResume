import React,{Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {List,ListItem} from 'material-ui/List';
import  RaisedButton  from "material-ui/RaisedButton";


export class Confirm extends Component {
    continue = e=> {
        e.preventDefault();
        this.props.nextStep();

    }
    back = e=> {
        e.preventDefault();
        this.props.prevStep();
}
    render() {
        const{values:{FirstName,LastName,Email,Occupation,City,Bio}} = this .props;

        return [
       <MuiThemeProvider>
       <React.Fragment>
     <AppBar title="Confirm"/>
<List>
    <ListItem
    primaryText="FirstName"
    secondaryText={FirstName}
    />
    <ListItem
    primaryText="LastName"
    secondaryText={LastName}
    />
    <ListItem
    primaryText="Email"
    secondaryText={Email}
/>
    <ListItem
    primaryText="Occupation"
    secondaryText={Occupation}
    />
    <ListItem
    primaryText="City"
    secondaryText={City}
    />
    <ListItem
    primaryText="Bio"
    secondaryText={Bio}
    />
</List>

<br/>
<RaisedButton
label="confirm & countinue"
primary={true}
style={style.button}
onclick={this.continue}
/>
<RaisedButton
label="Back"
primary={false}
style={style.button}
onclick={this.back}
/>

        </React.Fragment>
        </MuiThemeProvider>
        ]
    }
}
 const style={
    button:{
        Margin:15
    }
 }
export default Confirm




