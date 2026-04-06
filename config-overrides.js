const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const { override } = require("customize-cra");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = override((config) => {
    console.log("process.env.NODE_ENV 1 ", process.env.NODE_ENV)
    if (process.env.NODE_ENV === "production" && process.env.SKIP_PRERENDER !== "true") {
        config.plugins.push(
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, "build"),
                routes: [
                    // Main pages
                    "/",
                    "/store",
                    "/shop-by-vehicle",
                    "/about-us",
                    "/contact-us",
                    "/vehicles",
                    "/sitemap",

                    // Product category pages
                    "/measure-filter",
                    "/cleaner-care",
                    "/universal-cylinder",
                    "/universal-round",
                    "/universal-panel",
                    "/air-cleaner",
                    "/harley-filter",
                    "/cross-reference-brand",
                    "/cross-reference-filters",

                    // Popular car brands
                    "/brand/mustang",
                    "/brand/toyota",
                    "/brand/subaru",
                    "/brand/jeep",
                    "/brand/bmw",
                    "/brand/honda",
                    "/brand/audi",
                    "/brand/cadillac",
                    "/brand/chrysler",
                    "/brand/dodge",
                    "/brand/humvee",
                    "/brand/infiniti",
                    "/brand/lexus",
                    "/brand/lincoln",
                    "/brand/mazda",
                    "/brand/mercedes",
                    "/brand/mini",
                    "/brand/pontiac",
                    "/brand/porsche",
                    "/brand/scion",
                    "/brand/volkswagen",

                    // Truck brands
                    "/brand/nissan-trucks",
                    "/brand/ram-trucks",
                    "/brand/toyota-trucks",
                    "/brand/chevrolet-trucks",
                    "/brand/ford-trucks",

                    // Performance/luxury brands
                    "/brand/ferrari",
                    "/brand/gt",
                    "/brand/mclaren",
                    "/brand/lamborghini",

                    // Info pages
                    "/faqs",
                    "/our-guarantee",
                    "/why-go-green",
                    "/careers",
                    "/private-label",
                    "/privacy-policy",
                    "/terms-of-service",

                    // Note: Individual product pages (/store/filter/:id) should be added
                    // separately if you have a list of top products. See notes below.
                ],

                // routes: ["/shop-by-vehicle", "/store", "/store/filter/:id", "/brand/:name", "/measure-filter", "/cleaner-care", "/air-cleaner", "/about-us", "/our-guarantee", "/why-go-green", "/contact-us", "/careers", "/private-label", "/harley-filter", "/cross-reference-brand", "/cross-reference-filters", "/faqs", "/privacy-policy", "/terms-of-service", "/universal-panel"],

                // Add your known routes here
                renderer: new Renderer({
                    renderAfterTime: 8000, // Wait 8 seconds for React + API calls to render
                    headless: true, // Run browser in headless mode
                    maxConcurrentRoutes: 1, // Process 1 route at a time to avoid API overload
                    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // Use system Chrome on macOS
                    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'], // Fix for puppeteer issues
                }),
            })
        );
    }

    return config;
});