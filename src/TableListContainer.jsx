import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import ListTable from './ListTable';
import styled from 'styled-components';

const TableListContainer = () => {
    const path = window.location.pathname.split('/')[1]
    const [listData, setListData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(null)

    useEffect(() => {
        async function fetchData(){
            await axios(`https://swapi.co/api/${path}/?page=${page}`)
            .then(resp => {
                setListData(resp.data)
                setPagesCount(resp.data.count)
                setLoading(false)
            })
        }
        fetchData()
    }, [page, path])

    if(loading) return <div>Loading...</div>

    return(
        <Grid container>
            <Title>{`${path.toUpperCase()} List`}</Title>
            <ListTable setLoading={setLoading} listData={listData} type={path} pagesCount={pagesCount} setPage={setPage} />
        </Grid>
    )
}

export default TableListContainer;

const Title = styled(Typography)`
    width: 200px;
    margin: 10px auto !important;
    text-align: center;
`