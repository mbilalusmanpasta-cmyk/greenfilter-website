import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Structured Data (JSON-LD) Component for SEO
 * Adds rich snippets for better search engine visibility
 */
const StructuredData = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
