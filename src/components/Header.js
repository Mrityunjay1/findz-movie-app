import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../features/movies/movieSlice';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'space-between',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      button: {
        color: theme.palette.common.white,
      }
}));

function Header() {
  const [term,setTerm]=React.useState('');
  const dispatch=useDispatch();
    const classes = useStyles();
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(term);
        dispatch(fetchAsyncMovies(term));
    };
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={submitHandler}>
            <InputBase
              placeholder="Search…"
              value={term}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => setTerm(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
            <button type="submit"></button>
            </form>
            
          </div>
          <a href="/">
            <HomeIcon className={classes.button} />
          </a>
                </Toolbar>
            </AppBar>
              
        </div>
    )
}

export default Header
