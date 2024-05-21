import './App.css';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transaction from './components/Transactions';
import { useState } from 'react';

const Header = styled(Typography)`
  font-size:35px;
  color:blue;
  text-transform:uppercase;
`

const Component = styled(Box)`
  display:flex;
  background: grey;
  width: 800px;
  padding:10px;
  border-radius:20px;
  margin:auto;
  & > div{
    height: 80vh;
    width:50%;
    padding: 10px;
  }
`

function App() {

  const [transactions, setTransactions] = useState([
    // {id:1,text:'Momos',amount:-20},
    // {id:2,text:'Pizza',amount:-50},
    // {id:3,text:'Burger',amount:-30},
    // {id:4,text:'Salary',amount:3000}
  ])

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
          <Box>
            <Balance transactions={transactions}/>
            <ExpenseCard transactions={transactions}/>
            <NewTransaction setTransactions={setTransactions}/>
          </Box>
          <Box>
            <Transaction transactions={transactions} setTransactions={setTransactions}/>
          </Box>
      </Component>
    </Box>
  );
}

export default App;
