function updateNumDatabase() {
  // Read current value from label
  var curr_val = parseInt(document.getElementById("label_num").innerHTML);
  var new_val = curr_val + 1;
  new_val = new_val.toString();

  console.log(new_val)
  // Write to database
  var params = {"val": new_val}
  $(document).ready(function(){
    $.ajax({
      url: 'access.php',
      type: 'post',
      dataType: 'json',
      data: params,
      success: function(data) {
      }
    })
  })
}


document.getElementById("button_increment").onclick = updateNumDatabase;
