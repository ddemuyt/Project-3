import axios from "axios";

export default {
  loginUser: function (loginCredentials) {
    return axios
      .post("/api/login", loginCredentials);
  },

  userSignup: function (userData) {
    return axios.post("/api/signup", userData);
  },

  addSellItem: function (itemData) {
    return axios.post("/api/items", itemData);
  },
  
  itemData: (itemData) => {
    return axios.get("/api/items", itemData);
  },
  // function to use API from backend
  searchApi: (req, res) => {
    let userSearch = req.body;
    let url = `https://api.data.charitynavigator.org/v2/Organizations?app_id=f591e4ff&app_key=0d693d8ab79cff6b8e20b4a8c6896c0a&rated=true&&pageSize=20&search=`;

    return axios.get(url + userSearch);
  },

  addToCart(data) {
    return axios.post("/api/cart", data);
  },  
  
  displayCartItems(data) {
    return axios.get("/api/cart", data);
  },

  getCart(user_id) {
    return axios.get("/api/item?user_id=" + user_id);
  },

  postOrder(orderData) {
    return axios.post("/api/order", orderData);
  },

};
