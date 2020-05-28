import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import { NavLink} from "react-router-dom";

const CustomNavbar = ()=>{
    return(
        <>
        <div>
        <Navbar className={classes.Navbar} variant="dark" expand="sm">
            <Navbar.Brand href="#home">
            <span style={{color:"#B4B4BD"}}>Unlearn Kids </span>
            </Navbar.Brand>
            <span className={classes.BrandText} style={{color:"#B4B4BD"}}>| Content authorizing tool</span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink to="/" activeClassName={classes.Selected} className={classes.Link}><Nav  href="#home">Home</Nav></NavLink>
                <NavLink to="/content" className={classes.Link}><Nav href="#home">Content</Nav></NavLink>
                <NavLink to="/content" className={classes.Link}><Nav href="#home">Assests</Nav></NavLink>
                <NavLink to="/content" className={classes.Link}><Nav href="#home">Framework</Nav></NavLink>
                <NavLink to="/content" className={classes.Link}><Nav href="#home">Users</Nav></NavLink>
                <NavLink to="/content" className={classes.User}><Nav href="#home"><i class="fas fa-user-circle fa-lg"></i></Nav></NavLink>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar;