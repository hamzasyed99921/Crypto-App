import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
        <div className='sidebar  '>
            <div className="container_fluid">
                <div className='pt-4'>
                <div className='sidebar_details'>
      <Accordion className="color" >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-white head_txt'>Listing Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="body">
            <ul className='list'>
                <li><a href="#">Buy Now</a></li>
                <li><a href="#">Auction</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="color" >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-white head_txt" >Curation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
          <ul className='list'>
                <li><a href="#">Curated</a></li>
                <li><a href="#">Non-Curated</a></li>
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
            <div className='d-flex align-items-center justify-content-around price_txt'>
                <span className='symbol'>$</span>
                <input type="text" placeholder='Minimum' />
                <span className='minus'>-</span>
                <input type="text" placeholder='Maximum' />
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
          <Typography className="text-white head_txt">Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
          <ul className='list'>
                <li><a href="#">Curated</a></li>
                <li><a href="#">Non-Curated</a></li>
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
          <Typography className="text-white head_txt">Chains</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
          <ul className='list'>
                <li><a href="#">Curated</a></li>
                <li><a href="#">Non-Curated</a></li>
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
          <Typography className="text-white head_txt">Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
          <ul className='list'>
                <li><a href="#">Curated</a></li>
                <li><a href="#">Non-Curated</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar