Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

  function do_random_selection(status, to_submit) {
    var all_rad = [];
    var all_names = [];
    var all_input = document.getElementsByTagName("input");
    for (let i = 0; i < all_input.length; i++) {
      const element = all_input[i];
      if(element.type == "radio"){
        all_rad.push(element);
        all_names.push(element.name);

      }
      
    }

    uniq = [...new Set(all_names)];

    var submit_btn = document.querySelector("input[type='submit']");

    console.log(submit_btn)

    for (let i = 0; i < uniq.length; i++) {

      
      if (status == "poor") {
        var rand = [6, 7, 8, 9, 10].random();
      }else if (status == "average") {
        var rand = [4, 5].random();
      }else if (status == "good") {
        var rand = [3, 2, 1].random();
      }else if (status == "all") {
        var rand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].random();
      }

      rand = rand - 1;


      const element = uniq[i];

      var selected_10_radio = document.getElementsByName(element);

      var focused_radio = selected_10_radio[rand];

      focused_radio.checked = true;
      
    }

    if (to_submit) {
      submit_btn.click();
    }

   
  }



