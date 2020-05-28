import React, { useState } from  "react";
import myclasses from "../CSS/dashboard.module.css";
import CustomNavbar from "../components/navbar";
import { withStyles,makeStyles  } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import { Button,Row,Col,Dropdown,DropdownButton } from "react-bootstrap";
import ThisWeek from "../components/thisWeek";
import Monthly from "../components/monthly";
import AreaChart from "../components/areachart";
import Barchart from "../components/barchart";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Stack from "../components/stackedBar";
import Progress from "./progress";


const CustomCheckbox = withStyles({
    root: {
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const CustomRadio = withStyles({
    root: {
      '&$checked': {
        color: blue[600],
      },
      
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const Home = ()=>{
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: true,
      });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange2 = (event) => {
        setSelectedValue(event.target.value);
    };
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date(),
            firstday=(today.getDate()-today.getDay()) ,
            lastday=firstday+6,
            month =  monthNames[(today.getMonth())] + ' ' + "'20";

    const[myMonth, updateMonth]=useState(month)
    const[startDate,updateStartDate]=useState(firstday);
    const[endDate,updateEndDate]=useState(lastday);
    return(
        <>
            <div className="container-fluid" className={myclasses.Dashboard} style={{height:"100%"}}>
                <CustomNavbar/>
                <div className="container-fluid" style={{padding:"2% 2% 0 2%",overflow:"hidden",display:"inline-block"}}>
                    <div style={{float:"left"}} className={myclasses.Header}>
                        <p style={{color:"#B4B4BD"}}>My Dashboard</p>
                    </div>
                    <div style={{float:"right",overflow:"hidden"}} >
                    <Badge className={myclasses.Right} color="secondary" badgeContent={85} style={{color:"#2F80ED"}} showZero>
                    <NotificationsNoneRoundedIcon/>
                    </Badge>
                    <Button className={myclasses.Right} variant="primary">+ Assign New</Button>
                    </div>

                </div>
                <div className="container-fluid" style={{padding:"2%",overflow:"hidden",display:"inline-block"}}>
                    <Row>
                        <Col sm={2}  >
                        <div className="container" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <ThisWeek/>
                        <p className={myclasses.Date}>{startDate}{month} - {endDate}{month}</p>
                        </div>
                        
                        </Col>
                        <Col sm={8}>
                            <Row>
                                <Col md={6} sm={12}>
                                    <Row  className={myclasses.DivContainer}>
                                    <Col style={{padding:"0"}} md={3} xs={6}>
                                            <div className="container" className={myclasses.Container} style={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                flexDirection:"column",
                                                padding:"20%"}}>
                                                <h1 className={myclasses.ContainerHeader}>268</h1>
                                                <h4 className={myclasses.ContainerText}>Assigned</h4>
                                            </div>
                                        </Col>
                                        <Col style={{padding:"0"}} md={3} xs={6}>
                                            <div className="container" className={myclasses.Container} style={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                flexDirection:"column"}}>
                                                <h1 className={myclasses.ContainerHeader}>158</h1>
                                                <h4 className={myclasses.ContainerText}><span style={{color: "#FFA8A0"}}>Created</span></h4>
                                            </div>
                                        </Col>
                                        <Col style={{padding:"0"}} md={3} xs={6}>
                                            <div className="container" className={myclasses.Container} style={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                flexDirection:"column"}}>
                                                <h1 className={myclasses.ContainerHeader}>96</h1>
                                                <h4 className={myclasses.ContainerText}><span style={{color: "#FFD180"}}>Reviewed</span></h4>
                                            </div>
                                        </Col>
                                        <Col style={{padding:"0"}} md={3} xs={6}>
                                            <div className="container" className={myclasses.Container} style={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                flexDirection:"column"}}>
                                                <h1 className={myclasses.ContainerHeader}>40</h1>
                                                <h4 className={myclasses.ContainerText}><span style={{color: "#8FDCE5"}}>Published</span></h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col style={{padding:"0"}} md={6} sm={12}>
                                    <div style={{backgroundColor:"white",height:"100%"}}>
                                        <Stack/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"2%"}}>
                        <Col xs={6}  sm={2}>
                        <div className="container" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <Monthly/>
                        </div>
                        </Col>
                        <Col className={myclasses.Hidden} xs={6} sm={2}>
                        <div className="container" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <ThisWeek/>
                        <p className={myclasses.Date}>{startDate}{month} - {endDate}{month}</p>
                        </div>
                        </Col>

                        <Col sm={8}>
                            <Row >
                                <Col style={{padding:"0"}} md={6} sm={12}>
                                    <div style={{backgroundColor:"white",height:"100%"}}>
                                        <AreaChart/>
                                        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                        <FormGroup row>
                                        <center>
                                        <FormControlLabel
                                            control={
                                            <CustomCheckbox
                                            
                                                checked={state.checkedA}
                                                onChange={handleChange}
                                                name="checkedA"
                                               
                                            />
                                            }
                                            label={<span className={myclasses.Checkbox}>Assigned</span>}
                                        />
                                        <FormControlLabel
                                            control={
                                            <CustomCheckbox
                                            
                                                checked={state.checkedB}
                                                onChange={handleChange}
                                                name="checkedB"
                                               
                                            />
                                            }
                                            label={<span className={myclasses.Checkbox}>Created</span>}
                                        />
                                        <FormControlLabel
                                            control={
                                            <CustomCheckbox
                                       
                                                checked={state.checkedC}
                                                onChange={handleChange}
                                                name="checkedC"
                                                
                                            />
                                            }
                                            label={<span  className={myclasses.Checkbox}>Reviewed</span>}
                                        />
                                        <FormControlLabel
                                            control={
                                            <CustomCheckbox
                                           
                                                checked={state.checkedD}
                                                onChange={handleChange}
                                                name="checkedD"
                                                
                                            />
                                            }
                                            label={<span className={myclasses.Checkbox}>Published</span>}
                                        /></center>
                                        </FormGroup>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={{padding:"0"}} md={6} sm={12}>
                                    <div style={{backgroundColor:"white",height:"100%"}}>
                                        <Barchart/>
                                        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                            <FormGroup row>
                                            <FormControlLabel
                                       control={
                                        <CustomRadio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange2}
                                        value="a"
                                        name="radio-button-demo"
                                    
                                    />
                                       }
                                       label={<span className={myclasses.Checkbox} >Creators</span>}
                                       
                                       />

                                       <FormControlLabel
                                       control={
                                        <CustomRadio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChange2}
                                        value="b"
                                        name="radio-button-demo"
                                        label="Creator"
                                    />
                                       }
                                       label={<span className={myclasses.Checkbox} >Reviewers</span>}
                                       
                                       />
                                            </FormGroup>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className={myclasses.Hidden2} style={{padding:0}} sm={2}>  
                        <div className="container" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <ThisWeek/>
                            <p className={myclasses.Date}>{startDate}{month} - {endDate}{month}</p>
                        </div>
                        </Col>
                    </Row>
                </div>
                <Progress/>
            </div>
            
        </>
    )
}
export default Home;