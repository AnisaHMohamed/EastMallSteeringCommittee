import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";

import Footer from "../../components/Footer/Footer.js";

import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionAbout from "../Components/Sections/SectionAbout.js";


import styles from "../../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="East Mall Steering Commitee"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
      <Parallax image={require("../../assets/img/Projects.jpeg")}>
        <div className={classes.container}>
                <h1 className={classes.title}>EAST MALL STEERING COMMITTEE</h1>
                <h2 className={classes.subtitle}>
                 A Little About Us
                </h2>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionAbout />
      </div>
      </div>
      <Footer />
    </div>
  );
}
