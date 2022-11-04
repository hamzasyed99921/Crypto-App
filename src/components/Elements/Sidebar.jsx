import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar  ">
        <div className="container_fluid">
          <div className="pt-4">
          <div className="sidebar_details">
              <Accordion className="color">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="text-white head_txt">
                    Listing Type
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="body">
                    <ul className="list position-relative">
                      <li>
                        <span></span>
                        <a href="#">Buy Now</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Auction</a>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="color">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="text-white head_txt">
                    Curation
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-white">
                    <ul className="list">
                      <li>
                        <span></span>
                        <a href="#">Curated</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Non-Curated</a>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="color">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="text-white head_txt">Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-white">
                    <div className="d-flex align-items-center justify-content-around price_txt">
                      <span className="symbol">$</span>
                      <input type="text" placeholder="Minimum" />
                      <span className="minus">-</span>
                      <input type="text" placeholder="Maximum" />
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="color">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="text-white head_txt">
                    Collection
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-white">
                    <ul className="list">
                      <li>
                        <span></span>
                        <a href="#">Art Blocks</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Mutant Ape Yatch Club</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Meebits</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Bored Ape Yatch Club</a>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="color">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="text-white head_txt">
                    Chains
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-white">
                    <ul className="list">
                      <li>
                        <span></span>
                        <a href="#">Crypto Chain</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Cronos</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Ethereum</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Polygon</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Solana</a>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="color">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className="text-white head_txt">
                    Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-white">
                    <ul className="list">
                      <li>
                        <span></span>
                        <a href="#">Celebrities</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Gaming</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Sport</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Music</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Crypto</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">Cross Chain</a>
                      </li>
                      <li>
                        <span></span>
                        <a href="#">PFP</a>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
