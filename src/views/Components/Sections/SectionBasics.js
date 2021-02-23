import React from "react";
// plugin that creates slider
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "./SectionCarousel"


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
    <Carousel/>
   </div>
  );
}
