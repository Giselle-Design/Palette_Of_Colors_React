import React, { Component } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from './styles/ColorBoxStyles';
import { withStyles } from '@material-ui/core/styles';



class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {copied: false};
        this.changeCopyState=this.changeCopyState.bind(this);
        // console.log("Iam inside the Constructor");
    }
    
    changeCopyState(){
        this.setState({copied: true}, () => {
          setTimeout(() => this.setState({copied: false }), 1500); 
        //   console.log("Iam inside the ChangeCopyState");  
        });
    }

    render(){
      const {name, background, classes}= this.props; 
      const {copied} = this.state; 
    //   console.log("Iam inside render method"); 
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>
                        <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                            <h1>Copied!</h1>
                                <p className={classes.copyText}>
                                   {this.props.background}
                                </p>
                                </div>
                                <div>
                                    <div className={classes.boxContent}>
                                    <span className={classes.colorName}>{name}</span>
                                </div>
                            <button className={classes.copyButton}>Copy</button>
                        </div>
                    {/* <span className="see-more">MORE</span> */}
                </div>
            </CopyToClipboard>
        );
    }
   
}




export default withStyles(styles)(ColorBox);
