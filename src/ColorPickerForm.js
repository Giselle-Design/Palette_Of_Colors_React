import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {ChromePicker} from "react-color";

const styles = {
  picker : {
    width: "100% !important",
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem",
  },
  colorInput: {
    width: "100%",
    height: "70px",

  }

};


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
      const {paletteIsFull, classes} = this.props;
      const {currentColor, newColorName} = this.state;
        return (
            <div>
                <ChromePicker
                     color={currentColor}
                     onChangeComplete={this.updateCurrentColor}
                     className={classes.picker}
                     />
                  <ValidatorForm onSubmit={this.handleSubmit}>
                       <TextValidator 
                          value={newColorName} 
                          name= "newColorName"
                          onChange={this.handleChange}
                          className={classes.colorInput}
                          variant= "filled"
                          margin="normal"
                          placeholder="Color Name"
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
                          className={classes.addColor}
                          style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
                          >
                          {paletteIsFull ? "Palette Full" : "Add Color"}
                       </Button>
                  </ValidatorForm>
            </div>
        )
    }
}


export default withStyles(styles)(ColorPickerForm);