import { useEffect, useState } from "react"

export type UseFetchProps = {
    url: string,
    overrideFetchOptions?: RequestInit
}

const useFetchApi = <T>(props: UseFetchProps)=>{

    const {url, overrideFetchOptions} = props
    const abortController = new AbortController()

    const defaultFetchOptions: RequestInit = {
        method: 'GET',
    }

    const [data, setData] = useState<T>({} as T)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | unknown>(undefined)

    useEffect(()=>{
        try {
            setIsLoading(true)
            fetch(url, {...defaultFetchOptions, signal: abortController.signal, ...overrideFetchOptions})
            .then(res => res.json())
            .then(data => setData(data))
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false)
        }
    },[])

    return {data, isLoading, error, abortController}
}

export {useFetchApi}