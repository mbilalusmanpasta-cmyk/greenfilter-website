import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/gflogo.png";
import { Link, useHistory } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import "../styles/Header.css";
import flag from "../assets/USA-Flag.jpg";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Drawer } from "@mui/material";
import { simplifyId } from "../helper/simplifyId";

const Header = (props) => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleDrawerClose = () => {
    setToggle(false);
    setOpenAccordion(null);
  };

  const handleNavLink = (index, path) => {
    props.handleClickIndex(index);
    history.push(path);
    handleDrawerClose();
  };

  // ── Desktop dropdown menus ──────────────────────────────────────────────────
  const menu0 = (
    <Menu>
      <Menu.Item>
        <Link to="/shop-by-vehicle" onClick={() => props.handleClickIndex(0)}>
          By Vehicle
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/measure-filter" onClick={() => props.handleClickIndex(1)}>
          How To Measure A Filter
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/harley-filter" onClick={() => props.handleClickIndex(11)}>
          Harley Filters
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/universal-cylinder" onClick={() => props.handleClickIndex(4)}>
          Universal Cone/Cylinder
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/universal-round" onClick={() => props.handleClickIndex(5)}>
          Universal Round
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/air-cleaner" onClick={() => props.handleClickIndex(6)}>
          Air Cleaner Assemblies
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/cross-reference-brand" onClick={() => props.handleClickIndex(12)}>
          Cross Reference Brand
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/cross-reference-filters" onClick={() => props.handleClickIndex(13)}>
          Cross Reference Filters
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a href="/documents/Porsche_Flyer.pdf">Porsche Product Flyer</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/documents/BB.pdf">Bargain Basement</a>
      </Menu.Item>
    </Menu>
  );

  const menu1 = (
    <Menu>
      <Menu.Item>
        <Link to="/about-us" onClick={() => props.handleClickIndex(7)}>
          About Us
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/our-guarantee" onClick={() => props.handleClickIndex(8)}>
          Our Guarantee
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/why-go-green" onClick={() => props.handleClickIndex(9)}>
          How We Outperform
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/private-label" onClick={() => props.handleClickIndex(10)}>
          Private Label
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu style={{ background: "#ddd", position: "static", borderRadius: 5 }}>
      {props.models?.map((model, key) => (
        <Menu.Item className="vehicle-dropdown-menu-item" key={key}>
          <Link onClick={(e) => { scroll(e, simplifyId(model.slug)); }}>{model?.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const scroll = (e, id) => {
    e.preventDefault();
    id = simplifyId(id);
    const section = document.querySelector(`#${id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── Mobile accordion link data ──────────────────────────────────────────────
  const shopLinks = [
    { label: "By Vehicle", path: "/shop-by-vehicle", index: 0 },
    { label: "How To Measure A Filter", path: "/measure-filter", index: 1 },
    { label: "Harley Filters", path: "/harley-filter", index: 11 },
    { label: "Universal Cone/Cylinder", path: "/universal-cylinder", index: 4 },
    { label: "Universal Round", path: "/universal-round", index: 5 },
    { label: "Air Cleaner Assemblies", path: "/air-cleaner", index: 6 },
    { label: "Cross Reference Brand", path: "/cross-reference-brand", index: 12 },
    { label: "Cross Reference Filters", path: "/cross-reference-filters", index: 13 },
    { label: "Bargain Basement", href: "/documents/BB.pdf" },
  ];

  const whyLinks = [
    { label: "About Us", path: "/about-us", index: 7 },
    { label: "Our Guarantee", path: "/our-guarantee", index: 8 },
    { label: "How We Outperform", path: "/why-go-green", index: 9 },
    { label: "Private Label", path: "/private-label", index: 10 },
  ];

  return (
    <>
      <HeaderWrapper>
        {/* ── MUI Drawer — mobile nav ──────────────────────────────────────── */}
        <Drawer
          anchor="left"
          open={toggle}
          onClose={handleDrawerClose}
          sx={{ zIndex: 999999 }}
          PaperProps={{
            sx: {
              width: "100vw",
              maxWidth: "100vw",
              background: "#fff",
              overflowX: "hidden",
            },
          }}
        >
          <DrawerContent>
            {/* Drawer header — black bar with logo centred, × left */}
            <div className="drawer-header">
              <button
                className="drawer-close"
                onClick={handleDrawerClose}
                aria-label="Close menu"
              >
                ×
              </button>
              <Link to="/" className="drawer-logo" onClick={handleDrawerClose}>
                <img src={logo} alt="Green Filter logo" width="130" />
              </Link>
            </div>

            {/* SHOP accordion */}
            <div className="accordion-row">
              <button
                className="accordion-trigger"
                onClick={() => toggleAccordion("shop")}
              >
                <span>SHOP</span>
                <span className="accordion-icon">
                  {openAccordion === "shop" ? "×" : "+"}
                </span>
              </button>
              {openAccordion === "shop" && (
                <div className="accordion-body">
                  {shopLinks.map((item) =>
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="sub-link"
                        onClick={handleDrawerClose}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        key={item.label}
                        className="sub-link"
                        onClick={() => handleNavLink(item.index, item.path)}
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* WHY GREEN FILTER? accordion */}
            <div className="accordion-row">
              <button
                className="accordion-trigger"
                onClick={() => toggleAccordion("why")}
              >
                <span>WHY GREEN FILTER?</span>
                <span className="accordion-icon">
                  {openAccordion === "why" ? "×" : "+"}
                </span>
              </button>
              {openAccordion === "why" && (
                <div className="accordion-body">
                  {whyLinks.map((item) => (
                    <button
                      key={item.label}
                      className="sub-link"
                      onClick={() => handleNavLink(item.index, item.path)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CLEARANCE — direct link */}
            <div className="accordion-row">
              <button
                className="accordion-trigger no-icon clearance-link"
                onClick={() => handleNavLink(14, "/clearance")}
              >
                <span>CLEARANCE</span>
              </button>
            </div>

            {/* CLEANER & CARE — direct link */}
            <div className="accordion-row">
              <button
                className="accordion-trigger no-icon"
                onClick={() => handleNavLink(2, "/cleaner-care")}
              >
                <span>CLEANER &amp; CARE</span>
              </button>
            </div>

            {/* CONTACT US — direct link */}
            <div className="accordion-row">
              <button
                className="accordion-trigger no-icon"
                onClick={() => handleNavLink(10, "/contact-us")}
              >
                <span>CONTACT US</span>
              </button>
            </div>
          </DrawerContent>
        </Drawer>

        {/* ── Desktop navbar ───────────────────────────────────────────────── */}
        <div className="r-navbar w-nav">
          <div className="container w-clearfix">
            <div
              className="menu-button"
              onClick={() => setToggle(true)}
            >
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
              >
                <Button>
                  Shop{" "}
                  <MdOutlineKeyboardArrowDown
                    style={{ verticalAlign: "middle", marginLeft: 3 }}
                  />
                </Button>
              </Dropdown>

              <Button
                onClick={() => {
                  props.handleClickIndex(14);
                  history.push("/clearance");
                }}
                style={{ color: "#ff4444" }}
              >
                Clearance
              </Button>

              <Dropdown
                overlay={menu1}
                placement="bottomCenter"
                overlayStyle={{ zIndex: 100000 }}
              >
                <Button>
                  Why Green Filter?{" "}
                  <MdOutlineKeyboardArrowDown
                    style={{ verticalAlign: "middle", marginLeft: 3 }}
                  />
                </Button>
              </Dropdown>

              <Button
                onClick={() => {
                  props.handleClickIndex(2);
                  history.push("/cleaner-care");
                }}
              >
                Cleaner &amp; Care
              </Button>

              <Button
                onClick={() => {
                  props.handleClickIndex(10);
                  history.push("/contact-us");
                }}
              >
                Contact Us
              </Button>
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
                    {props.make.title} Performance Air Filters
                  </h1>
                </div>
                <div className="column-2 w-col w-col-3">
                  <div className="w-form" id="menu2-dropdown-container">
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      overlayStyle={{ zIndex: 100000 }}
                      getPopupContainer={() =>
                        document.getElementById("menu2-dropdown-container") ||
                        document.body
                      }
                    >
                      <div className="vehicle-dropdown-btn">
                        <span style={{ flexGrow: 1, textAlign: "left" }}>
                          Select a {props.make.title} Model
                        </span>
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

// ── Styled components ─────────────────────────────────────────────────────────

const HeaderWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 45px;
  right: 0px;
  z-index: 99996;
  /* No padding here — black bar spans full browser width */

  @media (max-width: 767px) {
    top: 55px;
  }

  #menu2-dropdown-container .ant-dropdown-placement-topCenter {
    position: fixed;
  }

  .r-navbar {
    display: block;
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
    padding: 10px 5%;
    z-index: 1000;
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

  /* ── Desktop nav button styling ── */
  .ant-btn {
    background: transparent;
    color: #fff;
    font-size: 13px;
    font-family: Lato, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: none;
    box-shadow: none;
    padding: 15px 16px;
    height: auto;
    line-height: 1;
  }

  .ant-btn:hover,
  .ant-btn:focus {
    color: #00ad23;
    background: transparent;
    border: none;
    box-shadow: none;
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
    cursor: pointer;
  }

  /* ── Vehicle page hero strip ── */
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
    width: 296px;
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
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .vehicle-dropdown-btn svg {
    font-size: 22px;
    color: #fff;
    margin-left: 10px;
  }

  /* ── Responsive: hide desktop nav, show hamburger ── */
  @media screen and (max-width: 912px) {
    .nav-links {
      display: none !important;
    }

    .container {
      text-align: center;
      position: relative;
      padding: 10px 5%;
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

  @media screen and (max-width: 479px) {
    .hero-heading-1.left.smaller {
      text-align: center;
    }

    .w-form {
      width: 100%;
    }
  }

  @media screen and (max-width: 1100px) {
    .w-col-9 {
      width: 100%;
    }

    .w-col-3 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .w-form {
      position: static;
    }
  }
`;

const DrawerContent = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  font-family: Lato, sans-serif;
  overflow-y: auto;

  /* ── Drawer header bar ── */
  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    padding: 0 16px;
    height: 57px;
    position: relative;
    flex-shrink: 0;
  }

  .drawer-close {
    position: absolute;
    left: 16px;
    background: none;
    border: none;
    color: #fff;
    font-size: 30px;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
  }

  .drawer-logo img {
    display: block;
  }

  /* ── Accordion rows ── */
  .accordion-row {
    border-bottom: 1px solid #e8e8e8;
  }

  .accordion-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font: 700 13px/1 Lato, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #111;
    text-align: left;
  }

  .accordion-trigger.no-icon {
    justify-content: flex-start;
  }

  .accordion-trigger:hover {
    color: #00ad23;
  }

  .accordion-trigger.clearance-link {
    color: #ff4444;
  }

  .accordion-trigger.clearance-link:hover {
    color: #dd2222;
  }

  .accordion-icon {
    font-size: 20px;
    font-weight: 400;
    color: #555;
    line-height: 1;
    width: 20px;
    text-align: center;
    flex-shrink: 0;
  }

  /* ── Sub-links panel ── */
  .accordion-body {
    display: flex;
    flex-direction: column;
    background: #fafafa;
  }

  .sub-link {
    display: block;
    width: 100%;
    padding: 13px 28px;
    font: 400 14px/1.4 Lato, sans-serif;
    color: #333;
    text-decoration: none;
    background: none;
    border: none;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    text-align: left;
    transition: color 0.15s;
  }

  .sub-link:last-child {
    border-bottom: none;
  }

  .sub-link:hover {
    color: #00ad23;
  }
`;
