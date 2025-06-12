import { useEffect, useState } from "react"
import style from './style.module.scss'
import Header from "../components/Header/Header"
import BlockOfVacancy from "../components/BlockOfVacancy/BlockOfVacancy"

function SelectedPage() {
    const [selectedVacancy, setSelectedVacancy] = useState([{}])

    useEffect(() => {
        const dataVacancy = JSON.parse(localStorage.getItem('vacancy')) || []
        setSelectedVacancy(dataVacancy)
    }, [])

    return (
        <>
            <Header />
            <div className={style.selectedPage}>
                {selectedVacancy.map((el, index) => <BlockOfVacancy id={el.id} key={index} title={el.title} salary={el.salary} schedule={el.schedule} location={el.location} />)}
            </div>
        </>
    )
}

export default SelectedPage