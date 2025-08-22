# Next.js 15 Product Management App

### Live Demo: [https://next-assignment-10.vercel.app/](https://next-assignment-10.vercel.app/)

---

## Project Overview
This is a **Next.js 15 (App Router)** full-stack application with public and protected pages using **NextAuth.js** for authentication. Users can:

- View products and their details
- Login via social login (Google) or credentials
- Add new products from a protected dashboard (after authentication)

The app leverages **Next.js API routes** for backend functionality, demonstrating a modern full-stack architecture.

---

## Core Features

### 1. Landing Page (`/`)
- Sections: **Navbar**, **Hero**, **Product Highlights**, **Footer**
- Navigation to **Login** and **Products**
- Publicly accessible (no authentication required)

### 2. Login (`/login`)
- Authentication via **NextAuth.js** (Google login or credentials)
- Redirects to `/products` after successful login

### 3. Product List (`/products`)
- Publicly accessible
- Displays products from a mock backend or database
- Each product shows:
  - Name
  - Description
  - Price
  - Details button

### 4. Product Details (`/products/[id]`)
- Shows full details of a single product
- Publicly accessible

### 5. Protected Page: Add Product (`/dashboard/add-product`)
- Accessible only to logged-in users
- Form to add new products
- Stores product data in the database
- Redirects unauthenticated users to `/login`

---

## Optional Enhancements
- Loading spinner on form submission
- Toast notifications for successful product addition
- Light/Dark theme toggle

---

## Technologies Used
- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **Route Handlers (`/api`)** for backend
- Optional: Express.js server for advanced API handling
- **Tailwind CSS** for styling

---

## Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Raihanislam51/Next-Assignment-10.git
cd Next-Assignment-10

2.npm install
3.npm run dev