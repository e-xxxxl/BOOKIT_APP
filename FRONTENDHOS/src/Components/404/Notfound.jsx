import React from "react";

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.oops}>Oops!</h1>
      <p style={styles.text}>404 - PAGE NOT FOUND?</p>
      <p style={styles.subText}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable...........
      </p>
      <button style={styles.button} onClick={() => window.location.href = "/"}>
        GO TO HOMEPAGE
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  },
  oops: {
    fontSize: "5rem",
    fontWeight: "bold",
    background: "url('https://via.placeholder.com/500x200')", // Add galaxy image here
    color: "black",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  },
  text: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  subText: {
    fontSize: "1rem",
    color: "#777",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "purple",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NotFound;