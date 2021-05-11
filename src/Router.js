import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./history";
import { ContextLayout } from "./layout";

const Login = lazy(() => import("./views/auth/login"));
const CreateWallet = lazy(() => import("./views/auth/createWallet"));
const Dashboard = lazy(() => import("./views/dashboard/index"));
const Home = lazy(() => import("./views/home/index"));
const Security = lazy(() => import("./views/security/index"));
const Setting = lazy(() => import("./views/setting/index"));
const Loading = lazy(() => import("./views/baseComponent/loading"));

const RouteConfig = ({ component: Component, MainLayout, HomeLayout, AuthLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag = MainLayout === true ? context.MainLayout : (
              HomeLayout === true ? context.HomeLayout : (
                AuthLayout === true ? context.AuthLayout : context.VerticalLayout
              )
            );
            return (
              <LayoutTag {...props}>
                <Suspense fallback={<></>}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)

const AppRoute = connect(null)(RouteConfig)

const RequireAuth = (data) => {
  // const isAuthorized = useSelector((state) => state.auth.isAuth);
  // if (!isAuthorized && url_path() !== LOGIN_URL) {
  //   return <Redirect to={LOGIN_URL}/>;
  // }
  for(let i in data.children) {
    if(data.children[i].props.path === data.location.pathname) {
      return data.children.slice(0, data.children.length-1);
    }
  }
  return data.children.slice(data.children.length-1, data.children.length);
};

class AppRouter extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Router history={history}>
        { this.props.loading && <Loading /> }
        <Switch>
          {/* <RequireAuth> */}
            <AppRoute path="/" exact component={Dashboard} MainLayout />
            <AppRoute path="/login" component={Login} AuthLayout />
            <AppRoute path="/create-wallet" component={CreateWallet} AuthLayout />
            <AppRoute path="/dashboard" component={Dashboard} MainLayout />
            <AppRoute path="/home" component={Home} HomeLayout />
            <AppRoute path="/security" component={Security} HomeLayout />
            <AppRoute path="/setting" component={Setting} HomeLayout />
          {/* </RequireAuth> */}
        </Switch>
      </Router>
    )
  }
}

const mapStateToPropss = (state) => ({
  loading: state.base.loading
})

const mapDispatchToProps = {
}

export default connect(mapStateToPropss, mapDispatchToProps)(AppRouter);