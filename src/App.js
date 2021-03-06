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
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);

  }

  findPalette(id){
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render(){
        //we must write palette/new route before /palette/:id because if we dont do 
        //that we cant open palette/new page it has conflict with palette/:id page 
        //and react try to find page with new id so we get an error

    return (
      <Switch>
        <Route 
          exact 
          path='/palette/new' 
          render = {routeProps => (
            <NewPaletteForm 
              savePalette={this.savePalette} 
              palettes={this.state.palettes} 
              {...routeProps}
            />
         )} 
        />
        <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteList
                palettes={this.state.palettes}
                deletePalette={this.deletePalette}
                {...routeProps}
              />
          )}
         />
        <Route exact path="/palette/:id" 
        render={routeProps => (
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id)
          )}
          />
        )}
        />
        <Route 
           render={routeProps => (
              <PaletteList
                palettes={this.state.palettes}
                deletePalette={this.deletePalette}
                {...routeProps}
              />
          )}/>
      </Switch>
      

      // <div>
      //  <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  } 
}

export default App;


