import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PhotoList from './PhotoList';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Album(props) {
    const classes = useStyles();

    const [album, setAlbum] = useState(props.album);
    const [expand, setExpand] = useState(false);

    const expandPanel = () => {
        setExpand(!expand);
    }

    return (
        <ExpansionPanel onChange={expandPanel}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>{album.id} - {album.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {expand ? <PhotoList album={album}/> : ''}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}
