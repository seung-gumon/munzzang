declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      useName : string;
      name : string;
      email : string;
      address : string
      zip : string;
      role : string;
      accessToken : string;
    }
  }
}
