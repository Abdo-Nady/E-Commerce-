
# My Super Duper Store

A fully functional **educational** e-commerce React app built for learning purposes. It uses Redux for state management and features multi-language support (English & Arabic), product details, shopping cart, and a simple checkout flow simulation.

---

## Features

### Product Listing
- Browse products with 6 items per page.
- Product cards show title, brand, price, availability, and images.
- Add to cart directly from product cards.
- Visual indication if the product is already in the cart.

### Product Detail Page
- Multiple product images.
- Price & discount display.
- Stock availability badge.
- Customer reviews (mocked).
- Additional info: SKU, dimensions, warranty, return policy.
- Add to cart and Buy Now buttons.

### Shopping Cart
- Add, remove, increment, decrement product quantity.
- Clear cart functionality.
- Order summary with subtotal, tax, shipping, and total.
- Dynamic UI reflecting stock limits.

### User Authentication Pages (Frontend Only)
- Sign In and Sign Up forms with client-side validation.
- Form validation using regex patterns (SignUp) and React Hook Form + Yup (Contact Us).
- Navigation between pages without backend authentication.

### Contact Us Form
- Fully validated contact form using `react-hook-form` and `yup`.
- Phone input with country code support using `react-phone-input-2`.
- Success feedback on submission (mocked, logs data to console).

### Navigation & Language Support
- Responsive Navbar with cart count.
- Language toggle (English / Arabic) with RTL support for Arabic.

### 404 Page
- Friendly page for non-existent routes.

---

## Tech Stack

- **Frontend**: React
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **HTTP Client**: Axios
- **Forms & Validation**: react-hook-form, Yup
- **Phone Input**: react-phone-input-2
- **Styling**: Bootstrap 5 + custom CSS
- **Icons**: Bootstrap Icons
- **LocalStorage**: Stores user-selected language

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <repo-folder>
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## API

Products are fetched from the public API:
`https://dummyjson.com/products`

No backend authentication or real order processing is implemented—everything is for learning purposes.

---

## Project Structure

```
/src
  /apis
    config.js            # Axios instance
  /components
    Navbar.jsx
    ProductCard.jsx
  /context
    LanguageContext.jsx
  /pages
    Home.jsx
    Cart.jsx
    ProductDetail.jsx
    SignIn.jsx
    SignUp.jsx
    ContactUs.jsx
    NotFound.jsx
  /store
    /slices
      cartSlice.js
      cartSelectors.js
    store.js
  App.jsx
```

---

## What I Learned

* Built reusable React components and managed state with Redux Toolkit.
* Handled forms and validation using `react-hook-form` and `Yup`.
* Implemented routing with React Router and dynamic product pages.
* Added multi-language support with RTL for Arabic.
* Fetched data from a public API using Axios.
* Styled UI with Bootstrap 5 and custom CSS.
* Integrated phone input using `react-phone-input-2`.
* Set up project with Vite for fast development and build.
