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
### Logical schema diagram
![db-schema](https://github.com/nauxray/figuart-frontend/assets/16387210/18f392e9-fdbf-4e7f-9b04-d130b672bf83)

### ER Diagram
![ER-diagram](https://github.com/nauxray/figuart-frontend/assets/16387210/072d5910-ea1d-40fc-8c65-0c2c8ce8642f)

## Frontend Structure

wireframe, explain flow of web app

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
