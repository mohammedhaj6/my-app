import { useEffect, useState } from "react";
import axios from "axios";
const Axios = () => {
  const [users, setUsers] = useState([]);
  const [isLoding, setIsloding] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsloding(false);
      }
    };
    fetchData();
  }, []);

  if (isLoding) {
    return <p>Loding Data....</p>;
  } else {
    return (
      <div>
        <h2>Users</h2>
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Axios;
