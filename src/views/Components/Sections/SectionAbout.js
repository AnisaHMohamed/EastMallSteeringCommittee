import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import styles from "../../../assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);

export default function SectionAbout() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <br/>    <br/>
    <h2>
    WHO WE ARE
    </h2>
    <h4>
    EMSC is a Somali youth grassroots group based in a Toronto Community Housing (TCH) complex at Eastmall and Rathburn Road. Active since 2016, EMSC is a passionate advocate for Black youth in the community. EMSC was formed by a youth and mother from the community who mobilized their community to action after two youth were shot in the fall of 2016.               
    </h4>
 
  <h2>
  MISSION            </h2>
  <h4>
  To increase access to education and information resources for neighbourhood youth, create greater social cohesion among the community, and work towards developing capacity so that neighbourhood youth have improved chances at better opportunities            </h4>
 
<h2>
VISION            </h2>
<h4>
A healthy, resilient community of youth with equitable access to opportunities.        </h4>
<br/>    <br/>
        </div>
      
  );
}
