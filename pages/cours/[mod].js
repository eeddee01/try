import {useEffect} from 'react'
import { useRouter } from 'next/router'
import {useLazyQuery,gql} from '@apollo/client'
import Style from '../../styles/Vd.module.css'
import Vd from '../../components/cours/vd'
import VdInfo from '../../components/cours/vdinfo'
import VdList from '../../components/cours/vdList'
const GET_DATA = gql`

query($mod: String!, $ep: String!){
    Cours(mod: $mod) {
        pdf
    }
    Ep(mod: $mod, ep: $ep) {
        title
        vds {
            type
        }
    }
}

`

export default function Cours(){
 
    const router = useRouter()
    const {mod,ep,cat,...huh} = router.query;
    const [Ep, { loading, error, data }] = useLazyQuery(GET_DATA)
    useEffect(() => {
        if(mod){
            console.log('caaattts')
            if(ep && cat){
                Ep({ variables: { mod, ep } })
            }else{
                if(ep){
                    router.replace(`/cours/${mod}?ep=${ep}&cat=doju`)
                }else if(cat){
                    router.replace(`/cours/${mod}?ep=0&cat=${cat}`)
                }else{
                    router.replace(`/cours/${mod}?ep=0&cat=doju`)
                }
            }
        }
        if(error){
            router.replace('/')
        }

    }, [mod,ep,cat])
    return <>
        <section>
        {   data 
            ?
            <>
            <section className={Style.Sec}>
                <div className={Style.MyVd}>
                    <Vd cat={cat} ep={ep} mod={mod} />
                    <VdList  mod={mod} ep={ep} />
                </div>
                <VdInfo pdf={data.Cours.pdf} mod={mod} ep={ep} cat={cat} title={data.Ep.title} vds={data.Ep.vds}/>
            </section>
            </>
            :
            error && <h1 style={{color:"#eee"}}>not found</h1>
        }
        </section>
    </>
    
}