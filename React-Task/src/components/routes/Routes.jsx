import React from "react";
import Login from "../adminComponents/Login";
import AdminHome from "../adminComponents/AdminHome";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const Routes = props => {
  const { authorized } = props.authorized;
  return (
    <div className="container-fluid routes-block">
      <Switch>
        <Route
          path="/admin/login"
          render={() => <Login history={props.history} />}
        />
        <Route
          path="/admin/home"
          render={() =>
            authorized ? <AdminHome /> : <Redirect to="/admin/login" />
          }
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return { authorized: state };
}
export default withRouter(connect(mapStateToProps)(Routes));
