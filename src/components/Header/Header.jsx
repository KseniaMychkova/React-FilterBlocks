import style from './style.module.scss'
import { Link } from 'react-router-dom'
import Union from './assets/Union.svg'

function Header () {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <img src={Union} alt=''></img>
                <p>Jobored</p>
            </div>
            <div className={style.navigation}>
                <Link to='/'>Поиск Вакансий</Link>
                <Link to='/selected'>Избранное</Link>
            </div>
        </div>
    )
}

export default Header