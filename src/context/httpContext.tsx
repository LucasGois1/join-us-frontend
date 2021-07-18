import React, { useState, createContext } from "react";
import axios from "axios";

interface HttpMethods {
  baseUrl: string;
  get(route: string, token?: string): Promise<any>;
  post(route: string, data: any, token?: string): Promise<any>;
  put(route: string, data: any, token?: string): Promise<any>;
  delete(route: string, data: any, token?: string): Promise<any>;
}
export const HttpContext = createContext<HttpMethods>({} as HttpMethods);
export const RequestStorage: React.FC = ({ children }) => {
  class Methods implements HttpMethods {
    baseUrl: string = "http://localhost:5000/api";

    async get(route: string, token?: string): Promise<any> {
      return await axios.get(`${this.baseUrl}${route}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
    }
    async post(route: string, data: any, token?: string): Promise<any> {
      return await axios.post(`${this.baseUrl}${route}`, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
    }
    async put(route: string, data: any, token?: string): Promise<any> {
      return await axios.post(`${this.baseUrl}${route}`, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
    }
    async delete(route: string, data: any, token?: string): Promise<any> {
      return await axios.post(`${this.baseUrl}${route}`, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
    }
  }

  return (
    <HttpContext.Provider value={new Methods()}>
      {children}
    </HttpContext.Provider>
  );
};
