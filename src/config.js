const apiUrl = (process.env.NODE_ENV === 'development') ? "http://localhost:3000" : "https://hood-connect-api-clone.herokuapp.com";

export { apiUrl };
