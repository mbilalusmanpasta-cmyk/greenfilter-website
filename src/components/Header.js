import React from "react";
import styled from "styled-components";
import logo from "../assets/gflogo.png";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import "../styles/Header.css";
import flag from "../assets/USA-Flag.jpg";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Header = (props) => {
  const menu0 = (
    <Menu>
      <Menu.Item>
        <Link
          to="/shop-by-vehicle"
          onClick={() => props.handleClickIndex(0)}
          style={{ color: props.clickedIndex === 0 ? "#0082f3" : null }}
        >
          By Vehicle
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/measure-filter"
          onClick={() => props.handleClickIndex(1)}
          style={{ color: props.clickedIndex === 1 ? "#0082f3" : null }}
        >
          How To Measure A Filter
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/cleaner-care"
          onClick={() => props.handleClickIndex(2)}
          style={{ color: props.clickedIndex === 2 ? "#0082f3" : null }}
        >
          Cleaner Kits
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link>Harley Filters</Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/universal-cylinder"
          onClick={() => props.handleClickIndex(4)}
          style={{ color: props.clickedIndex === 4 ? "#0082f3" : null }}
        >
          Universal Cone/Cylinder
        </Link>
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
  const menu2 = (
    <Menu style={{ background: "#ddd", position: "static", borderRadius: 5 }}>
      {props.vehicle?.modelType?.map((type) => (
        <Menu.Item className="vehicle-dropdown-menu-item" key={type.id}>
          <Link>{type.modelTypeName}</Link>
        </Menu.Item>
      ))}
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
                overlayStyle={{ zIndex: 100000 }}
                // trigger={["click"]}
              >
                <Button>Shop</Button>
              </Dropdown>
              <Dropdown
                overlay={menu1}
                placement="bottomCenter"
                overlayStyle={{ zIndex: 100000 }}
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
          {props.isVehicle && (
            <div className="hero-header">
              <div className="row-3 w-row">
                <div className="column-3 _0 w-col w-col-9">
                  <h1 className="hero-heading-1 left smaller">
                    {props.vehicle.modelName} Performance Air Filters
                  </h1>
                </div>
                <div className="column-2 w-col w-col-3">
                  <div className="w-form">
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      overlayStyle={{ zIndex: 100000 }}
                    >
                      <div className="vehicle-dropdown-btn">
                        Select a {props.vehicle.modelName} Model
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          )}
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
    margin-left: 15%;
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
    right: 15%;
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

  .hero-header {
    position: relative;
    z-index: 800;
    height: 100px;
    padding-top: 0px;
    background-color: black;
  }

  .row-3 {
    position: static;
    width: 100%;
    padding-right: 5%;
    padding-left: 5%;
    background-color: transparent;
  }

  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }
  .column-3._0 {
    margin-top: 0px;
    padding-left: 0px;
  }
  .w-col-9 {
    width: 75%;
  }
  .w-col-3 {
    width: 25%;
  }
  .w-col {
    position: relative;
    float: left;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .hero-heading-1.left.smaller {
    margin-top: 5px;
    font-size: 24px;
    text-transform: capitalize;
  }
  .hero-heading-1.left {
    margin-bottom: 15px;
    text-align: left;
    text-shadow: 1px 1px 6px rgb(0 0 0 / 24%);
  }
  .hero-heading-1 {
    font-family: Lato, sans-serif;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.75px;
  }
  .column-2 {
    height: 100px;
    text-align: right;
  }
  .w-form {
    margin: 0 0 15px;
    position: absolute;
    right: 0;
    bottom: 15px;
  }
  .vehicle-dropdown-btn {
    position: relative;
    left: 0px;
    right: 0px;
    padding: 15px 40px;
    border-radius: 5px;
    background-color: #00ad23;
    font-family: Lato, sans-serif;
    color: #fff;
    user-select: none;
    display: inline-block;
    cursor: pointer;
    display: flex;
  }
  .vehicle-dropdown-btn svg {
    font-size: 22px;
    color: #fff;
    margin-left: 10px;
  }

  @media screen and (max-width: 912px) {
    .nav-links {
      display: none !important;
    }
    .container {
      text-align: center;
      position: relative;
      margin-left: 3%;
    }
    .icon.flag {
      margin-top: 0;
    }
    .menu-button {
      display: inline-block;
    }
    .right-nav-div {
      right: 0 !important;
    }
  }

  @media screen and (max-width: 1000px) {
    .right-nav-div {
      right: 8%;
    }
  }
`;
