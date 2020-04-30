

(function() {
        poll = function() {
          $.ajax({
            url: 'data.json',
            dataType: 'json',
            type: 'get',
            success: function(data) { // check if available
              document.getElementById("label_num").innerHTML = data.val
            },
            error: function() { // error logging
              console.log('Error!');
            }
          });
        },
        pollInterval = setInterval(function() { // run function every 2000 ms
          poll();
          }, 2);
        poll(); // also run function on init
    })();
