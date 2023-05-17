# Figuart

**Figuart** is an ecommerce website for people to buy figurines. People often get excited when they see a figurine or blind box from their favourite TV show or series. I think this excitement is present in people of all ages, from children to adults. This makes figurines appealing to everyone, which greatly increases the profitability of this business. As the buyer, they get to buy and collect figurines that they love, as well as experience the anticipation as they wonder what they got in their blind box.

In addition to making profit, I hope to help children and adults alike experience that excitement of getting a brand new figurine of their favourite character, or opening a blind box and getting the one they wanted most.

Live Website(React frontend ecommerce site): [https://figuart.netlify.app](https://figuart.netlify.app)

Live Website(Backend shop owner/admin portal): [https://figuart-backend.onrender.com](https://figuart-backend.onrender.com/)

## Sample Logins

**NOTE: Buyer roles can only login on the frontend, Seller roles can only login on the backend.**

**Buyer (on frontend https://figuart.netlify.app)**

Email: buyer@gmail.com

Password: password

## Desktop (2560x1440)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/be06b7c7-a16e-4dfb-8685-09813352dded)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/46a1099d-cea8-4058-afc8-3723238fdba6)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/33a3363c-7f31-4312-8906-abdad3bb9bd9)

## Tablet (IPad Air, 820x1180)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/16c37008-6c73-41f5-bc54-f2ea6a61e72c)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/8716d16c-df7c-467b-a6c7-fa9e4935eb4e)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/32f2a7f6-d39c-4d00-98de-29e2de0049c2)

## Mobile (iPhone 12 Pro, 390x844)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/c4b9747c-2899-4369-b86d-531601d02576)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/addc1cbb-4c9d-49f8-bc1c-ec5f02809611)
![image](https://github.com/nauxray/figuart-frontend/assets/16387210/cd2d96c9-0dbd-4d36-bfdf-5783e3400be5)


**Seller (on backend https://figuart-backend.onrender.com)**

Email: abc@gmail.com

Password: password

## Database Structure

### Logical schema diagram

![db-schema](https://github.com/nauxray/figuart-frontend/assets/16387210/18f392e9-fdbf-4e7f-9b04-d130b672bf83)

### ER Diagram

![ER-diagram](https://github.com/nauxray/figuart-frontend/assets/16387210/072d5910-ea1d-40fc-8c65-0c2c8ce8642f)

## Frontend Structure

![image](https://github.com/nauxray/figuart-frontend/assets/16387210/d1a05375-8590-4b35-a30a-c14d4e432930)

Above is a sitemap depicting the pages and features in the website.

Starting from the homepage, the user can see the top rated products and featured sellers. Below that, all products will be listed for them to browse. There is a search bar, as well as a filter/sort button at the top of the page, allowing them to easily find the product they want.

Upon clicking on a product card, the user is redirected to the product listing page. On this page, it shows the product details such as product name, description, price, and quantity left. If the user decides to buy the product, they can add it to their cart here.

The navigation bar allows the user to view their account. On the account page, they can view their profile details, edit their profile and view their order history.
The orders are organized according to their status. For each order, the user can see the products they bought, the amount they paid, the order status and date they placed the order. For orders that have not been paid for, they can also complete payment here. In future, there will be a feature for users to cancel an order that they have not paid for.

The login button is located at the top right corner of the page, which is intuitive for most users. On the login page, the user can login to an existing account or create a new account. Upon logging in, they are then directed back to the homepage to encourage product browsing.

The cart button is located at the top right corner of the page, to the left of the login button. This is also intuitive design and very common across other ecommerce webapps. This button also has a badge showing how many items are in the user's cart. On the cart page, the user can see the products that are in their cart, organized by the shop that the products are from. Here, the user can edit the number of products they want to buy, before checking out their cart.

When the user checks out their cart, they are redirected to Stripe's payment page to make payment.

## Design

You can view the Figma design file [here](https://www.figma.com/file/oE3eGMiQszt11f7dDAfgfE/Figuart?type=design&node-id=0%3A1&t=KbENYJkPkM8J5wky-1)

### Fonts

![image](https://github.com/nauxray/figuart-frontend/assets/16387210/2fc9efad-bbe4-45ae-a18a-41bf520982e1)

For the fonts used in this website, I decided to use Prosto One and Inter.

Prosto One is a serif, bold font that is good for catching user attention. It is primarily used for headers and product names, which are things that I want to draw the user attention to. By drawing their attention to the headers, they will also see the top rated products and featured sellers that I want them to see.

On the other hand, Inter is a sans-serif font that is very minimal and gives the website a clean look. It is used to convey information such as product descriptions to the user, as its sans-serif style makes it very easy on the eyes and easy to read. It nicely contrasts with the louder Prosto One to give an interesting yet cohesive feel to the website.

### Colors

![image](https://github.com/nauxray/figuart-frontend/assets/16387210/3d6f6aa6-da95-4b3f-9592-743dac9a4df4)

For the website's color palette, I decided to use black, lilac, pale yellow, and white.

Black is used for the background and some texts as I wanted the website to be dark overall, which is easy on the eyes and allows users to browse the products for longer periods of time.

Lilac, pale yellow and white are used for contrast with the dark background. The calming colors are pleasing to the eyes and also help to make the user feel relaxed and want to browse the products more.

### Image style & Layout

Most images on the website are rounded at the corners. This gives them a more clean and polished feel, as compared to sharp corners.

For the layout of the home page, I put the top rated products and featured sellers in the middle of the page. This makes it the first thing that users will see once they enter the website, which promotes these products and sellers to them.

The products are arranged in a grid layout for accessibility. The user is able to view multiple products at once, and the organized look improves the browsing experience for them as well. With the layout like this, the user is able to browse products for long periods of time without getting tired.

## User Stories

1. As a user, I want to view different figurines easily and get important information at a glance so that I can efficiently browse for figurines I like.

   - Products should be displayed in grid format to allow easy browsing.

   - Each figurine product should display its image, name, brand, its tags or series, and the price without clicking in.

2. As a user, I want to be able to search for a specific figurine by different criteria such as name, series etc so that I can purchase it.

   - There should be a search system to search by product name.

   - There should be a filtering system to ensure users can efficiently find the figurine they want based on the brand, series or tags.

3. As a user, I want to see the top rated figurines easily so that I can browse figurines even if I don't have a specific figurine in mind.

   - There should be a section on the homepage showing the top rated figurines.

4. As a user, I want to be able to see my order history so that I can keep track of what I have bought and check that the order was placed correctly.

   - There should be a section that displays the user's order history. As this is related to the user account, it should be put with other account details.

   - The order history should show the products bought, total amount paid, the order status as well as the date that it was placed.

5. As a user, I want to be able to change my mind at any point before making payment, without losing the products that I added to cart.

   - If user changes their mind before making payment on the Stripe payment page, their order is saved as "UNPAID" status and can be viewed under their order history.

   - The user should be able to complete the purchase or cancel the order from there.

## Testing

1. Test that products are displayed in grid format and show relevant information without clicking in.

   - On home page, scroll down to find the All Products section.

   - The products should be displayed in a grid and display its name, image, brand, tags/series, and price without clicking in.

2. Test that top selling products are displayed correctly

   - On home page, there should be a section that shows the top 5 best selling products.

3. Test that user can search for products by its name, or filter by other fields and sort by different criterias.

   - Use the search bar on the home page to enter “s”. Hit enter.

   - The search results should display products that contain the search term “s”.

   - Click on the filter/sort button below the search bar. On the modal, choose "Funko" for the brand.

   - Click on the search button on the modal to apply the filter. The search results should now only display products that contain “s” in their name and are from the brand "Funko".

4. Test that user can add products to cart.

   - On home page, click on any product. User should be redirected to the product details page, where an "Add to cart" button can be found.

   - Click on the add to cart button.

   - A toaster should popup, saying that the product was successfully added to the user's cart.

   - Click on the Cart icon on the top right corner. If it is not there, login first.

   - User should be redirected to the cart page, where they should see the product that was added to the cart.

5. Test that user can checkout their cart.

   - Go to the cart page by clicking the cart icon on the top right corner of the page. If it is not there, please login first.

   - On the cart page, click checkout.

   - User should be redirected to a Stripe payment page.

   - Enter `4242424242` for all the credentials and click on Pay.

   - On successful payment, user should be redirected to the website, to a page thanking them for the purchase.

   - On the website, go to the user account page. The order history should reflect the order they just paid for.

6. Test that user can login.

   - Go to the login page.

   - Enter the sample login credentials for the buyer account. Click on sign in.

   - On successful login, user should be redirected to the homepage.

7. Test that user can create a new account.

   - Go to the login page.

   - Click on the create account link.

   - Enter `testing@gmail.com` for the email. Enter `TesterAccount` for the username. Enter `password2` for the password fields.

   - Click on the sign up button.

   - On successful account creation, user should be logged in automatically and redirected to the homepage.

8. Test that user can view their order history.

   - Go to the user account page. Scroll down to find the order history section.

   - The orders should be organized by their status, in collapsible drop downs.

   - The orders should display the order ID, date, products bought, number of products bought, total amount paid, and status.

   - The user should see a link to complete payment for orders that are unpaid, and a link to change the order status from `SHIPPED` to `COMPLETED`.

9. Test that user can search for orders.

   - Go to the user account page. Scroll down to find the order history section.

   - There should be a search bar that allows user to search for orders by its order ID or product name.

   - Type "s" into the search bar and hit enter.

   - Only orders that contain products with "s" in their names should appear.

   - Clear the text in the search bar and enter one of the order IDs in the order history. Hit enter.

   - Only orders that have the same order ID should appear.

10. Test that user can complete payment for an unpaid order.

    - Go to the user account page. Scroll down to find the order history section.

    - Find an unpaid order. It should show a link on the right side that says "Complete Payment". Click on it.

    - User should be redirected to a Stripe payment page, where they can enter the fake credentials and click Pay.

    - On successful payment, user should be redirected back to the website, to a page thanking them for the purchase.

    - On the website, go back to the order history section. It should show that that order has been paid for.

11. Test that user can cancel an unpaid order.

    - Go to the user account page. Scroll down to find the order history section.

    - Find an unpaid order. It should show a link on the right side that says "Cancel Order". Click on it.

    - Once the order has been successfully cancelled, the page should re-fetch the orders history. After the loading is done, it should show that the order was cancelled and should no longer appear on the page.

12. Test that user can update a shipped order to `COMPLETED` status once they have received the products.

    - Go to the user account page. Scroll down to find the order history section.

    - Find a shipped order. It should show a link on the right side that says "Order Received". Click on it.

    - Once the order has been updated, the page should re-fetch the orders history. After the loading is done, it should show that the order status was changed to `COMPLETED`.

## Technologies Used

1. ReactJS for frontend

2. ExpressJS for backend REST API

3. Postgres DB hosted on Render. used db-migrate to change from mysql to postgres db easily

### Libraries used

#### Frontend

1. react-router-dom: https://github.com/remix-run/react-router (for routing different pages & redirecting user)

2. axios: https://github.com/axios/axios (to call apis)

3. react-icons: https://github.com/react-icons/react-icons (various icons throughout the app)

4. dayjs: https://github.com/iamkun/dayjs (display date time)

5. react-toastify: https://github.com/fkhadra/react-toastify (toasters)

6. tailwindcss: https://github.com/tailwindlabs/tailwindcss (for styling)

#### Backend

1. bookshelf: https://github.com/bookshelf/bookshelf (ORM)

2. db-migrate: https://github.com/db-migrate/node-db-migrate (database migration)

3. cors: https://github.com/expressjs/cors (cors middleware)

4. csurf: https://github.com/expressjs/csurf (CSRF token middleware)

5. forms: https://github.com/caolan/forms (create, validate and process forms)

6. cloudinary: https://github.com/cloudinary/cloudinary_npm (image upload)

7. hbs: https://github.com/pillarjs/hbs (view engine)

8. wax-on: https://github.com/keithws/wax-on (hbs template inheritance)

9. jsonwebtoken: https://github.com/auth0/node-jsonwebtoken

10. session-file-store: https://github.com/valery-barysok/session-file-store

11. express-session: https://github.com/expressjs/session

12. stripe: https://github.com/stripe/stripe-node (payment)

## Credits

- [Decode JWT token without library](https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library)

- [Custom hook for reusable Modal component](https://upmostly.com/tutorials/modal-components-react-custom-hooks)

- [Scroll to top on page change](https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition)

- [Fix react-router-dom page not found error after netlify deployment](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/)

- [Regex for checking valid image url](https://bobbyhadz.com/blog/javascript-check-if-url-is-image)

- [Favicon generator](https://favicon.io/)

- [Disable blue highlight on mobile](https://stackoverflow.com/questions/25704650/disable-blue-highlight-when-touch-press-object-with-cursorpointer)

- [Disable Google tap to search feature on mobile](https://stackoverflow.com/questions/60984046/how-to-disable-onclick-text-highlight-in-mobile-browser-chrome)

- Logo created using Canva, cat vector images from Canva
