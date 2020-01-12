import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Album from './album';

import * as API from '../Services/Api';

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

  const { albums } = props.albums;
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    setProgress(true);
    API.getAlbums()
      .then(res => {
        props.setAlbums(res);
        setProgress(false);
      }
      );
  }, []);

  return (
    <div className={classes.root}>
      {progress && <CircularProgress
        data-testid="progress-indicator"
        className={classes.progress}
      />}
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
    setAlbums: (albums) => dispatch({ type: "SET_ALBUMS", payload: albums }),
  }
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(AlbumList);