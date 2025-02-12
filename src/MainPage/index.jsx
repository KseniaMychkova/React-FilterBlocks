import style from '../MainPage/style.module.scss'
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { Pagination } from '@mantine/core';
import arr from '../storage/index'
// import img from '../MainPage/assets/Search.svg'

function MainPage() {
    const arrOfVacancy = arr.map(el => <div className={style.blockVacancy}>
        <div className={style.info}>
            <h2>{el.title}</h2>
            <div>
                <p className={style.salary}>{el.salary}</p>
                <p className={style.conditions}>{el.conditions}</p>
            </div>
            <p className={style.location}>{el.city}</p>
        </div>
        <div className={style.square}></div>
    </div>)
    return (
        <section className={style.main}>
            <div className={style.jobSearch}>
                <div className={style.input}>
                    <Input size="md" radius="md" placeholder="Введите название вакансии" />
                    <Button variant="filled" size="md" radius="md">Поиск</Button>
                </div>
                <div className={style.blocks}>
                    {arrOfVacancy}
                </div>
            </div>
            <div className={style.pagination}>
            <Pagination total={4} />
            </div>
        </section>
    )
}

export default MainPage