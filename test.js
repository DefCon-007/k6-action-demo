import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  duration: '1m',
  vus: 50,
};

export default function () {
  const res = http.get('https://k6-quickpizza.grafana.com/');
  sleep(1);
}
