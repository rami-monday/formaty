import { inject, observer } from "mobx-react";
import React from "react";
import SignIn from "../pages/SignIn";

const AuthenticatedComponents = ({
  globalStore,
  children,
  redirectComponent,
}) => {
  const { user } = globalStore;

  if (user) {
    return children;
  }
  redirectComponent = redirectComponent || <SignIn />;
  return redirectComponent;
};

export default inject("globalStore")(observer(AuthenticatedComponents));
