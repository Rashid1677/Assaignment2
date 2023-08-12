// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse
  var temperature:number= 50
  var tempincls:number= (50-32)*5/9
  console.log("Temperature ic celsius =>",tempincls);
//   Write a program that calculates the percentage
  var totalNum:number=1100
  var obtainNum:number=914
  var percentage:number=obtainNum/totalNum*100
  console.log("Percentage is =>",percentage);
//   Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
var days:number = 45
var a:number = Math.floor(days/7)
var b:number = days%7
console.log(`${a} week and ${b} days`);
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age:number = 20
if (age<=13) {
    console.log("child");
}
    else if(age>=13 || age>=19){
      console.log("TeenAger");
      
    }
    else {
    console.log("Adult");
    
}

// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

  var temp:number = 20
  if (temp<=15) {
    console.log("wear warm clothes");
    
  } else {
    console.log("wear Summer Clothes");
    
  }      

//   Develop a program that determines the day of the week. Ask the user for a number (1-7)
var days_of_weeek:number = 5
switch (days_of_weeek) {
    case 1:
        console.log("Monday");
        
        break;
        case 2:
            console.log("Tuesday");
            
            break;
            case 3:
                console.log("Wednesday");
                
                break;
                case 4:
                    console.log("Thursday");
                    
                    break;
                    case 5:
                        console.log("Friday");
                        
                        break;
                        case 6:
                            console.log("Saturday");
                            
                            


    default:
        console.log("Sunday");
        
        break;
}
// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var num:number = 15
if (num%3== 0) {
  console.log("num is devided by 3");
  
} else if (num%5==0 ) {
  console.log("num is devided by 5");
}
else if (num%5==0&&num%3==0 ) {
  console.log("num is devided by 3 & 5");
}
else{
console.log("num is not devided by 3 & 5");

}
// Write a program that checks if the given year is leap year or not.
var year:number = 366
if (year==366) {
  console.log("This is Leap year");
  
} else {
  console.log("This is not Leap year");
  
}
//  Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var unit:number=600
var unitprice:number = 15
var bill:number=unit*unitprice
if (unit>100) {
  console.log((unit*10)/100+bill);
  
} else if (unit>200) {
  console.log((unit*15)/100+bill);
}
  

else{
 console.log((unit*25)/100+bill);
}
//  Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var price:number=100
var discount10:number = (price*10)/100
var discount5:number = (price*5)/100
if (price>100) {
  console.log("Discount is",discount10);
  
} else {
  console.log("discount is",discount5);
  
}

