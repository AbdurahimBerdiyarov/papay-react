import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import "../../../css/community.css";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = "/community/default_article.svg";

        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none", marginBottom: "15px" }}
            href={``}
          >
            <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>

            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src={"/auth/default_user.svg"}
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />

                <span
                  className={"all_article_author_user"}
                  style={{ marginLeft: "5px", marginTop: "15px" }}
                >
                  Rahim
                </span>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "10px", color: "#E3C08D" }}
              >
                <span className={"all_article_title"}>evaluation</span>

                <p className={"all_article_desc"}>
                  Texas De Brazil zor Restaurnat
                </p>
              </Box>

              <Box>
                <Box
                  className={"big_like_box"}
                  style={{ width: "100%", height: "30px" }}
                  sx={{ mb: "10px" }}
                >
                  <Box
                    className={"like_box"}
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{moment().format("YY-MM-DD HH:mm")}</span>

                    <Checkbox
                      style={{ marginLeft: "40px" }}
                      icon={<FavoriteBorder style={{ color: "white" }} />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                    />

                    <span style={{ marginRight: "17px" }}>100</span>

                    <RemoveRedEyeIcon />

                    <span style={{ marginLeft: "17px" }}>1000</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
