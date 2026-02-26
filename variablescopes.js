// let , var and cont 

// var can be updated and redeclared 
// let can be updated but not redeclared 
// const cannot be updated or redeclared


function variablevar(){
    var a = 10;
    if(true){
        var a =50
        console.log(a);
        
    }
    console.log(a);
    
    
}
variablevar();

function variablelet(){
    let a = 10;
    if(true){
        let a = 30
         console.log(a);
    }
    console.log(a);
}
variablelet();


//variable const 

// const a = 10;
// a = 20;
 

const color = [];
color.push('red');
// colors = 'green';
console.log(color);
// console.log(colors);
