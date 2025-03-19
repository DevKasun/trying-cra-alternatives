import { API_BASE_URL, API_ENDPOINTS } from "./config";

interface ApiResponse<T> {
  data: T;
  error?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const res = await fetch(`${this.baseUrl}${endpoint}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "An error occurred");
      }

      return { data };
    } catch (error) {
      return {
        data: null as T,
        error: error instanceof Error ? error.message : "An error occurred",
      };
    }
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
