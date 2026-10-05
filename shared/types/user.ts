export type User = {
  generaInfo: {
    name: string;
    username: string;
    role: "user" | "admin";
    surname?: string;
    photoUrl?: string;
  };
};
