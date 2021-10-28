import Style from '../../styles/Cours.module.css'
import Link from 'next/link'
export default function List({eplen,module,img}){

    return <>
        <Link href={`/cours/${module}`}><li>
            <div 
            style={{
                background:`url(${img}) no-repeat`,
                backgroundPosition:"center",
                backgroundSize:"cover"
            }}
            className={Style.Listimg}></div>
            <div className={Style.ListContent}>
                <h2>{module}</h2>
                <p>
                    عدد الحلقات : <span>{eplen}</span>
                </p>
            </div>
        </li></Link>
    </>
}