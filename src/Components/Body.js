import React, { useState } from "react";

const Body = () => {
  const [description, setDescription] = useState(true);

  const [reviews, setReviews] = useState(false);

  const descriptionHandler = () => {
    setDescription(true);
    setReviews(false);
  };
  const reviewsHandler = () => {
    setDescription(false);
    setReviews(true);
  };
  return (
    <>
      <div className="d-flex container" style={{ alignItems: "center" }}>
        {/* left side start */}
        <div style={{ width: "40%" }}>
          {description && (
            <>
              <h3
                style={{
                  color: description ? "#FF922C" : "",
                }}
              >
                $ 35
              </h3>
              <h5>Asian Cocumber salad</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button
                style={{
                  backgroundColor: description ? "#FF922C" : "",
                  color: description ? "white" : "",
                  borderRadius: "20px",
                  border: "none",
                  padding: "7px",
                }}
              >
                Order Now
              </button>
            </>
          )}

          {reviews && (
            <>
              <h3
                style={{
                  color: reviews ? "#54BF29" : "",
                }}
              >
                $ 55
              </h3>
              <h5>Pakistani Cocumber salad</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button
                style={{
                  backgroundColor: reviews ? "#54BF29" : "",
                  color: reviews ? "white" : "",
                  borderRadius: "20px",
                  border: "none",
                  padding: "7px",
                }}
              >
                Order Now
              </button>
            </>
          )}
        </div>
        {/* left side end */}

        {/* right side start */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            alignItems: "center",
          }}
        >
          <div>
            {description && (
              <>
                <img src="./m1.png" alt="" style={{ width: "760px" }} />
                <img
                  src="./m4.png"
                  alt=""
                  style={{ height: "150px", width: "150px" }}
                />
                {/* </div> */}
              </>
            )}
          </div>

          <div>
            {reviews && (
              <>
                <img src="./m2.png" alt="" style={{ width: "760px" }} />
                <img
                  src="./m3.png"
                  alt=""
                  style={{ height: "150px", width: "150px" }}
                />
              </>
            )}
          </div>

          <div>
            <button
              onClick={descriptionHandler}
              style={{
                backgroundColor: description ? "#FF922C" : "black",
                color: description ? "white" : "black",
                fontWeight: "bold",
                borderRadius: "100%",
                border: "none",
                padding: "12px",
              }}
            >
              <img
                src="./leftBox.png"
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </button>
            <button
              onClick={reviewsHandler}
              style={{
                backgroundColor: reviews ? "#54BF29" : "black",
                color: reviews ? "white" : "black",
                fontWeight: "bold",
                borderRadius: "100px",
                border: "none",
                marginLeft: "80px",
                padding: "12px",
              }}
            >
              <img
                src="./leftBox.png"
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* right side end */}
    </>
  );
};

export default Body;
