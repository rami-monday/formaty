import { action, makeAutoObservable, observable } from "mobx";

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
}

export default GlobalStore;
