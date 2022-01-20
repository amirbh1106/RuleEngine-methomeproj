const express = require('express');
const todosRoute = require('./todos.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/todos',
        route: todosRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;