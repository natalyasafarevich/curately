export type User = {
  generaInfo: {
    username: string;
    role: "user" | "admin";
    surname?: string;
    photoUrl?: string;
  };
};
