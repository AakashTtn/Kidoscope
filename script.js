// -----------------------Ques1---------------------------------------

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.toString = function() {
      return this.name
  }
  
  Employee.prototype = new Person();
  Employee.prototype.constructor = Employee;
  
  function Employee(name, id) {
      this.name = name;
      this.id = id;
  }
  
  Developer.prototype = new Employee();
  Developer.prototype.constructor = Developer;
  
  function Developer(name, id, department) {
      this.name = name;
      this.id = id;
      this.department = department;
  }
  var dev = new Developer('Aakash',459,'MEAN')
  console.log(dev.toString())



// -----------------------Ques2------------------------------


let arr = [1,2,3,4,5]
arr.forEach((element,index)=>{
    setTimeout(()=>{
        console.log(element);
    },3000*index)
})

const nums =[1,2,3,4,5];
var i=0;
setInterval(()=>{              
    if(i<nums.length){
   document.writeln(nums[i++])
    }
    else clearInterval();
},3000)



// ------------------Ques3------------------------------

// -------------------call()-------------------------------------

let name1 = {
    fname:'Aakash',
    lname:'Gupta'
}
let name2 = {
    fname:'Vinay',
    lname:'Gupta'
}

let printFullName = function(hometown,state){
    console.log(this.fname+' '+this.lname+' is from '+hometown+' situated in '+state);
}

printFullName.call(name1,"Mumbai","Maharashtra")
printFullName.call(name2,"New Delhi","Delhi")
let printName = printFullName.bind(name2,"Mumbai","Maharashtra")
printName();

// Call is basically used as function borrowing
// Call method is used to invoke the function directly by passing the reference as the first arguement and rest being the optional arguement
// ex: if we have a function ina an object and want to access that fn for another object, then we can use use call()
// it can take multiple arguements with first being the pointer to this

// ---------------------------bind()----------------------------



// In bind() method, it returns the reference to the function which can be invoked later


// ----------------apply()----------------------

// This is same as call() method with the only difference being the arguements are passed as arraylist rather than individuals.
printFullName.apply(name1,["Mumbai","Maharashtra"])



// -----------------------------Ques4--------------------------------

// Arguements is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
// But the arguments object is not an Array. It is similar but lacks all properties instead of length
// The arguments object is useful for functions called with more arguments than they are formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments, such as Math.min(). 


let a = ["Apple","Mango","Grapes","Papaya","Watermelon"]
a.push("Blue berries");
a.unshift("Guvava");
a.pop();
a.shift();
a.splice(2,1,"Guvava","Orange")




// -----------------------------Ques6-------------------------------

var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();
  
  console.log(counter.value());
  
  counter.increment();
  counter.increment();
  console.log(counter.value());
  
  counter.decrement();
  console.log(counter.value());




//   -----------------------------Ques5----------------------------------

// --------------Number of Invocations------------------------------
var noOfInvocations = 0;

function count(){
    noOfInvocations++;
}
count()
count()
count() 
alert(noOfInvocations)

// ---------------------Number of instances----------------------------
function MyObj() {
    MyObj.numInstances = (MyObj.numInstances || 0) + 1;
  }
  MyObj.prototype.dispose = function() {
    return MyObj.numInstances -= 1;
  };
  MyObj.numInstances; // => 0
  var a = new MyObj();
  MyObj.numInstances; // => 1
  var b = new MyObj();
  MyObj.numInstances; // => 2
  a.dispose(); // 1 OK: lower the count.
  a = null;
  MyObj.numInstances; // => 1
  b = null; // ERR: didn't call "dispose"!
  MyObj.numInstances; // => 1