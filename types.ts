
export interface SystemMetric {
  label: string;
  value: number | string;
  unit: string;
  status: 'optimal' | 'warning' | 'critical';
}

export interface APILog {
  id: string;
  timestamp: string;
  service: string;
  action: string;
  status: 'SUCCESS' | 'ERROR' | 'PENDING';
  details: string;
}

export interface NodeStatus {
  name: string;
  load: number;
  uptime: string;
  encryption: string;
}

export interface BrowserStats {
  cores: number;
  memory?: number;
  platform: string;
  language: string;
  connection?: string;
}
