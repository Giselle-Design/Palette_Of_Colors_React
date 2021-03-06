import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteStyles.js';





class Palette extends Component {
    constructor(props){
        super(props);
        this.state = { level: 500, format: "hex" };
        this.ChangeLevel=this.ChangeLevel.bind(this)
        this.ChangeFormat=this.ChangeFormat.bind(this)
    }

    ChangeLevel(level){
        this.setState({level});
    }

    ChangeFormat(val){
        this.setState({format: val});
    }

    render() {
             const { colors, paletteName, emoji } = this.props.palette;
             const {classes} = this.props;
             const { level, format } = this.state;
             const colorboxes = colors[level].map(color =>(
            <ColorBox background={color[format]} name={color.name} key={color.id}/>    
                ));
        return (
            <div className={classes.Palette}>
                <Navbar 
                level={level} 
                ChangeLevel={this.ChangeLevel} 
                handleChange={this.ChangeFormat}/>
                <div className={classes.Colors}>
                    {colorboxes}
                </div>
                <footer className={classes.PaletteFooter}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </footer>
            </div>
        );
    }
   
}

export default withStyles(styles)(Palette);