import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnertLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';

function Income() {
    const {addIncome, incomes, getIncomes} = useGlobalContext()

    useEffect(() => {
      getIncomes()
    }, [])

  return (
    <IncomeStyled>
      <InnertLayout>
        <h1>Incomes</h1>
        <div className='income-content'>

          <div className='form-container'>
            <Form />
          </div>

          <div className='incomes'>
            {incomes.map((income) => {
              const {_id, title, amount, date, category, description} = income;
              return <Income />
            })}
          </div>
        </div>
      </InnertLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`;

export default Income
