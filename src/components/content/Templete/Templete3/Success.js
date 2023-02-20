import React,{Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Textfield from "material-ui/TextField";
import { RaisedButton } from "material-ui";


export class Success extends Component {
    continue = e=> {
        e.preventDefault();
        this.props.nextStep();

    }
    render() {
        const{values,handleChange} = this.props;

        return [
<MuiThemeProvider>
<ReactFragment>
<AppBar title="Success"/>
<h1>Thankyou</h1>
        </ReactFragment>
        </MuiThemeProvider>
        ];
    }
}

 
export default Success




