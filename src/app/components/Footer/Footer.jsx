import React from 'react'
import {Col } from 'react-bootstrap'
import footerLogo from '../../assets/images/footerLogo.png'

import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import './Footer.css';

export const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='d-flex justify-content-between pb-4'>
          <Col lg={6} sm={4}>
            <div className='d-flex pt-4'>
              <img src={footerLogo} alt="footerLogo" className='footerLogo' />
              <h2 className='footerTitle px-2'>Service Chaiyo</h2>
            </div>
            <p className='paragraph-footer'>Join us and find perfect solution for your daily problems</p>
          </Col>
          <Col lg={3} sm={5} className='pt-4'>
            <h4 className='footerContactTitle'>Contact Us</h4>
            <IoMdMail />
            <a href="" className='px-1'>service@gmail.com</a>
            <div>
              <MdCall />
              <a href="" className='px-1'>01-234567</a>
            </div>
          </Col>
          <Col lg={3} sm={3} className='pt-4'>
            <h4 className='footerContactTitle'>Follow Us</h4>
            <a href=""> <FaFacebook /></a>
            <a href="" className='px-2'>  <FaTwitter /></a>

          </Col>
        </div>
        <hr />
        <div className='d-flex justify-content-end'>
          <p>@ copyright owned</p>
        </div>
    </div>
    </>
  )
}