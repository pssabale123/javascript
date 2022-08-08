let shapes = [
  { name: "circle",radius: 5},
  { name: "square", side: 4 },
  { name: "reactangle", length: 5, breadth: 6 },
];

function getAreaFunction(){

    for(let i=0;i<shapes.length;i++)
    {
            const areaFn = createAreaFunction(shapes[i]);
            //console.log(typeof areaFn);
            console.dir(areaFn);
            const area = areaFn();
            // console.log(typeof areaFn);
            console.log(area);
    }
}

function createAreaFunction(shape){

    if(shape.name=="circle")
    {
        return function(){
            return `circle Area is: ${3.14*shape.radius*shape.radius}`;
        }
    }
    else if(shape.name=="square")
    {
        return function(){
            return `square Area is:  ${shape.side * shape.side }`;
        } 
    }
    else{

        return function(){
            return `reactangle Area is : ${shape.length * shape.breadth} `;
        } 

    } 
    
}
getAreaFunction();