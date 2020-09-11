import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import "./Palette.css";




class Palette extends Component {
    constructor(props){
        super(props);
        this.state = { level: 500 };
        this.ChangeLevel=this.ChangeLevel.bind(this)
    }

    ChangeLevel(level){
        this.setState({level})
    }

    render() {
             const { colors } = this.props.palette;
             const { level } = this.state;
             const colorboxes = colors[level].map(color =>(
            <ColorBox background={color.hex} name={color.name} />    
                ));
        return (
            <div className="Palette">
                <Navbar level={level} ChangeLevel={this.ChangeLevel}/>
                <div className="palette-colors">
                    {colorboxes}
                </div>
            </div>
        );
    }
   
}

export default Palette;