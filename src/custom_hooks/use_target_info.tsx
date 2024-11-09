import { useEffect, useState } from "react"

type Publich = {
    userId: string;
    id: string;
    title: string;
    body: string;
  };

export const useTargetInfo = () =>{
    const [data, setData] = useState<Publich[]>([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data_) => data_.json())
        .then((data_json) => setData(data_json))
    },[])

    return data
}
