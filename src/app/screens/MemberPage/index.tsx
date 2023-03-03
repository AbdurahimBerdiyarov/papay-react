import React from "react";
import { Container } from "@mui/system";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { VisitOtherPage } from "./VisitOtherPage";
import { VisitMyPage } from "./VisitMyPage";
import "../../../css/my_page.css";

export function MemberPage() {
  let member = useRouteMatch();
  console.log(member);

  return (
    <div className="restaurant-page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage />
        </Route>

        <Route path={`${member.path}`}>
          <VisitMyPage />
        </Route>
      </Switch>
    </div>
  );
}
