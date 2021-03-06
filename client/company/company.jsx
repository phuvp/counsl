import React from 'react'
import {mount} from 'react-mounter'

var america = [
  {
    'name': 'Alabama',
    'abbreviation': 'AL'
  },
  {
    'name': 'Alaska',
    'abbreviation': 'AK'
  },
  {
    'name': 'American Samoa',
    'abbreviation': 'AS'
  },
  {
    'name': 'Arizona',
    'abbreviation': 'AZ'
  },
  {
    'name': 'Arkansas',
    'abbreviation': 'AR'
  },
  {
    'name': 'California',
    'abbreviation': 'CA'
  },
  {
    'name': 'Colorado',
    'abbreviation': 'CO'
  },
  {
    'name': 'Connecticut',
    'abbreviation': 'CT'
  },
  {
    'name': 'Delaware',
    'abbreviation': 'DE'
  },
  {
    'name': 'District Of Columbia',
    'abbreviation': 'DC'
  },
  {
    'name': 'Federated States Of Micronesia',
    'abbreviation': 'FM'
  },
  {
    'name': 'Florida',
    'abbreviation': 'FL'
  },
  {
    'name': 'Georgia',
    'abbreviation': 'GA'
  },
  {
    'name': 'Guam',
    'abbreviation': 'GU'
  },
  {
    'name': 'Hawaii',
    'abbreviation': 'HI'
  },
  {
    'name': 'Idaho',
    'abbreviation': 'ID'
  },
  {
    'name': 'Illinois',
    'abbreviation': 'IL'
  },
  {
    'name': 'Indiana',
    'abbreviation': 'IN'
  },
  {
    'name': 'Iowa',
    'abbreviation': 'IA'
  },
  {
    'name': 'Kansas',
    'abbreviation': 'KS'
  },
  {
    'name': 'Kentucky',
    'abbreviation': 'KY'
  },
  {
    'name': 'Louisiana',
    'abbreviation': 'LA'
  },
  {
    'name': 'Maine',
    'abbreviation': 'ME'
  },
  {
    'name': 'Marshall Islands',
    'abbreviation': 'MH'
  },
  {
    'name': 'Maryland',
    'abbreviation': 'MD'
  },
  {
    'name': 'Massachusetts',
    'abbreviation': 'MA'
  },
  {
    'name': 'Michigan',
    'abbreviation': 'MI'
  },
  {
    'name': 'Minnesota',
    'abbreviation': 'MN'
  },
  {
    'name': 'Mississippi',
    'abbreviation': 'MS'
  },
  {
    'name': 'Missouri',
    'abbreviation': 'MO'
  },
  {
    'name': 'Montana',
    'abbreviation': 'MT'
  },
  {
    'name': 'Nebraska',
    'abbreviation': 'NE'
  },
  {
    'name': 'Nevada',
    'abbreviation': 'NV'
  },
  {
    'name': 'New Hampshire',
    'abbreviation': 'NH'
  },
  {
    'name': 'New Jersey',
    'abbreviation': 'NJ'
  },
  {
    'name': 'New Mexico',
    'abbreviation': 'NM'
  },
  {
    'name': 'New York',
    'abbreviation': 'NY'
  },
  {
    'name': 'North Carolina',
    'abbreviation': 'NC'
  },
  {
    'name': 'North Dakota',
    'abbreviation': 'ND'
  },
  {
    'name': 'Northern Mariana Islands',
    'abbreviation': 'MP'
  },
  {
    'name': 'Ohio',
    'abbreviation': 'OH'
  },
  {
    'name': 'Oklahoma',
    'abbreviation': 'OK'
  },
  {
    'name': 'Oregon',
    'abbreviation': 'OR'
  },
  {
    'name': 'Palau',
    'abbreviation': 'PW'
  },
  {
    'name': 'Pennsylvania',
    'abbreviation': 'PA'
  },
  {
    'name': 'Puerto Rico',
    'abbreviation': 'PR'
  },
  {
    'name': 'Rhode Island',
    'abbreviation': 'RI'
  },
  {
    'name': 'South Carolina',
    'abbreviation': 'SC'
  },
  {
    'name': 'South Dakota',
    'abbreviation': 'SD'
  },
  {
    'name': 'Tennessee',
    'abbreviation': 'TN'
  },
  {
    'name': 'Texas',
    'abbreviation': 'TX'
  },
  {
    'name': 'Utah',
    'abbreviation': 'UT'
  },
  {
    'name': 'Vermont',
    'abbreviation': 'VT'
  },
  {
    'name': 'Virgin Islands',
    'abbreviation': 'VI'
  },
  {
    'name': 'Virginia',
    'abbreviation': 'VA'
  },
  {
    'name': 'Washington',
    'abbreviation': 'WA'
  },
  {
    'name': 'West Virginia',
    'abbreviation': 'WV'
  },
  {
    'name': 'Wisconsin',
    'abbreviation': 'WI'
  },
  {
    'name': 'Wyoming',
    'abbreviation': 'WY'
  }
]
var countrylist = ['United States','Afghanistan','Albania','Algeria','Andorra','Angola',
'Anguilla','Antigua; Barbuda','Argentina','Armenia','Aruba','Australia',
'Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus',
'Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia; Herzegovina','Botswana','Brazil','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Cape Verde','Cayman Islands','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica',
'Cote D Ivoire','Croatia','Cruise Ship','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia',
'Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel',
'Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali',
'Malta','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama',
'Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','South Africa',
'South Korea','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','St. Lucia','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor L\'Este','Togo','Tonga','Trinidad &amp; Tobago','Tunisia','Turkey','Turkmenistan','Turks &amp; Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','Uruguay','Uzbekistan','Venezuela','Vietnam','Virgin Islands (US)','Yemen','Zambia','Zimbabwe'];

