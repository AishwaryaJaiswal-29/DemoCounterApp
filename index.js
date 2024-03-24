const CounterValue = document.getElementById("counter");

function increment(){
    let value=parseInt(CounterValue.innerText);
    value=value+1;
    CounterValue.innerText=value;

};

function decrement(){
    let value=parseInt(CounterValue.innerText);
    value=value-1;
    CounterValue.innerText=value;
 
};