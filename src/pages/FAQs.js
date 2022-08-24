import React from 'react';
import{Link} from 'react-router-dom';

const FAQs = () => {
  return (
    <div className='faqsmain'>
      <u><h1><center>FAQ's</center></h1></u>
      <h4>
     1Q) When will my order be ready?<br/>
Ans)You will know your order is ready for pickup after you receive your second email, showing "Ready for Pickup". Bring your photo ID and web order confirmation number to the pickup counter. Most orders are processed in 24 business hours (Monday-Friday only).
<br/><br/>
2Q)How will I know my order is ready for pickup?<br/>
Ans)You will receive a second email when your order is ready. You can also log in to your account from our website to check your order status. When the status says Complete or Shipped, your order is ready at the bookstore.
<br/><br/>
3Q)Can I have the books shipped to me?<br/>
Ans)Yes - choose "USPS 1-3 Day Delivery" during the checkout process. Shipping costs $10.00 for the first item, and $2.00 for each additional item. Shipping takes about 1-4 business days. We are not able to send USPS tracking numbers, but you can log into your account on our website to check your order status.
<br/><br/>
4Q)How will I know my order has been shipped?<br/>
Ans)You will receive an email from the Don Bookstore when we have processed your order. You can also check your order status by logging in to your account from our website.
<br/><br/>
5Q)What if I forget to pick up my books?<br/>
Ans)If you do not pick up your web order within 21 days of the order being placed your order will be considered abandoned. The Campus Store will make at least one attempt via email, to contact the customer about picking up their order. Abondoned orders can be refunded by customer request if: the request is made within the first 21 days of class start. After this period, a gift card can be issued for the refund.

<br/><br/><br/><br/>

      </h4>

    <center>
      <h3>you are in FAQs page</h3>
        <Link to='/'>back to home</Link>
        </center>
        </div>
  )
}

export default FAQs