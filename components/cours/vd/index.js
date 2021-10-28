import {useEffect} from 'react'
import {useLazyQuery,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import Style from '../../../styles/Vd.module.css'

const GET_DATA = gql`

query($mod: String!, $ep: String!, $cat: String!){
  Vd(mod: $mod, ep: $ep, cat: $cat) {
    vd
  }
}

`

export default function Vd({mod,ep,cat}){
    const [Vd,{error,data,loading}] = useLazyQuery(GET_DATA)
    const router = useRouter()

    useEffect(()=>{
        if(error){
            router.replace(`/cours/${mod}?ep=${ep}&cat=doju`)
        }
        Vd({ variables: { mod, ep,cat } })
    },[error])

    return <>
    {
        loading 
        ? 
        <div
        style={{background:"#1a1a1a"}}
        className={Style.Vd}></div>   
        :
        data  &&
        <div className={Style.Vd}>
            <iframe src={data.Vd.vd} frameBorder="0"/>
        </div>
    }
    </> 

}