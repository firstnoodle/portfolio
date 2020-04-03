import CV from '~/pages/CV/main.vue';
import Front from '~/pages/Front/main.vue';
import NotFound from '~/pages/NotFound/main.vue';
import Projects from '~/pages/Projects/main.vue';
import Stack from '~/pages/Stack/main.vue';

export default [
    {
        path: '/',
        component: Front,
        name: 'front',
        meta: {
            title: 'Front page',
        },
    },
    {
        path: '/cv',
        component: CV,
        name: 'cv',
        meta: {
            title: 'curriculum vitae',
        },
    },
    {
        path: '/stack',
        component: Stack,
        name: 'stack',
        meta: {
            title: 'my stack',
        },
    },
    {
        path: '/projects',
        component: Projects,
        name: 'projects',
        meta: {
            title: 'projects',
        },
    },
    // CATCH ALL
    {
        path: '*',
        component: NotFound,
    },
];