var MemberInfo = React.createClass({
  getInitialState: function(){
    var data = []
    for (var i = 0; i < this.props.companySize; i++) {
      data.push({
        contactname:'',
        contactemail:'',
        contactaddress:'',
        contactcity:''
      })
    }
    var state = {}
    state['data'] = data
    return state
  },
  handleChange: function(key,i){
    return function (e){
      var data = this.state.data;
      data[i][key] = e.target.value;
      this.setState({data:data});
    }.bind(this);
  },
  updateCompanySize: function(companySize) {
    var data = this.state.data
    for (var i = 0; i < companySize-data.length; i++) {
      data.push({
        contactname:'',
        contactemail:'',
        contactaddress:'',
        contactcity:''
      })
    }
    this.setState({data:data})
  },
  render: function(){

    var repeated=[]
    for (var i = 0; i < this.props.companySize; i++) {
      repeated.push((
        <div>
          <input type="text" name="contactname" placeholder="Full Legal Name" onChange={this.handleChange('contactname',i)} value={this.state.data[i].contactname}/>
          <input type="text" name="contactemail" placeholder="Email" onChange={this.handleChange('contactemail',i)} value={this.state.data[i].contactemail} />
          <textarea name="contactaddress" placeholder="Address" onChange={this.handleChange('contactaddress',i)} value={this.state.data[i].contactaddress}></textarea>
          <input type="text" name="contactcity" placeholder="City" onChange={this.handleChange('contactcity',i)} value={this.state.data[i].contactcity} />
        </div>


      ))
    }
    return (<fieldset>
      <h2 className="fs-title">Contact Details</h2>
      <h3 className="fs-subtitle">Please enter contact information</h3>
      {repeated}
      <label><input type="button" name="previous" className="previous action-button" onClick={this.props.previousChange} value="Previous" /></label>
      <label><input type="submit" name="submit" className="submit action-button" value="Submit" onClick={this.props.storeDB(this.state)} /></label>
    </fieldset>)
  }
})
var Company = React.createClass({
  getInitialState: function(){
    return{
      companyType:'',
      companySize:1,
      city:'',
      email:'phuvp@mit.edu',
      address:'',
      phone:'',
      name:'DLA Piper',
      llc:'',
      corporation:'',
      state:'',
      country:'',
      membersinfo:'',
      lawfirm:this.props.lawfirm
    }
  },
  handleChange: function (key,type) {
    return function (e) {
      if(key=='llc' || key=='corporation'){
        this.setState({companyType:key})
        this.nextChange(e)
        return
      }

      var state = {};
      if(type=='select')
        state[key]=e.target.options[e.target.selectedIndex].value
      else
        state[key] = e.target.value;
      this.setState(state);

      if(key=='companySize') {
        this.refs.llcMemberInfo.updateCompanySize(e.target.value)
        this.refs.incMemberInfo.updateCompanySize(e.target.value)
      }
    }.bind(this);
  },
  previousChange: function(element){
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    if(animating) return false;
    animating = true;

    current_fs = $(element.target).parents('fieldset');
    previous_fs = $(element.target).parents('fieldset').prev();

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
  },
  storeDB: function (membersinfo){
    return function(e){
      e.preventDefault()
      this.setState({membersinfo:membersinfo},function() {
        console.log(CompanyDb.insert);
        CompanyDb.insert(this.state)
      })
    }.bind(this)
  },
  nextChange: function (element){
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    if(animating) return false;
    animating = true;

    current_fs = $(element.target).parents('fieldset');
    next_fs = $(element.target).parents('fieldset').next();

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
  },
  render: function(){
    var companyType='';
    var self=this
    var options=america.map(function (current) {
      return(<option value={current.name} selected={current==self.state.state}> {current.name}  </option>)
    })
    var selectelem=(
      <select onChange={this.handleChange("state",'select')}>
        {options}
      </select>
    )
    var countryOptions=countrylist.map(function (current){
      return(<option value={current} selected={current==self.state.country}>{current}</option>)
    })

    var selectcountry=(
      <select onChange={this.handleChange("country",'select')}>
        {countryOptions}
      </select>
    )

    var structure = (
      <fieldset>
        <h2 className="fs-title">Business Structure</h2>
        <h3 className="fs-subtitle">Select one of the options below</h3>
        <label className="next LCC">
          <span>LLC</span>
          <input type="radio" name="nextLLC" className="hidden" onClick={this.handleChange("llc")} value="true" />
        </label>
        <label className="next CORP">
          <span>Corporation</span>
          <input type="radio" name="nextCorp" className="hidden" onClick={this.handleChange("corporation")} value="true" />
        </label>
      </fieldset>
    )

    var details=(
      <fieldset>
        <h2 className="fs-title">Company Details</h2>
        <h3 className="fs-subtitle">Basic information about your company</h3>
        <input type="text" name="name" placeholder="Full Legal Name" onChange={this.handleChange('name')}/>
        <input type="text" name="phone" placeholder="Phone" onChange={this.handleChange('phone')}/>
        <input type="text" name="email" placeholder="Email" onChange={this.handleChange('email')} />
        <textarea name="address" placeholder="Address" onChange={this.handleChange('address')}></textarea>
        <input type="text" name="city" placeholder="City" onChange={this.handleChange('city')} />
        State
        {selectelem}
        Country
        {selectcountry}
        <label>
          <input type="text" name="companysize" placeholder="Company Size" value={this.state.companySize} onChange={this.handleChange('companySize')} />

        </label>
        <label>
          <input type="button" name="previous" className="action-button" value="Previous" onClick={this.previousChange}/>

        </label>
        <label>
          <input type="button" name="next" className="action-button" value="Next" onClick={this.nextChange}/>

        </label>
      </fieldset>
    )
    return (
      <div>
        <header id="title"><img src="/download.png"/>
        </header>
        <form id="msform">
          <ul id="progressbar">
            <li className="active">Incorporated As</li>
            <li>Company Details</li>
            <li>Members of the Company</li>
          </ul>
          {structure}
          {details}
          <MemberInfo ref="llcMemberInfo" class={this.state.companyType==="llc" ? '':"hidden"} companySize={this.state.companySize} totalstock={false} storeDB={this.storeDB} previousChange={this.previousChange} />
          <MemberInfo ref="incMemberInfo" class={this.state.companyType==="inc" ? '':"hidden"} companySize={this.state.companySize} totalstock={true} storeDB={this.storeDB} previousChange={this.previousChange} />
        </form>
      </div>
    )
  }

})

FlowRouter.route('/:company',{
  name: 'company',
  action: function(params, queryParams) {
    var lawprop=LawDb.findOne({name: params.company})
    String.prototype.capitalize = function(){
    return this.toLowerCase().replace( /\b\w/g, function (m) {
        return m.toUpperCase();
    });
};
    var lawname = params.company.replace("-"," ").capitalize()
    mount(Company, {lawfirm: lawname});
  }
});
