import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
function generatePalette(palette) {
  let newPalette = {
    paletteName: palette.paletteName,
    id: palette.id,
    emoji: palette.emoji,
    colors: {},
  };
  // * {colors :[ {50:[],100:[],...}]}
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of palette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}

// * hex => [1.4darkenHex, hex, whiteHex]
function getRange(hex) {
  const end = "#fff";
  return [chroma(hex).darken(1.4).hex(), hex, end];
}
function getScale(hex, numOfColors) {
  // * [start, middle, end] => {start,...,end}
  return chroma.scale(getRange(hex)).mode("lab").colors(numOfColors);
}
export { generatePalette };
