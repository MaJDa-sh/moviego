'use client';

import * as React from 'react';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

interface SelectComponentProps<T extends string | string[]> {
  data: { [key: string]: string };
  selectedData: T;
  setSelectedData: React.Dispatch<React.SetStateAction<T>>;
  singleSelect?: boolean;
}

export default function SelectComponent<T extends string | string[]>({
  data,
  selectedData,
  setSelectedData,
  singleSelect = false,
}: SelectComponentProps<T>) {
  const handleChange = (event: any) => {
    const { value } = event.target;
    setSelectedData(
      singleSelect
        ? (value as string)
        : typeof value === 'string'
        ? value.split(',')
        : value,
    );
  };

  return (
    <FormControl
      sx={{
        m: 1,
        maxWidth: singleSelect ? '10rem' : '20rem',
        width: singleSelect ? '50vw' : '80vw',
      }}
    >
      <InputLabel id="select-label" sx={{ color: 'white' }}>
        {singleSelect ? 'Sort By' : 'Select Genres'}
      </InputLabel>
      <Select
        labelId="select-label"
        id="select"
        multiple={!singleSelect}
        value={selectedData}
        onChange={handleChange}
        input={
          <OutlinedInput label={singleSelect ? 'Sort By' : 'Select Genres'} />
        }
        renderValue={(selected) =>
          singleSelect ? (
            data[selected as string]
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.5,
                minHeight: '2rem',
              }}
            >
              {(selected as string[]).map((id) => (
                <Chip
                  key={id}
                  label={data[id]}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '4px',
                  }}
                />
              ))}
            </Box>
          )
        }
        MenuProps={MenuProps}
      >
        {Object.entries(data).map(([id, name]) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
