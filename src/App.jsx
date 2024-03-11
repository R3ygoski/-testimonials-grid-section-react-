import styled from 'styled-components'
import Card from "./components/Card";
import { DataBase } from './database';

const MainStyled = styled.main`
  display:flex;
  flex-direction:column;
  width: 85%;
  margin: 6rem 0;
  gap: 2rem;
  @media (min-width: 1440px) {
    margin-top: 9rem;
    display: grid;
    grid-template-columns: repeat(8, 10.5%);
    grid-template-rows: repeat(6, 11.5%);
    width: 78%;
    gap: 2rem;
  }
`

export default function App() {

  return (
    <>
      <MainStyled>
        {DataBase.map(e=>{
          return <Card key={e.id} {...e} $iswhite={e.iswhite} $bordercolor={e.bordercolor}/>
        })}
      </MainStyled>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/R3ygoski" target='_blank' rel="noreferrer">Bernardo Poggioni</a>.
      </div>
    </>
  )
}
