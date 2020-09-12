import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import "./Palette.css";




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
             const { colors } = this.props.palette;
             const { level, format } = this.state;
             const colorboxes = colors[level].map(color =>(
            <ColorBox background={color[format]} name={color.name} />    
                ));
        return (
            <div className="Palette">
                <Navbar level={level} 
                ChangeLevel={this.ChangeLevel} 
                handleChange={this.ChangeFormat}/>
                <div className="palette-colors">
                    {colorboxes}
                </div>
            </div>
        );
    }
   
}

export default Palette;