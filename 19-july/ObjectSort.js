var products = [ 

{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 },

];



    // for(let i=0;i<products.length-1;i++)
    // {
    //      if(products[i].calories > products[i+1].calories)
    //      {
    //         let temp=products[i];
    //         products[i]=
    //      }
    // }

    function sortOnCalories()
    {

                
            products.sort(function(a,b){

                    if(a.calories<b.calories)
                    {
                        return -1;
                    }
                    else if(a.calories>b.calories)
                    {
                        return 1;
                    }
                    else{
                        return 0;
                    }
     
            });

            
            
        //   console.log("Products Sort Ascending by calories = ",sortProducts);

        } 

function descSortOnSold(){

  products.sort(function(a,b){

    if(a.sold<b.sold)
    {
        return 1;
    }
    else if(a.sold>b.sold)
    {
        return -1;
    }
    else{
        return 0;
    }

});

// console.log("Products Sort descending by sold = ",products);
}
sortOnCalories();

let sort = [...products];

console.log(sort);

  descSortOnSold();
  console.log(products);
