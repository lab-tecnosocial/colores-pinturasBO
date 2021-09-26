import React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MaterialPicker, SwatchesPicker } from 'react-color';



function Credito() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            <Link color="inherit" href="https://labtecnosocial.org/">
                Lab TecnoSocial 2021
            </Link>{' '}
        </Typography>
    );
}


const theme = createTheme();

export default function Picker() {

    const [color, setColor] = useState();
    const [pals, setPals] = useState([]);

    const handleChange = color => setColor(color);

    useEffect(() => {
        getDataFromGithub();
    }, [])

    const getDataFromGithub = async () => {
        const url = 'https://raw.githubusercontent.com/lab-tecnosocial/colores-pinturasBO/main/paletas_pinturasBO.json';
        const allData = await fetch(url).then(response => response.json())
        const paletasData = allData.map(e => e.pals);
        setPals(paletasData);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>

                {/* Hero unit */}
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                        bgColor: color
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            component="h3"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Selector de paletas de pinturas históricas bolivianas
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <MaterialPicker
                                color={color}
                            />
                        </Stack>
                    </Container>
                </Box>
                {/* End hero unit */}

                <Container sx={{ py: 8 }} maxWidth="md">
                    <SwatchesPicker
                        width={800}
                        height={600}
                        onChangeComplete={handleChange}
                        colors={pals}
                    />

                </Container>
            </main>

            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>

                </Typography>
                <Credito />
            </Box>
            {/* End footer */}

        </ThemeProvider>
    );
}