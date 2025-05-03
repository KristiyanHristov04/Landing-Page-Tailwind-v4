# Landing Page Project

This project is a responsive landing page built using React, Vite, and Tailwind CSS v4.

## Project Overview

This is a simple landing page showcasing various sections commonly found on websites, styled using Tailwind CSS v4.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server.
*   **Tailwind CSS v4:** A utility-first CSS framework.
*   **AOS (Animate On Scroll Library):** For scroll animations.
*   **react-countup:** For animating numbers.

## Project Structure

```
landing-page/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable React components
│   │   ├── donate/
│   │   ├── donate-button/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero-section/
│   │   ├── our-impact/
│   │   ├── our-mission/
│   │   └── stay-connected/
│   ├── recent-projects/    # Recent projects components
│   ├── App.jsx             # Main application component
│   ├── index.css           # Tailwind CSS entry point
│   └── main.jsx            # Application entry point
├── .eslintrc.cjs           # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation (this file)
└── vite.config.js          # Vite configuration
```

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd landing-page
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server, typically available at `http://localhost:5173`.
