

document.getElementById("remove_img").style.display ="none";


var divs = document.getElementsByClassName('c1');
console.log(divs);
[].forEach.call(divs, function(div) {
  // do whatever
  div.addEventListener('dragstart',function(event){
  //alert("Hello");
  event.dataTransfer.setData('img_id', this.getAttribute('id'));
  });
});



document.getElementById('divCntr').addEventListener('dragover',function(event){
  //alert("dragover");
  
  event.preventDefault();
});

document.getElementById('divCntr').addEventListener('drop',function(event){
 // alert("drop");
 var img_id=event.dataTransfer.getData('img_id');
 
 img_src=document.getElementById(img_id).getAttribute('src');
 remove_src=document.getElementById("remove_img").getAttribute('src');

 img_html='<div><img style="width:70px;" src="'+img_src+'"/>' + '<label> Image </label>' + '<img style="height:40px;width:40px;" src="'+remove_src+'" id="remove_id"/></div>';
 
 document.getElementById('divCntr').insertAdjacentHTML('afterbegin',img_html);

document.getElementById('remove_id').addEventListener('click',function() {
  //document.getElementById("remove_id").remove();

  var elem = document.getElementById("remove_id");
  elem.parentNode.remove();
  });
});



