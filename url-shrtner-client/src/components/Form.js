import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import { isWebUri } from 'valid-url';


const Form = () => {
    const [longUrl, setLongUrl] = useState("");
    const [preferedAlias, setPreferedAlias] = useState("");
    const [generatedURL, setGeneratedURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});


    // Method to handle the form submit
    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setGeneratedURL("");

        // Validate the input the user has submitted
        var isFormValid = await validateForm();
        if (!isFormValid) {
            setLoading(false);
            return;
        }

        // If user has entered a prefered alias, use it, else generate another one
        if (preferedAlias) {
            setGeneratedURL("shortlink.com/" + preferedAlias)
        } else {
            setGeneratedURL("shortlink.com/" + nanoid(5))
        }
        // Update DB with the new URL
        setLoading(false);
    };

    // Method to validate the form input
    const validateForm = async () => {
        var errors = {};
        //check if the user has entered a long URL
        if (!longUrl) {
            errors.longUrl = "Please enter a long URL";
        }

        //check to see if long url is valid
        if (longUrl && !isWebUri(longUrl)) {
            errors.longUrl = "Please enter a valid URL";
        }

        //check if the prefered alias is valid
        if (preferedAlias && preferedAlias.length > 5) {
            errors.preferedAlias = "Prefered alias must be less than 5 characters";
        }
        // check if the prefered alias doesn't have spaces
        if (preferedAlias && preferedAlias.indexOf(" ") > -1) {
            errors.preferedAlias = "Prefered alias cannot contain spaces";
        }
        setErrorMessages(errors);
        // check if we have no errors
        if (Object.keys(errors).length === 0) {
            return true;
        }

        return false
    };

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
                    error={errorMessages.longUrl ? true : false}
                    label="Enter Your Long URL"
                    placeholder="https://...."
                    helperText={errorMessages.longUrl ? errorMessages.longUrl : " "}
                    onChange={(event) => setLongUrl(event.target.value)}
                />
                <TextField
                    error={errorMessages.preferedAlias ? true : false}
                    label="Enter Your Prefered Alias"
                    placeholder="eg. ECQ!YC (optional)"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">https://ShortLink.com/</InputAdornment>,
                    }}
                    helperText={errorMessages.preferedAlias ? errorMessages.preferedAlias : " "}
                    onChange={(event) => {
                        setPreferedAlias(event.target.value)
                    }}
                />
                <Button
                    margin='normal'
                    variant="contained"
                    onClick={(e) => onSubmit(e)}

                >
                    Generate ShortLink!
                </Button>
                {generatedURL && (

                    <Box>

                    <TextField
                        variant="filled"
                        value={generatedURL}
                    />
                    <Button
                        margin='normal'
                        variant="contained"
                        onClick = {() => {
                            navigator.clipboard.writeText(generatedURL);
                        }}
                        >
                        Copy
                    </Button>
                    </Box>

                )}


            </Box >
        </Box>

    );


};
export default Form