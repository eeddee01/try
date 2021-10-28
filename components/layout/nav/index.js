import Link from 'next/link'
import Style from '../../../styles/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome ,faBook } from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
  return (
    <>
    
      <nav className={Style.nav}>
        <h1>ed</h1>
        <ul>
          <li><Link href="/"><FontAwesomeIcon size="lg" icon={faHome} /></Link></li>
          <li><Link href="/cours"><FontAwesomeIcon size="lg" icon={faBook} /></Link></li>
        </ul>
      </nav>
    </>
  )
}
  