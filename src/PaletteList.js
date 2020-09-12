import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from "react-router-dom";
import "./PaletteList.css";

class PaletteList extends Component{
    render(){
        const {palettes} = this.props;
        return (
            <div>
                <MiniPalette/>
                <h1 className="palette-list">Palette of Colors</h1>
                {palettes.map(palette => (
                    <MiniPalette {...palette} /> 
                ))}
            </div>
        )
    }
}


export default PaletteList;