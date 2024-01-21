import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addWishlist,
  deleteWishlist,
} from "../../redux/slice/menuSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./detail.scss";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.menu.wishlist);
  const data = useSelector((state) => state.menu.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const found = data.find((item) => item._id == id);
  console.log(found);
  return (
    <div className="detail">
      <div className="containerr">
        <div className="detail-sect-intro">
          <h1>View Detailed</h1>
        </div>
        {found && (
          <div className="box">
            <div className="img">
              <img src={found.image} alt="" />
            </div>
            <div className="content">
              <div className="name">Name: {found.name}</div>
              <div className="ingredients">
                Ingredients: {found.ingredients}
              </div>
              <div className="price">Price: {found.price}</div>
              <div className="type">Type: {found.type}</div>
              <div className="buttons">
                {wishlist.find((elem) => elem._id == found._id) ? (
                  <FavoriteIcon
                    onClick={() => {
                      dispatch(deleteWishlist(found));
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => {
                      dispatch(addWishlist(found));
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
