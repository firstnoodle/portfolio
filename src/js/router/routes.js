import Front from '~/pages/Front/main.vue';
import NotFound from '~/pages/NotFound/main.vue';

export default [
    {
        path: '/',
        component: Front,
        name: 'front',
        meta: {
            title: 'Front page',
        },
    },
    // CATCH ALL
    {
        path: '*',
        component: NotFound,
    },
];
