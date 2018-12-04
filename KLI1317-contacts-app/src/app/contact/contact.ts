export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  numPhone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;


  constructor(id?: number, firstName?: string, lastName?: string, numPhone?: string, email?: string, address?: string, postalCode?: string, city?: string)
  {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.numPhone = numPhone;
      this.email = email;
      this.address = address;
      this.postalCode = postalCode;
      this.city = city;
  }

}

