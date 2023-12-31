// ** React Imports
import { forwardRef, useRef, useState } from "react";
import { FormHelperText, OutlinedInput, useTheme } from "@mui/material";
import {
  TextField,
  FormControl,
} from "@mui/material";
import { Controller } from "react-hook-form";


export const InputText = (props) => {

  const {
    name,
    control,
    required,
    label,
    InputProps,
    readOnly,
    multiline,
    rows,
    type
  } = props;

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              label={label}
              multiline={multiline}
              rows={rows}
              type={type ? type : 'text'}
              InputLabelProps={{ shrink: field.value ? true : false }}
              InputProps={{
                readOnly,
                ...InputProps,
              }}
              fullWidth />
          </>
        )}
      />
    </FormControl>
  )
}