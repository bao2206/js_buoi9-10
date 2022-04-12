function Validation() {
  this.emptycheck = function (value, errorId, mess) {
    var flag = true;
    if (value === "") {
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    } else {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
  };

  this.checkLength = function (value, errorId, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.checkString = function (value, errorId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      //true

      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    //false
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.checkEmail = function (value, errorId, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      //true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    //false
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.checkPassword = function (value, errorId, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(letter)) {
      //true
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    //false
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;

    return flag;
  };

  this.checkRegency = function (value, errorId, mess) {
    if (value >= 1 && value <= 3) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
    return false;
  };

  this.checkValue = function (value, errorId, mess, min, max) {
    if (value >= min && value <= max) {
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    }
    getEle(errorId).innerHTML = mess;
    getEle(errorId).style.display = "block";
  };

  // this.checkDate = function (value, errorId, mess) {
  //   var letter = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  //   if (value.match(letter)) {
  //     //true
  //     getEle(errorId).innerHTML = "";
  //     getEle(errorId).style.display = "none";
  //     return true;
  //   }
  //   //false
  //   getEle(errorId).innerHTML = mess;
  //   getEle(errorId).style.display = "block";
  //   return false;

  //
  // };
}
