var combobox = document.getElementById("selectBox");
var chuoi = document.getElementById("inputTxt");

function tachChuoi() {
  if (chuoi.value == "") {
    alert("Invalid string!");
    chuoi.focus();
  } else {
    var tachChuoi = chuoi.value.split(",");
    for (var x in tachChuoi) {
      var trimmedOption = tachChuoi[x].trim();
      var exists = false;
      for (var y = 0; y < combobox.options.length; y++) {
        if (
          !combobox.options[y].value.toLowerCase() ==
          trimmedOption.toLowerCase()
        ) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        var newOption = document.createElement("option");
        newOption.value = trimmedOption;
        newOption.text = trimmedOption;
        combobox.add(newOption);
      }
    }
  }
}

function Selected() {
  var option = document.getElementById("selectBox").value;
  alert(`Bạn đã chọn mục: ${option}`);
}
function Xoa() {
  combobox.innerHTML = "";
  chuoi.value = "";
}
