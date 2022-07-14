/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : Jumbotron/index.js    */
/* Team     : Coders of Hyrule      */
/* Date     : 07/13/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
// Import react modules
import React from "react";
// Function to style jumbotron
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}
// Export style
export default Jumbotron;