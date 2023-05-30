import axios from 'axios'
import { useCallback } from 'react';
export default function useHttp() {
    const reqestSettings = {
        'Content-Type': 'application/json'
    }
    const getRequest = useCallback( async (url) => { 
        const response = await axios
                .get(url, {
                    headers: reqestSettings
                })
                .then(res => res.data)
        return response
    }, []);

    return {
        getRequest,
    }
}
