import React from 'react';
var ReactDOM = require('react-dom');
import {mount} from 'react-mounter';

var Companies = new Mongo.Collection('companies');

var america = [
  {
    "name": "Alabama",
    "abbreviation": "AL"
  },
  {
    "name": "Alaska",
    "abbreviation": "AK"
  },
  {
    "name": "American Samoa",
    "abbreviation": "AS"
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ"
  },
  {
    "name": "Arkansas",
    "abbreviation": "AR"
  },
  {
    "name": "California",
    "abbreviation": "CA"
  },
  {
    "name": "Colorado",
    "abbreviation": "CO"
  },
  {
    "name": "Connecticut",
    "abbreviation": "CT"
  },
  {
    "name": "Delaware",
    "abbreviation": "DE"
  },
  {
    "name": "District Of Columbia",
    "abbreviation": "DC"
  },
  {
    "name": "Federated States Of Micronesia",
    "abbreviation": "FM"
  },
  {
    "name": "Florida",
    "abbreviation": "FL"
  },
  {
    "name": "Georgia",
    "abbreviation": "GA"
  },
  {
    "name": "Guam",
    "abbreviation": "GU"
  },
  {
    "name": "Hawaii",
    "abbreviation": "HI"
  },
  {
    "name": "Idaho",
    "abbreviation": "ID"
  },
  {
    "name": "Illinois",
    "abbreviation": "IL"
  },
  {
    "name": "Indiana",
    "abbreviation": "IN"
  },
  {
    "name": "Iowa",
    "abbreviation": "IA"
  },
  {
    "name": "Kansas",
    "abbreviation": "KS"
  },
  {
    "name": "Kentucky",
    "abbreviation": "KY"
  },
  {
    "name": "Louisiana",
    "abbreviation": "LA"
  },
  {
    "name": "Maine",
    "abbreviation": "ME"
  },
  {
    "name": "Marshall Islands",
    "abbreviation": "MH"
  },
  {
    "name": "Maryland",
    "abbreviation": "MD"
  },
  {
    "name": "Massachusetts",
    "abbreviation": "MA"
  },
  {
    "name": "Michigan",
    "abbreviation": "MI"
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN"
  },
  {
    "name": "Mississippi",
    "abbreviation": "MS"
  },
  {
    "name": "Missouri",
    "abbreviation": "MO"
  },
  {
    "name": "Montana",
    "abbreviation": "MT"
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE"
  },
  {
    "name": "Nevada",
    "abbreviation": "NV"
  },
  {
    "name": "New Hampshire",
    "abbreviation": "NH"
  },
  {
    "name": "New Jersey",
    "abbreviation": "NJ"
  },
  {
    "name": "New Mexico",
    "abbreviation": "NM"
  },
  {
    "name": "New York",
    "abbreviation": "NY"
  },
  {
    "name": "North Carolina",
    "abbreviation": "NC"
  },
  {
    "name": "North Dakota",
    "abbreviation": "ND"
  },
  {
    "name": "Northern Mariana Islands",
    "abbreviation": "MP"
  },
  {
    "name": "Ohio",
    "abbreviation": "OH"
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK"
  },
  {
    "name": "Oregon",
    "abbreviation": "OR"
  },
  {
    "name": "Palau",
    "abbreviation": "PW"
  },
  {
    "name": "Pennsylvania",
    "abbreviation": "PA"
  },
  {
    "name": "Puerto Rico",
    "abbreviation": "PR"
  },
  {
    "name": "Rhode Island",
    "abbreviation": "RI"
  },
  {
    "name": "South Carolina",
    "abbreviation": "SC"
  },
  {
    "name": "South Dakota",
    "abbreviation": "SD"
  },
  {
    "name": "Tennessee",
    "abbreviation": "TN"
  },
  {
    "name": "Texas",
    "abbreviation": "TX"
  },
  {
    "name": "Utah",
    "abbreviation": "UT"
  },
  {
    "name": "Vermont",
    "abbreviation": "VT"
  },
  {
    "name": "Virgin Islands",
    "abbreviation": "VI"
  },
  {
    "name": "Virginia",
    "abbreviation": "VA"
  },
  {
    "name": "Washington",
    "abbreviation": "WA"
  },
  {
    "name": "West Virginia",
    "abbreviation": "WV"
  },
  {
    "name": "Wisconsin",
    "abbreviation": "WI"
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY"
  }
]
var countrylist = ["Afghanistan","Albania","Algeria","Andorra","Angola",
"Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia",
"Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus",
"Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


var Companymembersinfo = React.createClass({
  getInitialState(){
    return{
      name:'',
      email:'',
      tel:'',
      address:'',
      city:'',
      state:'',
      country:''
    }
  },handleChange: function (key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },  render: function() {
      var stockbool=this.props.totalstock? '' : "hidden"
      var options=america.map(function (current) {

        return(<option value={current.name}> {current.name}  </option>)
      })
      var selectelem=React.createElement('select',{children:options})
      var countryoptions=countrylist.map(function (current) {

        return(<option value={current}> {current}  </option>)
      })
      var selectcountry=React.createElement('select',{children:countryoptions})


      console.log(selectelem)
      return (
        <div className={this.props.class}>
          <p>Hi Company</p>

          <form className="newforms" onSubmit={this.handleSubmit} >
            Full Legal Name
            <input
              type="text"
              name="name"
              placeholder="Nchinda LLC"
              onChange={this.handleChange('name')}
              value={this.state.name}/>
            Email:
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={this.handleChange('email')}
              value={this.state.email}/>
            Phone Number
            <input
              type="tel"
              name="tel"
              placeholder="6267829641"
              onChange={this.handleChange('tel')}
              value={this.state.tel}/>
            Address
            <input
              type="text"
              name="address"
              placeholder="Street/Drive/etc."
              onChange={this.handleChange('address')}
              value={this.state.address}/>
            City
            <input
              type="text"
              name="city"
              placeholder="Wilmington"
              onChange={this.handleChange('city')}
              value={this.state.city}/>
            <div className={stockbool}>Total Stocks
          <input
              type="text"
              name="stocks"
              placeholder="total stock"
              onChange={this.handleChange('stocks')}
              value={this.state.stocks}

              />
          </div>
            State
            {selectelem}

            Country
            {selectcountry}
            Company size
            <input
              type="text"
              name="size"
              placeholder="Founding members and managers"
              onChange={this.handleChange('size')}
              value={this.state.size}/>

            <input
              type="submit"
              value="Submit"/>

          </form>

        </div>
      )
    }
})

var Company = React.createClass({
  getInitialState(){
    return{
      companyType:''
    }
  },
  handleChange: function (key) {
    return function (e) {
      this.setState({companyType:key})
    }.bind(this);
  },
  handleSubmit:function(){

    LawNames.upsert(this.state)
  },
  render: function() {
  var CompanyType='';
  return (<div>
    <label>LLC
    <input type="radio" name="llcradio" onClick={this.handleChange("llc")}/></label>
    <label>Corporation<input type="radio" name="llcradio" onClick={this.handleChange("inc")}/></label>
    <Companymembersinfo class={this.state.companyType==="llc" ? '':"hidden"} totalstock={false} />
    <Companymembersinfo class={this.state.companyType==="inc" ? '':"hidden"} totalstock={true} />
  </div>)
}
})

FlowRouter.route('/company',{
name: 'company',
action: function(params, queryParams) {
  mount(Company, {name: 'home'});
}});
//Template.home.onRendered(function(){
//ReactDOM.render(<Home/>, document.body)
//})
