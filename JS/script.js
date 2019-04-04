class Drone{
    //to initialize information for a class instance (object) we do it in a constructor using the constructor keyword 
 constructor(id, name){
    this.id = id;        //create a new instance with "this" then create a variable named id and assign it to the paramenters.
    this.name = name;
 }

//static method
 static getCompany(){   
   console.log("in my company")                 
  }    

//instance method
 fly(){                                                    //creating a method in a class
    console.log("Drone: " +this.id +" " +"is flying");
 }

}
Drone.maxHeight = 2000;     //this is a static property or class property


//the following line will create an instance of the drone. 
//The parentheses call the functions in the class Drone

let drone = new Drone(1234, "Cool Drone");    //the arguments will pass information to the constructor.
let drone1 = new Drone(4567, "Awesome Drone")

    console.log(typeof Drone);
    //the result is a function

    console.log(typeof drone);
    //the result is an object

    console.log(drone instanceof Drone);
    //This will print out **true

    console.log("drone: " +drone.id +" " +drone.name);     //the instances on the constructor can be accessed using the dot notation.
 
    console.log("drone: " +drone['id'] +" " +drone['name']);   //you can also access them with the bracket notation.

   
    drone.fly();      //Methods are accessed when called at instance level
    drone1.fly();


    Drone.getCompany();     //calling a static method. it is called using the class name




    
//getters and setters
class Drone2{
   constructor(id){
      this._id = id;
   }
   get id(){
      return this._id;          //return the value of the instance
   }
   set id(value){   
      this._id = value;            //give the parameters of what you wnat to set
   }
}

let drone3 = new Drone2('C1234');
drone3.id = ('B9876');                 //this line will set the drone3 id
console.log("drone id: " +this.id); //this will return the newly set drone3 id and the word Temporary