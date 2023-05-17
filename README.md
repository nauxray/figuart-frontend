# Figuart

**Figuart** is an ecommerce website for people to buy figurines. People often get excited when they see a figurine or blind box from their favourite TV show or series. I think this excitement is present in people of all ages, from children to adults. This makes figurines appealing to everyone, which greatly increases the profitability of this business. As the buyer, they get to buy and collect figurines that they love, as well as experience the anticipation as they wonder what they got in their blind box. In addition to making profit, I hope to help children and adults alike experience that excitement of getting a brand new figurine of their favourite character, or opening a blind box and getting the one they wanted most.

Live Website(React frontend ecommerce site): [https://figuart.netlify.app](https://figuart.netlify.app)
Live Website(Backend shop owner/admin portal): [https://figuart-backend.onrender.com](https://figuart-backend.onrender.com/)

screenshots on desktop, laptop, mobile

## Sample Logins

**NOTE: Buyer roles can only login on the frontend, Seller roles can only login on the backend.**

**Buyer (on frontend https://figuart.netlify.app)**
Email: buyer@gmail.com
Password: password

**Seller (on backend https://figuart-backend.onrender.com)**
Email: abc@gmail.com
Password: password

## Database Structure

logical schema diagram

## Frontend Structure

wireframe, explain flow of web app

## Design

[Figma design link](https://www.figma.com/file/oE3eGMiQszt11f7dDAfgfE/Figuart?type=design&node-id=0%3A1&t=KbENYJkPkM8J5wky-1)
add screenshots
explain choices for:

- colors (dark mode, easy on eyes)
- fonts (Inter -> readability. used for information chunks. gives off clean look and contrast with the louder Prosto One. Prosto One -> attract user attention with its bold font. used for titles and product names)
- style of images ()
- layouts (grid layout for accessibilty, able to view multiple products at once. improves browsing experience. put top products as the first thing users see to promote these products. featured stores also.)

## User Stories

3-5 user stories

## Testing

## Technologies Used

1. ReactJS for frontend

2. ExpressJS for backend REST API

3. Postgres DB hosted on Render. used db-migrate to change from mysql to postgres db easily

### Libraries used

#### Frontend

1. react-router-dom: https://github.com/remix-run/react-router (for routing different pages & redirecting user)

2. axios: https://github.com/axios/axios (to call various apis using the api utility class)

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

- [Logo created using Canva, cat vector images from Canva](https://www.canva.com/design/DAFSqBjsPpI/X1CWMmWEWr0p_fyfaEkY1g/view?utm_content=DAFSqBjsPpI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)

- [Favicon generator](https://favicon.io/)

- [Disable blue highlight on mobile](https://stackoverflow.com/questions/25704650/disable-blue-highlight-when-touch-press-object-with-cursorpointer)

- [Disable Google tap to search feature on mobile](https://stackoverflow.com/questions/60984046/how-to-disable-onclick-text-highlight-in-mobile-browser-chrome)
