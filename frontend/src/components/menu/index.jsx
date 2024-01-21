import React, { useEffect } from "react";
import EggAltIcon from "@mui/icons-material/EggAlt";
import WineBarIcon from "@mui/icons-material/WineBar";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./menu.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addWishlist } from "../../redux/slice/menuSlice";
import { Link } from "react-router-dom";

const Menu = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.menu.data);
  const wishlist = useSelector((state) => state.menu.wishlist);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);
  return (
    <div className="menu-sect">
      <div className="containerr">
        <div className="menu-sect-intro">
          <span>OUR MENU</span>
          <h1>Discover Our Exclusive Menu</h1>
        </div>

        <div className="chose-menu-type">
          <div className="menu-type-item">
            <EggAltIcon style={{ color: "gray" }} />
            Main
          </div>
          <div className="menu-type-item">
            <RestaurantMenuIcon style={{ color: "gray" }} />
            Dessert
          </div>
          <div className="menu-type-item">
            <WineBarIcon style={{ color: "gray" }} />
            Drinks
          </div>
        </div>

        <div className="menu">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {data &&
                data.map((item) => {
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
                          <div className="ingredients">{item.ingredients}</div>
                        </div>
                        <div className="price">${item.price}</div>
                        <div className="buttons">
                          <div className="functional-btn">
                            {wishlist.find((elem) => elem._id == item._id) ? (
                              <FavoriteIcon
                                onClick={() => {
                                  dispatch(addWishlist(item));
                                }}
                              />
                            ) : (
                              <FavoriteBorderIcon
                                onClick={() => {
                                  dispatch(addWishlist(item));
                                }}
                              />
                            )}
                          </div>
                          <Link to={"/" + item._id}>
                            {" "}
                            <Button>View</Button>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </div>
        <div className="menu-footer">
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost
          </p>
          <button>Make a Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
