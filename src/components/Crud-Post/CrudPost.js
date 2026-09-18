import axios from "axios";
const CrudPost = () => {
  //   const addNewUser = async () => {
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: "test123",
  //           email: "test123@gmail.com",
  //         }),
  //         headers: {
  //           "Content-Type": "application/json; charset=UTF-8",
  //         },
  //       });

  //       if (!res.ok) {
  //         throw new Error("خطأ في ارسال البيانات");
  //       }

  //       const data = await res.json();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

  const addNewUser = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "test2026",
          email: "test2026@gmail.com",
        },
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={addNewUser}>Add New User</button>
    </div>
  );
};

export default CrudPost;
