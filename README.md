# Figuart

**Figuart** is an ecommerce website for people to buy figurines.
Live Website: https://figuart.netlify.app

## Features

The main features of the website are as listed below:

1. Browse through different yarns easily
2. Sorting system (sort by alphabetical order, average rating, number of reviews)
3. Filter and search system to narrow down yarns displayed
   - Search by yarn name
   - Filter by color, brand, weight, material
4. Contribute yarn reviews, and ability to edit or delete a review
5. View your past reviews to keep track of your progress
6. Contribute yarn listings
7. Create account and login with JWT Authentication
8. Ability to change username/password

Known bugs:

Future features:

1.  Ability to report a user or flag a review for spam, inappropriate content, etc.
1.  Ability to upvote or downvote reviews
1.  Ability to react to user reviews with emojis
1.  Ability to reply to user reviews to facilitate discussion
1.  Ability to view other users' profile to see the date they joined, reviews posted, etc.
1.  Ability to add yarn to cart and purchase yarns
1.  Ability to save/favorite/like a yarn
1.  Retrieve username/password if user forgets
1.  Ability to view yarns contributed
1.  Add user profile picture
1.  Better security measures for user password

## Technologies Used
1. ReactJS for frontend
2. ExpressJS for backend REST API
3. Postgres DB hosted on Render. used db-migrate to change from mysql to postgres db easily

### Libraries used

1. react-router-dom: https://github.com/remix-run/react-router (for routing different pages & redirecting user)
2. axios: https://github.com/axios/axios (to call various apis using the api utility class)
3. react-icons: https://github.com/react-icons/react-icons (various icons throughout the app)
4. dayjs: https://github.com/iamkun/dayjs (display date time)
5. react-toastify: https://github.com/fkhadra/react-toastify 

## Credits

- [Decode JWT token without library](https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library)
- [Custom hook for reusable Modal component](https://upmostly.com/tutorials/modal-components-react-custom-hooks)
- [Scroll to top on page change](https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition)
- [Fix react-router-dom page not found error after netlify deployment](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/)
- [Regex for checking valid image url](https://bobbyhadz.com/blog/javascript-check-if-url-is-image)
- [Leo Tolstoy portrait image](https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4Njg0ODUyOTU0NDQx/fb-tolstoy-2.jpg)
- [Logo created using Canva, cat vector images from Canva](https://www.canva.com/design/DAFSqBjsPpI/X1CWMmWEWr0p_fyfaEkY1g/view?utm_content=DAFSqBjsPpI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)
- [Favicon generator](https://favicon.io/)
- [Disable blue highlight on mobile](https://stackoverflow.com/questions/25704650/disable-blue-highlight-when-touch-press-object-with-cursorpointer)
- [Disable Google tap to search feature on mobile](https://stackoverflow.com/questions/60984046/how-to-disable-onclick-text-highlight-in-mobile-browser-chrome)
