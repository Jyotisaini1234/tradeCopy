import { OrderRequest } from "../types/type";

const API_BASE_URL_8080 = 'http://ec2-13-202-238-201.ap-south-1.compute.amazonaws.com:8080/api';
const API_BASE_URL_8081 = 'http://ec2-15-206-90-121.ap-south-1.compute.amazonaws.com:8081/api';

export const api = {
  fetchClients: async () => {
    const res = await fetch(`${API_BASE_URL_8080}/client/list`);
    return res.json();
  },
  
  authenticateClient: async (clientCode: string) => {
    const res = await fetch(`${API_BASE_URL_8080}/client/authenticate/${clientCode}`, {
      method: 'POST'
    });
    return res.json();
  },
  
  authenticateAll: async () => {
    const res = await fetch(`${API_BASE_URL_8080}/client/authenticate-all`, {
      method: 'POST'
    });
    return res.json();
  },
  
  deleteClient: async (clientCode: string) => {
    const res = await fetch(`${API_BASE_URL_8080}/client/delete/${clientCode}`, {
      method: 'DELETE'
    });
    return res.json();
  },
  
  addClient: async (data: any) => {
    const res = await fetch(`${API_BASE_URL_8080}/client/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  placeSingleOrder: async (clientCode: string, orderReq: OrderRequest) => {
    const res = await fetch(`${API_BASE_URL_8080}/broker/place-order`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Client-Code': clientCode
      },
      body: JSON.stringify(orderReq)
    });
    return res.json();
  },

  placeMultipleOrder: async (orderReq: OrderRequest) => {
    const res = await fetch(`${API_BASE_URL_8081}/trade/place-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderReq)
    });
    return res.json();
  },

  cancelSingleOrder: async (clientCode: string, uniqueOrderId: string) => {
    const res = await fetch(`${API_BASE_URL_8080}/broker/cancel-order`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Client-Code': clientCode
      },
      body: JSON.stringify({ uniqueorderid: uniqueOrderId })
    });
    return res.json();
  },

  cancelMultipleOrder: async (uniqueOrderId: string) => {
    const res = await fetch(`${API_BASE_URL_8081}/trade/cancel-order-all`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uniqueorderid: uniqueOrderId })
    });
    return res.json();
  }
};