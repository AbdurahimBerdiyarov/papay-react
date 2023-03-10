import { Box, Button, Stack } from "@mui/material";
import Tabpanel from "@mui/lab/TabPanel";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import "../../../css/order.css";

const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/qovurma.jpeg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className={"titleDish"}>Qovurma</p>
                      <Box className={"priceBox"}>
                        <p>$12</p>
                        <img
                          src={"/icons/Close.svg"}
                          style={{ marginRight: "15px", marginLeft: "15px" }}
                        />
                        <p>2</p>
                        <img
                          src={"/icons/pause.svg"}
                          style={{ marginRight: "15px", marginLeft: "15px" }}
                        />
                        <p>$22</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total_price_box red_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>$22</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>yetkazish xizmati</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>jami narxi</p>
                  <p>$24</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
