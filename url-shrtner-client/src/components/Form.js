import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
const Form = () => {
    return(


    <Box>
        <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
    </Container>
    </Box>
        

    );


};
export default Form