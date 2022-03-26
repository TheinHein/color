import React from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { styled } from "@mui/material/styles";
import { Drawer, IconButton, Divider, Box, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DRAWER_WIDTH } from "./constants";
const drawerWidth = DRAWER_WIDTH;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
export default function ColorPickerDrawer(props) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        height: "100%",
        "@media (max-width:578px)": {
          "& .MuiDrawer-paper": {
            height: "100vh",
          },
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
      <DrawerHeader>
        <IconButton onClick={props.handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "95%",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={props.clearPalette}
            sx={{
              height: "35px",
              width: "50%",
              fontSize: "0.6rem",
            }}
          >
            clear palette
          </Button>

          <Button
            variant="contained"
            onClick={props.randomColor}
            disabled={props.fullPalette}
            sx={{
              height: "35px",
              width: "50%",
              fontSize: "0.6rem",
            }}
          >
            random color
          </Button>
        </Box>

        <ChromePicker
          color={props.newColor}
          onChangeComplete={props.handleColorInput}
        />

        <ValidatorForm onSubmit={props.addNewColor} instantValidate={false}>
          <TextValidator
            label="Color Name"
            value={props.name}
            onChange={props.handleNameInput}
            type="text"
            validators={["required", "uniqueName", "uniqueColor"]}
            errorMessages={[
              "Name is required.",
              "Name already existed.",
              "Color already used",
            ]}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${props.newColor}`,
              width: "100%",
              height: "4rem",
              margin: "15px auto",
              display: "flex",
              justifyContent: "center",
            }}
            type="submit"
            disabled={props.fullPalette}
          >
            add color
          </Button>
        </ValidatorForm>
      </Box>
    </Drawer>
  );
}
