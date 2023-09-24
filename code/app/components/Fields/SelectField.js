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


export const SelectField = (props) => {
  const {
    name,
    options,
    control,
    optionValue,
    optionContent,
    required,
    label,
    size,
    disabled,
    multiple,
  } = props;

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name} size={size ?? 'medium'} disabled={disabled}>
        {required ? `* ${label}` : label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        defaultValue={multiple ? [] : ''}
        render={({ field }) => (
          <Select
            {...field} // Passe as props do campo diretamente para o Select
            input={<OutlinedInput label={label} />}
            multiple={multiple ? true : false}>
            {options?.map((item, index) => (
              <MenuItem key={index} value={item[optionValue]}>
                {item[optionContent]}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};