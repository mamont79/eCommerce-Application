import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'cuber-dranik-ecommerce',
  credentials: {
    clientId: '1VLHZ29GV4fFoVentBIOs95o',
    clientSecret: 'eHzQ9RMKrgvpq4DmCwpavGm5K9TLypYg',
  },
  scopes: [
    'manage_shopping_lists:cuber-dranik-ecommerce manage_products:cuber-dranik-ecommerce manage_my_business_units:cuber-dranik-ecommerce manage_stores:cuber-dranik-ecommerce manage_my_orders:cuber-dranik-ecommerce manage_my_shopping_lists:cuber-dranik-ecommerce manage_cart_discounts:cuber-dranik-ecommerce manage_orders:cuber-dranik-ecommerce manage_shipping_methods:cuber-dranik-ecommerce manage_product_selections:cuber-dranik-ecommerce manage_standalone_prices:cuber-dranik-ecommerce view_api_clients:cuber-dranik-ecommerce manage_my_quotes:cuber-dranik-ecommerce manage_subscriptions:cuber-dranik-ecommerce create_anonymous_token:cuber-dranik-ecommerce manage_discount_codes:cuber-dranik-ecommerce manage_my_payments:cuber-dranik-ecommerce manage_states:cuber-dranik-ecommerce view_published_products:cuber-dranik-ecommerce manage_payments:cuber-dranik-ecommerce manage_my_quote_requests:cuber-dranik-ecommerce manage_order_edits:cuber-dranik-ecommerce manage_my_profile:cuber-dranik-ecommerce introspect_oauth_tokens:cuber-dranik-ecommerce view_categories:cuber-dranik-ecommerce',
  ],
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
