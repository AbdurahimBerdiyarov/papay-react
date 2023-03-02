import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import "../../../css/order.css";
import moment from "moment";

const processOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/sendvich.jpeg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className={"titleDish"}>Qovurma</p>
                      <Box className={"priceBox"}>
                        <p>$11</p>
                        <img
                          src={"/icons/Close.svg"}
                          style={{ marginRight: "15px", marginLeft: "15px" }}
                        />
                        <p>100</p>
                        <img
                          src={"/icons/Pause.svg"}
                          style={{ marginLeft: "15px" }}
                        />
                        <p style={{ marginLeft: "15px" }}>$110</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total_price_box blue_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$60</p>

                  <img src={"/icons/Plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>yetkazish xizmati</p>
                  <p>$5</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>jami narxi</p>
                  <p>$65</p>
                </Box>
                <p className={"data_compl"}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>
                <Button
                  variant="contained"
                  className="prosecc_btn"
                  //   style={{
                  //     background: "#1565d4dd1",
                  //     color: "#ffffff",
                  //     borderRadius: "10px",
                  //     boxShadow:
                  //       "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px ",
                  //   }}
                >
                  yakunlash
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
