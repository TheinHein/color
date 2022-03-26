import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import Collection from "./Collection";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import Sortable from "./Sortable";
function App() {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
  function findPalette(id) {
    return palettes.find((palette) => palette.id === id);
  }
  const [palettes, setPalettes] = React.useState(savedPalettes || seedColors);
  const savePalette = (palette) => {
    setPalettes([...palettes, palette]);
  };
  const deleteMiniPalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
  };
  const syncLocalStorage = (palettes) => {
    localStorage.setItem("palettes", JSON.stringify(palettes));
  };
  React.useEffect(() => {
    syncLocalStorage(palettes);
  }, [palettes]);

  return (
    <Switch>
      <Route exact path="/sort" render={() => <Sortable />} />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <Collection
            palettes={palettes}
            deleteMiniPalette={deleteMiniPalette}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm
            palettes={palettes}
            savePalette={savePalette}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            {...generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            {...routeProps}
            {...generatePalette(findPalette(routeProps.match.params.paletteId))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
