import React, {Component} from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {ChromePicker} from "react-color";
import {arrayMove} from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';

class ColorPickerForm extends Component {
  constructor(props){
    super(props);
    this.state = {currentColor: 'teal', newColorName: ""};
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // custom rule will have name 'isColorNameUnique'
    //write validaation for name.users can not write same name for each color.
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
      //every method returns a Boolean value.All elements should be True.
        this.props.colors.every(
          ({name}) => name.toLowerCase() !== value.toLowerCase()
        )
    );
   //write validation for color.users can not add same color in one palette.
    ValidatorForm.addValidationRule('isColorUnique', value => 
      //every method returns a Boolean value.All elements should be True.
        this.props.colors.every(
          ({color}) => color !== this.state.currentColor
        )
    );
    
  };

  updateCurrentColor(newColor){
    console.log(newColor.hex);
    this.setState({currentColor: newColor.hex});
  };

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit(){
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({newColorName: ""});
  };


    render(){
      const {paletteIsFull} = this.props;
      const {currentColor, newColorName} = this.state;
        return (
            <div>
                <ChromePicker
                     color={currentColor}
                     onChangeComplete={this.updateCurrentColor}/>
                 <ValidatorForm onSubmit={this.handleSubmit}>
                       <TextValidator 
                          value={newColorName} 
                          name= "newColorName"
                          onChange={this.handleChange}
                          validators={['required','isColorNameUnique', 'isColorUnique']}
                          errorMessages={[
                            'Enter a Color Name',
                            'Color Name Must Be Unique', 
                            'Color Already Used']}
                       />
                       <Button 
                          variant="contained" 
                          color='primary'
                          type='submit'
                          disabled ={paletteIsFull}
                          style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
                          >
                          {paletteIsFull ? "Palette Full" : "Add Color"}
                       </Button>
                  </ValidatorForm>
            </div>
        )
    }
}


export default ColorPickerForm;