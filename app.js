function post() {
    var post = document.getElementById("input");
    var main = document.getElementById("sup");
    var divA = document.createElement("div");
    divA.setAttribute("id", "main-div");
    var div = document.createElement('div');
    var h2 = document.createElement('h2');
    h2.setAttribute("id", "canchange");
    div.appendChild(h2);
    var text = document.createTextNode(post.value);
    h2.appendChild(text);
    main.appendChild(divA);
    divA.appendChild(div)
    post.value = ""
    var del = document.createElement('button');
    var deltext = document.createTextNode("Delete");
    del.className = "del8"
    del.appendChild(deltext);
    div.appendChild(del);
    var edit = document.createElement('button');
    var edittext = document.createTextNode("Edit");
    edit.setAttribute("class", "edit")
    edit.appendChild(edittext);
    div.appendChild(edit);
    var upd = document.createElement("button")
    var updText = document.createTextNode("Update");
    upd.appendChild(updText);
    div.appendChild(upd)
    upd.className = "hid"
    div.className = "post";
    div.setAttribute("id", "new")
    del.setAttribute("onclick", 'delData()')
    edit.setAttribute("onclick", 'editData()')
    upd.setAttribute("onclick" , "update()")

}

function delAll() {

    var b = document.getElementById("sup");
    b.innerHTML = "";







}

function delData() {
    var a = event.target;
    a.parentNode.remove();

}






function editData(){
    var a = event.target;
    var b = a.parentNode;
    b.childNodes[0].contentEditable = true;
    alert("Please click the text to edit");
    a.className = "hid";
    b.childNodes[3].className = "update"
    
}



function update(){
    var a = event.target;
    a.previousSibiling.className = "update"
    var b = a.parentNode;
    b.childNodes[2].contentEditable = false
}