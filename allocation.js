function do_allocation(noOfBuses, noOfPeople){  
    var temp;
    var fib= Array(noOfBuses).fill(0);
    var sum=0;
    var i=0;  
    
    for (i=0;i<noOfBuses;i++){ //for loop to allot passengers to their buses
        if(i==0){  //Default Case
            temp=1;
            if(temp<noOfPeople){
                fib[i]=temp;
                noOfPeople-=temp;
            }
            else{
                break;
            }
        }
        else if(i==1){  //Default Case
            temp=1
            
            if(temp<noOfPeople){
                fib[i]=temp;
                noOfPeople-=temp;
            }
            else{
                break;
            }
        }
        else if(i>1){  
            temp=fib[i-1]+fib[i-2];  //fibinocci series is used here because capacity of a bus is a sum
            if(temp<noOfPeople){     //of previous 2 bus' capacity.
                fib[i]=temp;
                noOfPeople-=temp;
            }
            else{
                break;
            }
        }       
    }
    return fib;
}

function validate(e){
    document.getElementById("output").innerHTML=null;
    const bus = document.getElementById("bus").value;
    const ppl = document.getElementById("ppl").value;
    arr=do_allocation(bus,ppl);
    let sum=0;
    for(var i=0;i<arr.length;i++){ // to get the no of ppl not departed
        sum+=arr[i]
    }
    for(var i =arr.length;i<bus;i++){
        arr[i]=0;
    }
    var newElement = document.createElement("div");
    newElement.innerHTML = ("No of people not departed - "+(ppl-sum)); //Printing no of ppl not departed
    document.getElementById("output").appendChild(newElement);
    for (var i = 0; i < bus; i++) { 
        var p=i;
        var newElement = document.createElement("div");
        newElement.innerHTML = ("No of people in bus "+(p+1)+" - "+arr[p]);  //Printing no of ppl in each bus
        document.getElementById("output").appendChild(newElement);
    }
}