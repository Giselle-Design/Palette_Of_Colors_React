import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
//import link to make link in page.
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteListStyles";




class PaletteList extends Component{
    render(){
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>🎨 Palette of Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <Link className={classes.linkColor} to={`/palette/${palette.id}`}>
                                <MiniPalette {...palette} /> 
                            </Link>
                         ))}
                    </div>
                </div> 
            </div>
        )
    }
}


export default withStyles(styles)(PaletteList);