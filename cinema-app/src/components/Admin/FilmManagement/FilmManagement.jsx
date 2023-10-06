import "./FilmManagement.scss";
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../../dummyData";
import { useState } from "react";
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
export default function FilmList() {
  const [data, setData] = useState(userRows); 
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.key === 'Escape') {
      setState({ ...state, [anchor]: open });
    }
    setState({ ...state, [anchor]: true})
    console.log(state)
  };
  
  const formik = useFormik({
    initialValues: {
      name: '',
      time: '',
      timeStart: '',
      genre: [],
      category: [],
      description: '',
      imgUrl : '',
      age : ''
    },
    onSubmit: (values) => {
      console.log(formik)
      // Gửi dữ liệu lên server bằng axios
      axios.post('/api/your-endpoint', values)
        .then((response) => {
          console.log('Dữ liệu đã được gửi thành công:', response.data);
          // Đóng drawer sau khi gửi thành công
          toggleDrawer('bottom', false)();
        })
        .catch((error) => {
          console.error('Lỗi khi gửi dữ liệu:', error);
        });
    },
  });
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="genre"
          name="genre"
          label="Thể loại"
          fullWidth
          value={formik.values.genre}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="name"
          name="name"
          label="Tên phim"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="showtime"
          name="time"
          label="Suất chiếu"
          fullWidth
          value={formik.values.time}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="showhour"
          name="showhour"
          label="Ngày bắt đầu chiếu"
          fullWidth
          value={formik.values.timeStart}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="cinema"
          name="cinema"
          label="Rạp chiếu"
          fullWidth
          value={formik.values.cinema}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="ticketPrice"
          name="ticketPrice"
          label="Giá vé"
          fullWidth
          value={formik.values.ticketPrice}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="description"
          name="description"
          label="Mô tả"
          fullWidth
          value={formik.values.description}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="imgUrl"
          name="imgUrl"
          label="Link ảnh"
          fullWidth
          value={formik.values.imgUrl}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <TextField
          id="age"
          name="age"
          label="Tuổi"
          fullWidth
          value={formik.values.age}
          onChange={formik.handleChange}
           onClick={(e) => e.stopPropagation()}
           
        />
        <Button type="submit" variant="contained" color="primary">
          Gửi
        </Button>
      </form>
    </Box>
  );

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Film",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Time", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>      
              <button className="userListDelete">Delete</button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
       <div>
      <Button onClick={toggleDrawer('bottom', true) } variant="contained" color="success">Create Film</Button>
      <Drawer
       anchor="bottom"
       open={state['bottom']}
       onClose={toggleDrawer('bottom', false)}
      >
        {list('bottom')}
      </Drawer>
    </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
