const express = require('express');
const factsRoute = require('./facts.route');
const rulesRoute = require('./rules.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/Facts',
        route: factsRoute,
    },
    {
        path: '/Rules',
        route: rulesRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;