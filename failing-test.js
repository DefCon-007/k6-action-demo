import { sleep } from "k6";
import http from "k6/http";

export const options = {
  duration: "10s",
  vus: 50,
  thresholds: {
    http_req_failed: ["rate<0.01"],
  },
};

export default function () {
  const headers = {
    "Content-Type": "application/json",
    "X-User-ID": 23423,
    "x-error-record-recommendation": "internal-error",
    "x-error-record-recommendation-percentage": 70,
  };
  const res = http.post(
    "https://k6-quickpizza.grafana.com/api/pizza",
    JSON.stringify({}),
    {
      headers,
    }
  );
  sleep(1);
}
