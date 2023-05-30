import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Api {

  /**
   * Request Object
   */
  static SSORequest: AxiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      "Content-Type": "application/json"
    },
    timeout: 5000,
    withCredentials: true
  });

  static Request: AxiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      "Content-Type": "application/json"
    },
    timeout: 5000,
    withCredentials: true
  });

  static FileRequest: AxiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    responseType: "blob",
    headers: {
      "Content-Type": "application/octet-stream"
    },
    timeout: 5000,
    withCredentials: true
  });

  static FilePostRequest: AxiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    timeout: 5000,
    withCredentials: true
  });

  /**
   *  HttpMethod 
   */
  public static get<T>(request: AxiosInstance, url: string, config?: AxiosRequestConfig): Promise<T> {
    return request.get(url, config);
  }

  public static post<T>(request: AxiosInstance, url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return request.post(url, data, config);
  }

  public static put<T>(request: AxiosInstance, url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return request.put(url, data, config);
  }

  public static delete<T>(request: AxiosInstance, url: string, config?: AxiosRequestConfig): Promise<T> {
    return request.delete(url, config);
  }

}
