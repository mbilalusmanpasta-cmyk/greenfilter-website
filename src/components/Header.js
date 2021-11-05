import React from "react";
import styled from "styled-components";
import logo from "../assets/gflogo.png";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import "../styles/Header.css";
import flag from "../assets/USA-Flag.jpg";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const menu0 = (
    <Menu>
      <Menu.Item>
        <Link>By Vehicle</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>How To Measure A Filter</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Cleaner Kits</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Harley Filters</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Universal Cone/Cylinder</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Universal Round</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Air Clearner Assemblies</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Bargain Basement</Link>
      </Menu.Item>
    </Menu>
  );
  const menu1 = (
    <Menu>
      <Menu.Item>
        <Link>About Us</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Our Guarantee</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>How We Outperform</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Private Label</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Become An Affiliate</Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Become A Dealer</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <HeaderWrapper>
        <div className="r-navbar w-nav">
          <div className="container w-clearfix">
            <div className="menu-button">
              <FaBars />
            </div>
            <Link to="/" className="brand w-nav-brand w--current">
              <img src={logo} alt="logo" width="150" />
            </Link>
            <div className="nav-links">
              <Dropdown
                overlay={menu0}
                placement="bottomCenter"
                // trigger={["click"]}
              >
                <Button>Shop</Button>
              </Dropdown>
              <Dropdown
                overlay={menu1}
                placement="bottomCenter"
                // trigger={["click"]}
              >
                <Button>Why Green Filter?</Button>
              </Dropdown>

              <Button>Cleaner & Care</Button>

              <Button>Contact Us</Button>
            </div>
            <div className="right-nav-div">
              <img className="icon flag" src={flag} alt="flag" />
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 99996;

  .r-navbar {
    display: block;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #000;
    box-shadow: 1px 1px 6px 0 rgb(0 0 0 / 7%);
  }

  .w-nav {
    position: relative;
    z-index: 9999;
  }

  .w-nav:before,
  .w-nav:after {
    content: " ";
    display: table;
  }
  .container {
    display: block;
    margin-right: 3%;
    margin-left: 3%;
    padding: 10px 0;
  }
  .brand {
    margin-top: 8px;
    margin-right: 0px;
  }
  .w-nav-brand {
    position: relative;
    text-decoration: none;
    color: #333333;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }
  .nav-links {
    display: inline-block;
    margin-left: 5px;
  }
  .ant-btn {
    background: transparent;
    color: #fff;
    font-size: 15px;
    font-family: Lato, sans-serif;
    border: none;
    padding: 15px 20px;
  }
  .ant-btn:hover,
  .ant-btn:focus {
    color: rgba(256, 256, 256, 0.5);
  }
  .right-nav-div {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    float: right;
  }
  .icon.flag {
    width: 50px;
    margin-right: 7px;
    margin-left: 0px;
    margin-top: 10px;
  }
  .icon {
    position: relative;
    top: 12px;
    width: 25px;
  }
  .menu-button {
    display: none;
    position: absolute;
    left: 0;
    color: #fff;
    padding: 18px;
  }

  @media screen and (max-width: 767px) {
    .nav-links {
      display: none !important;
    }
    .container {
      text-align: center;
      position: relative;
    }
    .icon.flag {
      margin-top: 0;
    }
    .menu-button {
      display: inline-block;
    }
  }
`;
