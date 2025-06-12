import { useParams } from "react-router-dom"
import arrayOfVacancy from '../storage/array'
import style from './style.module.scss'
import BlockOfVacancy from "../components/BlockOfVacancy/BlockOfVacancy";
import { List } from '@mantine/core';


function Vacancy() {

    const { id } = useParams();
    const filter = arrayOfVacancy.filter(el => el.id == id)

    return <div className={style.detailVacancy}>
        <BlockOfVacancy id={filter[0].id} title={filter[0].title} salary={filter[0].salary} schedule={filter[0].schedule} location={filter[0].location} />
        <div className={style.detail}>
            <div className={style.detailBlocks}>
                <h2>Обязанности:</h2>
                {filter[0].responsibilities.map(el => <List><List.Item>{el}</List.Item></List>)}
            </div>
            <div>
                <h2>Требования:</h2>
                {filter[0].requirements.map(el => <List><List.Item>{el}</List.Item></List>)}
            </div>
            <div>
                <h2>Условия:</h2>
                {filter[0].conditions.map(el => <List><List.Item>{el}</List.Item></List>)}
            </div>

        </div>
    </div>

}
export default Vacancy