import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
const Form = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "30vh 10px 0px 10px",
            }}
        >
            <Box
                sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '5px',


                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "300",
                        margin: "0px auto 0px auto",
                        lineHeight: "100%",
                        marignBottom: "10px",
                    }}
                >
                    SHORT
                    <Box
                        component="span"
                        sx={{
                            fontWeight: "900",
                            alignItems: "center",
                        }}
                    >
                        LINK
                    </Box>
                </Typography>


                <TextField
                    required
                    id="outlined-required"
                    label="Enter Your Long URL"
                />

                <TextField
                    id="outlined-start-adornment"
                    placeholder="eg. ECQ!YC (optional)"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">https://ShortLink.com/</InputAdornment>,
                    }}
                />
                <Button
                    margin='normal'
                    variant="contained">Generate ShortLink!</Button>

            </Box >

        </Box>

    );


};
export default Form