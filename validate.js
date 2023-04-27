function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length != 13 && isNaN(nid)) {
    return false;
  } else {
	return true;
  }
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (isNaN(num) || num < 1) {
    return false;
  } else if (num <=5 && candi >= 1){
	return true;
  }
}
//เพิ่ม funtion ที่ต้องใส่ข้อมูลทุกช่องเท่านั้น

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}