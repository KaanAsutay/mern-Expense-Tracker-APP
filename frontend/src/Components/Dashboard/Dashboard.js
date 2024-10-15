import React from 'react'
import styled from 'styled-components'
import { InnertLayout } from '../../styles/Layout';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';

function Dashboard() {
  const {totalExpenses, totalIncome, totalBalance} = useGlobalContext()

  return (
    <DashboardStyled>
      <InnertLayout>
          <h1>All Transaction</h1>
          <div className='stats-con'>
            <div className='chart-con'>
              <Chart />
              <div className='amount-con'>

                <div className='income'>
                  <h2>Total Income</h2>
                  <p>
                    {dollar} {totalIncome()}
                  </p>
                </div>

                <div className='expense'>
                  <h2>Total Expense</h2>
                  <p>
                    {dollar} {totalExpenses()}
                  </p>
                </div>

                <div className='balance'>
                  <h2>Total Balance</h2>
                  <p>
                    {dollar} {totalBalance()}
                  </p>
                </div>
              
              </div>
            </div>
          </div>
      </InnertLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

`;

export default Dashboard
