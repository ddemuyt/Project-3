import React, { Component } from "react";
import API from "../../utils/API";

import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText,
} from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class MediaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notAdded: true,
      count: 0,
    };
  }
  handleAddToCart(itemToCart) {
    
    console.log(itemToCart);

    let data =  
    {
      user_id: itemToCart.user_id,
      item_name: itemToCart.item_name,
      item_price: itemToCart.item_price,
      item_quantity: itemToCart.item_quantity,
      item_desc: itemToCart.item_desc,
      item_img_url: itemToCart.item_img_url
    }


    API.addToCart(data)
      .then(res => console.log(res))
      .catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardMedia>
            <img src={this.props.sessionNote.item_img_url} alt="" />
          </CardMedia>
          <CardTitle
            title={this.props.sessionNote.item_name}
            subtitle={this.props.sessionNote.item_desc}
          />
          <CardText style={{ fontSize: "20px", fontWeight: "600" }}>
            $ {this.props.sessionNote.item_price}
          </CardText>
          <CardActions>
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => 
                this.handleAddToCart(this.props.sessionNote)
              }
            >
              BUY
            </button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}
export default MediaCard;

