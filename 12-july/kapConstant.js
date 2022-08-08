let i = 0;
function getNum() {
  let num;
  let text = "";
  i = 0;

  css();

  document.getElementById("output").innerHTML = "";
  document.getElementById("number").innerHTML = "";

  num = document.getElementById("number").value;
  console.log(num);

  let digit = num[0];
  if (num[1] == digit && num[2] == digit && num[3] == digit) {
    alert("Invalid Number.....!!!");
    alert("Please Enter diffrent Digit.....");
    document.getElementById("number").value = "";

    return true;
  }

  // if ((num[0] >= "a" && num[0] <= "z" ) || (num[1] >= "a" && num[1] <= "z" ) || (num[2] >= "a" && num[2] <= "z" )||(num[3] >= "a" && num[3] <= "z" )) {
  //   let statement ="Invalid Number.....!!!";
  //   alert(statement);
  //   alert("Please Enter Number not String.....");
  //   document.getElementById("number").value = "";

  //   return true;
  // }

  // if (num.length == 4)
  // {
  //    return character();
  // }

  let num1 = parseInt(num);

  // console.log(typeof(num1));

  kapCon(num);
}

function kapCon(num) {
  if (num.length == 3) {
    num = "0" + num;
  }

  text = "";
  i++;

  let DigitArray = Array.from(num);

  let largeDigit = DigitArray.sort(function (a, b) {
    return b - a;
  });
  let largeNumStr = largeDigit.join("");

  let smallDigit = DigitArray.sort(function (a, b) {
    return a - b;
  });

  let smallNumStr = smallDigit.join("");

  let large = parseInt(largeNumStr);
  let small = parseInt(smallNumStr);

  let newNum = large - small;

  text =
    "<b>Step-" +
    i +
    "&nbsp;&nbsp;&nbsp; </b> " +
    large +
    " - " +
    small +
    " = " +
    newNum +
    "</br>";

  document.getElementById("output").innerHTML += text;

  if (newNum != 6174) kapCon(newNum + "");
}

function css() {
  document.getElementById("out").style.backgroundColor = "aqua";
  document.getElementById("out").style.border = "solid";
  document.getElementById("out").style.borderWidth = "thin";
}
function refresh() {
  if (document.getElementById("number").value != null)
    document.getElementById("number").value = "";
  document.getElementById("output").innerHTML = "";
}

function character() {
  let flag = false;

  if (
    !(
      (parseInt(num[0]) >= 48 && parseInt(num[0]) <= 57) ||
      (parseInt(num[1]) >= 48 && parseInt(num[1]) <= 57) ||
      (parseInt(num[2]) >= 48 && parseInt(num[2]) <= 57) ||
      (parseInt(num[3]) >= 48 && parseInt(num[3]) <= 57)
    )
  ) {
    let statement = "Invalid Number.....!!!";
    alert(statement);
    alert("Please Enter Number not String or Special Character.....");
    document.getElementById("number").value = "";

    flag = true;
  }
  return flag;
}
