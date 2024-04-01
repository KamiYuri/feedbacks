import { createRouter, createWebHistory } from 'vue-router';

interface queryI {
  UserId: number,
  ServiceName: string,
  RateType: number,
}

const isQuery = (query: any): query is queryI => {
  return query && query.UserID && query.ServiceName && query.RateType;
};


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('@/views/HomeView.vue')
    // },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/FeedbackView.vue'),
      beforeEnter: (to, from, next) => {
        if (!isQuery(to.query)) {
          next({ name: 'not-found' });
        }
        next();
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
});

export default router;
