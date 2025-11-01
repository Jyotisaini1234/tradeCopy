
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../../services/api.service';
import { Client, NewClientData } from '../../../types/type';


interface ClientsState {
  data: Record<string, Client>;
  loading: boolean;
  error: string | null;
}

const initialState: ClientsState = {
  data: {},
  loading: false,
  error: null
};

export const fetchClients = createAsyncThunk('clients/fetch', apiService.fetchClients);
export const authenticateClient = createAsyncThunk('clients/authenticate', 
  async (clientCode: string) => apiService.authenticateClient(clientCode)
);
export const authenticateAllClients = createAsyncThunk('clients/authenticateAll', apiService.authenticateAll);
export const logoutClient = createAsyncThunk('clients/logout', 
  async (clientCode: string) => apiService.logoutClient(clientCode)
);
export const addClient = createAsyncThunk('clients/add', 
  async (data: NewClientData) => apiService.addClient(data)
);
export const deleteClient = createAsyncThunk('clients/delete', 
  async (clientCode: string) => apiService.deleteClient(clientCode)
);

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.status === 'SUCCESS') {
          state.data = action.payload.clients;
        }
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch clients';
      });
  }
});

export const { clearError } = clientsSlice.actions;
export default clientsSlice.reducer;

