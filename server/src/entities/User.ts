import { v4 as UUIDv4 } from "uuid";

export class User {
  public readonly id!: string;
  public name!: string;
  public last_name!: string;
  public email!: string;
  public password!: string;
  public avatar!: string;
  public bio!: string;
  public whatsapp!: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = UUIDv4();
  }
}
