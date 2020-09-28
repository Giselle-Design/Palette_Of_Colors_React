import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from "./ColorHelpers";
import NewPaletteForm from './NewPaletteForm';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {palettes: seedColors};
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);

  }

  findPalette(id){
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette ] });
  }

  render(){
        //we must write palette/new route before /palette/:id because if we dont do 
        //that we cant open palette/new page it has conflict with palette/:id page 
        //and react try to find page with new id so we get an error

    return (
      <Switch>
        <Route exact path='/palette/new' render = {routeProps => (
        <NewPaletteForm savePalette={this.savePalette} {...routeProps}/>
         )} 
        />
        <Route exact path="/" render={() => <PaletteList palettes={this.state.palettes}/>} />
        <Route exact path="/palette/:id" 
        render={routeProps => (
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id)
          )}
          />
        )}
        />
      </Switch>
      

      // <div>
      //  <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  } 
}

export default App;


