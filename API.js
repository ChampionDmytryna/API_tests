//https://swapi.co/api/

//1.
pm.test("Verify correct response format JSON", function(){
    pm.response.to.have.jsonBody
})



//2.
pm.test("Verify that all declared fields are present", function(){
    const jsonData = pm.response.json();
    
    pm.expect(jsonData).to.have.property("people");
    pm.expect(jsonData).to.have.property("planets");
    pm.expect(jsonData).to.have.property("films");
    pm.expect(jsonData).to.have.property("species");
    pm.expect(jsonData).to.have.property("vehicles");
    pm.expect(jsonData).to.have.property("starships")
})



//3.
pm.test("Verify that values are not Null", function(){
    var jsonData = pm.response.json();
    pm.expect(jsonData.people).not.equal(null);
    pm.expect(jsonData.planets).not.equal(null);
    pm.expect(jsonData.films).not.equal(null);
    pm.expect(jsonData.species).not.equal(null);
    pm.expect(jsonData.vehicles).not.equal(null);
    pm.expect(jsonData.starships).not.equal(null);
})



//4.
pm.test("Vefify that values are not empty", function(){
    var jsonData = pm.response.json();
    pm.expect(jsonData.people).not.equal('');
    pm.expect(jsonData.planets).not.equal('');
    pm.expect(jsonData.films).not.equal('');
    pm.expect(jsonData.species).not.equal('');
    pm.expect(jsonData.vehicles).not.equal('');
    pm.expect(jsonData.starships).not.equal('');
})



//5.
pm.test("Vefify that fields corresponds to a specific values", function(){
    var jsonData = pm.response.json();
    pm.expect(jsonData.people).to.equal("https://swapi.co/api/people/");
    pm.expect(jsonData.planets).to.equal("https://swapi.co/api/planets/");
    pm.expect(jsonData.films).to.equal("https://swapi.co/api/films/");
    pm.expect(jsonData.species).to.equal("https://swapi.co/api/species/");
    pm.expect(jsonData.vehicles).to.equal('https://swapi.co/api/vehicles/');
    pm.expect(jsonData.starships).to.equal('https://swapi.co/api/starships/');
})



//6.
pm.test("Verify that status code is 200", function(){
    pm.response.to.have.status(200);
})



//7.
pm.test("Verify that status code is 'OK'", function(){
    pm.response.to.have.status('OK');
})



//8.
pm.test("Verify that response time is less than 1000ms", function(){
    pm.expect(pm.response.responseTime).to.be.below(1000);
})


//9.
pm.test("Verify that thare are a specific header in the response", function(){
    pm.response.to.have.header("Content-Type");
})


//10.
pm.test("Verify that the response has a specific header and compliance value", function(){
    pm.response.to.be.header("Content-Type", 'application/json');
})



//11.
pm.test("Verify do the cookies exist", function(){
    pm.cookies.has("__cfduid");
})


//12.
pm.test("Verify do the cookies have a values", function(){
    try{
        var mycookies = pm.cookies.get("__cfduid");
        console.log(mycookies);
    } catch(e){
        console.log("Smth went wrong...")
    }
})