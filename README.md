# **Decentralized SPARQL Endpoint**

This project is a decentralized SPARQL endpoint built on top of the Interplanetary File System (IPFS). It's part of a Semantic Web project and is designed to be deployed on Fleek.

## **Prerequisites**

- Node.js
- npm

## **Installation**

1. Clone this repository:
    
    ```
    git clone https://github.com/idcesares/sparql-ipfs.git
    ```
    
2. Navigate into the project directory:
    
    ```
    cd sparql-ipfs
    ```
    
3. Install the dependencies:
    
    ```
    npm install
    ```
    

## **Usage**

To start the server, run:

```
npm start
```

The server will start on port 80 (or the port specified by the **`PORT`** environment variable).

You can send SPARQL queries to the endpoint by making a POST request to **`/sparql`** with your query in the body of the request.

## **Deployment**

This project is designed to be deployed on Fleek. To deploy your own instance:

1. Sign up for a Fleek account and connect it to your GitHub account.
2. Fork this repository and push it to your GitHub account.
3. In the Fleek dashboard, create a new site and select your repository.
4. Set the build command to **`npm install && npm start`** and the publish directory to **`/`**.
5. Click "Deploy Site" to start the deployment.

## **License**

This project is licensed under the MIT License - see the **[LICENSE]** file for details.