// ** React Imports
import { forwardRef, useRef, useState } from "react";
import { FormHelperText, OutlinedInput, useTheme } from "@mui/material";
import {
  Checkbox,
  MenuItem,
  TextField,
  InputAdornment,
  InputLabel,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Autocomplete,
  Select,
  Radio,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { Controller } from "react-hook-form";


export const InputText = (props) => {

  const {
    name,
    control,
    required,
    label,
    InputProps,
    readOnly
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