import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContext()
  return (
    <div>
    History
    </div>
  )
}

const HistoryStyled =styled.div `

`;

export default History
