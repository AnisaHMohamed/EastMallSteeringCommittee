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
<br/>  

<h2>
FOUNDER RECOGNITION            </h2>
<h4>
EMSC is a local youth-led and youth-serving grassroots group. EMSC recognizes that our community partners support our work and our funders power it.



We want to thank the <a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/city-administration/staff-directory-divisions-and-customer-service/social-development-finance-administration/"
>City of Toronto</a>
, <a href="https://www.torontohousing.ca/">Toronto Community Housing</a>
, the Youth Opportunity Fund at the  <a href="https://otf.ca/">Ontario Trillium Foundation</a>, and <a href="https://www.socialplanningtoronto.org/">Social Planning Toronto</a>.



We want to highlight our organizational mentor's work, the <a href="https://www.acctonline.ca/">Arab Community Centre of Toronto (ACCT)</a>. ACCT has been supporting EMSC since its inception, and we are forever grateful.      </h4>
<br/> 
<br/><br/><br/>
        </div>
      
  );
}
