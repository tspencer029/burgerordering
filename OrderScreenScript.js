/**
 * 
 */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAWZ6S8NCv59pJbFac2zudB8-6inWPUDvI",
    authDomain: "burgerproject-85126.firebaseapp.com",
    databaseURL: "https://burgerproject-85126.firebaseio.com",
    projectId: "burgerproject-85126",
    storageBucket: "burgerproject-85126.appspot.com",
    messagingSenderId: "656234964175"
  };
  firebase.initializeApp(config);
  
  var db = firebase.firestore();
  var ingredientArray = [];

  db.collection("Ingredients2")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          var myIngredients = doc.data();
          ingredientArray.push(myIngredients);
      }
  )}).catch(function(error) {
    console.log("Error getting document:", error);
});

db.collection("Ingredients2").where("Qty", "<", 1000000)
.onSnapshot(function(doc) {
    console.log("Current data: ", "is working");
    loadStock();
});

//loads stock from database
function loadStock(){
    var element = document.getElementById('inner');
    element.innerHTML="";

    var bunTable = document.createElement("div");
    bunTable.id = "bunTable";
    bunTable.className = "child";
    element.appendChild(bunTable);

    var fillingTable = document.createElement("div");
    fillingTable.id = "fillingTable";
    fillingTable.className = "child";
    element.appendChild(fillingTable);

    var saladTable = document.createElement("div");
    saladTable.id = "saladTable";
    saladTable.className = "child";
    element.appendChild(saladTable);

    var cheeseTable = document.createElement("div");
    cheeseTable.id = "cheeseTable";
    cheeseTable.className = "child";
    element.appendChild(cheeseTable);

    var sauceTable = document.createElement("div");
    sauceTable.id = "sauceTable";
    sauceTable.className = "child";
    element.appendChild(sauceTable);

    var bunText = document.createTextNode("Buns");
    var bunTitle = document.createElement('h4');
    bunTitle.appendChild(bunText);
    bunTable.appendChild(bunTitle);

    var fillingText = document.createTextNode("Fillings");
    var fillingTitle = document.createElement('h4');
    fillingTitle.appendChild(fillingText);
    fillingTable.appendChild(fillingTitle);

    var saladText = document.createTextNode("Salads");
    var saladTitle = document.createElement('h4');
    saladTitle.appendChild(saladText);
    saladTable.appendChild(saladTitle);

    var cheeseText = document.createTextNode("Cheeses");
    var cheeseTitle = document.createElement('h4');
    cheeseTitle.appendChild(cheeseText);
    cheeseTable.appendChild(cheeseTitle);

    var sauceText = document.createTextNode("Sauces");
    var sauceTitle = document.createElement('h4');
    sauceTitle.appendChild(sauceText);
    sauceTable.appendChild(sauceTitle);

db.collection("Ingredients2").where("Category", "==", 0)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var myIngredients = doc.data();
        var bunArray = [];
        bunArray.push(myIngredients);

        for(var i = 0; i < bunArray.length; i++){
        var currentIng = bunArray[i];
        var name = document.createElement('div');
        var qty = document.createElement('div');
        var ingName = document.createTextNode(currentIng.Name);
        var ingQty = document.createTextNode(currentIng.Qty);
        var space = document.createElement('br');
        var textField = document.createElement('input');
        textField.id = "qtyField";
        textField.type = "number";
        textField.placeholder = "Qty";
        var addStock = document.createTextNode("Add Stock");
        var button = document.createElement("button");
        button.id = "addButton";
        button.addEventListener("click", function(){
            var stockNo = currentIng.Qty + Number(textField.value);
            currentIng.Qty += Number(textField.value);            
            db.collection("Ingredients2").doc(doc.id).set({
                Qty: stockNo
            }, {merge:true}
        )
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        })
        button.appendChild(addStock);
        name.appendChild(ingName);
        qty.appendChild(ingQty);
        bunTable.appendChild(space);
        bunTable.appendChild(name);
        bunTable.appendChild(qty);
        bunTable.appendChild(textField);
        bunTable.appendChild(button);
        }
    }
)}).catch(function(error) {
  console.log("Error getting document:", error);
});

db.collection("Ingredients2").where("Category", "==", 1)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var myIngredients = doc.data();
        var fillingArray = [];
        fillingArray.push(myIngredients);

        for(var i = 0; i < fillingArray.length; i++){
        var currentIng = fillingArray[i];
        var name = document.createElement('div');
        var qty = document.createElement('div');
        var ingName = document.createTextNode(currentIng.Name);
        var ingQty = document.createTextNode(currentIng.Qty);
        var space = document.createElement('br');
        var textField = document.createElement('input');
        textField.id = "qtyField";
        textField.type = "number";
        textField.placeholder = "Qty";
        var addStock = document.createTextNode("Add Stock");
        var button = document.createElement("button");
        button.id = "addButton";
        button.addEventListener("click", function(){
            var stockNo = currentIng.Qty + Number(textField.value);
            currentIng.Qty += Number(textField.value);            
            db.collection("Ingredients2").doc(doc.id).set({
                Qty: stockNo
            }, {merge:true}
        )
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        })
        button.appendChild(addStock);
        name.appendChild(ingName);
        qty.appendChild(ingQty);
        fillingTable.appendChild(space);
        fillingTable.appendChild(name);
        fillingTable.appendChild(qty);
        fillingTable.appendChild(textField);
        fillingTable.appendChild(button);
        }
    }
)}).catch(function(error) {
  console.log("Error getting document:", error);
});

