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
      console.log("EmployeeId:", employee._id);
      console.log("CompanyID:", employee.CompanyId);

      // Fetch attendance records for the current employee
      const attendanceRecords = await Attendance.find({
        EmployeeId: new mongoose.Types.ObjectId(employee._id),
        CompanyId: new mongoose.Types.ObjectId(employee.CompanyId)
      });

      console.log("Attendance Records for employee:", employee.FirstName, attendanceRecords);

      // Calculate total present days, absent days, and total payment
      let totalPresentDays = 0;
      let totalAbsentDays = 0;
      let totalPayment = 0;

      attendanceRecords.forEach((record) => {
        totalPresentDays += 1;  // Increment the count for present days
        
        // Check if Amount is valid before adding to totalPayment
        if (record.Amount !== '' && record.Amount !== undefined && record.Amount !== null) {
          totalPayment += parseFloat(record.Amount);  // Sum payment for present days
          console.log("Total Payment so far:", totalPayment);
        }
      });

      // Return the current employee data and their attendance record
      return {
        employee,  // Only the current employee, not the full employees array
        attendanceRecords: {
          totalPresentDays,
          totalAbsentDays,  // Assuming you calculate absent days based on some criteria
          totalPayment,
          EmployeeId: employee._id  // Correct EmployeeId to be the current employee
        }
      };
    }));

    // Now that dashboardData is fully initialized, you can log it
    console.log("Dashboard Data:", dashboardData);

    return dashboardData;  // Return aggregated dashboard data for all employees
  } catch (err) {
    console.error('Error fetching dashboard data:', err);
    throw err;  // Handle errors
  }
};

