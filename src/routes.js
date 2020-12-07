import React from 'react';

//7Gui
const Home = React.lazy(() => import('./views/7gui/Home'));
const Counter = React.lazy(() => import('./views/7gui/Counter'));
const CRUD = React.lazy(() => import('./views/7gui/CRUD'));
const FlightBooker = React.lazy(() => import('./views/7gui/FlightBooker'));
const Timer = React.lazy(() => import('./views/7gui/Timer'));
const TempConverter = React.lazy(() => import('./views/7gui/TempConverter'));
 

const routes = [
  { path: '/', exact: true, name: 'Counter', component: Counter },
  { path: '/counter', name: 'Counter', component: Counter },
  { path: '/temp_converter', name: 'Temperature Converter', component: TempConverter },
  { path: '/flight_booker', name: 'Flight Booker', component: FlightBooker },
  { path: '/timer', name: 'Timer', component: Timer },
  { path: '/crud', name: 'CRUD', component: CRUD },
];
export default routes;
