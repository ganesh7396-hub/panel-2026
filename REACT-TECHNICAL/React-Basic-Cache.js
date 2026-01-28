import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (!users) {
      fetch("/api/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    }
  }, [users]);

  if (!users) return <p>Loading...</p>;

  return users.map(u => <div key={u.id}>{u.name}</div>);
}
export default Users;
