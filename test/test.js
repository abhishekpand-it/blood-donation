var mongoDB = require("../code/server/services/db");
var Donators = require("../code/server/models/donators");
//tell Mongoose to use a different DB - created on the fly

mongoDB.connect();

describe("Donators", function(){  
  var currentDonator = null;  


  //TESTING CREATE MONGO ENTRY 1
  it("Creates mongo entry", function(done){    

  	var data = {	
  		"coordinates" : {
		"lat" : 22.693548385600256,
		"lng" : 76.18083063125005
		},
		"address" : "Unnamed Road, Shiwni, Madhya Pradesh 452020, India",
		"firstname" : "Test",
		"lastname" : "user",
		"phone" : "+917709158966",
		"email" : "abhishekpandit.02@gmail.com",
		"bloodGroup" : "AB",
		"ip" : "::1"
	};

    //add some test data    
    Donators.create(data, function(result){      
      currentDonator = result;      
      done();    
    });   		

  });  


    //TESTING CREATE MONGO ENTRY 2
  it("Creates mongo entry", function(done){    

  	var data = {	
  		"coordinates" : {
		"lat" : 23.693548385600256,
		"lng" : 77.18083063125005
		},
		"address" : "Unnamed Road, Shiwni, Madhya Pradesh 452020, India",
		"firstname" : "Test",
		"lastname" : "user8888",
		"phone" : "+917709158966",
		"email" : "a2bhishekpandit.02@gmail.com",
		"bloodGroup" : "B",
		"ip" : "::1"
	};

    //add some test data    
    Donators.create(data, function(result){      
      currentDonator = result;      
      done();    
    });   		

  });  


  //TESTING CREATE MONGO ENTRY 3
  it("Creates mongo entry", function(done){    

  	var data = {	
  		"coordinates" : {
		"lat" : 24.693548385600256,
		"lng" : 77.18083063125005
		},
		"address" : "Unnamed Road, Shiwni, Madhya Pradesh 452020, India",
		"firstname" : "Test",
		"lastname" : "user9999",
		"phone" : "+917709158966",
		"email" : "a2bhishekpandit.02@gmail.com",
		"bloodGroup" : "B",
		"ip" : "::1"
	};

    //add some test data    
    Donators.create(data, function(result){  
      currentDonator = result;      
      done();    
    });   		

  });

   //TESTING Update MONGO ENTRY 3
  it("Finds mongo entry", function(done){

  	var query = { lastname : "user9999"};
  	var sort = {lastname : -1 };
    //add some test data    
    Donators.find(query, sort, function(result){      
      currentDonator = result;      
      done();    
    });   		

  });    





});