import React from 'react'
import Logo from '../images/realLogo.png'
import { Box, Button, Grid } from '@mui/material';
import { motion } from "framer-motion"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CountdownTimer from '../components/CountdownTimer';

function LandingPage() {

    const CenterStyle = {
        alignItems: "center",
        justifyContent: "center",
    }

    const ImgStyle = {
        width: "100%",
        height: "auto"
    }

    const ButtonStyle = {
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "15px",
}

// PUT THIS COUNTDOWN TIMER IN THE BACKEND
const endDate = new Date('June 1, 2022 23:15:30');

const LandingPageComponent = (
    <div>
        <Box container style={CenterStyle}>
            <img src={Logo} style={ImgStyle} alt="Swizz" />
        </Box>
        <Button variant="text" style={ButtonStyle}>
            Shop now
        </Button>
        <CountdownTimer expiryTimestamp={endDate}/>
    </div>

)

return (
    <div>
        {LandingPageComponent}
    </div>
)
}

export default LandingPage