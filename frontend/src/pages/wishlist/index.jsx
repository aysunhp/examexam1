import React, { useEffect } from "react";
import EggAltIcon from "@mui/icons-material/EggAlt";
import WineBarIcon from "@mui/icons-material/WineBar";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./wishlist.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addWishlist,
  deleteWishlist,
} from "../../redux/slice/menuSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.menu.wishlist);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <div className="wishlist">
        <div className="containerr">
          <div className="menu-sect-intro">
            <span>OUR MENU</span>
            <h1>Wishlist</h1>
          </div>
          <div className="box-wrapper">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {wishlist &&
                  wishlist.map((item) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                        xl={6}
                        key={item._id}
                      >
                        <div className="box">
                          <div className="img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="content">
                            <div className="name">{item.name}</div>
                            <div className="ingredients">
                              {item.ingredients}
                            </div>
                          </div>
                          <div className="price">${item.price}</div>
                          <div className="buttons">
                            <div className="functional-btn">
                              <FavoriteIcon
                                onClick={() => {
                                  dispatch(deleteWishlist(item));
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
