import React, { useState, useEffect } from 'react';
import './App.css';

// images
import dp from './images/dp.png';
import underline from './images/underline.png';
import proj0 from './images/proj0.png';
import proj1 from './images/proj1.png';
import proj2 from './images/proj2.png';
import proj3 from './images/proj3.png';
import proj4 from './images/proj4.png';
import proj5 from './images/proj5.png';
import proj6 from './images/proj6.png';
import proj7 from './images/proj7.png';
import proj8 from './images/proj8.png';
import proj9 from './images/proj9.png';
import proj10 from './images/proj10.png';

// proj vids

// import globalChatVid from "./project-videos/global-chat.mp4";
// import filmFluentVid from "./project-videos/film-fluent.mp4";

// @mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';

// Mui icons
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaceIcon from '@mui/icons-material/Face';
import SchoolIcon from '@mui/icons-material/School';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
// import PsychologyIcon from '@mui/icons-material/Psychology';
import ConstructionIcon from '@mui/icons-material/Construction';
// import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const skills = [
//   {
//     name : "HTML",
//     percentage : "82%",
//     colour: "green"
//   },
//   {
//     name : "Python",
//     percentage : "86%",
//     colour: "red"
//   },
//   {
//     name : "ReactJS",
//     percentage : "88%",
//     colour: "yellow"
//   },
//   {
//     name : "C",
//     percentage : "60%",
//     colour: "orange"
//   },
//   {
//     name : "CSS",
//     percentage : "72%",
//     colour: "blue"
//   },
//   {
//     name : "Haskell",
//     percentage : "73%",
//     colour: "purple"
//   },
//   {
//     name : "Dafny (verification Language)",
//     percentage : "48%",
//     colour: "#ff80d5"
//   },
//   {
//     name : "Database Manipulation (SQL/PostgreSql)",
//     percentage : "73%",
//     colour: "#993333"
//   },
//   {
//     name : "JavaScript",
//     percentage : "83%",
//     colour: "#ffcc66"
//   },
//   {
//     name : "Git",
//     percentage : "95%",
//     colour: "#208000"
//   },


// ]

const projects = [
  {
    name : "Project Backend",
    description : "Required groups to create a backend. Gave a comprehensible understanding of technical aspects of software engineering such as backend, frontend, servers etc",
    skills : ["First exposure to Python", "Learned the basic fundamentals of Backend Developement", "Exposed to software development cycle", "Git and CI/CD"],
    date : "09/21",
  },
  {
    name : "Kahoot Game Frontend",
    description : "Developing a frontend for a kahoot-like game with a provided backend using reactJS",
    skills : ["Web Development", "ReactJS", "FrontEnd Testing (Cypress, User Testing)"],
    date : "03/23",
  },
  {
    name : "LinkedIn Frontend",
    description : "Producing a frontend for a linkedIn-like page with a provided backend using vanillaJS",
    skills : ["Vanilla JS", "HTML/CSS"],
    date : "03/23",
  },
  {
    name : "Data Scraper in Python",
    description : "Required groups to develop and design a MVP responsible for scraping covid-19 data from multiple data sources and collates said data in a concise/clean manner for users to view",
    skills : ["Teamwork", "Data scraper in Python", "Product Pitching", "Leadership", "Communication"],
    date : "09/22"
  },
  {
    name : "Communication service using TCP/UDP",
    description : "Developing an application generating data at host devices, and shares data between devices and central server",
    skills : ["Networks, routing and switching", "Various protocol such as IP, TCP, UDP", "Congestion control, flow control, and reliable transmission"],
    date : "09/22"
  },
  {
    name : "3D 4 health",
    description : "Project consisting of manufacturing and evaluating new medical implants with robustness and multi-functionality using cutting-edge metal/polymer 3D printing",
    skills : ["Materials that are biocompatible with Human Body", "Groupwork", "Presentating and delivering product", "Researching and conducting lab work"],
    date : "02/23"
  },
  {
    name : "Implement Git in Shell",
    description : "A project which consisted of me implementing 'PIGS', POSIX Implementation of Git in Shell",
    skills : ["Shell programming", "A clearer and concrete understanding of Git's core semantics", "File manipulation via Shell"],
    date : "04/23"
  },
  {
    name : "Shell to Python Transpiler",
    description : "Converting a given file with shell command into its respective python translation. Transpiler which takes Shell scripts as input and output Python. ",
    skills : ["Deeper understanding of Python", "Experience in translating between complex formats with Python", "Clarify my understanding of Shell syntax & semantics"],
    date : "06/23"
  },
  {
    name : "Global Chat",
    description : "A ReactJS application which allows anyone to chat anyone anywhere anytime. They can log in via github, gmail or anonymously. See link below.",
    skills : ["Deeper understanding of ReactJS", "Experience working with Firebase", "Deployment using neltify"],
    date : "12/23"
  },
  {
    name : "To Do List",
    description : "A to-do list/task manager. Beyond standard functionalities, it incorporates innovative features like visualising productivity levels, a task-specific stopwatch/timer, and a task importance ranking system. ",
    skills : ["Teamwork", "First exposure to Typescript", "Deployment", "Working with database"],
    date : "11/23"
  },
  {
    name : "Movie Reviews",
    description : "A full stack project which allows people to search up movies and Tv shows and read the reviews on it using IMDB databse. See link below.",
    skills : ["Python - Backend", "Web scraper", "Flask", "ReactJS", "Heroku - Deployment"],
    date : "12/23"
  },
]

