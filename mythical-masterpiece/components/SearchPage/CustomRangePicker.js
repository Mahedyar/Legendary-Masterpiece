import {Fragment, useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const CustomRangePicker = (props) => {

    function valuetext(value) {
        return `${value}تومان`;
    }

    const handleChange = (event, newValue) => {
        props.setValue(newValue);
    };

    return (
        <Fragment>
            <Box sx={{width: 300}}>
                <Slider
                    min={40000}
                    max={3000000}
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