const User = require('../Models/EmployeeModel');  // Employee Model (tblEmployee)
const Attendance = require('../Models/CalnderModel');  // Attendance Model (tblAttendance)
const mongoose = require('mongoose');

// exports.getDashBoardData = async () => {
//   try {
//     const users = await User.find({ IsActive: 1 })  
//     return users;  // Return the fetched users with company details
//   } catch (err) {
//     console.error('Error fetching users:', err);  // Log and handle any errors
//     throw err;  // Rethrow the error for upstream error handling
//   }
// };


exports.getDashBoardData = async () => {
  try {
    // Step 1: Fetch active employees
    const employees = await User.find({ IsActive: 1 });

    console.log("Employees:", employees);
    
    // Step 2: Fetch and calculate attendance for each employee
    const dashboardData = await Promise.all(employees.map(async (employee) => {
      // Ensure ObjectId is correctly instantiated with `new`
      const attendanceRecords = await Attendance.find({
        EmployeeId: new mongoose.Types.ObjectId(employee._id),
        CompanyId: new mongoose.Types.ObjectId(employee.CompanyId)  // Ensure the attendance is for the same company
      });

      console.log("Attendance Records for employee:", employee.FirstName, attendanceRecords);

      // Calculate total present days, absent days, and total payment
      let totalPresentDays = 0;
      let totalAbsentDays = 0;
      let totalPayment = 0;
      attendanceRecords.forEach((record) => {
        if (record.IsPresent) {
          totalPresentDays += 1;
          totalPayment += parseFloat(record.Amount);  // Sum payment for present days
        } else {
          totalAbsentDays += 1;
        }
      });

      return {
        employees,
        attendanceRecords:{
          totalPresentDays,
          totalAbsentDays,
          totalPayment
        }   
      };
    }));

    // Now that dashboardData is fully initialized, you can log it
    console.log("Dashboard Data:", dashboardData);

    return dashboardData;  // Return aggregated dashboard data
  } catch (err) {
    console.error('Error fetching dashboard data:', err);
    throw err;  // Handle errors
  }
};


