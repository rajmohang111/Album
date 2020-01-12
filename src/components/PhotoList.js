
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Photo from './Photo';

import * as actions from '../actions/photo';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function PhotoList(props) {
    const classes = useStyles();

    const { album, photos: { photos }, getPhotos } = props;

    useEffect(() => {
        getPhotos(album.id);
    }, []);

    const onClose = (id) => {
        props.setPhotos(photos.filter(photo => photo.id !== id));
    };

    return (
        <div className={classes.root}>
            <Grid container>
                {photos && photos.map(photo => (
                    <Photo photo={photo} onClose={onClose} />
                ))}
            </Grid>
        </div >
    );
}

const mapStateToProps = state => {
    return {
        photos: state.photos
    };
};

const mapDispachToProps = dispatch => {
    return {
        getPhotos: (id) => dispatch(actions.getPhotos(id)),
        setPhotos: (photos) => dispatch(actions.setPhotos(photos))
    }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(PhotoList);