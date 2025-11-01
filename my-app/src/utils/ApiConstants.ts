export const API_BASE_URL = 'http://ec2-13-202-238-201.ap-south-1.compute.amazonaws.com:8080/api';

export const API_ENDPOINTS = {
    CLIENTS: {
      LIST: '/client/list',
      ADD: '/client/add',
      DELETE: (code: string) => `/client/delete/${code}`,
      AUTHENTICATE: (code: string) => `/client/authenticate/${code}`,
      AUTHENTICATE_ALL: '/client/authenticate-all',
      LOGOUT: (code: string) => `/client/logout/${code}`,
    },
    TRADE: {
      PLACE_ORDER: '/trade/place-order',
      PLACE_SINGLE_ORDER: '/trade/place-single-order',
      CANCEL_ORDER: '/trade/cancel-order-all',
      CANCEL_SINGLE_ORDER: '/trade/cancel-order',
    },
  };