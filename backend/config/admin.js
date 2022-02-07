module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc3c726b83d964381e045180bc0da5a4'),
  },
});
