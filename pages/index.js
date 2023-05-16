import { useSession, signIn, signOut } from "next-auth/react";

const index = () => {
  const session = useSession();
  if (session.data === null) {
    return <button onClick={signIn}>Login</button>;
  }
  console.log("Session", session);
  return (
    <>
      <h1>Hello {session?.data?.user?.name}</h1>
      <button onClick={signOut}>Signout</button>
    </>
  );
};

export default index;
