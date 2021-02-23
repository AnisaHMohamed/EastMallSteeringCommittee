/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>

        <Button
          color="transparent"
          target="_blank"
        >
          <Link to="/" className={classes.navLink}>
            Home
     </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>

        <Button
          color="transparent"
          target="_blank"
        >
          <Link to="/about" className={classes.navLink}>
            About
</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>

        <Button
          color="transparent"
          target="_blank"
        >
          <Link to="/projects" className={classes.navLink}>
            Projects
</Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>

        <Button
          color="transparent"
          target="_blank"
        >
          <Link to="/history" className={classes.navLink}>
            History
</Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/emsc_youth/?hl=en"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"}  />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
