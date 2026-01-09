interface UserProps {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export class User {
  constructor(public props: UserProps) {}

  toJSON() {
    return {
      ...this.props,
    };
  }
}
