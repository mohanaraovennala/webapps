function loadjson(file,callback) {
  var xlr=new XMLHttpRequest();
  xlr.overrideMimeType("application/json");
  xlr.open("GET",file,true);
  xlr.onreadystatechange=function(){
    if(xlr.readyState===4 && xlr.status=="200")
    {
      callback(xlr.responseText);
    }
  };
  xlr.send(null);
}
loadjson("data.json",function(text)
{
 var data=JSON.parse(text);
 console.log(data);
 details(data.basic);


})
var left=document.querySelector(".leftchild");
function details(det) {
  var image = document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

var name=document.createElement("h3");
name.textContent=det.name;
left.appendChild(name);

var mail=document.createElement("a")
mail.href="mohanvennala123@gmail.com"
name.textContent=det.email;
left.appendChild(mail);

var number=document.createElement("p")
number.textContent=det.number;
left.appendChild(number)

var add=document.createElement("h2");
add.textContent="Address";
left.appendChild(add);

var hr=document.createElement("hr");
left.appendChild(hr);

var add1=document.createElement("p")
add1.textContent=det.address;
left.appendChild(add1);


}
