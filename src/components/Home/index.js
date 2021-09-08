//Basic
import React from 'react';
import{Drawer,Divider,List,ListItem,ListItemText,ListItemIcon,Box,Typography, Grid,Button,Toolbar,AppBar,IconButton,Hidden} from '@material-ui/core';
import { makeStyles,  } from '@material-ui/styles';

//Icones 

import KeyboardIcon from '@material-ui/icons/Keyboard';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logoPreto from './images/preto.png'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import SportsBasketballRoundedIcon from '@material-ui/icons/SportsBasketballRounded';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalMoviesRoundedIcon from '@material-ui/icons/LocalMoviesRounded';
import FiberNewRoundedIcon from '@material-ui/icons/FiberNewRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import ThreeDRotationRoundedIcon from '@material-ui/icons/ThreeDRotationRounded';
import ControlPointRoundedIcon from '@material-ui/icons/ControlPointRounded';
import videos from '../DataBase'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1, //permite que o appbar fique na frente do drawer
    },
    Toolbar:{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ToolbarInit:{
        display: 'flex',
        alignItems: 'center',
    },
    ToolbarEnd:{
        display: 'flex',
        alignItems: 'center',
    },

    searchInput:{
        width: '650px',
        height: '30px',
        border: '1px solid #D3D3D3',
        fontSize: '15px',
        fontWeight: '400',
        padding:'1px 10px',
        fontFamily: 'Roboto',
        outline: '1px solid #919191',
    },
    drawerPaper: {
        width: '200px',
        borderRight: 'none',
        fontSize: '14px',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
    },
    searchIconPlace:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f9f9f9',
        height:'30px',
        width: '50px',
        border: '1px solid #919191'
    },
    searchIcon:{
        color:'#919191',
        cursor: 'pointer'
    },
    menuIcon: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(2)
    },
    icons: {
        paddingRight: theme.spacing()
    },
    logo: {
        height: '28px',
    },
    itemListText: {
        fontSize: '14px',
        marginLeft: '1px',
        padding: '0'
    },
    sidelogin: {
        fontSize: '14px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 25px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
    },
    spamlogin: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        marginTop: '12px',
    },
    ListItem: {
        paddingTop: '4px',
        paddingBottom: '4px',
    },
    boxcontent: {
        paddingLeft: '200px',
        paddingTop: '1%'
    },

}));

function Home() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar className={classes.Toolbar}>
                    <div className={classes.ToolbarInit}>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={logoPreto} alt='LogoPreto' className={classes.logo} />
                    </div>

                    <div className={classes.search}>
                        <input className={classes.searchInput} type="search" placeholder="Pesquisar"/>
                        <div className={classes.searchIconPlace}>
                        <SearchIcon className={classes.searchIcon}/>
                        </div>
                    </div>
                    <div className={classes.ToolbarEnd}>
                    <IconButton className={classes.icons} color="inherit">
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color="inherit">
                        <AppsIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color="inherit">
                        <MoreVertIcon />
                    </IconButton>

                    <Button variant='outlined' color="secondary" startIcon={<PersonPinIcon />}>
                        Fazer Login
                    </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Box display='flex'>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Início'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Explorar'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Inscrições'} />
                            </ListItem>
                        </List>

                        <Divider />

                    </div>

                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Biblioteca'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'História'} />
                            </ListItem>
                        </List>

                        <Divider />

                    </div>

                    <Box className={classes.sidelogin}>

                        <Typography
                            variant='body2'
                        >Faça login para curtir vídeos, comentários e se inscrever.
                        </Typography>
                        <Button className={classes.button} variant='outlined' color="secondary" startIcon={<PersonPinIcon />}>
                            Fazer Login
                        </Button>
                    </Box>
                    <Divider />

                    <div className={classes.drawerContainer}>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<PlayCircleFilledRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Músicas'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<SportsBasketballRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Esportes'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Jogos'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<LocalMoviesRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Filmes'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<FiberNewRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Notícias'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<LiveTvRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Ao vivo'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<WhatshotRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Destaques'} />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<ThreeDRotationRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Vídeos 360'} />
                            </ListItem>
                        </List>

                        <Divider />


                        <List>
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>{<ControlPointRoundedIcon />}</ListItemIcon>
                                <ListItemText classes={{ primary: classes.itemListText }} primary={'Procurar mais'} />
                            </ListItem>
                        </List>

                    </div>

                </Drawer>

                <Box className={classes.boxcontent}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 800 }}
                    >

                    </Typography>

                    <Grid container spacing={2} >
                        {
                            videos.map((item, key) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{width: '100%', height: '100%',}}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box p={1} style={{ display: 'flex', flexDirection: 'row ' }}>
                                            <img
                                                style={{ width: '30px', height: '30px', borderRadius: '100%' }}
                                                alt={item.title}
                                                src={item.avatar}
                                            />
                                            <Typography
                                                style={{ fontWeight: 600, paddingLeft: '20px' }}
                                                gutterBottom
                                                variant='body2'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>

                                        <Box style={{ paddingLeft: '50px' }}>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home