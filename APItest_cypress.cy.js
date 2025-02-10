//describe a test suite for API requests
describe("Requests",()=>{
//test for GET request to retrive data from API for object with ID7
    it("GET Request",()=>{
//sending a GET request to specified URL
        cy.request('GET','https://api.restful-api.dev/objects/7')
        // extracting status property from the response and checking if it's 200
        .its('status')
        //the response should have 200 status code
        .should('equal',200);
    })
    //test for post request to create a new object
    it("POST Request",()=>{
    //sending a POST request to create a new object with specified data
        cy.request({
            method:'POST',//specified HTTP method as POST
            url:'https://api.restful-api.dev/objects',//URL to send the POST request 
            body:{// data being sent in the body of the POST request
                name:'MacBook',
                data:{// nested objecy containing specifications
                       CPU:'Intel core i11',
                       RAM:'16GB',
                        type:'SSD',
                price:1999.99
                }
            }
        })
        //extract the status property from the response and assert that is 200
        .its('status')
        // check if response code is 200
        .should('equal',200);
    })
    //test for PUT request to update an exisiting object with specified ID 
    it("PUT Request",()=>{
        //sending a PUT request to update the existing object with a ID from POST request in API endpoint
        cy.request({
            method:'PUT',//specify HTTP method as PUT
            //URL to send PUT request including new API endpoint ID
            url:'https://api.restful-api.dev/objects/ff808181932badb60194eff093967b40',
            body:{// data to update in PUT request body
                name:'Apple MacBook',
                data:{// nested object containing updated specifications
                    CPU:'Intel core i9',
                year:2020,
                price:1899.99
                }
                }
        })
        //extract status property from the response and assert that it's 200
        .its('status')
        // check if response code is 200
        .should('equal',200);
    })
    // test for DELETE request to remove an object from API
    it("DELETE Request",()=>{
        //sending a DELETE request to remove an existing object with a specific ID 
        cy.request({
            method:'DELETE',
            //URL to send the DELETE request including new API endpoint ID
            url:'https://api.restful-api.dev/objects/ff808181932badb60194eff093967b40',
        })
        // Extract status property from the response and assert that 200
        .its('status')
        //checking if response code is 200
        .should('equal',200);
    })
})