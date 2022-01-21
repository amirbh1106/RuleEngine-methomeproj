const express = require('express');
const factsRoute = require('./facts.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/Facts',
        route: factsRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;