function App() {

  const [copiedEmail, setCopiedEmail] = useState(false)
  // const [cardExpandedBool, setCardExpandedBool] = React.useState(false);

  function clickEducation() {
    let e = document.getElementById("education-page");
        e.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
    });
  }

  function clickAboutMe() {
    let e = document.getElementById("about-me-page");
        e.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
    });
  }

  // function clickSkills() {
  //   let e = document.getElementById("skills-page");
  //       e.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //       inline: 'center'
  //   });
  // }

  function clickProjects() {
    let e = document.getElementById("projects-page");
        e.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
    });
  }
  function clickProjectsLinks() {
    let e = document.getElementById("projects-links-page");
        e.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
    });
  }

  useEffect(() => {
    if (copiedEmail) {
      const timeout = setTimeout(() => {
        setCopiedEmail(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copiedEmail]);

  // const video = document.querySelector(".video-container video");
  // const hoverText = document.querySelector(".video-container .hover-text");

  // video.addEventListener("mouseenter", () => {
  //   video.play();
  //   hoverText.classList.remove("active");
  // });

  // video.addEventListener("mouseleave", () => {
  //   video.pause();
  //   video.
  //   hoverText.classList.add("active");
  // });

  return (
    <div style={{ backgroundColor:"#f2f2f2", height: "100%", background: "radial-gradient(ellipse at bottom right, #e6fff3, #f2f2f2)" }}>
      <AppBar  sx={{ backgroundColor: '#f2f2f2' }}>
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <FaceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#006635' }} />
            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }}}>
              <Button
                key="About me"
                onClick={clickAboutMe}
                sx={{ my: 1, color: "#404040", display: 'block', fontWeight: "bold",
                  ':hover': {
                    backgroundColor: '#006635',
                    color: 'white',
                  },
                }}
              >
                About Me
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#006635', mr: 1, position: 'relative', bottom: '-13px' }} />
              <Button
                key="Education"
                onClick={clickEducation}
                sx={{ my: 1, color: "#404040", display: 'block', fontWeight: "bold",
                ':hover': {
                  backgroundColor: '#006635',
                  color: 'white',
                },
              }}
              >
                Education
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ConstructionIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#006635', mr: 1, position: 'relative', bottom: '-13px'}} />
              <Button
                key="Projects"
                onClick={clickProjects}
                sx={{ my: 1, color: "#404040", display: 'block', fontWeight: "bold",
                ':hover': {
                  backgroundColor: '#006635',
                  color: 'white',
                },
              }}
              >
                Projects
              </Button>
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <PsychologyIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#006635', mr: 1, position: 'relative', bottom: '-13px' }} />
              <Button
                key="Skills"
                onClick={clickSkills}
                sx={{ my: 1, color: "#404040", display: 'block', fontWeight: "bold",
                  ':hover': {
                    backgroundColor: '#006635',
                    color: 'white',
                  },
                }}
              >
                Skills
              </Button> */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <LanguageIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#006635', mr: 1, position: 'relative', bottom: '-13px'}} />
              <Button
                key="Projects Links"
                onClick={clickProjectsLinks}
                sx={{ my: 1, color: "#404040", display: 'block', fontWeight: "bold",
                ':hover': {
                  backgroundColor: '#006635',
                  color: 'white',
                },
              }}
              >
                Projects Links
              </Button>

              <Button href="https://www.instagram.com/anish.sinha1/" target="_blank" sx={{ position: 'relative', left: "1100px" }}>
                <InstagramIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#006635', mr: 1}} />
              </Button>
              <Button href="https://www.linkedin.com/in/anish-sinha-9a369b222/" target="_blank" sx={{ position: 'relative', left: "980px" }}>
                <LinkedInIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#006635', mr: 1}} />
              </Button>
              <Button
                sx={{ position: 'relative', left: "860px", visibility: copiedEmail ? "hidden" : "visible" }}
                onClick={() => { navigator.clipboard.writeText(`anishsinha2003@gmail.com`) && setCopiedEmail(true)}}
                >
                <EmailIcon sx={{ display: { xs: 'none', md: 'flex' }, color: '#006635', mr: 1, opacity: copiedEmail ? "0" : "1", transition: "all 1s"}} />
              </Button>
              <span style={{ visibility: !copiedEmail ? "hidden" : "visible", fontSize: "17px", fontWeight: "bold", color: "#404040", position: "relative", right: "-700px", top: "11px", opacity: copiedEmail ? "1" : "0", transition: "all 1s"}}>✅ &nbsp; Email copied! </span>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <br/><br/><br/><br/><br/><br/>
      <div>
        <div id="about-me-page" style={{height: "90px", visibility: 'hidden', zIndex: '0'}}></div>
        <Typography component="h2" sx={{ fontWeight: "200", textAlign: "center", fontSize: "42px"}}>
          About Me
        </Typography>
        <img src={underline} alt="underline" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", top: "-130px", opacity:"0.3", width:"300px" }}/>
        <div style={{textAlign: "left", position: "relative", top: "-180px", paddingLeft: "200px"}}>
          <img src={dp} alt="dp" style={{height: "500px", borderRadius: "48%", boxShadow:"12px 12px 2px 1px #d9d9d9"}}/>
        <div style={{ textAlign: "left", width: "600px", position: "relative", top: "-500px", right: "-500px" }}>
          <Typography component="h2" sx={{ fontWeight: "0", fontSize: "32px"}}>
            Hi, I'm <span style={{ color: "#00b359", fontWeight: "bold"}}>Anish!</span>
          </Typography>
          <br/>
          <Typography component="h2" sx={{ fontWeight: "200", fontSize: "20px"}}>
            I am an undergraduate student at UNSW majoring in software engineering and biomedical engineering.  I am currently in my third year of my degree. I have two and a half years of experience in coding and all things technical which I have gained from university course work and side projects. <br/><br/>
            Although I have a huge passion for software development and developing a product from scratch which satisfies the user’s requirements, nothing gives me more satisfaction and fulfilment than knowing my software, that I or my team had built, is going to help someone in the real world.
          </Typography>
          </div>
        </div>
      </div>
      <div style={{position: "relative", top: "-300px"}}>
        <hr style={{ border: "none", width: "90%", height: "50px", marginTop: "0", borderBottom: "0.1px solid #333", boxShadow: "0 20px 20px -20px #333", margin: "-50px auto 10px" }}></hr>
        <br/><br/><br/>
        <div id="education-page" style={{height: "90px", visibility: 'hidden', zIndex: '0'}}></div>
        <Typography component="h2" sx={{ fontWeight: "200", textAlign: "center", fontSize: "42px"}}>
          Education
        </Typography>
        <img src={underline} alt="underline" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", top: "-130px", opacity:"0.3", width:"300px" }}/>
        <div style={{position: "relative", top: "-140px"}}>
          <Typography component="h2" sx={{ fontWeight: "bold", textAlign: "start", fontSize: "22px", paddingLeft: "200px"}}>
            Model Farms High School  <Typography component="h2" sx={{ fontWeight: "50", textAlign: "end", fontSize: "22px", paddingLeft: "1020px", display: "inline"}}>  2015 - 2026 </Typography>
          </Typography>
          <br/>
          <Typography component="h2" sx={{ fontWeight: "50", textAlign: "start", fontSize: "20px", paddingLeft: "200px"}}>
            Secondary Education
          </Typography>
        </div>
        <hr style={{ border: "none", width: "80%", height: "80px", borderBottom: "2px solid #a6a6a6", position: "relative", top: "-140px" }}></hr>
        <br/><br/><br/>
        <div style={{position: "relative", top: "-140px"}}>
          <Typography component="h2" sx={{ fontWeight: "bold", textAlign: "start", fontSize: "22px", paddingLeft: "200px"}}>
            Cherrybrook Technology High School  <Typography component="h2" sx={{ fontWeight: "50", textAlign: "end", fontSize: "22px", paddingLeft: "900px", display: "inline"}}>  2017 - 2020 </Typography>
          </Typography>
          <br/>
          <Typography component="h2" sx={{ fontWeight: "50", textAlign: "start", fontSize: "20px", paddingLeft: "200px"}}>
            Secondary Education
          </Typography>
          <br/>
          <Typography component="h2" sx={{ fontWeight: "50", textAlign: "start", fontSize: "20px", paddingLeft: "200px"}}>
            Graduated with atar of 96.15. Band 5 or 6 in Physics, Biology, Software Developement, Extension 1 and 2 Maths and Advanced English
          </Typography>
        </div>
        <hr style={{ border: "none", width: "80%", height: "80px", borderBottom: "2px solid #a6a6a6", position: "relative", top: "-140px" }}></hr>
        <br/><br/><br/>
        <div style={{position: "relative", top: "-140px"}}>
          <Typography component="h2" sx={{ fontWeight: "bold", textAlign: "start", fontSize: "22px", paddingLeft: "200px"}}>
            University of New South Wales <Typography component="h2" sx={{ fontWeight: "50", textAlign: "end", fontSize: "22px", paddingLeft: "970px", display: "inline"}}>  2021 - Present </Typography>
          </Typography>
          <br/>
          <Typography component="h2" sx={{ fontWeight: "50", textAlign: "start", fontSize: "20px", paddingLeft: "200px"}}>
            Tertiary Education
          </Typography>
          <br/>
          <Typography component="h2" sx={{ fontWeight: "50", textAlign: "start", fontSize: "20px", paddingLeft: "200px"}}>
            Master's of Biomedical Engineering/Bachelor's of software engineering
          </Typography>
          <br/>
          <Typography component="h2" sx={{ fontWeight: "50", textAlign: "start", fontSize: "20px", paddingLeft: "200px"}}>
            Current WAM (Weighted Average Mark) of Distinction
          </Typography>
        </div>
      </div>
      <div style={{position: "relative", top: "-250px"}}>
        <hr style={{ border: "none", width: "90%", height: "50px", marginTop: "0", borderBottom: "0.1px solid #333", boxShadow: "0 20px 20px -20px #333", margin: "-50px auto 10px" }}></hr>
        <br/><br/><br/>
        <div id="projects-page" style={{height: "90px", visibility: 'hidden', zIndex: '0'}}></div>
        <Typography component="h2" sx={{ fontWeight: "200", textAlign: "center", fontSize: "42px"}}>
          Projects
        </Typography>
        <img src={underline} alt="underline" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", top: "-130px", opacity:"0.3", width:"300px" }}/>
        <div style={{ padding: "150px", display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: "100px 30px" }}>
          {projects.map((project, index) => (
            <>
              <Card sx={{ width: 345, position:"relative", top: "-350px"}}>
                <CardHeader
                  title={project.name}
                  subheader={project.date}
                />
                {index === 0 ?
                  (<CardMedia
                  component="img"
                  height="194"
                  image={proj0}
                  alt="Project Image"
                  />) : index === 1 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj1}
                    alt="Project Image"
                  /> ) : index === 2 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj2}
                    alt="Project Image"
                  /> ) : index === 3 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj3}
                    alt="Project Image"
                  /> ) : index === 4 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj4}
                    alt="Project Image"
                  /> ) : index === 5 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj5}
                    alt="Project Image"
                  /> ) : index === 6 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj6}
                    alt="Project Image"
                  /> ) : index === 7 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj7}
                    alt="Project Image"
                  /> ) : index === 8 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj8}
                    alt="Project Image"
                  /> ) : index ===9 ?
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj9}
                    alt="Project Image"
                  /> ) :
                  (<CardMedia
                    component="img"
                    height="194"
                    image={proj10}
                    alt="Project Image"
                  /> )

                }
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography sx={{ fontWeight: "bold" }}> Skills Acquired: </Typography>
                  <br/>
                  {project.skills.map((skill, index) => (
                    <>
                      <Typography color="text.secondary"> {index + 1} - {skill} </Typography>
                      <br/>
                    </>
                  ))}
                </CardContent>
              </Card>
            </>
          ))}
        </div>
        <div style={{position: "relative", top: "-250px"}}>
          <hr style={{ border: "none", width: "90%", height: "50px", marginTop: "0", borderBottom: "0.1px solid #333", boxShadow: "0 20px 20px -20px #333", margin: "-50px auto 10px" }}></hr>
          <br/><br/><br/>
          <div id="projects-links-page" style={{height: "90px", visibility: 'hidden', zIndex: '0'}}></div>
          <Typography component="h2" sx={{ fontWeight: "200", textAlign: "center", fontSize: "42px"}}>
            Projects Links
          </Typography>
          <img src={underline} alt="underline" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", top: "-130px", opacity:"0.3", width:"300px" }}/>
          <div style={{position: "relative", top: "-140px"}}>
            <div style={{textAlign: "start", fontSize: "22px", paddingLeft: "35%"}}>
              <Button
                key="Global Chat Link"
                target="_blank"
                href={"https://global-chat-anish.netlify.app/"}
                sx={{ my: 1, color: "#404040", display: 'block', fontWeight: "bold", width: "fit-content", fontSize: "22px",
                  ':hover': {
                    backgroundColor: '#006635',
                    color: 'white',
                  },
                }}
              >
                https://global-chat-anish.netlify.app/
              </Button>
            </div>
            <br/><br/>
            <div style={{textAlign: "start", paddingLeft: "25%"}}>
              {/* <video width="900" controls>
                <source src={globalChatVid} type="video/mp4"/>
              </video> */}
              <iframe width="900" height="515" allow="fullscreen" title='global chat'
                src="https://www.youtube.com/embed/fcnhBYGyIbM">
              </iframe>
              <br/><br/>
              <div style={{fontSize: "15px", fontWeight: "bold"}}>Chatting system which allows users to log in using their github account, gmail account or anonymously.</div>
            </div>
          </div>
          <hr style={{ border: "none", width: "80%", height: "80px", borderBottom: "2px solid #a6a6a6", position: "relative", top: "-140px" }}></hr>
          <br/><br/><br/>
          <div style={{position: "relative", top: "-140px"}}>
          <div style={{textAlign: "start", fontSize: "22px", paddingLeft: "35%"}}>
              <Button
                key="Film Fluent Link"
                target="_blank"
                href={"https://film-fluent-anish.netlify.app/"}
                sx={{ my: 1, color: "#404040", display: 'block', fontWeight: "bold", width: "fit-content", fontSize: "22px",
                  ':hover': {
                    backgroundColor: '#006635',
                    color: 'white',
                  },
                }}
              >
                https://film-fluent-anish.netlify.app/
              </Button>
            </div>
            <br/><br/>
            <div style={{textAlign: "start", paddingLeft: "25%"}}>
              {/* <video width="900" controls>
                <source src={filmFluentVid} type="video/mp4"/>
              </video> */}
              {/* <iframe width="900" height="515"
                src="https://www.youtube.com/watch?v=lPJVi797Uy0">
              </iframe> */}
              <iframe width="900" height="515" allow="fullscreen" title='film fluent'
                src="https://www.youtube.com/embed/swnsigKLcfo">
              </iframe>
              <br/><br/>
              <div style={{fontSize: "15px", fontWeight: "bold"}}>Allows users to search up reviews of their searched movie/tv shows using the database from IMDB.</div>
            </div>
            <br/><br/>
          </div>
        </div>
      </div>
      {/* <div style={{position: "relative", top: "-550px"}}>
        <hr style={{ border: "none", width: "90%", height: "50px", marginTop: "0", borderBottom: "0.1px solid #333", boxShadow: "0 20px 20px -20px #333", margin: "-50px auto 10px" }}></hr>
        <br/><br/><br/>
        <div id="skills-page" style={{height: "90px", visibility: 'hidden', zIndex: '0'}}></div>
        <Typography component="h2" sx={{ fontWeight: "200", textAlign: "center", fontSize: "42px"}}>
          Skills
        </Typography>
        <img src={underline} alt="underline" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", top: "-130px", opacity:"0.3", width:"300px" }}/>
        <div style={{ padding: "150px", display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: "100px 30px", position: 'relative', top: "-290px" }}>
          {skills.map((skill, index) => (
            <div>
              <Typography component="h2" sx={{ fontWeight: "100", textAlign: "start", fontSize: "28px"}}>
                {skill.name}
              </Typography>
              <br/>
              <div className="progress-bar">
                <div style={{height: "10px", borderRadius: "5px", width: skill.percentage, backgroundColor: skill.colour}}><span>{skill.percentage}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
export default App;
