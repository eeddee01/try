import {useQuery,gql} from '@apollo/client'
import Link from 'next/link'
import Style from '../../../styles/Vd.module.css'

const GET_DATA = gql`

query($mod: String!){
  Cours(mod: $mod) {
    eps {
      title
    }
  }
}
`

export default function VdList({mod,ep}){

    const {loading,data} = useQuery(GET_DATA,{variables:{mod}})

    return data 
    ? 
    <nav 
      dir="rtl" className={Style.VdList}><ul>
        {data.Cours.eps.map((e,i)=><Link key={i} href={`/cours/${mod}?ep=${i}`}><li className={ep == i ? Style.select : undefined }>{e.title}</li></Link>)}
      </ul>
    </nav>
    :
    loading && <nav className={Style.VdList}><ul></ul></nav>
}