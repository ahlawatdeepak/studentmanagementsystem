let database=JSON.parse(localStorage.getItem("studentProgramRegistrationData"))

database.forEach(function(el,index){
 
  let box=document.createElement("div")
  box.setAttribute("id","deleteButton")

  let pname=document.createElement("div")
  pname.setAttribute("id","name")
  pname.textContent=el.name

  let pcourse=document.createElement("div")
  pcourse.setAttribute("id","course")
  pcourse.textContent=el.course

  let punit=document.createElement("div")
  punit.setAttribute("id","unit")
  punit.textContent=el.unit

  let divimg=document.createElement("div")
  divimg.setAttribute("id","image")
  let pimage=document.createElement("img")
  pimage.setAttribute("id","pimage")
  pimage.src=el.image
   divimg.append(pimage)
   //console.log(divimg)

  let pbatch=document.createElement("div")
  pbatch.setAttribute("id","batch")
  pbatch.textContent=el.batch

  let pdelete=document.createElement("div")
  pdelete.setAttribute("id","delete")
  pdelete.style.cursor = "pointer"
  pdelete.textContent="Delete";
  pdelete.addEventListener('click',function()
  {
      deleteData(index)
  });


  box.append(pname,pcourse,punit,divimg,pbatch,pdelete) 
  document.querySelector("#data").append(box)
})  


let trashbin=JSON.parse(localStorage.getItem("trash"))||[]
function deleteData(index)
{

     trashbin.push(database[index])
  //    console.log(trashbin)
    localStorage.setItem("trash",JSON.stringify(trashbin))
    database.splice(index,1)
  //   console.log(database[index])
    localStorage.setItem("studentProgramRegistrationData",JSON.stringify(database))
    window.location.reload()
    
 
    
}
