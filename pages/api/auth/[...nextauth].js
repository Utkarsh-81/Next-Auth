import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "d4dcce8519a86a24fb2b",
      clientSecret: "c2486b096ed9c3cf527203cc3e66cd1ee2ec7064",
    }),
  ],
};

export default NextAuth(authOptions);
