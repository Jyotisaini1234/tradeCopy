import { Badge } from 'lucide-react';
import React from 'react';
import { TradeLog } from '../../../types/type';

interface LogsTabProps {
  logs: TradeLog[];
}

export const LogsTab: React.FC<LogsTabProps> = ({ logs }) => (
  <div>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Trade Logs</h2>
    
    {logs.length === 0 ? (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b', background: '#1e293b', borderRadius: '0.75rem',border: '1px solid #334155'}}>
        <p style={{ fontSize: '1.125rem' }}>No trade logs yet</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Place an order to see logs here</p>
      </div>
    ) : (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {logs.map(log => (
          <div key={log.id} style={{background: '#1e293b', border: '1px solid #334155', borderRadius: '0.75rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}> {log.type === 'ORDER' ? 'Order Placed' : '❌ Order Cancelled'}</div>
                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{new Date(log.timestamp).toLocaleString()}  </div>
              </div>
              <Badge color={ log.status === 'SUCCESS' ? '#10b981' :  log.status === 'PARTIAL' ? '#f59e0b' : '#ef4444' }>{log.status}
              </Badge>
            </div>

            <div style={{  marginBottom: '1rem',  color: '#94a3b8',  display: 'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem'}}>
              <div><strong>Symbol:</strong> {log.symbol}</div>
              <div><strong>Side:</strong> {log.side}</div>
              <div><strong>Quantity:</strong> {log.quantity}</div>
              <div><strong>Clients:</strong> {log.clients.length}</div>
            </div>

            <details style={{ cursor: 'pointer' }}>
              <summary style={{  color: '#3b82f6', fontWeight: '600',padding: '0.5rem', background: '#0f172a',borderRadius: '0.375rem'}}> View Results ({Object.keys(log.results).length} clients) </summary>
              <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                {Object.entries(log.results).map(([client, result]: [string, any]) => (
                  <div  key={client} style={{ display: 'flex',  justifyContent: 'space-between', padding: '0.75rem',   background: '#0f172a',  borderRadius: '0.375rem', border: `1px solid ${result.status === 'success' ? '#10b981' : '#ef4444'}` }} >
                    <span style={{ fontWeight: '600' }}>{client}</span>
                    <span style={{  color: result.status === 'success' ? '#10b981' : '#ef4444', fontFamily: 'monospace' }}>
                      {result.status === 'success'  ? `✓ Order #${result.orderid}`  : `✗ ${result.message || 'Failed'}` }
                    </span>
                  </div>
                ))}
              </div>
            </details>
          </div>
        ))}
      </div>
    )}
  </div>
);