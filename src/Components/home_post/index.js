import { Grid } from '@material-ui/core';
import Ft from '../../helpers/format_text';
import { Link } from 'react-router-dom';
import './style.css';

const Home_post = ({ title, text, direction, buttonLink }) => (
    <Grid container>
        {direction == 'left' ?
            <>
                <Grid item md={6}>
                    <h1 className="post_title">{title}</h1>
                    <p>{Ft(text)}</p>
                </Grid>
                <Grid item md={6} className="post_button_container">
                    <Link to={buttonLink}>
                        <button className="post_button">
                            saiba mais
                        </button>
                    </Link>
                </Grid>
            </>
        :
            <>
                <Grid item md={6} className="post_button_container">
                    <Link to={buttonLink}>
                        <button className="post_button">
                            saiba mais
                        </button>
                    </Link>
                </Grid>
                <Grid item md={6}>
                    <h1 className="post_title">{title}</h1>
                    <p>{Ft(text)}</p>
                </Grid>
            </>
        }  
    </Grid>
);

export default Home_post;