import React, { useEffect, useState } from "react";

const ListView = () => {
  const [state, setState] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/paths")
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  });
  console.log(state);
  return (
    <div>
      <h1>List View here!</h1>
    </div>
  );
};

export default ListView;
