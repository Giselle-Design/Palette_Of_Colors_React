import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import  styles from "./styles/NavbarStyles";




class Navbar extends Component{
    constructor(props){
        super(props);
        this.state ={format: "hex", open: false};
        this.handleFormatChange=this.handleFormatChange.bind(this);
        this.closeSnackbar=this.closeSnackbar.bind(this);
    }

     handleFormatChange(e){
        this.setState({format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
     }


     closeSnackbar(){
         this.setState({open: false});
     }

    render() {
        const {level, ChangeLevel, classes} = this.props;
        const {format} = this.state;
        return(
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">🖌 Art Gallery</Link>
                </div>
                <div className={classes.sliderContainer}>
                <span>Level: {level}</span>
                  <div className={classes.slider}>
                     <Slider 
                     defaultValue={level} 
                     min={100} 
                     max={900} 
                     step={100}
                     onAfterChange={ChangeLevel}/>
                  </div>
                </div>
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - (255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - (255,255,255,0.1)</MenuItem>
                    </Select>
                </div> 
                <Snackbar 
                    anchorOrigin={{ vertical: "top", horizontal: "center"}} 
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
                    ContentProps={{ "aria-describedy": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[<IconButton 
                    onClick={this.closeSnackbar} 
                    color='inherit' 
                    key="close" 
                    aria-label='close'>
                    <CloseIcon />
                    </IconButton >]}
                /> 
            </header>

        );
    }
}



export default withStyles(styles)(Navbar);