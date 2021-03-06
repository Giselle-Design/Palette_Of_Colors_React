import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
//import link to make link in page.
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteListStyles";




class PaletteList extends Component{
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    render(){
        const {palettes, classes, deletePalette} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>🎨 Palettes </h1>
                        <Link className={classes.create} to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette 
                                {...palette}
                                handleClick={()=> this.goToPalette(palette.id)}
                                handleDelete = {deletePalette}
                                key={palette.id}
                                id={palette.id}
                            />
                         ))}
                    </div>
                </div> 
            </div>
        )
    }
}


export default withStyles(styles)(PaletteList);