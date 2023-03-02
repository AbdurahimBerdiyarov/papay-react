import React from "react";
import { Favorite } from "@mui/icons-material";
import { Box, Container, Rating, Stack, Button } from "@mui/material";
import Marginer from "../../components/marginer";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const chosen_list = Array.from(Array(3).keys());
const chosen_list_mini = Array.from(Array(30).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele, index) => {
              const image_path = `/others/sendvich.jpeg`;

              return (
                <SwiperSlide key={`${index}`}>
                  <img
                    src={image_path}
                    style={{ width: "100%", height: "100%" }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Stack>
            <Swiper
              className={"dish_swiper_mini"}
              loop={true}
              spaceBetween={30}
              style={{ marginTop: "20px" }}
              navigation={false}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView={3.5}
            >
              {chosen_list_mini.map((ele, index) => {
                return (
                  <SwiperSlide key={`${index}`}>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "18px",
                      }}
                      src="/others/kok.jpeg"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Stack>

        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className="dish_txt">Sweet Sandvich</strong>

            <span className={"resto_name"}>Texas De Brazil</span>

            <Box className="rating_box">
              <Rating
                name="half-rating"
                defaultValue={3.5}
                precision={0.5}
              ></Rating>

              <div className="evaluation_box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder style={{ color: "red" }} />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={false}
                  />

                  <span>98 ta</span>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />

                  <span>1000 ta</span>
                </div>
              </div>
            </Box>

            <p className="dish_desc_info">Judda mazaali sandvich</p>

            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />

            <div className="dish_price_box">
              <span>NARX:</span>

              <span>$11</span>
            </div>

            <div className="button_box">
              <Button variant="contained">SAVATGA QO'SHISH</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
