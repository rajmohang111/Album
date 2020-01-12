import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/CancelRounded';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton
  } from '@material-ui/core';
  import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    imgFullHeight: {
        height: 'auto',
    },
    closeBtn: {
        position: 'absolute',
        zIndex: 1,
    },
}));

export default function Photo(props) {
    const classes = useStyles();

    const { photo } = props;

    const [open, setOpen] = useState(false);


    const onClose = (id) => {
        props.onClose(id);
    };

    const showImage = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <Grid item xs={3}>
            <IconButton
                onClick={() => onClose(photo.id)}
                className={classes.closeBtn}>
                <CancelIcon color="inherit" />
            </IconButton>
            <img src={photo.thumbnailUrl} alt={photo.title} onClick={showImage}/>
            <Dialog className={classes.root} open={open}>
                <DialogTitle>
                    View Photo
                       <IconButton aria-label="close" className={classes.closeButton} onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                     <img src={photo.url} alt={photo.title} />
                </DialogContent>
            </Dialog>
        </Grid>
    );
}