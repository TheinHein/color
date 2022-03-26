import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Picker from "emoji-picker-react";
export default function SaveDialog(props) {
  return (
    <Dialog open={props.dialogOpen} onClose={props.handleDialogClose}>
      <ValidatorForm onSubmit={props.handleSave}>
        <DialogTitle id="save-palette-dialog-title">
          Save Your Color Palette
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextValidator
              label="Choose Palette Name"
              variant="standard"
              value={props.paletteName}
              onChange={props.handlePaletteNameInput}
              type="text"
              validators={["required", "uniquePaletteName"]}
              errorMessages={[
                "Palette Name is required.",
                `A Palette with "${props.paletteName}" name already existed.`,
              ]}
              style={{ marginBottom: "10px" }}
            />
            <Box
              style={{
                fontSize: "1.8rem",
                borderRadius: "5px",
                width: "3rem",
                textAlign: "center",
                backgroundColor: "rgba(170, 170, 170, 0.2)",
                boxShadow: "0.5px 0.5px 1px #7A7A7A",
                marginLeft: "auto",
              }}
            >
              {props.emoji}
            </Box>
          </Box>
          <DialogContentText
            id="save-palette-dialog-description"
            sx={{ marginBottom: "10px" }}
          >
            Choose an emoji
          </DialogContentText>
          <Picker onEmojiClick={props.handleEmoji} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogClose}>cancel</Button>
          <Button autoFocus type="submit">
            save
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
