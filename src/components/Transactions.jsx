import { Box, Divider, Typography, List } from "@mui/material";
import Transaction1 from "./Transaction1";


const Transaction = ({transactions, setTransactions}) =>{
    return(
        <Box>
            <Typography variant="h5">Transaction History</Typography>
            <Divider/>
            <List>
            {
                
                transactions.map(transaction => (
                    <Transaction1 transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                ))
            }
            </List>
        </Box>
    );
}

export default Transaction;