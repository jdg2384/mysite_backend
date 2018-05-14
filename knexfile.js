'use strict';
module.exports = {
 development: {
   client: 'pg',
   connection: 'postgres://localhost/personal',
 },
 test: {
   client: 'pg',
   connection: 'postgres://localhost/personal',
 },

 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL
 }
};
