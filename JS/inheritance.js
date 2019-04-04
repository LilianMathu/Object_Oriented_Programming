//create an abstract class
//inheriting constructors
class Vehicle{
    constructor(licenceNo){
        this.licenceNo = licenceNo;

    }

}

class Drone extends Vehicle{                             //inherits from Vehicle
    
}

class Car extends Vehicle{                                 //inherits from Vehicle
    constructor(licenceNo){
        super(licenceNo);                                           //calls vehicle constructor

    }

}

let c = new Car("KCH 321Z");
console.log(c.licenceNo);




/* console.log( c instanceof Car);            //true
 console.log( c instanceof Vehicle);        //true
 console.log( c instanceof Object);         //true
 */




//***********************************************************

 //inheriting properties

 class Vehicle1{
    constructor(){
        this.gpsEnabled = true;

    }

}

class Drone1 extends Vehicle1{                             //inherits from Vehicle
                  

}

class Car1 extends Vehicle1{                                 //inherits from Vehicle
    constructor(){
        super();                                             //calls vehicle constructor

        this.gpsEnabled = false                              //This will override the property in the base class.
    }

}

let d = new Car1();
console.log(d.gpsEnabled);


//************************

//inheriting methods

class Vehicle2{
    constructor(){ 

    }

}

class Drone2 extends Vehicle2{                             //inherits from Vehicle
                  

}

class Car2 extends Vehicle2{                                 //inherits from Vehicle
    constructor(){
        super();                                             //calls vehicle constructor

    }

}