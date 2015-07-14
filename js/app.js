var React = require('react'),
    ProductData = require('./ProductData'),
    CartAPI = require('./utils/CartAPI'),
    FluxCartApp = require('./components/FluxCartApp.react');

// Start up the database in the localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

// Render the FluxCartApp Controll view
React.render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);

