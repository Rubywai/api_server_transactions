module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4f6018adaf4a913bb844f975277602f'),
  },
});
