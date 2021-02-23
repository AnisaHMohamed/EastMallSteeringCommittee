import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Eastmall Steering Commitee"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/EastMall.jpeg")}>

        <div className={classes.container}>

          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>EAST MALL STEERING COMMITTEE</h1>
                <h3 className={classes.subtitle}>
                A community group led by youth advocates serving disenfranchised and likeminded youth          </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
       
    
      <Footer />
    </div>
    
  );
}
