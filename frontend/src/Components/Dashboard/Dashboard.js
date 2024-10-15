import React from 'react'
import styled from 'styled-components'
import { InnertLayout } from '../../styles/Layout';
import Chart from '../Chart/Chart';

function Dashboard() {
  return (
    <DashboardStyled>
      <InnertLayout>
          <h1>All Transaction</h1>
          <div className='stats-con'>
            <div className='chart-con'>
              <Chart />
            </div>
          </div>
      </InnertLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

`;

export default Dashboard
