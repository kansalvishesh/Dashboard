import React from "react";
import myclasses from "../CSS/progress.module.css";
import SearchBar from "../components/searchBar";
import { Col,Row } from "react-bootstrap";
import LongMenu from "../components/menu";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        color:"#2F80ED"
      },
    },
  }));


const Progress = () =>{
    const classes = useStyles();
    return(
        <>
        <div className="container-fluid row" className={myclasses.Progress}>
            <div className="col-xs-6" style={{float:"left",overflow:"hidden"}}>
                <p className={myclasses.Header} >Progress</p>
            </div>
            <div  className="col-xs-6" className={myclasses.SearchDiv}>
                <SearchBar/>
            </div>
        </div>
        <div className="container-fluid">
        <div style={{overflowX:"auto"}}>
            <table className={myclasses.Table}>
                <tr>
                <th>Domain</th>
                <th>Concept</th>
                <th>Sub concept</th>
                <th>Nano-skill</th>
                <th>Date assigned</th>
                <th>Assigned creator</th>
                <th>Assigned reviewer</th>
                <th>Status</th>
                <th>Actions</th>

                </tr>
                <tr>
                <td>Number sense and operations</td>
                <td>Addition/subtraction of two digit number with/without borrowing</td>
                <td>Addition/subtraction of two digit number with/without borrowing</td>
                <td>Addition/subtraction of two digit number with/without borrowing</td>
                <td>DD/MM/YYYY</td>
                <td>Placeholder name.</td>
                <td>Placeholder name.</td>
                <td><span style={{color:" #0ACF83"}}>Published</span></td>
                <td><LongMenu/></td>
                </tr>
                <tr>
                <td>Measurement</td>
                <td>Addition/subtraction of two</td>
                <td>Addition/subtraction of two</td>
                <td>Addition/subtraction of two</td>
                <td>DD/MM/YYYY</td>
                <td>Placeholder name.</td>
                <td>Placeholder name.</td>
                <td><span style={{color:"#EB5757"}}>Pending</span></td>
                <td><LongMenu/></td>
                </tr>
                <tr>
                <td>Measurement</td>
                <td>Addition/subtraction of two</td>
                <td>Addition/subtraction of two</td>
                <td>Addition/subtraction of two</td>
                <td>DD/MM/YYYY</td>
                <td>Placeholder name.</td>
                <td>Placeholder name.</td>
                <td><span style={{color:"#EB5757"}}>Pending</span></td>
                <td><LongMenu/></td>
                </tr>
                <tr>
                <td>Measurement</td>
                <td>Addition/subtraction of two</td>
                <td>Addition/subtraction of two</td>
                <td>Addition/subtraction of two</td>
                <td>DD/MM/YYYY</td>
                <td>Placeholder name.</td>
                <td>Placeholder name.</td>
                <td><span style={{color:"#EB5757"}}>Pending</span></td>
                <td><LongMenu/></td>
                
                </tr>
            </table>
            
        </div>
        <div style={{margin:"2% 0",float:"right"}} className={classes}>
        <Pagination count={10} defaultPage={1} 
                    size="medium"
                    siblingCount={1} color="secondary" />
        </div>

        </div>
        </>
    )
}
export default Progress;