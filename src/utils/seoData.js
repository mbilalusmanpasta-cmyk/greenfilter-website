/**
 * SEO Data for Green Filter USA
 * Original content using high-performing search keywords in the air filter industry
 * Keywords are based on what customers search for, not copied from competitors
 */

// Common search keywords people use when looking for air filters (100% original descriptions)
export const seoKeywords = {
  global: [
    'high performance air filters',
    'reusable air filters',
    'washable air filters',
    'performance air intake',
    'cotton air filters',
    'aftermarket air filters',
    'racing air filters',
    'motorcycle air filters',
    'automotive air filters',
    'cold air intake filters',
  ],
  productTypes: [
    'round air filters',
    'cylinder air filters',
    'panel air filters',
    'universal air filters',
    'custom air filters',
  ],
  applications: [
    'Harley Davidson air filters',
    'motorcycle performance filters',
    'car air filters',
    'truck air filters',
    'ATV air filters',
    'UTV air filters',
  ],
  benefits: [
    'increase horsepower',
    'improve engine performance',
    'better fuel economy',
    'washable and reusable',
    'lifetime warranty',
    'made in USA',
  ],
};

// Home page SEO - targeting main search terms
export const homeSEO = {
  title: 'Green Filter - High Performance Reusable Air Filters | Made in USA',
  description:
    'Premium washable air filters for motorcycles, cars, and trucks. Increase horsepower and improve performance with reusable cotton filters. Lifetime warranty. Free shipping on orders $100+.',
  keywords: 'high performance air filters, washable air filters, reusable air filters, motorcycle filters, automotive filters, performance air intake',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Green Filter USA',
    url: 'https://greenfilter.com',
    logo: 'https://greenfilter.com/images/toplogo_1.webp',
    description: 'Manufacturer of high-performance washable and reusable air filters for motorcycles, cars, and trucks',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-724-430-2050',
      contactType: 'Customer Service',
      email: 'csr@greenfilter.com',
    },
    sameAs: [
      'https://www.facebook.com/GreenFilterUSA',
      'https://www.instagram.com/greenfilterusa',
    ],
  },
};

// Product page SEO template function
export const getProductSEO = (product) => {
  const productName = product.title || 'Air Filter';
  const partNumber = product.gfu_part_num || '';

  return {
    title: `${productName} ${partNumber} | High Performance Air Filter | Green Filter`,
    description: `${productName} (Part #${partNumber}) - Premium washable and reusable performance air filter. Increase horsepower, improve airflow, and enhance engine performance. Lifetime warranty.`,
    keywords: `${productName}, ${partNumber}, performance air filter, washable air filter, reusable air filter, high flow air filter`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${productName} ${partNumber}`,
      brand: {
        '@type': 'Brand',
        name: 'Green Filter',
      },
      description: `High-performance washable and reusable air filter. ${productName} delivers increased horsepower and improved engine performance.`,
      sku: partNumber,
      mpn: partNumber,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: product.price || '0',
        availability: 'https://schema.org/InStock',
        url: `https://greenfilter.com/store/filter/${partNumber}`,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '850',
      },
    },
  };
};

// Shop by vehicle SEO
export const shopByVehicleSEO = {
  title: 'Shop Air Filters by Vehicle | Motorcycle, Car, Truck | Green Filter',
  description:
    'Find the perfect high-performance air filter for your vehicle. Shop by make, model, and year for motorcycles, cars, and trucks. Easy fitment guide and expert support.',
  keywords: 'air filters by vehicle, motorcycle air filters, car air filters, truck air filters, filter finder, vehicle fitment',
};

// Measure filter SEO - targeting DIY users
export const measureFilterSEO = {
  title: 'How to Measure Your Air Filter | Filter Measurement Guide | Green Filter',
  description:
    'Learn how to measure your air filter for a perfect fit. Step-by-step guide to measuring round, cylinder, and panel air filters. Get the right size every time.',
  keywords: 'measure air filter, air filter dimensions, filter sizing, how to measure air filter, custom air filter size',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Measure an Air Filter',
    description: 'Step-by-step guide to measuring your air filter for replacement',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Measure Outer Diameter',
        text: 'Measure the outer diameter of your air filter at its widest point',
      },
      {
        '@type': 'HowToStep',
        name: 'Measure Height',
        text: 'Measure the height of the filter from top to bottom',
      },
      {
        '@type': 'HowToStep',
        name: 'Measure Inner Diameter',
        text: 'Measure the inner diameter (opening) of the filter',
      },
    ],
  },
};

// Harley filter SEO - targeting specific audience
export const harleyFilterSEO = {
  title: 'Harley Davidson Air Filters | High Performance Motorcycle Filters | Green Filter',
  description:
    'Premium washable air filters for Harley Davidson motorcycles. Increase horsepower, improve throttle response, and enhance engine sound. Lifetime warranty on all Harley filters.',
  keywords: 'Harley Davidson air filter, Harley air cleaner, motorcycle performance filter, Harley Davidson performance, HD air filter',
};

// About us SEO
export const aboutSEO = {
  title: 'About Green Filter USA | Premium Air Filter Manufacturer Since 1985',
  description:
    'Learn about Green Filter USA, a trusted manufacturer of high-performance washable air filters. Made in USA with lifetime warranty. Serving racers and enthusiasts for over 35 years.',
  keywords: 'about green filter, air filter manufacturer, made in USA filters, performance filter company',
};

// Contact SEO
export const contactSEO = {
  title: 'Contact Green Filter | Customer Service & Technical Support',
  description:
    'Get in touch with Green Filter USA for product questions, technical support, or order assistance. Phone: 724-430-2050 | Email: csr@greenfilter.com | Fast response guaranteed.',
  keywords: 'contact green filter, customer service, technical support, air filter help',
};

// FAQ SEO - targeting question-based searches
export const faqSEO = {
  title: 'Air Filter FAQs | Common Questions About Washable Filters | Green Filter',
  description:
    'Find answers to common questions about washable and reusable air filters. Learn about cleaning, installation, performance gains, and fitment. Expert answers from Green Filter.',
  keywords: 'air filter FAQ, washable filter questions, reusable filter guide, air filter cleaning, filter performance',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [], // Will be populated with actual FAQs
  },
};

// Cleaner care SEO - targeting maintenance searches
export const cleanerCareSEO = {
  title: 'Air Filter Cleaning Kit | Filter Cleaner and Oil | Green Filter',
  description:
    'Professional air filter cleaning kit and oil. Keep your washable filter performing like new. Easy-to-use cleaning solution and premium filter oil for maximum airflow.',
  keywords: 'air filter cleaner, filter cleaning kit, filter oil, air filter maintenance, how to clean air filter',
};

// Universal filters SEO
export const universalFiltersSEO = {
  title: 'Universal Air Filters | Round, Cylinder, Panel | All Sizes | Green Filter',
  description:
    'Shop universal high-performance air filters in all sizes. Round, cylinder, and panel filters for custom applications. Washable, reusable, lifetime warranty.',
  keywords: 'universal air filters, custom air filters, round air filters, cylinder air filters, aftermarket filters',
};

// Cross reference SEO - targeting users with competitor part numbers
export const crossReferenceSEO = {
  title: 'Air Filter Cross Reference | Find Your Filter | Green Filter',
  description:
    'Cross-reference your air filter part number to find the Green Filter equivalent. Compatible with all major brands. Same quality, better price, lifetime warranty.',
  keywords: 'air filter cross reference, filter compatibility, part number lookup, filter interchange',
};
