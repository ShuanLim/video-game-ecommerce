/* -------------------------------- */
/* Project  : Video Game E-Commerce */
/* File     : DeleteBtn/index.js    */
/* Team     : Coders of Hyrule      */
/* Date     : 07/13/2022            */
/* Modified : 07/13/2022            */
/* -------------------------------- */
//Import react module
import React from "react";
// Function to show delete button
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}
// Export delete button
export default DeleteBtn;