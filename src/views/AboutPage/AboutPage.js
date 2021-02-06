import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="East Mall Steering Commitee"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
        <br/>
        <br/>
        <br/>

        <h1 className={classes.title}>About the EMSC</h1>
        <image src="../../assets/img/EMSC-WHITE.jpg"></image>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>

              <h3>
              WHO WE ARE
              </h3>
              <h4>
              EMSC is a Somali youth grassroots group based in a Toronto Community Housing (TCH) complex at Eastmall and Rathburn Road. Active since 2016, EMSC is a passionate advocate for Black youth in the community. EMSC was formed by a youth and mother from the community who mobilized their community to action after two youth were shot in the fall of 2016.               
              </h4>
              <br/>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            <h3>
            MISSION            </h3>
            <h4>
            To increase access to education and information resources for neighbourhood youth, create greater social cohesion among the community, and work towards developing capacity so that neighbourhood youth have improved chances at better opportunities            </h4>
            <br/>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <h3>
          VISION            </h3>
          <h4>
          A healthy, resilient community of youth with equitable access to opportunities.        </h4>
          <br/>
        </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <Footer />
    </div>
  );
}
