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
                            <b>Autodromo Nazionale di Monza</b> ??? tor wy??cigowy we W??oszech niedaleko miejscowo??ci Monza (na p????noc od Mediolanu).
                            <br/>
                            Na torze odbywa si?? Grand Prix W??och Formu??y 1.
                            <br/>
                            Tor charakteryzuje si?? d??ugimi prostymi, przez co umo??liwia osi??ganie wysokich pr??dko??ci (do oko??o 360 km/h w Formule 1). Kierowcy Formu??y 1 prowadz?? bolid z maksymalnie otwart?? przepustnic?? przez oko??o 76% czasu okr????enia, d??u??ej ni?? na innych torach.
                            <br/>
                            Tor jest p??aski, z niewielkimi r????nicami poziomu jazdy pomi??dzy drugim zakr??tem Lesmo i Variante Ascari. Jednym z bardziej znanych zakr??t??w jest Curva Parabolica/Alboreto. Jest to d??ugi 180-stopniowy prawy zakr??t, kt??ry przechodzi w najd??u??sz?? prost?? toru ??? zarazem lini?? startu-mety.
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
                            <b>Circuit de Monaco</b> ??? tor wy??cigowy w Monako, na kt??rym rozgrywany jest wy??cig w ramach zawod??w Formu??y 1.
                            <br/>
                            Jest to tor uliczny (o d??ugo??ci 3337m) za??o??ony w 1929 roku. Zawody w Monte Carlo rozgrywane s?? od 1950. Kierowcy ??cigaj?? si?? na dystansie 260,286 km, co daje razem 78 okr????e?? (najwi??cej w obecnym kalendarzu). Tor jest jednym z najniebezpieczniejszych i najtrudniejszych na ??wiecie. Opr??cz bardzo ciasnych szykan i szybkiego ??uku w tunelu pod hotelem Fairmont, znajduje si?? tam najcia??niejszy nawr??t spo??r??d tor??w Formu??y 1, w kt??rym bolidy musz?? zwolni?? poni??ej 50 km/h (podobny jest te?? na torze Guia Circuit w Makau, gdzie ??ciga si?? m.in. seria WTCC).
                            <br/>
                            Jest to jedyny tor Formu??y 1, kt??ry mo??na ogl??da?? na ??ywo bez konieczno??ci kupienia biletu wst??pu
                        </Item>
                        <Item>
                    <img src="https://i.imgur.com/ZZQA3EK.png" width="256" height="267" alt='Circuit de Monaco'/>
                        </Item>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Stack>
                        <Item sx={{textAlign: 'left'}}>
                            <b>Circuit de Spa-Francorchamps</b> ??? tor wy??cigowy znajduj??cy si?? w Stavelot.
                            <br/>
                            Cz??sto okre??lany jako Spa, to tor wy??cigowy o d??ugo??ci 7,004 km (4,352 mil) zlokalizowany w Stavelot w Belgii. Jest to obecne miejsce, w kt??rym odbywa si?? Grand Prix Belgii Formu??y 1, gospodarzem pierwszego Grand Prix w 1925 roku i co roku odbywa si?? tam Grand Prix od 1985 roku (z wyj??tkiem 2003 i 2006).
                            <br/>
                            Spa jest tak??e gospodarzem kilku innych mi??dzynarodowych imprez, w tym 24-godzinnego spania, mistrzostw ??wiata w 6-godzinnych wy??cigach na spa-Francorchamps oraz TCR ??????Spa 500. To tak??e miejsce, w kt??rym odbywa si?? Uniroyal Fun Cup 25-godzinny spa, jeden z najd??u??szych silnik??w wy??cigi na ??wiecie.
                            <br/>
                            Tor przeszed?? kilka przeprojektowa?? w swojej historii, najbardziej w 1979 roku, kiedy tor zosta?? zmodyfikowany i skr??cony z toru o d??ugo??ci 14.100 km (8,761 mil) przy u??yciu dr??g publicznych do toru sta??ego o d??ugo??ci 6,968 km (4,330 mil) ze wzgl??du na obawy dotycz??ce bezpiecze??stwa ze starym okr????enie.
                            <br/>
                            Mimo swojej nazwy tor nie znajduje si?? w Spa, ale le??y w pobli??u miasta Francorchamps w granicach gminy Stavelot, z cz????ci?? w granicach Malmedy.boundaries of Malmedy.
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