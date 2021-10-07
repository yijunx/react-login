import React, { useState } from "react";
import axios from "axios";

function ResourceBlock() {
  const [resources, setResources] = useState([]);
  let content = null;
  const getResourcesHandler = (e) => {
    e.preventDefault();
    axios
      .get("https://auth-test.freedynamicdns.net/resources")
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setResources(response.data.response);
          console.log(resources);
        }
      });
  };
  content = resources.map((item) => (
    <div>
      <p>resource id: {item.id}</p>
    </div>
  ));
  console.log(content);
  return (
    <div>
      <button onClick={getResourcesHandler}>show resource</button>
      <div>{content}</div>
    </div>
  );
}

export default ResourceBlock;
