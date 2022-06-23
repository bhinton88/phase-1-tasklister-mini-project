document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addATask(e.target.querySelector(`#new-task-description`).value);
    form.reset()
  })
});

function addATask(task) {
  let li  = document.createElement('li') // create the element
  let button = document.createElement('button') // create the button to eventually remove element 
  let priority = document.getElementById('priority-list')
  // console.log(priority.value)

  button.addEventListener('click' , handledelete ) // add an event listener for the click to remove the task

  li.textContent = `${task} ` // setting the text for the P tag
  button.textContent = ' x' // setting the text inside our button 
  li.appendChild(button) // appending the button to the li tag which is its parentNode
  document.querySelector('ul').appendChild(li) // appending the li tag to our HTML 

  // if statements to cycle through the priority and change the text color
  // depending on the priority selected 
  if(priority.value === `High`){
    li.style.color = `red`
  } else if (priority.value === `Medium`){
    li.style.color = `orange`
  } else {
    li.style.color = `green`
  }
}

function handledelete(e) {
  e.target.parentNode.remove()
}

// write a function that when an event listener is placed on the select tag,
// the function will properly color code the task 


