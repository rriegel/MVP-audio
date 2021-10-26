import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function BPMSlider({ def, current, changeBPM }) {
  return (
    <Box sx={{ width: 300 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {current} BPM
      </Typography>
      <Slider
        key={`slider-${def}`}
        defaultValue={def}
        valueLabelDisplay="on"
        step={1}
        min={50}
        max={200}
        onChange={ (e) => changeBPM(e) }
      />
    </Box>
  )
};
