import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
    return (
        <div className='text-white p-4'>
            <h1 data-aos="fade-up" className='text-center text-5xl font-semibold'>Blogs</h1>
            <div className='my-8'>
                <h2 className='text-2xl'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p data-aos="fade-up"><b>Ans: </b><small>Access Token: An access token is a credential that is used to authenticate and authorize a user to access protected resources or perform certain actions on a server. It is usually a string of characters, generated by the server, and provided to the client after a successful authentication process. <br />
                    Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. It is typically issued along with the access token and has a longer expiration time. <br />
                    <b> Here's a general workflow of how access tokens and refresh tokens work:</b>
                    <br /> 1. The client authenticates with the server by providing its credentials (e.g., username and password). <br />
                    2. If the authentication is successful, the server generates an access token and a refresh token. <br />
                    3. The server sends the access token to the client, which includes it in the header or authorization field of subsequent requests to protected resources. <br />
                    4. When the access token expires, the client sends the refresh token to the server. <br />
                    5. The server verifies the refresh token and, if valid, issues a new access token to the client. <br />
                    6. The client continues to use the new access token for further requests. <br />
                    7. This process repeats until the refresh token itself expires or is revoked. <br />
                    <b>We store them:</b> <br />
                    Access Token: The access token is usually short-lived and typically stored in memory or a secure storage mechanism provided by the operating system or framework. Storing it in memory ensures that it is only available for the duration of the client's session. <br />
                    Refresh Token: The refresh token is a long-lived credential and needs to be securely stored to prevent unauthorized access. It is often stored in an HTTP-only secure cookie, which means it cannot be accessed by JavaScript and is automatically included in every request to the server.
                </small></p> <br />

                <h2 className='text-2xl'>2. Compare SQL and NoSQL databases?</h2>
                <p data-aos="fade-up"><b>Ans: </b><small> <br />
                    SQL Databases: <br />1.Relational data model with structured tables and predefined schemas. <br />
                    2.Vertical scalability (adding more resources to a single server) is common. <br />
                    3.Standardized query language (SQL) for complex queries, joins, and aggregations. <br />
                    4.Enforce strict schemas, making schema alterations complex. <br />
                    5.Provide ACID transactions for data integrity and reliability. <br />
                    6.Well-suited for structured, relational data in applications like financial systems and e-commerce platforms. <br />
                    NoSQL Databases: <br />
                    1.Various data models such as key-value, document, columnar, or graph. <br />
                    2.Horizontal scalability (adding more servers) is inherent, allowing for easy distribution of data. <br />
                    3.May have their own query languages or support a subset of SQL-like querying. <br />
                    4.Offer schema flexibility, accommodating unstructured and evolving data structures. <br />
                    5.May sacrifice ACID transactions for higher scalability and performance. <br />
                    6.Suitable for handling large amounts of unstructured or semi-structured data in applications like content management systems and real-time analytics.</small></p> <br />
                <h2 className='text-2xl'>3. What is express js? What is Nest JS?</h2>
                <p data-aos="fade-up"><b>Ans: </b> <br /> <small>
                Express.js is a popular web application framework for Node.js. It provides a minimalist, flexible, and unopinionated approach to building web servers and APIs. Express.js allows developers to create server-side applications and APIs quickly and easily. <br />
                NestJS, on the other hand, is a framework for building scalable and efficient server-side applications using Node.js. It is built on top of Express.js and enhances it with additional features and architectural patterns inspired by Angular. NestJS follows the modular and component-based development approach and uses TypeScript as its primary language. <br />
                </small></p> <br />
                <h2 className='text-2xl'>4. What is MongoDB aggregate and how does it work?</h2>
                <p data-aos="fade-up"><b>Ans: </b><small> <br />
                MongoDB's aggregate operation is a powerful feature that allows you to perform advanced data processing and analysis on collections. It works by providing a pipeline of stages, where each stage performs a specific operation on the documents and passes the results to the next stage. This allows you to filter, group, project, sort, and perform various aggregations on your data. The aggregate pipeline provides flexibility and expressiveness, enabling you to manipulate and analyze data in a controlled and efficient manner.</small></p>
            </div>
        </div>
    );
};

export default Blogs;