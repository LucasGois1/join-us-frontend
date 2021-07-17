import React, { useState, createContext } from 'react'
import axios from 'axios'

export const httpContext = createContext({})

export const RequestStorage = ({ children }) => {
    
    const baseUrl = 'http://localhost:5000/api'

    const methods = {
        get: async (route:string, token?: string) => {
            return await axios.get(`${baseUrl}${route}`, 
               {
                headers: {
                    'Authorization': token? `Bearer ${token}` : null,
                   }
               })
        },
        post: async (route: string, data: any, token?: string) => {
            return await axios.post(`${baseUrl}${route}`, {
                data: data,
               }, 
               {
                headers: {
                    'Authorization': token? `Bearer ${token}` : null,
                   }
               })
        },
        put: async (route: string, data: any, token?: string) => {
            return await axios.post(`${baseUrl}${route}`, {
                data: data,
               }, 
               {
                headers: {
                    'Authorization': token? `Bearer ${token}` : null,
                   }
               })
        },
        delete: async (route: string, data: any, token?: string) => {
            return await axios.post(`${baseUrl}${route}`, {
                data: data,
               }, 
               {
                headers: {
                    'Authorization': token? `Bearer ${token}` : null,
                   }
               }
            )
        }
    }
    
    return <httpContext.Provider value={{ }}>{children}</httpContext.Provider>
}
