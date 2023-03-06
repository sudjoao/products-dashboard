import axios, { AxiosError, AxiosInstance } from 'axios';
import { ErrorFromRes, ServerError } from './error';

const headers = {
  'Content-Type': 'application/json'
};

export interface HttpsAdapterType {
  get: <T>(
    endpoint: string,
    config?: any,
    params?: Record<string, any>
  ) => Promise<T | undefined>;
  post: <T>(
    endpoint: string,
    data: Record<string, any>,
    config?: any
  ) => Promise<T | undefined>;
  patch: <T>(
    endpoint: string,
    data: Record<string, any>,
    params?: Record<string, any>,
    config?: any
  ) => Promise<T | undefined>;
  put: <T>(
    endpoint: string,
    data: Record<string, any>,
    params?: Record<string, any>,
    config?: any
  ) => Promise<T | undefined>;
  delete: <T>(
    endpoint: string,
    data: Record<string, any>,
    config?: any
  ) => Promise<T | undefined>;
}

export class HttpsAdapter implements HttpsAdapterType {
  private api: AxiosInstance;
  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers
    });
  }

  get = async <T>(
    endpoint: string,
    config?: any,
    params?: Record<string, any>
  ) => {
    try {
      const response = await this.api.get(endpoint, { ...config, params });
      return response.data as T;
    } catch (error) {
      if (error instanceof AxiosError) throw this.handleAxiosError(error);
      throw new ServerError();
    }
  };

  post = async <T>(
    endpoint: string,
    data: Record<string, any>,
    config?: any
  ) => {
    try {
      const response = await this.api.post(endpoint, data, { ...config });
      return response.data as T;
    } catch (error) {
      if (error instanceof AxiosError) throw this.handleAxiosError(error);
      throw new ServerError();
    }
  };

  patch = async <T>(
    endpoint: string,
    data: Record<string, any>,
    config?: any
  ) => {
    try {
      const response = await this.api.patch(endpoint, data, { ...config });
      return response.data as T;
    } catch (error) {
      if (error instanceof AxiosError) throw this.handleAxiosError(error);
      throw new ServerError();
    }
  };

  put = async <T>(
    endpoint: string,
    data: Record<string, any>,
    config?: any
  ) => {
    try {
      const response = await this.api.put(endpoint, data, { ...config });
      return response.data as T;
    } catch (error) {
      if (error instanceof AxiosError) throw this.handleAxiosError(error);
      throw new ServerError();
    }
  };

  delete = async <T>(endpoint: string, config?: any) => {
    try {
      const response = await this.api.delete(endpoint, { ...config });
      return response.data as T;
    } catch (error) {
      if (error instanceof AxiosError) throw this.handleAxiosError(error);
      throw new ServerError();
    }
  };
  private handleAxiosError(error: AxiosError<any, any>) {
    const { status, message } = error;
    const errorFromRes = ErrorFromRes(status, message);
    if (errorFromRes) return errorFromRes;
    return new ServerError(message);
  }
}
