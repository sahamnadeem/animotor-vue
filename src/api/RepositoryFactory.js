import UserRepository from "./UserRepository";

const repositories = {
  users: UserRepository,
  // other repositories ...
};

export default {
  get: name => repositories[name]
};
