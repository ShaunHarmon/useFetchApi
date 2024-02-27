import { Post } from "../../components/Card/Card"
import { useFetchApi } from "../../hooks/useFetchApi/useFetchApi"

export const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const PostApi = ()=>{
    
    
     return  { GET: ()=>{
            const {data, isLoading, error} = useFetchApi<Post[]>({url: '/posts'})
            return {data, isLoading, error}
        }
       }
}