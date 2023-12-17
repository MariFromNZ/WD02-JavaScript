
    //function that add new item to the list
  function addItem() {
    let input = document.getElementById("itemInput").value;

    //if input is not empty
    if (input.trim() !== "") {
      
      //create new item and add it to the list
      document.getElementById("itemsList").innerHTML += "<li>" + input + "</li>";

      //clear an input for next item
      document.getElementById("itemInput").value = "";
    }
  }
