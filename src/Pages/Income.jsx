import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import MyPieChart from "../Components/Chart/Chart";
import { Stack } from "react-bootstrap";
import axios from "axios";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [newIncome, setNewIncome] = useState({
    date: "",
    type: "",
    amount: "",
    account: "",
  });

  // Fetch all incomes from the backend
  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/incomes/"); // Replace with your API URL
        console.log(response.data);
        setIncomeData(response.data);
      } catch (err) {
        console.error("Error fetching income data", err);
      }
    };

    fetchIncomes();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncome((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit the new income data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/incomes/", newIncome); // Replace with your API URL
      setIncomeData((prev) => [...prev, newIncome]);
      setNewIncome({
        date: "",
        type: "",
        amount: "",
        account: "",
      });
    } catch (err) {
      console.error("Error adding income", err);
    }
  };

  return (
    <div className="Income">
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
              value={newIncome.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-auto">
            <label htmlFor="account" className="visually-hidden">
              Income Type
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              value={newIncome.type}
              onChange={handleInputChange}
              placeholder="Type of Income"
              required
            >
              <option value="" disabled>
                Choose Type...
              </option>
              <option>Salary</option>
              <option>Tution</option>
              <option>Pocket Money</option>
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
              value={newIncome.amount}
              onChange={handleInputChange}
              placeholder="Amount"
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
              value={newIncome.account}
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
            <th>Income</th>
            <th>Amount</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((income, index) => (
            <tr key={index}>
              <td>{new Date(income.date).toLocaleDateString()}</td>
              <td>{income.type}</td>
              <td>{income.amount}</td>
              <td>{income.account}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Income;
