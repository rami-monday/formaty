import { action, makeAutoObservable, observable } from "mobx";
import { getAuthenticatedUser } from "../services/user";

class GlobalStore {
  constructor() {
    this.user = null;

    makeAutoObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser = (user) => {
    this.user = user;
  };

  saveUserLocally = async (tokenData) => {
    const user = await getAuthenticatedUser(tokenData);
    this.setUser(user);
  };
}

export default GlobalStore;
