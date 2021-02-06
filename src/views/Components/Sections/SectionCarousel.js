import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <h1 className={classes.title}>   EMSC PROJECTS</h1>

        <GridContainer>
        <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
          <h4>
                      <LocationOn className="slick-icons" />
                      DHEEXE EE                    </h4>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                      <h6> 
                      From September to April 2018, EMSC facilitated DHEXE EE: Somali
experiences of community space in Eastmall, Etobicoke, in collaboration with
ACCT. The project was carried out for the Myseum of Toronto’s annual
Intersection festival in March, themed Arrivals and Departures for 2018. DHEXE
EE is a milestone for EMSC.
               </h6>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h6>
                    It was the first of many things for our community:
                    our first structured project, our first arts project, the first time our community
                    came together to create something, and the reason for our current strategic
                    partnerships.
                    Born out of the need to combat fragmentation within the Toronto Somali
community and to underscore the lack of and need for community spaces in
Central Etobicoke, DHEXE EE is an intergenerational photography project that
brought together Somali youth and adult residents of the Eastmall TCH
community to share their experience of community space. 
</h6>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
      
                    <h6>
                    Community members
took cellphone photographs of meaningful places in Eastmall to reflect on how
it has changed over time. 
                    Meaning “in the middle” in Somali, DHEXE EE
                    explores the creation of community space from the midddle of places designed
                    to be passed by but not lingered in, raising questions about spatial justice and
                    equity. 
</h6>
                  </div>
                  
                </div>
                <div>
                <img src={image1} alt="Fourth slide" className="slick-image" />
                <div className="slick-caption">
         
                    <h6>
                    
                    The project features 12 photographs and stories by community
                    members. It was first exhibited in a private community showing in Eastmall and
                    subsequently displayed at the Rotunda in Metrohall from March 24-29, 2018.
                    The immediate outcomes of DHEXE EE were the access of leadership
                    opportunities for community members, strengthened intergenerational bonds
                    between youth and their parents’ generation, and positive attention on
                    Eastmall regarding community space from those with decision-making power
                    within the community development sector in Toronto. 
                    
             </h6>
                </div>
              </div>
              <div>
              <img src={image1} alt="Fifth slide" className="slick-image" />
              <div className="slick-caption">
                  <h6>
                  Youth reported feeling a greater sense of rootedness from the project, parents felt engaged, and the
                  project demonstrated to the community that we can come together to
                  produce something impactful. DHEXE EE also facilitated connections with
                  people, groups, and organizations across multiple sectors for EMSC.
           </h6>
              </div>
            </div>
            <div>
            <img src={image1} alt="Fifth slide" className="slick-image" />
            <div className="slick-caption">
                <h6>
                Most critically, the project was a spring board for strategic partnerships we
                formed with TCH and the City. These relationships enabled funding and in-kind
                contributions for projects that came after DHEXE EE.
         </h6>
            </div>
          </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
         
          <h4>
          <LocationOn className="slick-icons" />
          Mentorship                  </h4>

            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                      <h6>
                      
                      Program, an 8-week series of workshops spanning February and March 2019.
                      The program grouped Somali youth between the ages of 18 to 24 years old
                      with Somali professionals accordinag to their careers of interest, aiming to
                      promote non-family adult relationships between Somali youth and Somali
                      professionals and build relevant skills.
                   
               </h6>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                
                    <h6>
                    During workshops, EMSC Youth Leads presented on entrepreneurship, civic engagement,
                    mental health, self-awareness, STEM importance, volunteering, and
                    gang deterrence. At sessions, mentors spoke to youth about the challenges
                    they dealt with on their way to professional success. Twenty youth graduated
                    from the program.
           
</h6>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                
                    <h6>
                    As our first multiyear grant, YOF provides part-time employment to an EMSC
                    Lead for two years to focus on this project and build the capacity of the group.
                    It enables the group to design leadership opportunities for involved youth
                    which promotes self-sufficiency and program ownership.
</h6>
                  </div>
                  
                </div>
               
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
