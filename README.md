To run project using following CLI commands:
1. git pull https://github.com/sudan0825/checkoutpage
2. npm install
3. npm run


Code structure explanation:
 1. components folder is for all stateless components
 2. containers folder is for all stateful components
 3. Store is for redux
 4. Index.js is the root file
 5. All data are stored in data.js file
 6. deepcopyObj.js is a module for immutable update object

The demo site is here:

https://checkoutpage-4c689.firebaseapp.com/


Reusable components: imageContainer, descriptionContainer, product container. They can be used in "Product page" and "ordersummary page".  

Reusable JS code: 1. showContent(), which controls the UI of "see Item Details" & "Apply promo code"
                  2. deepcopyObj.js file

If the promotion code does not exist, an error message will be given
If the promotion code (For example: 'discount','HappyFriday') exists, the promotion discount will show up in checkout page and deduct from Est. total.
