import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Avatar, Box, Container, Grid, Paper} from "@mui/material";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function StronaDruga(){
    const [expanded, setExpanded] = React.useState('panel1');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return(
        <Container maxWidth="sm">
            <Box style={{position:'static'}}>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    Sezon 2022 zaczyna się już 18 marca —
                    <Button variant="text" onClick={handleClickOpen}>
                     Sprawdź kalendarz!
                </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Zmiana strony"}.
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Czy chcesz przejść na stronę F1 w celu sprawdzenia kalendarza na 2022 rok?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Nie</Button>
                            <Button onClick={() => {handleClose();  window.open('https://www.formula1.com/en/racing/2022.html', '_blank');}} autoFocus>
                                Tak
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Alert>
            </Stack>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Max Verstappen 33</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <Avatar variant="rounded" sx={{width: 128, height: 128}} src="https://i.imgur.com/OjGBSlQ.jpg"/>
                        </Grid>
                        <Grid item xs={7}>
                            <Item>
                                <Typography>
                                    Max Emilian Verstappen (ur. 30 września 1997 w Hasselt) – holenderski kierowca wyścigowy, mistrz świata Formuły 1 w sezonie 2021.
                                    W wieku 17 lat i 166 dni został najmłodszym kierowcą, który uczestniczył w wyścigu Formuły 1. Jego debiutanckim wyścigiem było Grand Prix Australii 2015 dla Scuderii Toro Rosso. Jest także najmłodszym kierowcą, który zdobył najszybsze okrążenie, miejsce na podium oraz wygrał wyścig Formuły 1.
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Lando Norris 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <Avatar variant="rounded" sx={{width: 128, height: 128}} src="https://i.imgur.com/RbJNueJ.jpg"/>
                        </Grid>
                        <Grid item xs={7}>
                            <Item>
                                <Typography>
                                    Lando Norris (ur. 13 listopada 1999 w Bristolu) – brytyjski kierowca wyścigowy pochodzenia belgijskiego, startujący w mistrzostwach świata Formuły 1 od sezonu 2019, kierowca zespołu McLaren. Wicemistrz Formuły 2 (2018), mistrz Europejskiej Formuły 3 (2017), Północnoeuropejskiego Pucharu Formuły Renault 2.0 (2016), Europejskiego Pucharu Formuły Renault 2.0 (2016), Toyota Racing Series (2017) i MSA Formula (2015), kartingowy mistrz świata 2014.
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Charles Leclerc 16</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Grid item xs={3}>
                            <Avatar variant="rounded" sx={{width: 128, height: 128}} src="https://i.imgur.com/2mpnqEs.jpg"/>
                        </Grid>
                        <Grid item xs={7}>
                            <Item>
                                <Typography>
                                    Charles Leclerc, właśc. Charles Marc Hervé Percival Leclerc (ur. 16 października 1997 w Monako) – monakijski kierowca wyścigowy, startujący w mistrzostwach świata Formuły 1 od sezonu 2018. Od sezonu 2019 kierowca zespołu Scuderia Ferrari, zwycięzca dwóch wyścigów Formuły 1, mistrz Formuły 2 (2017), mistrz serii GP3 (2016).
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            </Box>

        </Container>

    )
}

export default StronaDruga;