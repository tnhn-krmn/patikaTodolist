
let userFormDOM = document.querySelector('#form')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#liveToast')


const alertFunction = (title, message,className="warning") =>`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`


function formHandler(e) {
    e.preventDefault();
    const task = document.querySelector('#tasks')
    if (task.value) 
    {
      addItem(task.value) 
      task.value = ""
      basarili()
    }
    else
    {
      basarisiz()
    }
  }

  

let listDOM = document.querySelector('#list')
const addItem = (task) =>
{
    // console.log(task);
  let li  = document.createElement('li')
  console.log(li);
  li.innerHTML = `${task}<span class="badge bg-primary rounded-pill" id="silme" onclick="silmeIslemi()" ><i class="fa fa-ban" aria-hidden="true" >X</i></span>`

  li.classList.add('list-group-item','d-flex','justify-content-between','align-items-center','silme')
  listDOM.append(li)
}


function basarili() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function basarisiz() {
  var x = document.getElementById("snackbar1");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}




function silmeIslemi()
{
  const sil = document.getElementById("silme");
  const parent = sil.parentNode;
  parent.remove(sil);
}


// let del = document.getElementById("delete")


