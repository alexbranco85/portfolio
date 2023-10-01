
import { forwardRef, useEffect, useRef, useState } from "react";
import { FormHelperText, OutlinedInput, useTheme } from "@mui/material";
import {
  TextField,
  FormControl,
} from "@mui/material";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export const TextEditor = (props) => {

  const {
    name,
    control,
    required,
    label,
    InputProps,
    readOnly,
    multiline,
    rows,
    type,
    setValue
  } = props;

  const [fieldValue, setFieldValue] = useState('')

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <>
            <ReactQuill theme="snow"
              value={field.value}
              onChange={(value) => setValue(name, value)}
              name={name}
              label={label}
              control={control}
            />
          </>
        )}
      />
    </FormControl>
  )
}