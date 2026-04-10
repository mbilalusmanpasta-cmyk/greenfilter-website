/**
 * SEO Data for Green Filter USA
 * Original content using high-performing search keywords in the air filter industry
 * Keywords are based on what customers search for, not copied from competitors
 */

import img0 from "../assets/gallery/img0.webp";

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
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Air Filter Cross Reference Tool',
    description: 'Cross-reference tool to find Green Filter equivalents for other brand part numbers',
  },
};

// ========================================
// UNIVERSAL PRODUCT CATEGORY SEO
// (High-intent buyers - critical for sales)
// ========================================

// Universal Panel SEO - Direct OEM replacement filters
export const universalPanelSEO = {
  title: 'Universal Panel Air Filters | Replacement Engine Filters | Green Filter',
  description:
    'Shop washable universal panel air filters for cars and trucks. Direct replacement for OEM filters. Increase horsepower, improve airflow. Lifetime warranty. Made in USA.',
  keywords: 'universal panel air filter, replacement panel filter, washable panel filter, OEM air filter replacement, flat air filter, reusable panel filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Universal Panel Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable and reusable panel air filters for direct OEM replacement. Increase horsepower and improve airflow.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '39.99',
      highPrice: '89.99',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/universal-panel',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Universal Round SEO - Clamp-on performance filters
export const universalRoundSEO = {
  title: 'Universal Round Air Filters | Clamp-On Performance Filters | Green Filter',
  description:
    'Shop universal round air filters in all sizes. Clamp-on design for custom intakes. Washable, reusable. Increase horsepower and throttle response. Lifetime warranty.',
  keywords: 'universal round air filter, clamp on air filter, round performance filter, custom air intake filter, cone air filter, round washable filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Universal Round Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance universal round air filters with clamp-on design. Perfect for custom cold air intakes.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '49.99',
      highPrice: '129.99',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/universal-round',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Universal Cylinder SEO - Cone and cylinder filters
export const universalCylinderSEO = {
  title: 'Universal Cylinder & Cone Air Filters | Custom Intake Filters | Green Filter',
  description:
    'Premium cone and cylinder air filters for custom cold air intakes. All sizes available. Increase airflow, horsepower, and performance. Washable and reusable.',
  keywords: 'universal cylinder filter, cone air filter, custom intake filter, cold air intake filter, performance cone filter, cylinder washable filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Universal Cylinder & Cone Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance cone and cylinder air filters for custom cold air intake systems. Maximum airflow and horsepower gains.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '54.99',
      highPrice: '149.99',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/universal-cylinder',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Air Cleaner Assembly SEO - Complete filter systems
export const airCleanerSEO = {
  title: 'Air Cleaner Assemblies | Complete Filter Systems | Green Filter',
  description:
    'Complete air cleaner assemblies with high-performance washable filters. Direct bolt-on installation. Boost horsepower and engine sound. Made in USA.',
  keywords: 'air cleaner assembly, complete air filter system, performance air cleaner, bolt-on air cleaner, chrome air cleaner, washable air cleaner',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Air Cleaner Assembly',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'Complete air cleaner assembly systems with washable high-performance filters. Bolt-on installation for maximum convenience.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '129.99',
      highPrice: '399.99',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/air-cleaner',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// ========================================
// VEHICLE BRAND-SPECIFIC SEO
// (Original content - NO copying from competitors)
// ========================================

// Ford Mustang SEO
export const mustangSEO = {
  title: 'Ford Mustang Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Premium washable air filters for Ford Mustang. Increase horsepower and throttle response. Direct OEM replacement and custom intake filters. Lifetime warranty. Made in USA.',
  keywords: 'Ford Mustang air filter, Mustang performance filter, Mustang engine filter, Mustang cold air intake, washable Mustang filter, reusable Mustang filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Ford Mustang Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters designed specifically for Ford Mustang. Increase horsepower and improve throttle response.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/mustang',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Chevrolet Corvette SEO
export const corvetteSEO = {
  title: 'Chevrolet Corvette Air Filters | Performance Engine Filters | Green Filter',
  description:
    'High-performance air filters for Chevrolet Corvette. Maximize horsepower and airflow for your Corvette. Washable, reusable. Lifetime warranty. Made in USA.',
  keywords: 'Chevrolet Corvette air filter, Corvette performance filter, Corvette engine filter, Corvette intake filter, washable Corvette filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Chevrolet Corvette Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'Premium washable air filters engineered for Chevrolet Corvette performance. Maximum airflow and horsepower gains.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/corvette',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Toyota SEO
export const toyotaSEO = {
  title: 'Toyota Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Washable air filters for all Toyota models - Camry, Tundra, Tacoma, Corolla, RAV4, 4Runner. Increase horsepower and fuel economy. Lifetime warranty. Made in USA.',
  keywords: 'Toyota air filter, Toyota performance filter, Toyota Camry filter, Toyota Tundra filter, Toyota Tacoma filter, washable Toyota filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Toyota Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Toyota vehicles. Better fuel economy and increased horsepower.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/toyota',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Honda SEO
export const hondaSEO = {
  title: 'Honda Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Premium air filters for Honda Civic, Accord, CR-V, Pilot, and more. Washable and reusable. Increase horsepower and improve fuel economy. Lifetime warranty. Made in USA.',
  keywords: 'Honda air filter, Honda performance filter, Honda Civic filter, Honda Accord filter, Honda CR-V filter, washable Honda filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Honda Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Honda vehicles. Increase horsepower and improve fuel efficiency.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/honda',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// BMW SEO
export const bmwSEO = {
  title: 'BMW Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Performance air filters for BMW M-Series, 3-Series, 5-Series, X5, and more. Washable and reusable. Maximize horsepower and engine response. Lifetime warranty. Made in USA.',
  keywords: 'BMW air filter, BMW performance filter, BMW M-Series filter, BMW engine filter, washable BMW filter, BMW intake filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'BMW Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters engineered for BMW vehicles. Enhanced airflow and power for M-Series and more.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/bmw',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Subaru SEO
export const subaruSEO = {
  title: 'Subaru Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'High-performance air filters for Subaru WRX, STI, Forester, Outback, Impreza, and more. Washable and reusable. Increase horsepower and boost performance. Lifetime warranty. Made in USA.',
  keywords: 'Subaru air filter, Subaru WRX filter, Subaru STI filter, Subaru Forester filter, Subaru Outback filter, washable Subaru filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Subaru Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'Performance washable air filters for Subaru WRX, STI, and all Subaru models. Engineered for turbocharged performance.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/subaru',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Jeep SEO
export const jeepSEO = {
  title: 'Jeep Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Premium air filters for Jeep Wrangler, Cherokee, Grand Cherokee, Gladiator, and more. Washable and reusable. Maximize horsepower and off-road performance. Lifetime warranty. Made in USA.',
  keywords: 'Jeep air filter, Jeep Wrangler filter, Jeep Cherokee filter, Jeep Grand Cherokee filter, washable Jeep filter, Jeep performance filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Jeep Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Jeep models. Built tough for on-road and off-road performance.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/jeep',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Chevrolet/Chevy SEO
export const chevroletSEO = {
  title: 'Chevrolet Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Performance air filters for Chevy Silverado, Camaro, Tahoe, Suburban, and more. Washable and reusable. Increase horsepower and towing power. Lifetime warranty. Made in USA.',
  keywords: 'Chevrolet air filter, Chevy air filter, Chevy Silverado filter, Chevy Camaro filter, Chevy Tahoe filter, washable Chevy filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Chevrolet Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Chevrolet vehicles. Enhanced power for trucks, SUVs, and performance cars.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/chevrolet',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Dodge SEO
export const dodgeSEO = {
  title: 'Dodge Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'High-performance air filters for Dodge Challenger, Charger, Ram, Durango, and more. Washable and reusable. Maximize HEMI power and performance. Lifetime warranty. Made in USA.',
  keywords: 'Dodge air filter, Dodge Challenger filter, Dodge Charger filter, Dodge Ram filter, Dodge HEMI filter, washable Dodge filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Dodge Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'Performance washable air filters engineered for Dodge HEMI engines. Maximum airflow for Challenger, Charger, and Ram.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/dodge',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Ford SEO (general)
export const fordSEO = {
  title: 'Ford Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Premium air filters for all Ford vehicles - F-150, F-250, Explorer, Escape, Edge, and more. Washable and reusable. Increase horsepower and towing capacity. Lifetime warranty. Made in USA.',
  keywords: 'Ford air filter, Ford F-150 filter, Ford F-250 filter, Ford truck filter, Ford Explorer filter, washable Ford filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Ford Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Ford trucks, SUVs, and cars. Enhanced towing power and fuel economy.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/ford',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Nissan SEO
export const nissanSEO = {
  title: 'Nissan Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Performance air filters for Nissan 370Z, 350Z, GT-R, Altima, Maxima, Titan, and more. Washable and reusable. Increase horsepower and performance. Lifetime warranty. Made in USA.',
  keywords: 'Nissan air filter, Nissan 370Z filter, Nissan GT-R filter, Nissan Altima filter, Nissan Titan filter, washable Nissan filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Nissan Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Nissan vehicles. Engineered for GT-R, 370Z, and all Nissan models.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/nissan',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Mazda SEO
export const mazdaSEO = {
  title: 'Mazda Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'High-performance air filters for Mazda3, Mazda6, CX-5, CX-9, Miata, and more. Washable and reusable. Increase horsepower and throttle response. Lifetime warranty. Made in USA.',
  keywords: 'Mazda air filter, Mazda3 filter, Mazda6 filter, Mazda CX-5 filter, Mazda Miata filter, washable Mazda filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mazda Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'Performance washable air filters for all Mazda vehicles. Enhanced airflow for SKYACTIV engines and Miata performance.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/mazda',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Volkswagen/VW SEO
export const volkswagenSEO = {
  title: 'Volkswagen Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Premium air filters for VW Golf, GTI, Jetta, Passat, Tiguan, and more. Washable and reusable. Increase horsepower and turbo performance. Lifetime warranty. Made in USA.',
  keywords: 'Volkswagen air filter, VW air filter, VW GTI filter, VW Golf filter, VW Jetta filter, washable VW filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Volkswagen Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Volkswagen vehicles. Optimized for turbocharged VW engines.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/volkswagen',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Audi SEO
export const audiSEO = {
  title: 'Audi Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Performance air filters for Audi A4, A6, Q5, Q7, RS, S-Line, and more. Washable and reusable. Maximize horsepower and quattro performance. Lifetime warranty. Made in USA.',
  keywords: 'Audi air filter, Audi A4 filter, Audi Q5 filter, Audi RS filter, Audi S-Line filter, washable Audi filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Audi Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters engineered for Audi vehicles. Enhanced power for turbocharged and supercharged engines.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/audi',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Mercedes-Benz SEO
export const mercedesSEO = {
  title: 'Mercedes-Benz Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Premium air filters for Mercedes-Benz C-Class, E-Class, S-Class, AMG, GLE, and more. Washable and reusable. Enhance performance and luxury. Lifetime warranty. Made in USA.',
  keywords: 'Mercedes-Benz air filter, Mercedes air filter, Mercedes AMG filter, Mercedes C-Class filter, Mercedes E-Class filter, washable Mercedes filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mercedes-Benz Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Mercedes-Benz vehicles. Engineered for AMG performance and luxury sedans.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/mercedes',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Ram Trucks SEO
export const ramSEO = {
  title: 'Ram Truck Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Heavy-duty air filters for Ram 1500, 2500, 3500, Power Wagon, and more. Washable and reusable. Maximize towing power and HEMI performance. Lifetime warranty. Made in USA.',
  keywords: 'Ram truck air filter, Ram 1500 filter, Ram 2500 filter, Ram 3500 filter, Ram HEMI filter, washable Ram filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Ram Truck Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'Heavy-duty washable air filters engineered for Ram trucks. Maximum towing power and HEMI engine performance.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/ram',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// GMC SEO
export const gmcSEO = {
  title: 'GMC Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Performance air filters for GMC Sierra, Canyon, Yukon, Acadia, and more. Washable and reusable. Increase towing capacity and fuel economy. Lifetime warranty. Made in USA.',
  keywords: 'GMC air filter, GMC Sierra filter, GMC Canyon filter, GMC Yukon filter, GMC truck filter, washable GMC filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'GMC Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all GMC trucks and SUVs. Enhanced towing power and professional-grade performance.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/gmc',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Cadillac SEO
export const cadillacSEO = {
  title: 'Cadillac Air Filters | High Performance Engine Filters | Green Filter',
  description:
    'Premium air filters for Cadillac Escalade, CTS, ATS, XT5, V-Series, and more. Washable and reusable. Enhance performance and luxury. Lifetime warranty. Made in USA.',
  keywords: 'Cadillac air filter, Cadillac Escalade filter, Cadillac CTS filter, Cadillac V-Series filter, washable Cadillac filter',
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Cadillac Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'High-performance washable air filters for all Cadillac vehicles. Engineered for V-Series performance and luxury SUVs.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/brand/cadillac',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};

// Enhanced Shop By Vehicle SEO with structured data
export const enhancedShopByVehicleSEO = {
  ...shopByVehicleSEO,
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Shop Air Filters by Vehicle',
    description: 'Find the perfect air filter for your specific vehicle make, model, and year',
  },
};

// Enhanced Harley Filter SEO with structured data
export const enhancedHarleyFilterSEO = {
  ...harleyFilterSEO,
  ogImage: img0,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Harley Davidson Performance Air Filter',
    brand: {
      '@type': 'Brand',
      name: 'Green Filter',
    },
    description: 'Premium washable air filters engineered specifically for Harley Davidson motorcycles',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://greenfilter.com/harley-filter',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
    },
  },
};
