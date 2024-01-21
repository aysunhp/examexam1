import React, { useEffect, useState } from "react";
import "./add.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteData, postData } from "../../redux/slice/menuSlice";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ingredients: Yup.string().min(2, "Too Short!").required("Required"),
  image: Yup.string().min(5, "Too Short!").required("Required"),
  type: Yup.string().min(2, "Too Short!").required("Required"),
  price: Yup.number("must be number")
    .positive("must be positive")
    .required("Required"),
});

const Add = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.menu.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(data);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const filteredData = () => {
    if (type == "az") {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (type == "za") {
      return [...data].sort((a, b) => b.name.localeCompare(a.name));
    } else if (type == "price") {
      return [...data].sort((a, b) => Number(a.price) - Number(b.price));
    } else {
      return data;
    }
    return data;
  };
  return (
    <div className="add">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="containerr">
        <div className="add-sect-intro">
          <span>OUR MENU</span>
          <h1>Add Page</h1>
        </div>

        <div className="form">
          <Formik
            initialValues={{
              name: "",
              ingredients: "",
              type: "",
              price: "",
              image: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(postData(values));
              resetForm({ values: "" });
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "15px",
                    border: "none",
                    marginBottom: "15px",
                  }}
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <br />
                <Field
                  name="ingredients"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "15px",
                    border: "none",
                    marginBottom: "15px",
                  }}
                />
                {errors.ingredients && touched.ingredients ? (
                  <div>{errors.ingredients}</div>
                ) : null}
                <br />

                <Field
                  name="type"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "15px",
                    border: "none",
                    marginBottom: "15px",
                  }}
                />
                {errors.type && touched.type ? <div>{errors.type}</div> : null}
                <br />
                <Field
                  name="image"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "15px",
                    border: "none",
                    marginBottom: "15px",
                  }}
                />
                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}
                <br />
                <Field
                  name="price"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "15px",
                    border: "none",
                    marginBottom: "15px",
                  }}
                />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                <br />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="table">
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />{" "}
          <Button
            variant="outlined"
            onClick={() => {
              setType("az");
            }}
          >
            A-Z
          </Button>{" "}
          <Button
            variant="outlined"
            onClick={() => {
              setType("za");
            }}
          >
            Z-A
          </Button>{" "}
          <Button
            variant="outlined"
            onClick={() => {
              setType("price");
            }}
          >
            Price
          </Button>{" "}
          <Button
            variant="outlined"
            onClick={() => {
              setType("");
            }}
          >
            Default
          </Button>
        </div>
        <TableContainer component={Paper}>
          {" "}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData() &&
                filteredData()
                  .filter((item) =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.ingredients}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.image}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          onClick={() => {
                            dispatch(deleteData(row._id));
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Add;
