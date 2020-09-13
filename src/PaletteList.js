import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import "./PaletteList.css";

const styles = {

    root: {
        backgroundColor: "#ff1ab3",
        height: "100vh",
        display:  "flex",
        alignItem: "flex-start",
        justifyContent: "center",
        
    },

    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "25px"
    },

    nav: {
        display: "flex",
        width: "100%",
        justfyContent: "space-between",
    },

    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    }

};

class PaletteList extends Component{
    render(){
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav classes={classes.nav}>
                        <h1 className="palette-list">🎨 Palette of Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <Link className="link-color" to={`/palette/${palette.id}`}>
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