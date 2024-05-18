import React from 'react'
import Table from 'react-bootstrap/Table';
import MyPieChart from '../Components/Chart/Chart';
import { Stack } from 'react-bootstrap';


const Income = () => {
  return (
    <div className='Income'>
      <Stack direction="horizontal"gap={2} className="col-md-auto xs-auto">
      <MyPieChart />
      <form class="row g-4">
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">Income</label>
          <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Type of Income"></input>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Expense</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Income"></input>
  </div>
  <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">Amount</label>
          <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Amount"></input>
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Amount</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Rs.00"></input>
  </div>
  <div class="col-g3">
    <label for="validationCustom04" class="form-label">Bank Account</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>HNB</option><option>Peoples</option><option>Other</option>
    </select>
    
  </div>
  <div class="col-g4">
    <button type="submit" class="btn btn-primary mb-3">Add</button>
  </div>
</form></Stack>
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Income</th>
          <th>Amount</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>31st July</td>
          <td>Shop</td>
          <td>1250</td>
          <td>HNB</td>
        </tr>
        <tr>
          <td>31st July</td>
          <td>Tution</td>
          <td>1500</td>
          <td>HNB</td>
        </tr>
        <tr>
          <td>1st September</td>
          <td>Salary</td>
          <td>50000</td>
          <td>Peoples</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Income;
