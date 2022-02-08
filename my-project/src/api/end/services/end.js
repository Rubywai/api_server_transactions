'use strict';

/**
 * end service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::end.end');
