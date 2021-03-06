import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import styles from "../../../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function SectionHistory() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <br/> <br/> 

         
            EMSC formed as a youth grassroots group in the fall of 2016 in response to a
            shooting in our community. Saddened and angry by what happened, we began
            community fundraising events to support our friends who sustain life-altering
            injuries. Together we started to think about how we can improve conditions in
            our community, increase opportunities for youth residents, and deter the
            incidence of gun violence. Shortly after, we entered into a trusteeship with the
            Arab Community Centre of Toronto to start building our capacity to mobilize
            for change.
        
            <br/> <br/> 
            That summer, we were successful in receiving a small grant from the City of
    Toronto to organize a camp for Somali youth as well as a small grant from
Myseum of Toronto for a participatory photography project we titled DHEXE
EE focusing on Somali experiences of community space in Eastmall. At the end
of that summer, we convened a group meeting and elected a board with the
help of ACCT and the City of Toronto.
<br/> <br/> 

For the photography project, we facilitated a series of sessions where Somali
youth in Eastmall paired with adult residents to talk about their experiences
of community spaces in Eastmall from September 2017 to April 2018. These
stories were accompanied with cellphone photographs and in March 2018,
privately shown in the Eastmall community room and then publicly exhibited at
Metro Hall at Myseum’s annual Intersections festival.
             
                 <br/> <br/>
        
       
          While DHEXE EE was underway, we discovered we were the recipient of a
          YOF-OTF grant for a two-year mentorship program that pairs Somali youth in
          Central Etobicoke with Somali professionals in their careers of interest. This
          was our first big grant so we were very excited.
          In August 2018, the summer retreat for Somali youth took place. The camp was
          a leadership opportunity for EMSC Leads. It was also a chance for youth to get
          out of the city and enjoy the end of their summer, a chance to promote
          solidarity among Somali youth, and a chance to create lasting memories. Youth
          on the retreat also participated in a needs assessment we created to inform the
          design of the mentorship program.
         <br/> <br/>
          After months of planning, our Somali Mentorship Program took place from
          January to March 2019. Weekly group mentorship sessions enabled youth to
          learn from and connect with Somali professionals while serving as a leadership
          opportunity for EMSC Leads. Year one is completed, we will be planning for
          our second soon!
                   
        <br/> <br/> <br/>
        </div>

  );
}
