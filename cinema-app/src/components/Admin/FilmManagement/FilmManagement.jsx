import "./FilmManagement.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../../dummyData";
import { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { TextField, Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import axios from "axios";
import Grid from '@mui/material/Grid';
import { Formik, Field, Form, ErrorMessage } from "formik";
export default function FilmList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      time: "",
      timeStart: "",
      genre: [],
      category: [],
      description: "",
      imgUrl: "",
      age: "",
    },
    onSubmit: (values) => {
      console.log(formik);
      // Gửi dữ liệu lên server bằng axios
      axios
        .post("/api/your-endpoint", values)
        .then((response) => {
          console.log("Dữ liệu đã được gửi thành công:", response.data);
          // Đóng drawer sau khi gửi thành công
          toggleDrawer("bottom", false)();
        })
        .catch((error) => {
          console.error("Lỗi khi gửi dữ liệu:", error);
        });
    },
  });
  const list = (anchor) => (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
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
        </Stack>
        <TextField
          type="date"
          variant="outlined"
          color="secondary"
          onChange={formik.handleChange}
          value={formik.values.timeStart}
          fullWidth
          required
          sx={{ mb: 4 }}
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
    </Grid>
</Grid>
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
        <Button
          onClick={toggleDrawer("bottom", true)}
          variant="contained"
          color="success"
        >
          Create Film
        </Button>
        <Drawer
          anchor="bottom"
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
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
