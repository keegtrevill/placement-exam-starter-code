// HINT: You can delete this console.log after you no longer need it! DONE


// First, tell us your name
let yourName = "Keegan Trevillian" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
    

{
    document.getElementById('add-gb').addEventListener('click', function () {
        let addGb =  gb += 1
        document.getElementById('qty-gb').textContent = addGb
    
    })

    document.getElementById('minus-gb').addEventListener('click', function () {
        let minusGb =  gb -= 1
        document.getElementById('qty-gb').textContent = minusGb  
    })    


    document.getElementById('add-cc').addEventListener('click', function () {
        let addCc =  cc += 1
        document.getElementById('qty-cc').textContent = addCc
    
    })

    document.getElementById('minus-cc').addEventListener('click', function () {
        let minusCc =  cc -= 1
        document.getElementById('qty-cc').textContent = minusCc 
    })    

    document.getElementById('add-sugar').addEventListener('click', function () {
        let addSugar =  sugar += 1
        document.getElementById('qty-sugar').textContent = addSugar
    
    })

    document.getElementById('minus-sugar').addEventListener('click', function () {
        let minusSugar =  sugar -= 1
        document.getElementById('qty-sugar').textContent = minusSugar 
    })
    
    let totalCookies = 
    totalCookies = gb + cc + sugar
    document.getElementById('qty-total').textContent = totalCookies

}


