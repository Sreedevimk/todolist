import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox, InputLabel } from '@mui/material';

function createData(todolist,Learning) {
    return {todolist };
  }
  
  const rows = [
    createData('learning'),
    createData('exersize'),
    createData('food '),
    createData('traveling'),
    createData('Reading books'),
  ];


// const [row,setrow]

const Todo = () => {
  return (
    <div>
        <h1>Todo</h1>
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <Checkbox {...InputLabel} />
            <TableCell>Todolist</TableCell>
           
            <Button variant="text">add</Button>
            <Button variant="text">delete</Button> 
            
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
          <TableRow>

          <Checkbox {...InputLabel} />
          <TableCell>Learning</TableCell>
          
            <Button variant="text">add</Button>
            <Button variant="text">delete</Button>
            </TableRow>

            <Checkbox {...InputLabel} />
          <TableCell>exercize</TableCell>
          
            <Button variant="text">add</Button>
            <Button variant="text">delete</Button> 


        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.todolist}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.todolist}
              </TableCell>
               <TableCell align="right">{row.Learning}</TableCell>
              <TableCell align="right">{row.exercize}</TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */} 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        {/* <Button onClick={} variant="text">add</Button> */}
        <Button variant="text">delete</Button> 

    </div>
  )
}

export default Todo