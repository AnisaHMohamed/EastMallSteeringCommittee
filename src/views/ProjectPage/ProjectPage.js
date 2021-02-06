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
import Carousel from "../Components/Sections/SectionCarousel"
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
      
      <Parallax filter image={require("../../assets/img/EMSC-BLACK.png")}>
      
      <br/>
      <br/>
      <br/>
      <br/>  
      <div className={classes.container}>
       
        

          <GridContainer>
          
            <GridItem xs={10} sm={20} md={16}>
            
            <Carousel/>

              <br/>
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>

      <Footer />
    </div>
  );
}
