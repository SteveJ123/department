import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

export default function SecondPage() {
    // const userData: any = localStorage.getItem('userData');
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const [posts, setPosts] = useState([]);
    const [data, setData] = useState([
        {
          "department": "customer_service",
          "sub_departments": [
            "support",
            "customer_success"
          ]
        },
        {
          "department": "design",
          "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
          ]
        }
      ]
    )

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'userId', headerName: 'User ID', width: 100 },
        { field: 'body', headerName: 'Body', width: 400 },
      ];

    const navigate = useNavigate();   

    useEffect(() => {
        if (!userData) {
            // Redirect to the form page with a message
            navigate("/")
            return;
            // return <Navigate to={{ pathname: '/', state: { message: 'Please enter your details before accessing this page.' } }} />;
        }

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, [userData])


    return (
        <div>{userData &&  <div style={{ height: 400, width: '100%' }}>
            <h1>Table</h1>
        <DataGrid rows={posts} columns={columns} 
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
        checkboxSelection />

        <DepartmentList />
      </div>
        }



        </div>
    )
}
