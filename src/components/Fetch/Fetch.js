import { useState, useEffect } from "react";

export default function Fetch() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoding, setIsloding] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("No Data Today !");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloding(false);
      }
    };
    fetchData();
  }, []);

  if (isLoding) {
    return <p>Loding Data.....</p>;
  } else {
    return (
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
