import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import TableListContainer from './TableListContainer';

function App() {
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData(){
      await axios('https://swapi.co/api/')
      .then(resp => {
        setPages(Object.keys(resp.data))
        setLoading(false)
      })
    }
    fetchData()
  }, [])

  if(loading) return <Main>Loading...</Main>

  return (
    <Main container>
      <Router>
        <Link to="/">
          <Title>Star Wars App</Title>
        </Link>
        <Switch>
          <Route exact path="/">
            <ListWrapper container>
              {pages.map(type => (
                <ListMain item xs={12} sm={6} lg={4} key={type}>
                  <CustomLink  
                    to={`/${type}/1`}>
                    <BoxTitle>
                      {`Star Wars - ${type.toUpperCase()}`}
                    </BoxTitle>
                  </CustomLink>
                </ListMain>
              ))}
            </ListWrapper>
          </Route>
          <Route exact path="/:type/:page">
            <TableListContainer />
          </Route>
        </Switch>
      </Router>
    </Main>
  );
}

export default App;

const Main = styled(Grid)`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 1170px;
  margin: 0 auto;
`

const BoxTitle = styled(Typography)`
  font-size: 20px; 
  font-weight: 700; 
  color: #FFFFFF;
`

const CustomLink = styled(Link)`
  display: flex; 
  flex: 1; 
  align-items: center;
  justify-content: center; 
  text-decoration: none;
`

const ListWrapper = styled(Grid)`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ListMain = styled.div`
  margin: 10px; 
  border: 1px solid black;
  border-radius: 8px;
  height: 300px;
  background-color: darkblue; 
  cursor: pointer; 
  display: flex;
  width: 300px;
  text-align: center;
`

const Title = styled(Typography)`
  text-align: center; 
  font-size: 24; 
  border: 1px solid gray; 
  border-radius: 8px; 
  padding: 10px 20px; 
  background-color: silver
`
