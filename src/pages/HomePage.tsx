import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function HomePage() {
    const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const userData = { name, phoneNumber, email };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/second-page');
  };

  return (
    <form onSubmit={handleSubmit}>
    <TextField
      label="Name"
      value={name}
      fullWidth
      onChange={(e) => setName(e.target.value)}
      required
      style={{ marginBottom: '16px' }}
    />
    <TextField
      label="Phone Number"
      value={phoneNumber}
      fullWidth
      onChange={(e) => setPhoneNumber(e.target.value)}
      required
      style={{ marginBottom: '16px' }}
    />
    <TextField
      label="Email"
      type="email"
      value={email}
      fullWidth
      onChange={(e) => setEmail(e.target.value)}
      required
      style={{ marginBottom: '16px' }}
    />
    <Button type="submit" fullWidth variant="contained" color="primary">
      Submit
    </Button>
  </form>
  )
}
