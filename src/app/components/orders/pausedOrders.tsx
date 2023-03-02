import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import "../../../css/order.css";
import moment from "moment";

const pausedOrders = [
  [1, 2],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/sendvich.jpeg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className={"titleDish"}>Sandvich</p>
                      <Box className={"priceBox"}>
                        <p>$7</p>
                        <img
                          src={"/icons/Close.svg"}
                          style={{ marginRight: "15px", marginLeft: "15px" }}
                        />
                        <p>3</p>
                        <img
                          src={"/icons/pause.svg"}
                          style={{ marginLeft: "15px" }}
                        />
                        <p style={{ marginRight: "15px", marginLeft: "15px" }}>
                          $21
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total_price_box black_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$110</p>
                </Box>
                <p className={"data_compl"}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>
                <button
                  style={{
                    background: "red",
                    border: "none",
                    width: "126px",
                    height: "36px",
                    borderRadius: "10px",
                    color: "white",
                  }}
                  className="paused_btn_otmen"
                >
                  bekor qilish
                </button>

                <button
                  className="paused_btn_go"
                  //   style={{
                  //     background: "#47cdcddd1",
                  //     color: "#ffffff",
                  //     borderRadius: "10px",
                  //     border: "none",
                  //     outline: "none",
                  //     boxShadow:
                  //       "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px ",
                  //   }}
                >
                  to'lash
                </button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}

//
