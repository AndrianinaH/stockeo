import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";

type MySelectProps = {
  label: string;
  options: { value: string | number; label: string }[];
  value: string;
  handleChangeValue(newValue: string): void;
  width?: number;
};

const MySelect: FC<MySelectProps> = ({
  label,
  options,
  value,
  handleChangeValue,
  width,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    handleChangeValue(event.target.value);
  };
  return (
    <FormControl
      fullWidth={width ? false : true}
      sx={{ m: 1, minWidth: width }}
      size="small"
    >
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id={`select-id-${value}`}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
