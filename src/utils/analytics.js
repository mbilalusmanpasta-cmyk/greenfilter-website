/**
 * Google Tag Manager / Google Analytics 4 Event Tracking Utility
 * Green Filter USA - Conversion Tracking Implementation
 *
 * This utility sends events to GTM dataLayer for GA4 tracking
 */

// Initialize dataLayer if it doesn't exist (only in browser)
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Send a custom event to Google Tag Manager
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  // Only track in browser environment
  if (typeof window === 'undefined' || !window.dataLayer) {
    return;
  }

  try {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('GTM Event:', eventName, eventParams);
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

/**
 * Track page view
 * @param {string} pagePath - Page path
 * @param {string} pageTitle - Page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
  });
};

/**
 * Track product view (GA4 eCommerce)
 * @param {object} product - Product details
 */
export const trackProductView = (product) => {
  trackEvent('view_item', {
    currency: 'USD',
    value: parseFloat(product.price) || 0,
    items: [
      {
        item_id: product.gfu_part_num || product.id,
        item_name: product.title || 'Unknown Product',
        item_brand: 'Green Filter',
        item_category: product.category || 'Air Filters',
        price: parseFloat(product.price) || 0,
        quantity: 1,
      },
    ],
  });
};

/**
 * Track add to cart (GA4 eCommerce)
 * @param {object} product - Product details
 * @param {number} quantity - Quantity added
 */
export const trackAddToCart = (product, quantity = 1) => {
  trackEvent('add_to_cart', {
    currency: 'USD',
    value: parseFloat(product.price) * quantity || 0,
    items: [
      {
        item_id: product.gfu_part_num || product.id,
        item_name: product.title || 'Unknown Product',
        item_brand: 'Green Filter',
        item_category: product.category || 'Air Filters',
        price: parseFloat(product.price) || 0,
        quantity: quantity,
      },
    ],
  });
};

/**
 * Track begin checkout
 * @param {object} cartData - Cart details
 */
export const trackBeginCheckout = (cartData) => {
  trackEvent('begin_checkout', {
    currency: 'USD',
    value: parseFloat(cartData.total) || 0,
    items: cartData.items || [],
  });
};

/**
 * Track form submission
 * @param {string} formName - Name of the form (e.g., 'contact', 'newsletter')
 * @param {object} formData - Form data (optional, don't send PII)
 */
export const trackFormSubmission = (formName, formData = {}) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_location: typeof window !== 'undefined' ? window.location.pathname : '',
    ...formData,
  });
};

/**
 * Track contact form submission (lead generation)
 */
export const trackContactFormSubmit = () => {
  trackEvent('generate_lead', {
    form_type: 'contact',
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

/**
 * Track search
 * @param {string} searchTerm - Search query
 */
export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm,
  });
};

/**
 * Track click on phone number or email (potential leads)
 * @param {string} contactType - 'phone' or 'email'
 */
export const trackContactClick = (contactType) => {
  trackEvent('contact_click', {
    contact_type: contactType,
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

/**
 * Track filter measurement tool usage
 */
export const trackMeasureToolUse = () => {
  trackEvent('measure_tool_use', {
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

/**
 * Track vehicle selector usage
 */
export const trackVehicleSearch = (vehicleData) => {
  trackEvent('vehicle_search', {
    make: vehicleData.make || '',
    model: vehicleData.model || '',
    year: vehicleData.year || '',
  });
};

/**
 * Track cart abandonment (when user has items in cart but leaves)
 */
export const trackCartAbandonment = (cartData) => {
  trackEvent('cart_abandonment', {
    currency: 'USD',
    value: parseFloat(cartData.total) || 0,
    items_count: cartData.itemCount || 0,
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

/**
 * Track when user is about to exit the site
 */
export const trackExitIntent = () => {
  if (typeof window === 'undefined') return;
  trackEvent('exit_intent', {
    page_location: window.location.pathname,
    time_on_page: Math.round((Date.now() - window.pageStartTime) / 1000) || 0,
  });
};

/**
 * Track scroll depth (to measure engagement)
 * @param {number} percentage - Scroll percentage (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    percentage: percentage,
    page_location: typeof window !== 'undefined' ? window.location.pathname : '',
  });
};

/**
 * Initialize exit intent tracking (call this on app mount)
 */
export const initExitTracking = () => {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Track page start time for time-on-page calculation
  window.pageStartTime = Date.now();

  // Track exit intent when mouse leaves viewport towards top
  let exitIntentFired = false;
  document.addEventListener('mouseout', (e) => {
    if (!exitIntentFired && !e.toElement && !e.relatedTarget && e.clientY < 10) {
      exitIntentFired = true;
      trackExitIntent();
    }
  });

  // Track when user switches tabs or minimizes browser
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      trackEvent('tab_hidden', {
        page_location: window.location.pathname,
        time_on_page: Math.round((Date.now() - window.pageStartTime) / 1000) || 0,
      });
    }
  });

  // Track scroll depth milestones
  let scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
  window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );

    Object.keys(scrollMilestones).forEach((milestone) => {
      if (!scrollMilestones[milestone] && scrollPercentage >= parseInt(milestone)) {
        scrollMilestones[milestone] = true;
        trackScrollDepth(parseInt(milestone));
      }
    });
  });
};
