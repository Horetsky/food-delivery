import axios from 'axios'
import { useCallback } from 'react';

const SERVER = process.env.REACT_APP_SERVER_URL
export default function useHttp() {
    const reqestSettings = {
        'Content-Type': 'application/json'
    }
    const getRequest = useCallback( async (url) => { 
        const response = await axios
                .get(`${SERVER}${url}`, {
                    headers: reqestSettings
                })
                .then(res => res.data)
        return response
    }, []);

    return {
        getRequest,
    }
}
