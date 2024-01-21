import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./footer.scss";
import { IoIosSend } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerr">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Tasty</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="icons">
                  <FaTwitterSquare
                    style={{ fontSize: "40px", backgroundColor: "white" }}
                  />
                  <FaFacebook
                    style={{ fontSize: "40px", backgroundColor: "white" }}
                  />
                  <FaSquareInstagram
                    style={{ fontSize: "40px", backgroundColor: "white" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Opening Hours</h2>
                <ul>
                  <li>Monday: 08: - 22:00</li>
                  <li>Tuesday: 08: - 22:00</li>
                  <li>Wednesday: 08: - 22:00</li>
                  <li>Thursday: 08: - 22:00</li>
                  <li>Friday: 08: - 22:00</li>
                  <li>Saturday: 08: - 22:00</li>
                  <li>Sunday: 08: - 22:00</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Contact Information</h2>
                <ul>
                  <li>198 West 21th Street, Suite 721 New York NY 10016</li>
                  <li>+ 1235 2355 98</li>
                  <li>info@yoursite.com</li>
                  <li>info@yoursite.com</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <h2>Newsletter</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <button>
                  <span>Subscribe</span>{" "}
                  <IoIosSend style={{ color: "gray", fontSize: "24px" }} />
                </button>
              </Grid>
            </Grid>
          </Box>
          <p className="copyright">
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <FavoriteIcon style={{ fontSize: "16px", color: "gray" }} />
            by Colorlib
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
