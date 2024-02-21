# JS Frameworks Charlotte Hope - MegaMart

## Description

This is my submission for JS frameworks at Noroff. It's an eCom store, built with React.
- [Live site](https://megamart-shop.netlify.app/)

## Built with

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Sass](https://sass-lang.com/)
- [FortAwesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)

## Screenshots
### Homepage
<img width="1728" alt="Skjermbilde 2024-02-21 kl  15 48 33" src="https://github.com/charlottehope/MegaMart/assets/65370439/f98408cc-6c0a-4145-837e-cd94050dc3ee">

### Product details
<img width="1728" alt="Skjermbilde 2024-02-21 kl  15 48 49" src="https://github.com/charlottehope/MegaMart/assets/65370439/47f2d0ac-230a-447d-8d93-20e91dd9c19a">

### Cart without products
<img width="1728" alt="Skjermbilde 2024-02-21 kl  15 52 39" src="https://github.com/charlottehope/MegaMart/assets/65370439/7bb94425-f768-4787-a866-11cf935b5d91">

### Cart with products
<img width="1728" alt="Skjermbilde 2024-02-21 kl  15 49 12" src="https://github.com/charlottehope/MegaMart/assets/65370439/d7c519f6-03e8-4e0d-940c-347adcb08f66">

### Contact page
<img width="1728" alt="Skjermbilde 2024-02-21 kl  15 49 27" src="https://github.com/charlottehope/MegaMart/assets/65370439/c175c12d-71c9-4cca-ba4c-cdba0ae5bd53">

### Order complete
<img width="1728" alt="Skjermbilde 2024-02-21 kl  15 49 46" src="https://github.com/charlottehope/MegaMart/assets/65370439/1337b907-db5f-485b-a441-5a27966db983">


## Getting started

### Installing

1. Clone the repo:

```bash
   git clone git@github.com:charlottehope/MegaMart.git
```

2. Install the dependencies:

```
npm install
```

### Running

3. Run the project locally:

```
npm run start
```

This opens the application in your browser (default port 3000):
[http://localhost:3000](http://localhost:3000)

## Contributing

This is a school project, so no contributing is available.

## Contact

- [My Facebook profile](https://www.facebook.com/charlotte.hope.984)
- [My LinkedIn profile](https://www.linkedin.com/in/charlotte-hope-38b977151/)
- [My Instagram profile](https://www.instagram.com/charlotte.hope93/)

# Original Project Brief

## Goal

To apply knowledge of React to build an eCom store.

## Brief

The API you are using for this brief is: https://api.noroff.dev/api/v1/online-shop

You can find individual items by appending a product ID at the end of the API URL e.g. https://api.noroff.dev/api/v1/online-shop/f99cafd2-bd40-4694-8b33-a6052f36b435

You are tasked with build out the following pages for an eCom store:

Homepage
Individual product page
Cart page
Checkout success page
The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

You pages should use a <Layout> component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:

Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)
You will be using React Router to switch between pages.

Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

You are not required to use TypeScript.

Your code is expected to be clean and well-formatted.

## Process

1. Create a new CRA app.
2. Create a Header that has a Nav.
3. Create a Cart Icon component and position this next to your Nav. This Cart Icon component will have an overlay that displays the number of items in the cart.
4. Create a Footer component.
5. Create a Layout component that has your Header and Footer.
6. Create the other pages:

&nbsp;&nbsp;&nbsp;&nbsp;6.1 ContactPage

&nbsp;&nbsp;&nbsp;&nbsp;6.2 ProductPage

&nbsp;&nbsp;&nbsp;&nbsp;6.3 CheckoutPage

&nbsp;&nbsp;&nbsp;&nbsp;6.4 CheckoutSuccessPage

7. Add React Router and route to each of the pages. The ProductPage page will be using a dynamic segment.
8. Fetch the list of products on the Homepage and store this as a state.
9. On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.
10. The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.
11. On the ProductPage, use the ID of the product as the params for the dynamic segment. Add the product details as mentioned in the brief.
12. Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.
13. Clicking on the Cart Icon component will take the user to the CheckoutPage page.
14. The CheckoutPage must list all of the products in the cart, show a total at the bottom and a Checkout button.
15. Clicking the Checkout button will take the user to the CheckoutSuccessPage.
16. The CheckoutSuccessPage should display that the order was successful and clear the cart. There should be a link to go back to the store.
17. On the ContactPage, create the following inputs with the following requirements.

&nbsp;&nbsp;&nbsp;&nbsp;17.1 Full name (Minimum number of characters is 3, required)

&nbsp;&nbsp;&nbsp;&nbsp;17.2 Subject (Minimum number of characters is 3, required)

&nbsp;&nbsp;&nbsp;&nbsp;17.3 Email (Must be a valid email address, required)

&nbsp;&nbsp;&nbsp;&nbsp;17.4 Body (Minimum number of characters is 3, required)

&nbsp;&nbsp;&nbsp;&nbsp;17.5 Submit button

18. console.log the data from the form once validation requirements are met.
19. Once your project is done, deploy it to Netlify.

## Delivery

Deploy your website on Netlify.

Please submit your public GitHub repository URL and the URL for your Netlify live site.

Please make sure to exclude node_modules by using a .gitignore file.