db.collection("Ingredients2").where("Category", "==", 2)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var myIngredients = doc.data();
        var saladArray = [];
        saladArray.push(myIngredients);

        for(var i = 0; i < saladArray.length; i++){
        var currentIng = saladArray[i];
        var name = document.createElement('div');
        var qty = document.createElement('div');
        var ingName = document.createTextNode(currentIng.Name);
        var ingQty = document.createTextNode(currentIng.Qty);
        var space = document.createElement('br');
        var textField = document.createElement('input');
        textField.id = "qtyField";
        textField.type = "number";
        textField.placeholder = "Qty";
        var addStock = document.createTextNode("Add Stock");
        var button = document.createElement("button");
        button.id = "addButton";
        button.addEventListener("click", function(){
            var stockNo = currentIng.Qty + Number(textField.value);
            currentIng.Qty += Number(textField.value);            
            db.collection("Ingredients2").doc(doc.id).set({
                Qty: stockNo
            }, {merge:true}
        )
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        })
        button.appendChild(addStock);
        name.appendChild(ingName);
        qty.appendChild(ingQty);
        saladTable.appendChild(space);
        saladTable.appendChild(name);
        saladTable.appendChild(qty);
        saladTable.appendChild(textField);
        saladTable.appendChild(button);
        }
    }
)}).catch(function(error) {
  console.log("Error getting document:", error);
});

db.collection("Ingredients2").where("Category", "==", 3)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var myIngredients = doc.data();
        var cheeseArray = [];
        cheeseArray.push(myIngredients);
        
        for(var i = 0; i < cheeseArray.length; i++){
        var currentIng = cheeseArray[i];
        var name = document.createElement('div');
        var qty = document.createElement('div');
        var ingName = document.createTextNode(currentIng.Name);
        var ingQty = document.createTextNode(currentIng.Qty);
        var space = document.createElement('br');
        var textField = document.createElement('input');
        textField.id = "qtyField";
        textField.type = "number";
        textField.placeholder = "Qty";
        var addStock = document.createTextNode("Add Stock");
        var button = document.createElement("button");
        button.id = "addButton";
        button.addEventListener("click", function(){
            var stockNo = currentIng.Qty + Number(textField.value);
            currentIng.Qty += Number(textField.value);            
            db.collection("Ingredients2").doc(doc.id).set({
                Qty: stockNo
            }, {merge:true}
        )
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        })
        button.appendChild(addStock);
        name.appendChild(ingName);
        qty.appendChild(ingQty);
        cheeseTable.appendChild(space);
        cheeseTable.appendChild(name);
        cheeseTable.appendChild(qty);
        cheeseTable.appendChild(textField);
        cheeseTable.appendChild(button);
        }
    }
)}).catch(function(error) {
  console.log("Error getting document:", error);
});

db.collection("Ingredients2").where("Category", "==", 4)
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var myIngredients = doc.data();
        var sauceArray = [];
        sauceArray.push(myIngredients);
        
        for(var i = 0; i < sauceArray.length; i++){
        var currentIng = sauceArray[i];
        var name = document.createElement('div');
        var qty = document.createElement('div');
        var ingName = document.createTextNode(currentIng.Name);
        var ingQty = document.createTextNode(currentIng.Qty);
        var space = document.createElement('br');
        var textField = document.createElement('input');
        textField.id = "qtyField";
        textField.type = "number";
        textField.placeholder = "Qty";
        var addStock = document.createTextNode("Add Stock");
        var button = document.createElement("button");
        button.id = "addButton";
        button.addEventListener("click", function(){
            var stockNo = currentIng.Qty + Number(textField.value);
            currentIng.Qty += Number(textField.value);            
            db.collection("Ingredients2").doc(doc.id).set({
                Qty: stockNo
            }, {merge:true}
        )
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        })
        button.appendChild(addStock);
        name.appendChild(ingName);
        qty.appendChild(ingQty);
        sauceTable.appendChild(space);
        sauceTable.appendChild(name);
        sauceTable.appendChild(qty);
        sauceTable.appendChild(textField);
        sauceTable.appendChild(button);
        }
    }
)}).catch(function(error) {
  console.log("Error getting document:", error);
});}

db.collection("Orders").where("Status", "<", 4)
.onSnapshot(function(doc) {
    console.log("Current data: ", "finisnhd");
    loadOrders();
    
});

