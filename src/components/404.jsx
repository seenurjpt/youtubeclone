import { Button } from "@mui/material";

const E404 = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "red" }}>Page not found :(</h1>
        <Button variant="outlined" color="error" onClick={()=>{window.location.replace('/')}}>
          Back to feed
        </Button>
      </div>
    </>
  );
};
export default E404;
