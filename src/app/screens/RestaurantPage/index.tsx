import React from "react";
import { Container } from "@mui/system";
import { Route, Router, Switch, useRouteMatch } from "react-router-dom";

import { ChosenDish } from "./chosenDish";
import { OneRestaurant } from "./OneRestaurant";
import { AllRestaurants } from "./allRestaurant";
import "../../../css/restaurant.css";

export function RestaurantPage() {
  let restaurant = useRouteMatch();
  console.log(restaurant);

  return (
    <div className="restaurant_page">
      <Switch>
        <Route path={`${restaurant.path}/dish/:dish_id`}>
          <ChosenDish />
        </Route>
        <Route path={`${restaurant.path}/:restaurant_id`}>
          <OneRestaurant />
        </Route>
        <Route path={`${restaurant.path}`}>
          <AllRestaurants />
        </Route>
      </Switch>
    </div>
  );
}
