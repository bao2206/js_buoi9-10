function ListOfEmployees() {
  this.arr = [];
  this.addEmployee = function (employee) {
    this.arr.push(employee);
  };
  this.editEmployeeList = function (nick) {
    var index = this.findPostion(nick);
    if (index !== -1) {
      var employee = this.arr[index];
      return employee;
    }
    return null;
  };
  this.deleteEmployee = function (nick) {
    var index = this.findPostion(nick);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this.updateEmployee = function (employee) {
    var index = this.findPostion(employee.nick);
    if (index !== -1) {
      this.arr[index] = employee;
    }
  };
  this.searchEmployee = function (keyword) {
    var searchArray = [];
    for (var i = 0; i < this.arr.length; i++) {
      var employee = this.arr[i];

      if (
        employee.ratings.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      ) {
        searchArray.push(employee);
      }
    }
    return searchArray;
  };
  //Find the position in array
  this.findPostion = function (nick) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].nick === nick) {
        index = i;
        break;
      }
    }
    return index;
  };
}
