import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class Paypal extends Component {
    
    constructor(props) {
        super(props);
  }
    render() {

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
       let total = this.props.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox:    "AXe1gVjrlRnCm-96TZf-XfREDEdJwl5rEWU-7xxUtzc_em6m6eGf8HvmwxIxLUc8uc02YHpJajqLF_Ps",
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn 
                env={env}
                client={client} 
                currency={currency} 
                total={total} 
                
                           
            />
        );
    }
}

