import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from "./ColorHelpers";
import NewPaletteForm from './NewPaletteForm';


class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render(){
        //we must write palette/new route before /palette/:id because if we dont do 
        //that we cant open palette/new page it has conflict with palette/:id page 
        //and react try to find page with new id so we get an error

    return (
      <Switch>
        <Route exact path='/palette/new' render = {() => <NewPaletteForm/>} />
        <Route exact path="/" render={() => <PaletteList palettes={seedColors}/>} />
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


