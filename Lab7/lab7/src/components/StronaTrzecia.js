import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Container} from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function StronaTrzecia(){
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <Container maxWidth="md">
            <Box sx={{width: '90%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Autodromo Nazionale di Monza" {...a11yProps(0)} />
                        <Tab label="Circuit de Monaco" {...a11yProps(1)} />
                        <Tab label="Circuit de Spa-Francorchamps" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Stack spacing={2}>
                        <Item sx={{textAlign: 'left'}}>
                            <b>Autodromo Nazionale di Monza</b> – tor wyścigowy we Włoszech niedaleko miejscowości Monza (na północ od Mediolanu).
                            <br/>
                            Na torze odbywa się Grand Prix Włoch Formuły 1.
                            <br/>
                            Tor charakteryzuje się długimi prostymi, przez co umożliwia osiąganie wysokich prędkości (do około 360 km/h w Formule 1). Kierowcy Formuły 1 prowadzą bolid z maksymalnie otwartą przepustnicą przez około 76% czasu okrążenia, dłużej niż na innych torach.
                            <br/>
                            Tor jest płaski, z niewielkimi różnicami poziomu jazdy pomiędzy drugim zakrętem Lesmo i Variante Ascari. Jednym z bardziej znanych zakrętów jest Curva Parabolica/Alboreto. Jest to długi 180-stopniowy prawy zakręt, który przechodzi w najdłuższą prostą toru – zarazem linię startu-mety.
                        </Item>
                        <Item>
                            <img src="https://i.imgur.com/NBOGxRl.png" width="360" height="180"
                                 alt='Autodromo Nazionale di Monza'/>
                        </Item>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack spacing={2}>
                        <Item sx={{textAlign: 'left'}}>
                            <b>Circuit de Monaco</b> – tor wyścigowy w Monako, na którym rozgrywany jest wyścig w ramach zawodów Formuły 1.
                            <br/>
                            Jest to tor uliczny (o długości 3337m) założony w 1929 roku. Zawody w Monte Carlo rozgrywane są od 1950. Kierowcy ścigają się na dystansie 260,286 km, co daje razem 78 okrążeń (najwięcej w obecnym kalendarzu). Tor jest jednym z najniebezpieczniejszych i najtrudniejszych na świecie. Oprócz bardzo ciasnych szykan i szybkiego łuku w tunelu pod hotelem Fairmont, znajduje się tam najciaśniejszy nawrót spośród torów Formuły 1, w którym bolidy muszą zwolnić poniżej 50 km/h (podobny jest też na torze Guia Circuit w Makau, gdzie ściga się m.in. seria WTCC).
                            <br/>
                            Jest to jedyny tor Formuły 1, który można oglądać na żywo bez konieczności kupienia biletu wstępu
                        </Item>
                        <Item>
                    <img src="https://i.imgur.com/ZZQA3EK.png" width="256" height="267" alt='Circuit de Monaco'/>
                        </Item>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Stack>
                        <Item sx={{textAlign: 'left'}}>
                            <b>Circuit de Spa-Francorchamps</b> – tor wyścigowy znajdujący się w Stavelot.
                            <br/>
                            Często określany jako Spa, to tor wyścigowy o długości 7,004 km (4,352 mil) zlokalizowany w Stavelot w Belgii. Jest to obecne miejsce, w którym odbywa się Grand Prix Belgii Formuły 1, gospodarzem pierwszego Grand Prix w 1925 roku i co roku odbywa się tam Grand Prix od 1985 roku (z wyjątkiem 2003 i 2006).
                            <br/>
                            Spa jest także gospodarzem kilku innych międzynarodowych imprez, w tym 24-godzinnego spania, mistrzostw świata w 6-godzinnych wyścigach na spa-Francorchamps oraz TCR ​​Spa 500. To także miejsce, w którym odbywa się Uniroyal Fun Cup 25-godzinny spa, jeden z najdłuższych silników wyścigi na świecie.
                            <br/>
                            Tor przeszedł kilka przeprojektowań w swojej historii, najbardziej w 1979 roku, kiedy tor został zmodyfikowany i skrócony z toru o długości 14.100 km (8,761 mil) przy użyciu dróg publicznych do toru stałego o długości 6,968 km (4,330 mil) ze względu na obawy dotyczące bezpieczeństwa ze starym okrążenie.
                            <br/>
                            Mimo swojej nazwy tor nie znajduje się w Spa, ale leży w pobliżu miasta Francorchamps w granicach gminy Stavelot, z częścią w granicach Malmedy.boundaries of Malmedy.
                        </Item>
                        <Item>
                    <img src="https://i.imgur.com/glTbG05.png" width="235" height="245" alt='Circuit de Spa-Francorchamps'/>
                        </Item>
                    </Stack>
                </TabPanel>
            </Box>
            <BottomNavigation sx={{width: 500, zIndex: 'tooltip', top: '80%', position: 'fixed', left: '35%'}} value={value}
                              onChange={handleChange}>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon/>}
                />
            </BottomNavigation>
        </Container>
    )
}

export default StronaTrzecia;