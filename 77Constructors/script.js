class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
    this.name = givenname
    this.trainno = trainno
    this.address = address
  }

  preview() {
    alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
  }

  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }

  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    this.trainno = 0
  }
}

let harryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()