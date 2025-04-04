import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OffCan from '../Components/OffCan/OffCan';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Income from './Income';
import Expenditure from './Expenditure';
import Bankbalance from './Bankbalance';
import './Profile.css'
import { Stack } from 'react-bootstrap';
import img1 from './Img1.jpg';
import img2 from './Img2.jpg';
import img3 from './Img3.jpg';


const Profile = () => {
  return (
    
    <><div className='Profile'><Stack direction="horizontal"gap={2} className="col-md-auto xs-auto"><Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Income Monitor</Card.Title>
        <Card.Text>
          Click the button below to go to view your income report.
        </Card.Text>
        <Button variant="primary">Go to Income</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} height={'149px'}/>
      <Card.Body>
        <Card.Title>Expenses Monitor</Card.Title>
        <Card.Text>
        Click the button below to go to view your expenses report.
        </Card.Text>
        <Button variant="primary">Go to Expenses</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Bank Balancde</Card.Title>
        <Card.Text>
        Click the button below to go to view your bank balance.
        </Card.Text>
        <Button variant="primary">Go to Bank Balance</Button>
      </Card.Body>
    </Card>
    </Stack>
    </div>
    <OffCan />
   
    {/*<Routes>
        <Route path='/income' element = {<Income/>}/>
        <Route path='/expenditure' element = {<Expenditure/>}/>
        <Route path='/BankBalance' element = {<Bankbalance/>}/>
  </Routes></>*/}
    </>
  )
}

export default Profile;
