alert("Enter the value of a!")
let a = prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it to the page")
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}