const Error = ({ error }) => (
  <div>
    <h1>Something went wrong...</h1>
    <h2>Please try again</h2>
    <p>Details: {error}</p>
  </div>
);

export default Error;
