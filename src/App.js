import UserCard from "./components/User/UserCard";

function App() {
  return (
    <>
      <UserCard name="mohammed" role="admin" isOnline={true} unReadCount={3} />
      <UserCard name="mostfa" role="guest" isOnline={false} unReadCount={0} />
      <UserCard name="ali" role="admin" isOnline={true} unReadCount={1} />
    </>
  );
}

export default App;
