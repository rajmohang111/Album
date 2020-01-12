import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/CancelRounded';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    title: {
        position: 'absolute',
        marginTop: '50px',
        width: '150px'
    },
    closeBtn: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: '100px'
    },
    closeButton: {
        float: 'right'
    }
}));

export default function Photo(props) {
    const classes = useStyles();

    const { photo } = props;

    const [open, setOpen] = useState(false);
    const [showTitle, setShowTitle] = useState(false);


    const onClose = (id) => {
        props.onClose(id);
    };

    const showImage = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const displayTitle = () => {
        setShowTitle(true);
    };

    const hideTitle = () => {
        setShowTitle(false);
    };

    return (
        <Grid item xs={3}>
            <span onMouseEnter={displayTitle} onMouseLeave={hideTitle}>
                <IconButton
                    onClick={() => onClose(photo.id)}
                    className={classes.closeBtn}>
                    <CancelIcon color="inherit" />
                </IconButton>
                {showTitle && <Typography variant="caption" className={classes.title}>{photo.title}
                </Typography>}
                <img src={photo.thumbnailUrl} alt={photo.title} width="150px" onClick={showImage} />
            </span>
            <Dialog className={classes.root} open={open}>
                <DialogTitle>
                    Full View
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