import style from './style.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Star from './assets/ButtonStar.svg'
import ActiveStar from './assets/ButtonActiveStar.svg'



function BlockOfVacancy(props) {

    const [isSelected, setIsSelected] = useState(false)

    function addToSelected() {
        const vacancyInStorage = JSON.parse(localStorage.getItem('vacancy')) || [];
        
        if (vacancyInStorage.length > 0) {
            const filtered = vacancyInStorage.filter(el=> el.title != props.title)
            localStorage.setItem('vacancy', JSON.stringify([...filtered, props]))
        }
        else {localStorage.setItem('vacancy', JSON.stringify([props]))}

        setIsSelected(!isSelected)
    }

    return (
        <>
            <div className={style.blockVacancy}>
                <Link to={`/vacancy/${props.id}`}>
                    <div className={style.info}>
                        <h2>{props.title}</h2>
                        <div>
                            <p className={style.salary}>{props.salary}</p>
                            <p className={style.conditions}>{props.schedule}</p>
                        </div>
                        <p className={style.location}>{props.location}</p>
                    </div>
                </Link>
                <button onClick={addToSelected}><img src={isSelected ? ActiveStar : Star}></img></button>
            </div>
        </>)

}


export default BlockOfVacancy