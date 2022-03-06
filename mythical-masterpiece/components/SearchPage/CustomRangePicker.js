import {Fragment, useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const CustomRangePicker = (props) => {
    const handleChange = (event, newValue) => {
        props.setValue(newValue);
        props.filterListHandler();
    };

    return (
        <Fragment>
            <Box sx={{width: 230}}>
                <Slider
                    min={+props.minMax[0]}
                    max={+props.minMax[props.minMax.length - 1]}
                    getAriaLabel={() => 'Temperature range'}
                    value={props.value}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    isRtl={false}
                />
            </Box>
        </Fragment>
    );
}

export default CustomRangePicker;