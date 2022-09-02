function sendData() {
    var name = document.getElementById("nameInput").value;
  
    var address = document.getElementById("addressInput").value;
  
    var city = document.getElementById("cityInput").value;
  
    var state = document.getElementById("stateInput").value;
  
    var zip = document.getElementById("zipInput").value;
  
    document.getElementById("name").innerHTML=name;
    document.getElementById("address").innerHTML=address;
    document.getElementById("city").innerHTML=city;
    document.getElementById("state").innerHTML=state;
    document.getElementById("zip").innerHTML=zip;
  }

function goback() {
    
    window.open("portfolio.html", "_self");

}