import * as React from 'react';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import veg from "../../assets/veg.png"
import nonVeg from "../../assets/non-veg.png"

export default function ToggleButtons({type, settype}) {
    // const [alignment, setAlignment] = React.useState('all');

    const handleAlignment = (event, newAlignment) => {
        settype(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={type}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="veg" aria-label="left aligned">
                <img src={veg} alt="Veg" style={{width:"30px", height:"30px"}}/>
            </ToggleButton>
            <ToggleButton value="all" aria-label="centered">
                All
            </ToggleButton>
            <ToggleButton value="non-veg" aria-label="right aligned">
                <img src={nonVeg} alt="nonVeg" style={{width:"30px", height:"30px"}}/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
