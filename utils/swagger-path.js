module.exports = {
    "/admin/login": {
        post: {
              tags:["admin"],
              description:"admin can login with login details",
              produces:["application/json"],
              consumes:["application/json"],
                parameters: [{
                    in: "body",
                    name: "adminData",
                    description: "login details",
                    required: true,
                    schema: {
                        type: "object",
                        required: [ "email", "password"],
                        properties: {
                            email: {
                                type: "string",
                                example: "name"
                            },
                            password: {
                                type: "string",
                                example: "secret key"
                            }
                    }
                },
                }],
                responses: {
                    200: { description: "Success response with data" },
                    400: { description: "Bad Request with error data" },
                    401: { description: "Unauthorized" },
                    404: { description: "Not found with error data" },
                    500: { description: "Server is down" }
                }
        
              
        }

    },
    "/admin/getEmployee": {
        get: {
            tags: ["admin"],
            description: "get the list of employees in organization",
            produces: ["application/json"],
            consumes:["application/json"],
            parameters: [{ name: "auth-token", in: "header", type: "string", description: "secret token key" }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }

        }
    
},


    "/admin/addEmployee": {
        post: {
            tags: ["admin"],
            description: "register a new employee in organization",
            consumes: ["application/json"],
            produces: ["application/json"],
            parameters: [{
                in: "body",
                name: "employeeData",
                description: "Employee details",
                required: true,
                schema: {
                    type: "object",
                    required: ["name", "age", "gender", "department", "dateOfJoining", "email", "password"],
                    properties: {
                        name: {
                            type: "string",
                            example: "name"
                        },
                        age: {
                            type: "integer",
                            example: "1"
                        },
                        gender: {
                            type: "string",
                            example: "male"
                        },
                        department: {
                            type: "string",
                            example: "tester"
                        },
                        dateOfJoining: {
                            type: "date",
                            example: "2000-01-01"
                        },
                        email: {
                            type: "string",
                            example: "fun@gmail.com"
                        },
                        password: {
                            type: "date",
                            example: "secret key"
                        }

                    }
                }
            },
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }

        }
    },
   
    "/admin/updateEmployee": {
        put: {
            tags: ["admin"],
            description: "update the details of an employee",
            consumes: ["application/json"],
            parameters: [{
                in: "body",
                name: "modifiedData",
                description: "Employee details to be updated",
                required: true,
                schema: {
                    type: "object",
                    required: ["name", "age", "department"],
                    properties: {
                        name: {
                            type: "string",
                            example: "name"
                        },
                        age: {
                            type: "integer",
                            example: "1"
                        },
                        department: {
                            type: "string",
                            example: "tester"
                        }


                    }
                }
            },
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }

        }
    },


    "/admin/deleteEmployee": {
        delete: {
            tags: ["admin"],
            description: "remove the employee from organization",
            consumes: ["application/json"],
            parameters: [{
                in: "body",
                name: "id",
                description: "id of employee to be deleted",
                required: true,
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: {
                            type: "number",
                            example: "0"
                        }


                    }
                }
            },
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }

        }
    },
    
    "/admin/viewDepartment": {
        get: {
            tags: ["admin"],
            description: "view all  departments in the organization",
            produces: ["application/json"],
            consumes: ["application/json"],
            parameters: [
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }
        }
    },
    
    "/admin/addDepartment": {
        post: {
            tags: ["admin"],
            description: "register a new department in organization",
            consumes: ["application/json"],
            parameters: [{
                in: "body",
                name: "departmentData",
                description: "department  details",
                required: true,
                schema: {
                    type: "object",
                    required: ["name", "admin_id"],
                    properties: {
                        name: {
                            type: "string",
                            example: "name"
                        },
                        admin_id: {
                            type: "number",
                            example: "1"
                        }

                    }
                }
            },
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }
        }
    },
    
    "/admin/updateDepartment": {
        put: {
            tags: ["admin"],
            description: "update department details",
            consumes: ["application/json"],
            parameters: [{
                in: "body",
                name: "departmentData",
                description: "modified department details",
                required: true,
                schema: {
                    type: "object",
                    required: ["id", "name"],
                    properties: {
                        id: {
                            type: "number",
                            example: "10"
                        },
                        name: {
                            type: "string",
                            example: "name"
                        }

                    }
                }
            },
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }
        }
    },
    "/admin/deleteDepartment": {
        delete: {
            tags: ["admin"],
            description: "remove a department from organization",
            consumes: ["application/json"],
            parameters: [{
                in: "body",
                name: "id",
                description: "employee id which is to be deleted",
                required: true,
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: {
                            type: "number",
                            example: "10"
                        }

                    }
                }
            },
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }
        }
    },
    "/admin/createAdmin": {
        post: {
              tags:["admin"],
              description:"admin can add another admin",
              produces:["application/json"],
              consumes:["application/json"],
                parameters: [{
                    in: "body",
                    name: "adminData",
                    description: "admin details",
                    required: true,
                    schema: {
                        type: "object",
                        required: [ "name","email", "password"],
                        properties: {
                            name: {
                                type:"string",
                                example:"name"

                            },
                            email: {
                                type: "string",
                                example: "abc@gmail.com"
                            },
                            password: {
                                type: "string",
                                example: "secret key"
                            }
                    }
                }
            },
                { name: "auth-token", 
                in: "header", 
                type: "string", 
                description: "secret token key"
             }],
                responses: {
                    200: { description: "Success response with data" },
                    400: { description: "Bad Request with error data" },
                    401: { description: "Unauthorized" },
                    404: { description: "Not found with error data" },
                    500: { description: "Server is down" }
                }
        
              
        }

    },
    "/emp/login": {
        post: {
              tags:["employee"],
              description:"employee can login with login details",
              produces:["application/json"],
              consumes:["application/json"],
                parameters: [{
                    in: "body",
                    name: "empData",
                    description: "login details",
                    required: true,
                    schema: {
                        type: "object",
                        required: [ "email", "password"],
                        properties: {
                            email: {
                                type: "string",
                                example: "name"
                            },
                            password: {
                                type: "string",
                                example: "secret key"
                            }
                    }
                },
                }],
                responses: {
                    200: { description: "Success response with data" },
                    400: { description: "Bad Request with error data" },
                    401: { description: "Unauthorized" },
                    404: { description: "Not found with error data" },
                    500: { description: "Server is down" }
                }
        
              
        }

    },
    "/emp/listEmployee": {
        get: {
            tags: ["employee"],
            description: "get the list of employees in your department",
            consumes:["application/json"],
            produces: ["application/json"],
            parameters: [
              /**   {
                  in: "query",
                  name:"department",
                  schema: {
                      type:"string",
                      example:"tester"
                     }
                 },*/
                 { name: "auth-token", 
                 in: "header", 
                 type: "string", 
                 description: "secret token key"
              }
            ],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }

        }
    },
    "/emp/feedback": {
        post: {
            tags: ["employee"],
            description: "give feedback to colleagues",
            consumes: ["application/json"],
            parameters: [{
                in: "body",
                name: "employee details",
                name: "details of your colleague",
                description: "",
                required: true,
                schema: {
                    type: "object",
                    required: ["id","name","rating","comments"],
                    properties: {
                        id: {
                            type: "number",
                            example: "10"
                        },
                        name:{
                            type:"string",
                            example:"name"
                        },
                        rating:{
                            type:"number",
                            example:7
                        },
                        comments:{
                            type:"string",
                            example:"your feedback "
                        }

                    }
                }
            },
            { name: "auth-token", 
            in: "header", 
            type: "string", 
            description: "secret token key"
         }],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
                500: { description: "Server is down" }
            }
        }
    },
    "/emp/viewRating": {
        get: {
            tags: ["employee"],
            description: "employee can view their feedback",
            consumes:["application/json"],
            produces: ["application/json"],
            parameters: [
                {
                  in: "query",
                  name:"id",
                  schema: {
                      type:"number",
                      example:"10"
                     }
                 },
                 { name: "auth-token", 
                 in: "header", 
                 type: "string", 
                 description: "secret token key"
              }
            ],
            responses: {
                200: { description: "Success response with data" },
                400: { description: "Bad Request with error data" },
                401: { description: "Unauthorized" },
                404: { description: "Not found with error data" },
             }
        }
    }
}
                

            

        
        
    

