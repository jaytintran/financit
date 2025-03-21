# Financit - MERN Finance Dashboard with Machine Learning Predictions

Financit is a full-stack finance dashboard application built using the **MERN** (MongoDB, Express, React, Node.js) stack. It features **machine learning-based financial predictions** and a sleek **Material UI** design for intuitive user interactions. The application provides **data visualization** with **Recharts**, **state management** with **Redux Toolkit**, and is optimized for performance using **Vite**.

---

## 🚀 Features

- **Finance Dashboard:** Track financial metrics, trends, and forecasts.
- **Machine Learning Predictions:** Uses regression analysis to forecast financial trends.
- **Modern UI/UX:** Built with Material UI for a professional and responsive design.
- **Data Visualization:** Interactive charts and tables with Recharts & MUI Data Grid.
- **Drag & Drop File Uploads:** Implemented using React Dropzone.
- **Fast & Scalable Backend:** Powered by Node.js, Express.js, and MongoDB.
- **Optimized Performance:** Vite for fast development & Redux Toolkit for efficient state management.
- **Deployment-Ready:** Can be deployed on **Fly.io** (backend) & **Vercel** (frontend), with **Docker** support.

---

## 🛠️ Tech Stack

### **Frontend:**

- **Vite** ([Guide](https://vitejs.dev/guide/)): a fast build tool for modern web development.
- **React Router** ([Docs](https://reactrouter.com/en/v6.3.0/getting-started/overview)): for dynamic SPA (Single Page Application) routing and navigation.
- **React Dropzone** ([Repo](https://github.com/react-dropzone/react-dropzone)): for drag-and-drop file uploads HTML5 zone.
- **Redux** ([Docs](https://redux.js.org/)): a predictable state container, a library for managing global application state.
- **Redux Toolkit** ([Docs](https://redux-toolkit.js.org/)): a set of tools for efficient Redux development.
- **Redux Toolkit Query** ([Docs](https://redux-toolkit.js.org/rtk-query/overview)): a powerful data fetching and caching tool for Redux.
- **Material UI (MUI)** ([Docs](https://mui.com/material-ui/getting-started/)): a popular React UI framework that follows Google's Material Design guidelines.
- **Emotion** ([Docs](https://emotion.sh/docs/introduction)): a CSS-in-JS library for styling React components.
- **Material UI Icons** ([Docs](https://mui.com/material-ui/material-icons/)): a library of pre-built icons for Material UI.
- **MUI Data Grid** ([Docs](https://mui.com/x/api/data-grid/data-grid/)): a powerful data grid component for React.
- **Recharts (Data Visualization)** ([Docs](https://recharts.org/en-US/)): a composable charting library built on D3.js.
- **CSS Grid & Flexbox** ([Grid Cheatsheet](https://grid.malven.co/) / [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)): for layout and styling.

### **Backend:**

- **Node.js** ([Download](https://nodejs.org/en/download/))
- **Express.js**
- **MongoDB**
- **Regression (Machine Learning)** ([Repo](https://github.com/tom-alexander/regression-js))
- **Nodemon (Dev Utility)** ([Repo](https://github.com/remy/nodemon))
- **Fly.io for Node.js Deployment** ([Docs](https://fly.io/docs/languages-and-frameworks/node/))

### **Development Tools:**

- **VS Code** ([Download](https://code.visualstudio.com/download))
- **Redux DevTools** ([Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd))
- **Pesticide (CSS Debugging)** ([Chrome Extension](https://chrome.google.com/webstore/detail/pesticide-for-chrome-beta/))
- **Data Model Diagram** ([Lucidchart](https://lucid.app/lucidchart/23d63d3a...))
- **Docker (Containerization)** ([Download](https://www.docker.com/products/docker-desktop/))
- **Vercel (Frontend Deployment)** ([Docs](https://vercel.com/))

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/yourusername/financit.git
cd financit
```

### **2️⃣ Install Dependencies**

#### Frontend:

```sh
cd client
npm install
```

#### Backend:

```sh
cd server
npm install
```

### **3️⃣ Run the Application**

#### Start Backend (Express Server):

```sh
cd server
npm run dev
```

#### Start Frontend (Vite React App):

```sh
cd client
npm run dev
```

---

## 🚀 Deployment

### **Deploy Backend to Fly.io**

1. Install Fly CLI: `npm install -g flyctl`
2. Authenticate: `flyctl auth login`
3. Deploy:

```sh
cd server
flyctl launch
```

### **Deploy Frontend to Vercel**

1. Install Vercel CLI: `npm install -g vercel`
2. Authenticate: `vercel login`
3. Deploy:

```sh
cd client
vercel --prod
```

---

## 📜 License

MIT License

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📞 Contact

For inquiries, feel free to reach out at [your email].
