import React from 'react';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
  } from '@material-ui/core';
import styled from 'styled-components';
import {
    Link,
  } from "react-router-dom";
import { getTableData } from './utils';
import PropTypes from 'prop-types';

const ListTable = ({ setLoading, listData, type, setPage, pagesCount }) => {
    const countItemPerPage = 10    
    const paginationCount = Math.ceil(pagesCount / countItemPerPage)

    const getPagination = () => {
        let pagesTable = []
        for(let i = 1; i <= paginationCount; i++ ){
            pagesTable.push(i)
        }
        return pagesTable
    }
    const data = getTableData(type, listData.results)

    const pagesTable = getPagination()

    const changePage = (item) => {
        setLoading(true);
        setPage(item);
    }

    const renderPagination = () => pagesTable.map(item => (
        <Link key={item} to={`/${type}/${item}`}>
            <PaginationItem
                onClick={() => changePage(item)}
            >
                {`[${item}]`}
            </PaginationItem>
        </Link>
    ))

    const renderTableBody = () => (
        <TableBody>
            {data.bodyTableData.map((item, i) => {
                return(
                    <TableRow key={`${item}-${i}`}>
                        {item.map((bodyItem, i) => (
                            <TableCell key={`${bodyItem}-${i}`}>
                                {bodyItem}
                            </TableCell>
                        ))}
                    </TableRow>
            )})}
        </TableBody>
    )

    const renderTableHeader = () => (
        <TableHead>
            <TableRow>
                {data.headersTable.map(header => (
                    <TableCell key={header}>
                        {header}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )

    const renderTable = () => (
        <Table>
            { renderTableHeader() }
            { renderTableBody() }
        </Table>
    )
    return(
        <Grid container item xs={12} md={10} style={{ margin: '10px auto' }}>
            <ContentWrapper item xs={12} md={12}>
                {renderTable()}
                {renderPagination()}
            </ContentWrapper>
        </Grid>
    )
}

ListTable.propTypes = {
    setLoading: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired, 
    setPage: PropTypes.func.isRequired,
    pagesCount: PropTypes.number.isRequired,
    listData: PropTypes.shape({
        results: PropTypes.arrayOf(PropTypes.shape())
    }).isRequired,
}

export default ListTable;

const ContentWrapper = styled(Grid)`
    margin: 0 auto;
`

const PaginationItem = styled.div`
    display: inline-block; 
    margin: 5px; 
    cursor: pointer;
`