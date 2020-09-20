import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import "./PaletteList.css";

const styles = {

    root: {
        // backgroundColor: "#ff1ab3",
        background: "linear-gradient(to right, #eaafc8, #654ea3)",
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
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Satisfy",
        color: "white",
        "& a": {
            color: "white"
        }
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
                    <nav className={classes.nav}>
                        <h1>🎨 Palette of Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
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