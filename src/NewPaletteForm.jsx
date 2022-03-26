import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import SaveDialog from "./SaveDialog";
import Draggable from "./Draggable";
import ColorPickerDrawer from "./ColorPickerDrawer";
import { ValidatorForm } from "react-material-ui-form-validator";
import { DRAWER_WIDTH } from "./constants";
import seedColors from "./seedColors";
const drawerWidth = DRAWER_WIDTH;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NewPaletteForm({ maxColor = 20, ...props }) {
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [newColor, setColor] = React.useState("#0693E3");
  const [name, setName] = React.useState("");
  const [emoji, setEmoji] = React.useState("");
  const [paletteName, setPaletteName] = React.useState("");
  const [colors, setColors] = React.useState([...seedColors[0].colors]);
  const fullPalette = colors.length >= maxColor;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleColorInput = (pickedColor) => {
    setColor(pickedColor.hex);
  };
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handlePaletteNameInput = (e) => {
    setPaletteName(e.target.value);
  };
  const addNewColor = (e) => {
    setColors([...colors, { name, color: newColor }]);
    setName("");
  };
  const handleSave = () => {
    let newPalette = { paletteName, colors };
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.emoji = emoji;
    props.savePalette(newPalette);
    props.history.push("/");
  };
  const clearPalette = () => {
    setColors([]);
  };
  const randomColor = () => {
    const allColors = props.palettes.map((palette) => palette.colors).flat();
    let randomColor;
    const existed = colors.map((c) => c.name);
    do {
      randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    } while (existed.includes(randomColor.name));
    setColors([...colors, randomColor]);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleEmoji = (evt, emojiObject) => {
    setEmoji(emojiObject.emoji);
  };
  const deleteColor = (delColor) => {
    setColors(colors.filter((c) => c.name !== delColor));
  };
  React.useEffect(() => {
    ValidatorForm.addValidationRule("uniqueName", (value) =>
      colors.every((color) => value.toLowerCase() !== color.name.toLowerCase())
    );
    ValidatorForm.addValidationRule("uniqueColor", () => {
      return colors.every((color) => color.color !== newColor);
    });
    ValidatorForm.addValidationRule("uniquePaletteName", (value) => {
      return props.palettes.every((palette) => value !== palette.paletteName);
    });
  }, [colors, newColor, props.palettes]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              textTransform: "uppercase",
              fontSize: "1rem",
              "@media (max-width:578px)": {
                display: "none",
              },
            }}
          >
            Create a Palette
          </Typography>
          <SaveDialog
            dialogOpen={dialogOpen}
            handleDialogClose={handleDialogClose}
            handleSave={handleSave}
            paletteName={paletteName}
            handlePaletteNameInput={handlePaletteNameInput}
            handleEmoji={handleEmoji}
            emoji={emoji}
          />
          {!open && (
            <Box
              sx={{
                marginLeft: "auto",
                "& > a": { textDecoration: "none" },
              }}
            >
              <Button variant="contained" onClick={handleDialogOpen}>
                save palette
              </Button>
              <Link to="/">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    marginLeft: "10px",
                  }}
                >
                  go back
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <ColorPickerDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        clearPalette={clearPalette}
        randomColor={randomColor}
        fullPalette={fullPalette}
        newColor={newColor}
        handleColorInput={handleColorInput}
        addNewColor={addNewColor}
        name={name}
        handleNameInput={handleNameInput}
      />

      <Main open={open} sx={{ height: "calc(100vh - 64px)" }}>
        <DrawerHeader />
        <Draggable
          colors={colors}
          setColors={setColors}
          {...props}
          deleteColor={deleteColor}
          style={{ touchAction: "none" }}
        />
      </Main>
    </Box>
  );
}