//   loadOrders();
  // getting the orders out of the database
  function loadOrders(){
    var orderList = document.getElementById('orderList');
    orderList.innerHTML="";
  
    db.collection("Orders")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        //   console.log(doc.id, " => ", doc.data());
        // saving the burger order object
          var burgerOrder = doc.data();
          var uid1 = doc.data().uid;
          console.log("burger order" + burgerOrder);
          console.log("user id" + uid1);
            //  console.log(burgerOrder);
            //saving the array from the burger order array (array contains integers which are the ingredient ID)
            if(burgerOrder.Status == 3){
                return;
            }
            var orderName = burgerOrder.uid;
            var burgerObj = burgerOrder.Burgers;
            var entry = document.createElement('div');
            entry.className = "module";

            var statusForm = document.createElement("div");
            statusForm.className = "content";
            
            var form = document.createElement("select");
            
            var options = ["Pending","Preparing","Complete","Picked Up"];
            
            for (var i = 0; i < options.length; i++) {
                var option = document.createElement("option");
                option.value = options[i];
                option.text = options[i];
                form.appendChild(option);
            }
            var status = 0;
            var submit = document.createTextNode("Submit");
            var button = document.createElement("button");
            button.id = "submitButton";
            button.addEventListener("click", function(){
                db.collection("Orders").doc(doc.id).set({
                    Status: form.selectedIndex
                }, {merge:true}
            )
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
            })
            button.appendChild(submit);

            statusForm.appendChild(form);                        
            statusForm.appendChild(button);
            
            // console.log(burgerObj);
            var burgerArray = Object.values(burgerObj);
            // console.log(burgerArray);
            for(var i = 0; i < burgerArray.length; i++){






                var array = burgerArray[i];
                // console.log(tyler);
                // var list = document.getElementById('orderList');
                var userName = document.createElement('p');
                userName.className = "contentHeader";
                var burgerDiv = document.createElement('div');
                var burgerText = document.createTextNode("Burger");
                var burgerTitle = document.createElement('p');
                burgerTitle.appendChild(burgerText);
                burgerTitle.className = "contentHeader";                
                burgerDiv.className = "content";
                for(var j = 0; j < array.length; j++){
                   var burgerObj2 = array[j];

                var ingName = getIngName(burgerObj2);
                var ingText = document.createTextNode(ingName);
                var space = document.createElement('br');
                burgerDiv.appendChild(ingText);
                burgerDiv.appendChild(space);
                entry.appendChild(burgerTitle);
                entry.appendChild(burgerDiv);
                entry.appendChild(statusForm);
            }
            document.getElementById('orderList').appendChild(entry);
      }

})}).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

    function getIngName(ingNumber) {
        var ingredientName = "";
        for(var i = 0; i < ingredientArray.length; i++){
            var currentIng = ingredientArray[i];
            var ingName = currentIng.Name;
            var ingID = currentIng.IngredientID;
            if(ingNumber == ingID){
                ingredientName = ingName;
                // console.log(ingName);
            }
        }
        return ingredientName;
    }
    
    function authFunction() {
        
         var email = document.getElementById('username').value;
         var password = document.getElementById('password').value;
        
         var promise = firebase.auth().signInWithEmailAndPassword(email, password);
         promise.catch(function(error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           if (errorCode === 'auth/wrong-password') {
             alert('Wrong password.');
           } else {
             alert(errorMessage);
           }
           console.log(error);
         }).then(function() {
        
           var user = firebase.auth().currentUser;
           var uid1 = user.uid;

           console.log(uid1);
        
           db.collection("Staff").where("uid", "==", uid1).get().then(snapshot => {
                snapshot.forEach(doc =>{
             var staff = doc.data().isstaff;
             var name = doc.data().name;
        
             if (staff == false) {

                console.log("staffisfalse");
               firebase.auth().signOut()
             }else{

                document.body.querySelector("#landing").style.display = 'none';
                document.body.querySelector("#main").style.display = 'inline-block';
                document.body.querySelector("#hello").innerHTML = "Hello " + name;
             }

             console.log("complete1");
         });
        });

        console.log("complete2");
        });
    }

    function signout() {
        console.log("Signed out");
        firebase.auth().signOut().then(function() {
            console.log("yup");
            document.body.querySelector("#landing").style.display = 'block';
            document.body.querySelector("#main").style.display = 'none';
        }, function(error) {
            console.error('Sign out error', error);
        });
    }

    document.querySelector("#statsbtn").addEventListener("click", function() {
        document.body.querySelector("#statsContent").style.display = 'inline-block';
        document.body.querySelector("#stockContent").style.display = 'none';
    });

    document.querySelector("#stockbtn").addEventListener("click", function() {
        document.body.querySelector("#statsContent").style.display = 'none';
        document.body.querySelector("#stockContent").style.display = 'inline-block';
    });
