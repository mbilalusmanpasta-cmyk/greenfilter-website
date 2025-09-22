import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AddToCart = ({ text, handleClick, marginTop, isLink, to, height, width, buyButtonId, transform, id, background, color, isLeft }) => {

  const prevBuyButtonIdRef = useRef();



  useEffect(() => {

    console.log("prevBuyButtonIdRef", prevBuyButtonIdRef)
    if (buyButtonId && prevBuyButtonIdRef.current?.toString() != buyButtonId?.toString()) {
      let c = document.getElementById(`product-component-${buyButtonId}`)

      if (true) {
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }

          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }

          function ShopifyBuyInit() {
            var client = window.ShopifyBuy.buildClient({
              // domain: 'green-filter-usa.myshopify.com',
              domain: 'store.greenfilter.com',
              apiKey: 'b0f6e285934ab0374588e085bda31072',
              appId: '6',
            });

            window.ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: buyButtonId,
                node: document.getElementById(`product-component-${id}`),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                  "product": {
                    "variantId": "all",
                    "width": "240px",
                    "contents": {
                      "img": false,
                      "imgWithCarousel": false,
                      "title": false,
                      "variantTitle": false,
                      "price": true,
                      "description": false,
                      "buttonWithQuantity": false,
                      "quantity": false
                    },
                    "styles": {
                      "product": {

                        "text-align": isLeft ? "left" : "center",
                        "@media (min-width: 601px)": {
                          "max-width": "100%",
                          "margin-left": "0",
                          "margin-bottom": "0px"
                        }
                      },
                      "button": {
                        "font-family": "Lato, sans-serif",
                        "font-size": "13px",
                        "padding-top": "5px",
                        "display": "inline-block",
                        "padding": "7px",
                        "margin": "20px auto 0",
                        "margin-top": "0",
                        "background-color": background ? background : "#00ad23",
                        "color": color ? color : "#fff",
                        ":hover": {
                          "color": "#fff",
                          "background-color": "#003EAD"
                        },
                        "font-weight": "bold",
                        ":focus": {
                          "color": "#fff",
                          "background-color": "#003EAD"
                        }
                      },
                      "title": {
                        "font-size": "26px"
                      },
                      "price": {
                        "font-size": "18px"
                      },
                      "quantityInput": {
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px"
                      },
                      "compareAt": {
                        "font-size": "15px"
                      }
                    },
                    "googleFonts": [
                      "Lato"
                    ]
                  },
                  "cart": {
                    "contents": {
                      "button": true
                    },
                    "styles": {
                      "button": {
                        "font-family": "Lato, sans-serif",
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px",
                        ":hover": {
                          "background-color": "#6ca44e"
                        },
                        "font-weight": "bold",
                        ":focus": {
                          "background-color": "#00ad23"
                        }
                      },
                      "footer": {
                        "background-color": "#ffffff"
                      }
                    },
                    "googleFonts": [
                      "Lato"
                    ]
                  },
                  "modalProduct": {
                    "contents": {
                      "img": false,
                      "imgWithCarousel": true,
                      "variantTitle": false,
                      "buttonWithQuantity": true,
                      "button": false,
                      "quantity": false
                    },
                    "styles": {
                      "product": {
                        "@media (min-width: 601px)": {
                          "max-width": "100%",
                          "margin-left": "0px",
                          "margin-bottom": "0px"
                        }
                      },
                      "button": {
                        "font-family": "Lato, sans-serif",
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px",
                        ":hover": {
                          "background-color": "#6ca44e"
                        },
                        "font-weight": "bold",
                        ":focus": {
                          "background-color": "#6ca44e"
                        }
                      },
                      "quantityInput": {
                        "font-size": "13px",
                        "padding-top": "14.5px",
                        "padding-bottom": "14.5px"
                      }
                    },
                    "googleFonts": [
                      "Lato"
                    ]
                  },
                  "toggle": {
                    "styles": {
                      "toggle": {
                        "font-family": "Lato, sans-serif",
                        ":hover": {
                          "background-color": "#6ca44e"
                        },
                        "font-weight": "bold",
                        ":focus": {
                          "background-color": "#6ca44e"
                        }
                      },
                      "count": {
                        "font-size": "13px"
                      }
                    },
                    "googleFonts": [
                      "Lato"
                    ]
                  },
                  "productSet": {
                    "styles": {
                      "products": {
                        "@media (min-width: 601px)": {
                          "margin-left": "-20px"
                        }
                      }
                    }
                  }
                }
              });
            });
          }
        })();
      }
    }


    prevBuyButtonIdRef.current = buyButtonId;


  }, [buyButtonId])

  console.log(buyButtonId)

  return (

    isLink ?
      <Button1Wrapper marginTop={marginTop}>
        <div id={`product-component-${id}`} ></div>

        {/* <div id={`product-component-${buyButtonId}`}></div> */}

        {/* <Link to={to}>
        {text}
      </Link> */}
      </Button1Wrapper>
      :
      <div id={`product-component-${id}`} style={{ transform: transform || "" }}></div>

    // <Button1Wrapper
    // onClick={handleClick}
    // marginTop={marginTop}>
    //{text}
    // </Button1Wrapper>

  );
};

export default AddToCart;
const Button1Wrapper = styled.button`
  background-color: rgba(0, 173, 35, 0.86);
  background-image: none;
  min-width: 90px;
  color: #fff;
  padding: 15px 35px;
  border-radius: 5px;
  box-shadow: 0 0 11px 1px rgb(0 0 0 / 11%);
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.75px;
  border: none;
  cursor: pointer;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
`;
