'use client'
export const setLocalStorage = (key: string, value: string) => {
    if(!!localStorage.getItem(key)) localStorage.removeItem(key)
    localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}