//Fetch all 3 Inputs
const addButton=document.querySelector(".addButton");
var inputFirst=document.querySelector(".inputtext");
//var topInput=inputFirst;
let dateFirst=document.querySelector('input[type="date"]');
//var topDate=dateFirst;

const values = [];
// var inp="";
// var dat="";

//Fetch the Container
const container=document.querySelector('.dataContainer');
const rightContainer=document.querySelector('.rightContainer');
//const container1=document.querySelector('.dataContainer1');

//class and constructor
class reminder{
    
    constructor(reminderName,dateNew){

        this.createReminder(reminderName,dateNew);

   
    }
//create reminder
createReminder(reminderName,dateNew){

//create divison itembox and later append
let itemBox=document.createElement("div")
itemBox.classList.add("item")
itemBox.style.border='1px solid green'
itemBox.style.marginBottom="10px"

//Append Container
container.appendChild(itemBox)


//create date input
let date=document.createElement('input');
date.setAttribute("type", "date");
date.value=dateNew;
date.disabled=true;
date.classList.add("card-text");
date.classList.add("input2");
date.style.width='24rem';
date.style.margin='5px';
date.style.paddingBottom="7px";
console.log(dateNew);
//Append date input box
itemBox.appendChild(date)

//input box create  
let input=document.createElement("input");
input.value=reminderName;
input.disabled=true;
input.classList.add("card-text");
input.classList.add("input2");
input.setAttribute('id','para');


input.style.width='24rem';
input.style.margin='5px';
// input.style.paddingTop="5px";
input.style.paddingBottom="7px";
//console.log(input.value)
//Append input box
itemBox.appendChild(input)


let buttonBox=document.createElement("div")
buttonBox.classList.add("buttonBox")
// buttonBox.style.border='1px solid green'
buttonBox.style.marginBottom="10px"

//Append button box
itemBox.appendChild(buttonBox)


//create edit button
let editButton=document.createElement("button");

editButton.classList.add("btn");
editButton.classList.add("btn-primary")
editButton.classList.add("btn1");

editButton.style.paddingLeft="20px";
editButton.style.paddingRight="20px";
editButton.style.marginLeft="6px";
editButton.innerHTML="EDIT"

//Append edit button
buttonBox.appendChild(editButton)
//create save button
let saveButton=document.createElement("button");

saveButton.classList.add("btn");
saveButton.classList.add("btn-primary")
saveButton.classList.add("btn1");

saveButton.style.paddingLeft="20px";
saveButton.style.paddingRight="20px";
saveButton.style.marginLeft="6px";
saveButton.innerHTML="SAVE"

//Append edit button
buttonBox.appendChild(saveButton)


//create delete button
let removeButton=document.createElement("button");
removeButton.classList.add("btn");
removeButton.classList.add("btn-primary");
removeButton.classList.add("btn2");

removeButton.style.paddingLeft="6px";
removeButton.style.paddingRight="6px";
removeButton.style.marginLeft="6px";
removeButton.innerHTML="DELETE"

//Append delete button
buttonBox.appendChild(removeButton)

//Add eventlistener on edit
editButton.addEventListener('click',()=>{
   this.edit(input,date)
    this.save(input,date)
    
})
//Add eventlistener on save
saveButton.addEventListener('click',()=>{
    this.save(input,date)
     
 })

//Add eventlistener 
removeButton.addEventListener('click',()=>{
    this.delete(itemBox)
})

}

//edit reminder
edit(reminderitem,reminderdate){

    // clearDisplay();
    reminderitem.disabled=!reminderitem.disabled
    reminderdate.disabled=!reminderdate.disabled
    console.log(reminderitem.value,reminderdate.value);
    this.saveinput=reminderitem.value;
    this.savedate=reminderdate.value;

}
//save reminder

save(reminderitem,reminderdate){

    for(var i=0;i<values.length;i++)
{
        if(this.saveinput==values[i][1]&&this.savedate==values[i][0])
    {
              values[i][1]=reminderitem.value;
              values[i][0]=reminderdate.value;
    }

}

   addRecord();

}
//delete reminder
delete(reminderitem){
    container.removeChild(reminderitem)
}
//create arrays

}

//check whether the reminder and date is entered or not
function check(){
    
    if(inputFirst.value !='' && dateFirst.value !='' )
    {
        new reminder(inputFirst.value,dateFirst.value); 
        //inputFirst.value="";
        //dateFirst.value=""; 
                
    }
    
 
}


//const values = [];
const clearDisplay = () => {
    while (rightContainer.firstChild) rightContainer.removeChild(rightContainer.firstChild);
  };

function addRecord() {
clearDisplay();  
  var inp=inputFirst.value;
  var dat=dateFirst.value;
  values.push([dat,inp]);
  inp.value = ""; 
  inputFirst.value="";
  dateFirst.value=""; 
  console.log(values)
 // document.getElementById("displaybox2").contentWindow.location.reload(true);
//document.getElementById("displaybox2").innerHTML=document.getElementById("displaybox2").innerHTML;
const d= new Date();
var ds=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+("0" + (d.getDate())).slice(-2);
console.log(ds)
for(var i=0;i<values.length;i++)
{
    
    if(values[i][0]==ds)
    {
        
        var displayItem=document.createElement("div")
        displayItem.classList.add("item1")
    
        displayItem.style.border='1px solid green'
        displayItem.style.marginBottom="10px"
        
        //container1.appendChild(displayItem)
        rightContainer.appendChild(displayItem)
        var header=document.createElement("h4");
        header.innerHTML=`Reminders of ${ds}`
        
        displayItem.appendChild(header)

        let date=document.createElement('input');
        date.setAttribute("type", "date");
        date.value=values[i][0];
        console.log(date.value);
        date.disabled=true;
        date.classList.add("card-text");
        date.classList.add("input3");
        date.style.width='24rem';
        date.style.margin='5px';
        date.style.paddingBottom="7px";
         //Append date
        
         displayItem.appendChild(date)

        //input box create  
        var input=document.createElement("input");
        input.value=values[i][1];
        input.disabled=true;
        input.classList.add("card-text");
        input.classList.add("input3");
        input.style.width='24rem';
        input.style.margin='5px';
        input.style.paddingBottom="7px";
        displayItem.appendChild(input)

        console.log(values[i][0],values[i][1]);
    
        //if(date.value==values[i][0])
 
    }
 
}

}
  function inputcleartop()
  {
    var inp=inputFirst.value;
    var dat=dateFirst.value;
    inputFirst.value="";
    dateFirst.value=""; 
  }

//check the inputs and date while clicking on adding
addButton.addEventListener("click",check);
//addButton.addEventListener("click",inputcleartop);