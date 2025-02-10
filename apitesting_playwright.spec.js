//Importing modules from playwright for tests
import{test, expect} from'@playwright/test';
//Test for API GET request
test('API GET Request', async({request})=>{
   //sending a GET request to API endpoint
    const response = await request.get('https://api.restful-api.dev/objects/7');
    //checking the response code is 200
    expect(response.status()).toBe(200)
    // extracting the text content of the response
    const text = await response.text();
    //checking the response contains the expected text 'Apple MacBook Pro 16'
    expect(text).toContain('Apple MacBook Pro 16')
    //Logging the JSON response to the console
    console.log(await response.json());
})
//Testing API POST request
test('API POST Request', async ({ request }) => {  
    //sending a POST request with data to given API endpoint   
    const response = await request.post('https://api.restful-api.dev/objects', {         
        //data object
        data: {             
            name: "Apple MacBook Pro 17",             
            //nested data object
            data: {  
                year: 2023,             
                price: 14559.99,             
                CPU_model: "Intel Core i9",             
                Hard_disk_size: "1 TB"
            }        
        }    
    });     
    //checking if response code is 200
    expect(response.status()).toBe(200);
    //parsing response body as JSON         
    const responseBody = await response.json(); 
    //checking name field in response matches the expected value
    expect(responseBody.name).toBe("Apple MacBook Pro 17"); 
    //logginf response body to console
    console.log(responseBody);  
});
//test for API PUT request(updating an existing object)
test('API PUT Request', async({request}) =>{
//sending a PUT request to update object with specifedID we get from the POST request console
//New ID should be added here in API endpoint
    const response = await request.put('https://api.restful-api.dev/objects/ff808181932badb60194ed4578ec76f6',{  
      data:{
      "name": "Apple MacBook Pro 16",
      data: {  
    "year": 2019,
      "price": 2049.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "silver"
    }
      }
    });
    //checking the response code is 200
    expect(response.status()).toBe(200)
    //extracting the text content of the response
    const text = await response.text();
    // checking if response contains data field
    expect(text).toContain('data')
    //logging the response body in JSON format
    console.log(await response.json());
})
//test for PATCH request(partially updating an existing object)
test('API PATCH Request', async({request}) =>{
    //sending a PATCH request to partially update the object with specified ID we get from POST request 
    //ID should added here in API endpoint
    const response = await request.patch('https://api.restful-api.dev/objects/ff808181932badb60194ed4578ec76f6',{
        data: {
            "name": "Apple MacBook",  
            data:{
            "year": 2023,
              "price": 2057.99,
              "CPU model": "Intel Core i11",
              "Hard disk size": "1 TB",
              "color": "Gold"}
            }
    })
    //checking if response status code is 200
    expect(response.status()).toBe(200)
    //extracting text content of response
    const text = await response.text();
    //checking if response contains data field
    expect(text).toContain('data')
    //logging response body in JSON format
    console.log(await response.json());
})
//test for DELETE request(deleting an object)
test('API DELETE Request', async({request}) =>{
//sending delete request to delete the object with specified ID we get from POST request
//ID should be added here in API endpoint
    const response = await request.delete('https://api.restful-api.dev/objects/ff808181932badb60194ebd64d9e763e')//need to add new id after'https://api.restful-api.dev/objects/
   // checking if response code is 200
    expect(response.status()).toBe(200)
})
