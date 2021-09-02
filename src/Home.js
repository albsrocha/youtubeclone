import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logoPreto from './images/preto.png'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import Box from '@material-ui/core/Box';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import SportsBasketballRoundedIcon from '@material-ui/icons/SportsBasketballRounded';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalMoviesRoundedIcon from '@material-ui/icons/LocalMoviesRounded';
import FiberNewRoundedIcon from '@material-ui/icons/FiberNewRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import ThreeDRotationRoundedIcon from '@material-ui/icons/ThreeDRotationRounded';
import ControlPointRoundedIcon from '@material-ui/icons/ControlPointRounded';
import { Typography, Grid } from '@material-ui/core';


const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1, //permite que o appbar fique na frente do drawer
    },
    drawerPaper: {
        width: '200px',
        borderRight: 'none',
        fontSize: '14px',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    grow: {
        flexGrow: 1,
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
    spamlogin:{
        justifyContent: 'center',
        alignContent:'center',
    },
    button:{
        marginTop: '12px',
    },
    ListItem:{
        paddingTop: '4px',
        paddingBottom: '4px',
    },
    boxcontent:{
        paddingLeft: '200px',
        paddingTop: '1%'
    },

}));

function Home() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={logoPreto} alt='LogoPreto' className={classes.logo} />

                    <div className={classes.grow} />

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
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Início'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Explorar'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Inscrições'} />
                        </ListItem>
                    </List>

                    <Divider />

                </div>

                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Biblioteca'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'História'} />
                        </ListItem>
                    </List>

                    <Divider />

                </div>

                <Box className={classes.sidelogin}>

                    <spam className={classes.spamlogin}> Faça login para gostar de vídeos, comentários e se inscrever. </spam>
                    <Button className={classes.button} variant='outlined' color="secondary" startIcon={<PersonPinIcon />}>
                        Fazer Login
                    </Button>
                </Box>
                <Divider />

                <div className={classes.drawerContainer}>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<PlayCircleFilledRoundedIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Músicas'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<SportsBasketballRoundedIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Esportes'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Jogos'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<LocalMoviesRoundedIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Filmes'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<FiberNewRoundedIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Notícias'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<LiveTvRoundedIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Ao vivo'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<WhatshotRoundedIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Destaques'} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
                            <ListItemIcon>{<ThreeDRotationRoundedIcon />}</ListItemIcon>
                            <ListItemText classes={{ primary: classes.itemListText }} primary={'Vídeos 360'} />
                        </ListItem>
                    </List>

                    <Divider />


                    <List>
                        <ListItem button classes={{root : classes.ListItem}}>
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
                style={{fontWeight:800}}
                >
                    Recomendar
                    
                </Typography>

                <Grid container >
                    {
                        videos.map((item, key)=>(
                            <Grid item lg={3} md={4} sm={6} xs={12}> item </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
        </div>
    )
}

export default Home