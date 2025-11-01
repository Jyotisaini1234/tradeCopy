export interface Client {
    totp_info: any;
    client_code: string;
    user_id: string;
    password: string;
    api_key: string;
    totp_secret: string;
    two_fa: string;
    is_active: boolean;
    is_master: boolean;
    is_authenticated: boolean;
    last_login?: { $date: string };
    token_expiry?: { $date: string };
    created_at?: { $date: string };
    updated_at?: { $date: string };
  }
  export interface OrderRequest {
    clientcode?: string;
    exchange: string;
    symboltoken: string;
    buyorsell: string;
    ordertype: string;
    price: string;
    quantityinlot: string;
    disclosedquantity?: string;
    triggerprice?: string;
    producttype: string;
    orderduration?: string;
    amoorder?: string;
    selectedClients?: string[];
  }
  
  export interface OrderPayload {
    clientcode: string;
    exchange: string;
    symboltoken: number;
    buyorsell: string;
    ordertype: string;
    price: number;
    quantityinlot: number;
    disclosedquantity?: number;
    triggerprice?: number;
    producttype: string;
    orderduration?: string;
    amoorder?: string;
    selectedClients: string[];
  }
  export interface TradeLog {
    id: string;
    timestamp: string;
    type: string;
    clients: string[];
    symbol: string;
    side: string;
    quantity: string;
    status: 'SUCCESS' | 'PARTIAL' | 'FAILED';
    results: any;
  }

export interface NewClientData {
  clientCode: string;
  userId: string;
  password: string;
  apiKey: string;
  totpSecret: string;
  twoFa: string;
  active: boolean;
  master: boolean;
}
export type TabType = 'clients' | 'orders' | 'logs';
