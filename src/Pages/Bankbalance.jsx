import React from 'react'
import Barchart from "../Components/Chart/Barchart.jsx";
import "./Bankbalance.css"

const Bankbalance = () => {
  return (
    <div><h1>Money Transfers</h1>
     <form class="row g-4 needs-validation" novalidate>

  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Bank Account</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
      <div class="invalid-feedback">
        Please choose a bank Account.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Transfer details</label>
    <input type="text" class="form-control" id="validationCustom03" required></input>
    <div class="invalid-feedback">
      Please provide the transfer details
    </div>
  </div><div class="col-md-6">
    <label for="validationCustom03" class="form-label">Amount</label>
    <input type="text" class="form-control" id="validationCustom03" required></input>
    <div class="invalid-feedback">
      Please add amount
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">To the Bank account</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>HNB</option><option>Peoples</option><option>other</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
  )
}

export default Bankbalance
