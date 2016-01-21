import React from 'react'
import {mount} from 'react-mounter'
var Company = React.createClass({
  getInitialState(){
    return{
      companyType:''
    }
  },
  componentDidMount(){
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    console.log($(".next"));
    $(".next").click(function(){
      console.log("asda");
      if(animating) return false;
      animating = true;

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = (now * 50)+"%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
          });
          next_fs.css({'left': left, 'opacity': opacity});
        },
        duration: 800,
        complete: function(){
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });

    $(".previous").click(function(){
      if(animating) return false;
      animating = true;

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //de-activate current step on progressbar
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = ((1-now) * 50)+"%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({'left': left});
          previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
        },
        duration: 800,
        complete: function(){
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });

    $(".submit").click(function(){
      return false;
    })
  },
  render: function(){
    var companyType='';
    return (
      <div>
        <form id="msform">

          <ul id="progressbar">
            <li className="active">Setup</li>
            <li>Basic Info</li>
            <li>Contact Details</li>
          </ul>

          <fieldset>
            <h2 class="fs-title">Choose Law Firm</h2>
            <h3 class="fs-subtitle">Select one of the options below</h3>

            <input type="button" name="next" class="next LCC" value="LCC" />
            <input type="button" name="next" class="next CORP" value="Corporation" />

          </fieldset>
          <fieldset>
            <h2 class="fs-title">Basic Info</h2>
            <h3 class="fs-subtitle">You can enter basic information</h3>
            <input type="text" name="name" placeholder="Full Legal Name"/>
            <input type="text" name="phone" placeholder="Phone" />
            <input type="text" name="email" placeholder="Email" />

            <input type="button" name="previous" class="previous action-button" value="Previous" />
            <input type="button" name="next" class="next action-button" value="Next" />
          </fieldset>
          <fieldset>
            <h2 class="fs-title">Contact Details</h2>
            <h3 class="fs-subtitle">Please enter contact information</h3>
            <textarea name="address" placeholder="Address"></textarea>
            <input type="text" name="city" placeholder="City" />
            <select class="select">
              <option value="" class=""></option>
              <option value="0" selected="selected" label="Choose State">Choose State</option>
              <option value="1" label="NY">NY</option>
            </select>
            <input type="text" name="companysize" placeholder="Company Size" />

            <input type="button" name="previous" class="previous action-button" value="Previous" />
            <input type="submit" name="submit" class="submit action-button" value="Submit" />
          </fieldset>
        </form>
      </div>
    )
  }

})
FlowRouter.route('/company',{
  name: 'company',
  action: function(params, queryParams) {
    mount(Company);
  }
});
