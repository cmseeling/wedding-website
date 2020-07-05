import Vue from 'vue';
import Router from 'vue-router';
import Accommodations from './views/Accommodations.vue';
import Faqs from './views/Faqs.vue';
import Home from './views/Home.vue';
import Index from './views/Index.vue';
import Rsvp from './views/Rsvp.vue';
import Schedule from './views/Schedule.vue';
import Registry from './views/Registry.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/:guestType',
      name: 'home',
      component: Home
    },
    {
      path: '/:guestType/accommodations',
      name: 'accommodations',
      component: Accommodations
    },
    {
      path: '/:guestType/faqs',
      name: 'faqs',
      component: Faqs
    },
    // {
    //   path: '/:guestType/rsvp',
    //   name: 'rsvp',
    //   component: Rsvp
    // },
    {
      path: '/:guestType/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/:guestType/registry',
      name: 'registry',
      component: Registry
    }
  ],
});

export default router;
