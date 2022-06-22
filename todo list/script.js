function addMore(){
    document.getElementById('error').innerHTML=""

    let name = document.getElementById('name').value;
    if(name===''){
        document.getElementById('error').innerHTML="Please enter value";
    }else{
        let box = document.getElementById('box');

        let li=document.createElement('li');
        li.textContent=name;

        let a= document.createElement('a');
        a.textContent="x";
        a.href="javscript:void(0)";//so it does not redirect
        a.className="remove";
        li.appendChild(a);

        let pos= box.firstElementChild;//gives previous value input
        if(pos===null){
            box.appendChild(li);
        }else{
            box.insertBefore(li,pos);
        }

        //box.appendChild(li);//it will not add in stack manner
    }
    document.getElementById('name').value="";
}

let btn= document.querySelector('ul')//if there is a click in ul so will get into btn
btn.addEventListener('click',function(e){
    let box = document.getElementById('box');
    let li=e.target.parentNode;//e.target gets us a tag but we need its parentNode so
    box.removeChild(li);
});