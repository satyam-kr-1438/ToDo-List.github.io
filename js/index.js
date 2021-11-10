
let input_text= document.getElementById("input_text");
let Button= document.getElementById("Button");
let ul_list= document.getElementById("ul_list");




function createListElement(){

                                                    // CREATING li
    let li=document.createElement("li");
                                                    //  CREATING tectnode 
    let create_text=document.createTextNode(input_text.value)
                                                    //   APPEND textNode 
    li.appendChild(create_text);
                                                    // APPEND li 
    ul_list.appendChild(li);
    input_text.value="";

                                                        //   CREATING CROSS BUTTON 
    let create_button=document.createElement("button");
    create_button.textContent="x";
    li.appendChild(create_button);           
       
    create_button.addEventListener("click",function(){
        li.classList.add("delete");
    })
   

}


function addListAfterClick (){
      if(input_text.value.length>0){
          createListElement();
      }
}
Button.addEventListener("click",addListAfterClick);
   
