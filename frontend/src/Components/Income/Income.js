import React from 'react'
import styled from 'styled-components'
import { InnertLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';

function Income() {
    const {addIncome} = useGlobalContext()
  return (
    <IncomeStyled>
      <InnertLayout>
        <h1>Incomes</h1>
        <div className='income-content'>
          <div className='form-container'></div>
          <div className='incomes'>
            
          </div>
        </div>
      </InnertLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`;

export default Income
