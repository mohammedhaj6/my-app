function UserCard({ name, role, isOnline, unReadCount }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      {isOnline ? <p style={{ color: "green" }}>online •</p> : <p>offline</p>}
      {role ==='admin'&&<p>Admin</p>}
      <h2>{name}</h2>
      {unReadCount>0&&<p style={{}}> You Have Unread Messages : {unReadCount}</p>}
    </div>
  );
}

export default UserCard;
