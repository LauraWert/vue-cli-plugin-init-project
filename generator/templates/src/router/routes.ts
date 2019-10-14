/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RouteConfig } from 'vue-router'

export default [
  {
    path: '',
    component: () => import('@/layouts/Base.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
      }],
  },
  {
    path: '*',
    component: () => import('@/layouts/Base.vue'),
    redirect: { name: 'notFound' },
    children: [
      {
        path: 'not-found',
        name: 'notFound',
        component: () => import('@/pages/PageNotFound.vue'),
      }],
  },
] as RouteConfig[]
