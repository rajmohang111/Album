import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import Album from './album';

import * as actions from '../actions/album';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function AlbumList(props) {
  const classes = useStyles();

  const { albums : { albums }, getAlbums } = props;

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className={classes.root}>
      {albums && albums.map(album => (
        <Album album={album} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

const mapDispachToProps = dispatch => {
  return {
    getAlbums: () => dispatch(actions.getAlbum()),
    setAlbums: (albums) => dispatch(actions.setAlbum(albums)),
  }
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(AlbumList);