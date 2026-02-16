import { useEffect, useRef} from "react";

const ProductShopifyImage = ({buyButtonId,id,isLeft,background,color,}) => {
  const prevBuyButtonIdRef = useRef();

    useEffect(()=>{

        // Validation: Don't initialize Shopify if no buyButtonId
        if (!buyButtonId) return;

        let c = document.getElementById(`product-component-${buyButtonId}`)
        if(buyButtonId && prevBuyButtonIdRef.current?.toString()!=buyButtonId?.toString())
        {
        if(true)
        {
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
                domain: 'green-filter-usa.myshopify.com',
                storefrontAccessToken: 'b0f6e285934ab0374588e085bda31072',
                appId: '6',
              });
          
              window.ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                  id: buyButtonId,
                  node: document.getElementById(`product-image-component-${id}`),
                  moneyFormat: '%24%7B%7Bamount%7D%7D',
                  options: {
                    "product": {
                      "variantId": "all",
                      "width": "240px",
                      "margin":"auto",
                      "contents": {
                        "img": true,
                        "imgWithCarousel": false,
                        "title": false,
                        "variantTitle": false,
                        "price": false,
                        "description": false,
                        "buttonWithQuantity": false,
                        "quantity": false,
                        "button": false,

                      },
                      "styles": {
                        "product": {
                          
                          "text-align": isLeft?"left":"center",
                          "@media (min-width: 601px)": {
                            "max-width": "100%",
                            "margin-left": "0",
                            "margin-bottom": "0px"
                          }
                        },
                        "button": {
                          "display":"none",
                          "font-family": "Lato, sans-serif",
                          "font-size": "13px",
                          "padding-top": "5px",
                          "display" : "inline-block",
                          "padding": "7px",
                          "margin": "20px auto 0",
                          "margin-top": "0",
                          "background-color": background?background:"#00ad23",
                          "color":color?color:"#fff",
                              ":hover": {
                                "color":"#fff",
                            "background-color": "#003EAD"
                          },
                          "font-weight": "bold",
                          ":focus": {
                            "color":"#fff",
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
                        "img": true,
                        "imgWithCarousel": true,
                        "variantTitle": false,
                        "buttonWithQuantity": false,
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
      prevBuyButtonIdRef.current  = buyButtonId;

        
    },[buyButtonId])

    // Don't render if no buyButtonId
    if (!buyButtonId) return null;

    return (<div style={{marginBottom:"100px"}}> <div id={`product-image-component-${id}`} style={{  margin:"auto", }} ></div> </div>);
}
 
export default ProductShopifyImage;