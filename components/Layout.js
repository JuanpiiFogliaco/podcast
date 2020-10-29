import Link from "next/link";
import React from "react";
import Head from "next/head";
import NavBar from '../components/NavBar';

const Layout = (React.FC = ({ children, title }) => {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>
     
      <NavBar></NavBar>
      {children}

      <style jsx>
        {`
          .container {
            width: 100%;
            min-height: 100vh;
          }
          .header {
            width: 100%;
            display: flex;
            color: #fff;
            background: #8756ca;
            text-align: center;
            padding: 15px;
          }
          a {
            color: #fff;
          }
        `}
      </style>
    </div>
  );
});

export default Layout;
