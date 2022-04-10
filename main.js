var listofemployees = new ListOfEmployees();
var validation = new Validation();
function getEle(id) {
  return document.getElementById(id);
}

getLocalStorage();

// thêm nhân viên
function getEmployeeInformation() {
  var nickEmployee = getEle("tknv").value;
  var fullName = getEle("name").value;
  var emailEmployee = getEle("email").value;
  var password = getEle("password").value;
  var dateWork = getEle("datepicker").value;
  var salaryBasic = getEle("luongCB").value;
  var regency = getEle("chucvu").value;
  var hourWork = getEle("gioLam").value;

  //create flag to check
  var flag = true;
  //Validation

  flag &=
    validation.emptycheck(
      nickEmployee,
      "tbTKNV",
      "Tài khoản không được để trống"
    ) &&
    validation.checkLength(
      nickEmployee,
      "tbTKNV",
      "Tài khoản từ 4 - 6 ký tự",
      4,
      6
    );
  flag &=
    validation.emptycheck(fullName, "tbTen", "Họ và tên không để trống") &&
    validation.checkString(fullName, "tbTen", "Tên nhân viên phải là chữ");
  flag &=
    validation.emptycheck(emailEmployee, "tbEmail", "Email không để trống") &&
    validation.checkEmail(
      emailEmployee,
      "tbEmail",
      "Email phải đúng định dạng"
    );
  flag &=
    validation.emptycheck(password, "tbMatKhau", "Mật khẩu không để trống") &&
    validation.checkPassword(
      password,
      "tbMatKhau",
      "Mật khẩu chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt"
    ) &&
    validation.checkLength(
      password,
      "tbMatKhau",
      "Mật khẩu từ 6 - 10 ký tự",
      6,
      10
    );
  // flag &= validation.checkDate(dateWork, "tbNgay", "Ngày làm không để trống");
  flag &=
    validation.emptycheck(salaryBasic, "tbLuongCB", "Lương không để trống") &&
    validation.checkLength(
      salaryBasic,
      "tbLuongCB",
      "Lương cơ bản 1000000 - 20000000",
      1000000,
      20000000
    );
  flag &= validation.checkRegency(
    regency,
    "tbChucVu",
    "Chức vụ không để trống"
  );
  flag &=
    validation.emptycheck(hourWork, "tbGiolam", "Giờ làm không để trống") &&
    validation.checkHour(
      hourWork,
      "tbGiolam",
      "Giờ làm trong tháng từ khoảng 80 - 200 giờ",
      80,
      200
    );

  //Check form
  if (!flag) return null;

  var employee = new Employee(
    nickEmployee,
    fullName,
    emailEmployee,
    password,
    dateWork,
    salaryBasic,
    regency,
    hourWork
  );
  employee.totalSal();
  employee.rank();
  //   console.log(employee);

  return employee;
}
getEle("btnThemNV").addEventListener("click", function () {
  var emp = getEmployeeInformation();
  if (emp) {
    listofemployees.addEmployee(emp);

    //   console.log(listofemployees.arr);

    createTable(listofemployees.arr);
    setLocalStorage();
  }
});

function createTable(arr) {
  //reset tbody
  //   getEle("tableDanhSach").innerHTML = "";
  var i = 0;
  var content = "";
  for (i = 0; i < arr.length; i++) {
    var employee = arr[i];
    content += `
        <tr>
        <td>${employee.nick}</td> 
        <td>${employee.fullName}</td> 
        <td>${employee.email}</td> 
        <td>${employee.dayWork}</td> 
        <td>${employee.regency}</td> 
        <td>${employee.totalSalary}</td> 
        <td>${employee.ratings}</td> 
        <td>
            <button class="btn btn-danger" onclick="deleteEmployee('${employee.nick}')">Xóa</button>
            <button class="btn btn-info" onclick="fixInfo('${employee.nick}')" data-toggle="modal"
            data-target="#myModal">Sửa</button>
        </td>
        </tr>
    `;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function deleteEmployee(nickEmployee) {
  console.log(nickEmployee);
  listofemployees.deleteEmployee(nickEmployee);
  console.log(nickEmployee);
  setLocalStorage();

  getLocalStorage();
}

//Select employee to correct the information
function fixInfo(nickEmployee) {
  //Turn on btnCapNhat
  getEle("btnCapNhat").style.display = "inline-block";
  //Get infor of employee
  var employee = listofemployees.editEmployeeList(nickEmployee);

  if (employee) {
    //Show employee infor outside the input card
    getEle("tknv").value = employee.nick;
    getEle("tknv").disabled = true;
    getEle("name").value = employee.fullName;
    getEle("email").value = employee.email;
    getEle("password").value = employee.password;
    getEle("datepicker").value = employee.dayWork;
    getEle("luongCB").value = employee.basicSal;
    getEle("chucvu").value = employee.regency;
    getEle("gioLam").value = employee.hourWork;
  }
}

//Update employee
getEle("btnCapNhat").addEventListener("click", function () {
  //Retrieve the lastest employee infor

  var employee = getEmployeeInformation();
  listofemployees.updateEmployee(employee);
  createTable(listofemployees.arr);
  setLocalStorage();
  // console.log(employee);
});

//Search employee
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var arraySearch = listofemployees.searchEmployee(keyword);
  createTable(arraySearch);
});
function setLocalStorage() {
  // Json to string
  var dataOfString = JSON.stringify(listofemployees.arr);

  // Save localStorage
  localStorage.setItem("LIST", dataOfString);
}
function getLocalStorage() {
  var data = localStorage.getItem("LIST");
  // Check data
  if (data) {
    // Json to string
    var printData = JSON.parse(data);
    console.log(printData);

    //assign data to list

    listofemployees.arr = printData;

    //print out the table
    createTable(listofemployees.arr);
  }
}
