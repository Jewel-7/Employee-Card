import { userList } from "./data.js";
import { renderEmployeeCard } from "./components/employeeDiv.js";
import { head } from "./head.js";
import { blogs } from "./data1.js";
import { footContent } from "./footcon.js";
// import { footer } from "./foot.js";

window.onload = () => {
  const logDiv = document.getElementById("head");
  const logoImageDiv = head(blogs[2].imageUrl);
  console.log(logoImageDiv);
  logDiv.appendChild(logoImageDiv);

  const rootDiv = document.getElementById("root");
  userList.then((employees) => {
    employees.forEach((employee) => {
      rootDiv.appendChild(renderEmployeeCard(employee));
    });
  });

  const footConDiv = document.getElementById("foot-content");
  const footContDiv = footContent(blogs[4].content);
  footConDiv.appendChild(footContDiv);
};
