import {useQuery,gql} from '@apollo/client'
import Link from 'next/link'
import Style from '../../../styles/Vd.module.css'
const GET_DATA = gql`

query($mod: String!, $ep: String!, $cat: String!){

    Vd(mod: $mod, ep: $ep, cat: $cat) {
        teacher
        type
    }
}

`

export default function VdInfo({mod,ep,cat,title,vds,pdf}){

    const {loading,error,data} = useQuery(GET_DATA,{
        variables:{mod,ep,cat}
    })

    const pdfHundl = () =>{
        window.location = pdf
    }

    return <>
    {data ?
        <div dir="rtl" className={Style.VdInfo}>
            <div className={Style.Contnt}>
                <h1>{title}</h1>
                <ul>
                    <li>
                    الاستاذ : <span>{data.Vd.teacher}</span>
                    </li>
                    <li>
                    الحلقة : <span>{parseInt(ep) + 1}</span>
                    </li>
                </ul>
                <div className={Style.pdf}>
                <button
                dir="rtl"
                onClick={pdfHundl}
                >تحميل بصيغة pdf</button>
                </div>
            </div>
            <ul>
                <p>اختيارات :</p>
                {
                    vds.map((e,i)=><Link key={i} href={`/cours/${mod}?ep=${ep}&cat=${e.type}`}><li className={cat == e.type ? Style.Mycat : undefined}>{e.type}</li></Link>)
                }
            </ul>
        </div>
        :
        loading 
        ?
        <div dir="rtl"
        style={{
            height:"40em",
            background:"#1a1a1a"
        }} className={Style.VdInfo}>

        </div>
        :
        error && <h1>error</h1>
    }
    </>
}