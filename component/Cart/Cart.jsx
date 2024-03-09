import React from "react";
import "./Cart.css";

const Cart = ({ selectedCourses, remaining, totalCost }) => {
  console.log(selectedCourses);

  let totalCredit = 0;
  selectedCourses.forEach(course => {
    totalCredit += parseInt(course.credit);
  });

  return (
    <div>
      <h4 className="credit">Credit Hour Remaining: {remaining} </h4>
      
      <h4>Course Name</h4>
      {selectedCourses.map((course) => (
        <li>{course?.course}</li>
      ))}
      <h4>Total Credit Hour: {totalCredit}</h4>
      <h3>Total Price:          USD</h3>
    </div>
  );
};

export default Cart;
