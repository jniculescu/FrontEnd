export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  numPhone: string;
  email: string;


  constructor(id?: number, firstName?: string, lastName?: string, numPhone?: string, email?: string)
  {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.numPhone = numPhone;
      this.email = email;
  }

}

