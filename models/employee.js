function Employee(
  nick,
  fullName,
  email,
  password,
  dayWork,
  basicSal,
  regency,
  hourWork
) {
  this.nick = nick;
  this.fullName = fullName;
  this.email = email;
  this.password = password;
  this.dayWork = dayWork;
  this.basicSal = basicSal;
  this.regency = regency;
  this.hourWork = hourWork;
  this.totalSalary = 0;
  this.ratings = "";
  this.totalSal = function () {
    this.totalSalary = Number(this.basicSal) * Number(this.regency);
  };

  this.rank = function () {
    if (Number(this.hourWork) >= 192 && Number(this.hourWork) <= 200)
      this.ratings = "nhân viên xuất sắc";
    else if (Number(this.hourWork) >= 176 && Number(this.hourWork) < 192)
      this.ratings = "nhân viên giỏi";
    else if (Number(this.hourWork) >= 160 && Number(this.hourWork) < 176)
      this.ratings = "nhân viên khá";
    else this.ratings = "nhân viên trung bình";
  };
}
