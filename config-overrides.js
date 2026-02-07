const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const { override } = require("customize-cra");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = override((config) => {
    console.log("process.env.NODE_ENV 1 ", process.env.NODE_ENV)
    if (process.env.NODE_ENV === "production") {
        config.plugins.push(
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, "build"),
                routes: [
                    "/store",
                    "/shop-by-vehicle",
                    "/",
                    "/brand/mustang", "/brand/toyota", "/brand/subaru", "/brand/jeep", "/brand/bmw",

                    "/brand/nissan-trucks", "/brand/ram-trucks", "/brand/toyota-trucks", "/brand/chevrolet-trucks", "/brand/ford-trucks",

                    "/brand/audi", "/brand/cadillac", "/brand/chrysler", "/brand/dodge",
                    //"/brand/ford", "/brand/gmc", 
                    "/brand/honda", "/brand/humvee", "/brand/infiniti", "/brand/lexus",
                    "/brand/lincoln", "/brand/mazda", "/brand/mercedes", "/brand/mini", "/brand/pontiac", "/brand/porsche", "/brand/scion", "/brand/volkswagen",

                    "/brand/ferrari", "/brand/gt", "/brand/mclaren", "/brand/lamborghini",

                    "/measure-filter",
                    "/cleaner-care",
                    "/universal-cylinder",
                    "/universal-round",
                    "/air-cleaner",
                    "/about-us",
                    "/our-guarantee", "/why-go-green", "/contact-us", "/careers", "/private-label", "/harley-filter", "/cross-reference-brand",
                    "/cross-reference-filters", "/faqs", "/privacy-policy", "/terms-of-service", "/universal-panel"
                    //"/store/filter/:id", 
                    // "/brand/:name",  
                ],

                // routes: ["/shop-by-vehicle", "/store", "/store/filter/:id", "/brand/:name", "/measure-filter", "/cleaner-care", "/air-cleaner", "/about-us", "/our-guarantee", "/why-go-green", "/contact-us", "/careers", "/private-label", "/harley-filter", "/cross-reference-brand", "/cross-reference-filters", "/faqs", "/privacy-policy", "/terms-of-service", "/universal-panel"],

                // Add your known routes here
                renderer: new Renderer({
                    // renderAfterDocumentEvent: "render-event",
                    //  OR use this instead to bypass event problems:
                    // renderAfterTime: 15000,
                    headless: false, // Show the browser for debugging
                    maxConcurrentRoutes: 1, // To isolate failures
                    renderAfterTime: 5000, // fallback in case render-event fails
                }),
            })
        );
    }

    return config;
});