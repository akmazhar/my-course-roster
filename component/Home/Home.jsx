import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]); 
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akmazhar/json-format-api/main/ap.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data.courses)); 
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id == course.id);

    let count = course.credit;

    if (isExist) {
      return alert(
        "I apologize to you Sir, for your kind attention you have already enrolled in this course. Thank You."
      );
    } else {
      selectedCourses.forEach((item) => {
        count = count + item.credit;
      });

    const totalRemaining =  20 - count
    setTotalCost(count)
    setRemaining(totalRemaining);

      // console.log(count);
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // console.log(selectedCourses);

  // console.log(allCourses); // Correctly log allCourses

  return (
    <div className="container">
      <h1>Course Registration</h1>
      <div className="first-container">
        <div className="card-container">
          {allCourses.map((courses) => (
            <div key={courses?.id} className="card">
              <div className="card-img">
                <img className="image" src={courses?.image} alt="" />
              </div>
              <h4>{courses?.course}</h4>
              <p>
                <small>{courses?.details}</small>
              </p>
              <div className="info">
                <p>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  {courses?.price}
                </p>
                <p className="icon">
                  <div class="icon h2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
                    </svg>
                  </div>
                  Credit hrs: {courses?.credit}
                </p>
              </div>
              <button
                onClick={() => handleSelectCourse(courses)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart selectedCourses={selectedCourses} remaining = {remaining} totalCost = {totalCost} ></Cart>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
