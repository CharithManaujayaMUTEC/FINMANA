import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import MyPieChart from "../Components/Chart/Chart Expenses"; // Assuming you have a separate chart for expenses
import { Stack } from "react-bootstrap";
import axios from "axios";

const Expenditure = () => {
  const [expenditureData, setExpenditureData] = useState([]);
  const [newExpenditure, setNewExpenditure] = useState({
    date: "",
    type: "",
    amount: "",
    account: "",
  });

  // Fetch all expenditures from the backend
  useEffect(() => {
    const fetchExpenditures = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/expenditures/"
        ); // Replace with your API URL
        setExpenditureData(response.data);
      } catch (err) {
        console.error("Error fetching expenditure data", err);
      }
    };

    fetchExpenditures();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpenditure((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit the new expenditure data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/expenditures/",
        newExpenditure
      ); // Replace with your API URL
      setExpenditureData((prev) => [...prev, newExpenditure]);
      setNewExpenditure({
        date: "",
        type: "",
        amount: "",
        account: "",
      });
    } catch (err) {
      console.error("Error adding expenditure", err);
    }
  };

  return (
    <div className="Expenditure">
      <Stack direction="horizontal" gap={2} className="col-md-auto xs-auto">
        <MyPieChart />
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-auto">
            <label htmlFor="date" className="visually-hidden">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={newExpenditure.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-auto">
            <label htmlFor="account" className="visually-hidden">
              Expenditure Type
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              value={newExpenditure.type}
              onChange={handleInputChange}
              placeholder="Type of Expense"
              required
            >
              <option value="" disabled>
                Choose Type...
              </option>
              <option>Food</option>
              <option>Bills</option>
              <option>Clothes</option>
            </select>
          </div>
          <div className="col-auto">
            <label htmlFor="amount" className="visually-hidden">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={newExpenditure.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              required
            />
          </div>
          <div className="col-auto">
            <label htmlFor="account" className="visually-hidden">
              Bank Account
            </label>
            <select
              className="form-select"
              id="account"
              name="account"
              value={newExpenditure.account}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Choose Bank...
              </option>
              <option>HNB</option>
              <option>Peoples</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add
            </button>
          </div>
        </form>
      </Stack>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          {expenditureData.map((expense, index) => (
            <tr key={index}>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.type}</td>
              <td>{expense.amount}</td>
              <td>{expense.account}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Expenditure;
