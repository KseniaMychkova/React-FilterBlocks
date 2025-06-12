import style from '../MainPage/style.module.scss'
import Header from '../components/Header/Header';
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { Pagination } from '@mantine/core';
import array from '../storage/array'
import BlockOfVacancy from '../components/BlockOfVacancy/BlockOfVacancy';
import { useState } from 'react';

function MainPage() {
    const [inpValue, setInpValue] = useState('')
    const [arr, setArr] = useState(array)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const search = () => {
        setArr(array.filter(el => el.title.toLowerCase().includes(inpValue.toLowerCase())))
        setCurrentPage(1)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

    return (<>
        <Header />
        <section className={style.main}>
            <div className={style.jobSearch}>
                <div className={style.input}>
                    <Input onChange={e => setInpValue(e.target.value)} size="md" radius="md" placeholder="Введите название вакансии" />
                    <Button onClick={search} variant="filled" size="md" radius="md">Поиск</Button>
                </div>
                <div className={style.blocks}>
                    {currentItems.map((el, index) => <BlockOfVacancy id={el.id} key={index} title={el.title} salary={el.salary} schedule={el.schedule} location={el.location} />)}
                </div>
            </div>
            <div className={style.pagination}>
                <Pagination total={Math.ceil(arr.length / itemsPerPage)} page={currentPage} onChange={setCurrentPage} />
            </div>
        </section>
    </>
    )
}

export default MainPage