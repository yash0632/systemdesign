interface Repository{
    save():void;
}

interface Service{
    save():void;
}


class UserController{
    private service ;
    constructor(service: Service){
        this.service = userService;
    }


    save(){
        this.service.save();
    }
}
class UserService implements Service{
    
    constructor(private repository:Repository){}


    save(){
        this.repository.save();
    }
}

class PostgresService implements Service{
    save(){
        console.log("save user in the postgres database")
    }
}

class UserRepository implements Repository{
    save(){
        console.log("save user in the database")
    }
}

class PostgresRepository implements Repository{
    save(){
        console.log("save user in the postgres database")
    }
}

class MongoRepository implements Repository{
    save(){
        console.log("save user in the mongo database")
    }
}
const postgresRepository = new PostgresRepository();
const mongoRepository = new MongoRepository();
const userService = new UserService(mongoRepository);
const userController = new UserController(userService);
userController.save();
//DEPENDECY INVERSION PRINCIPLE -> DEPENDENCY INJECTION
//S-> SINGLE RESPONSIBILITY PRINCIPLE -> ONE CLASS SHOULD HAVE ONLY ONE REASON TO CHANGE if we have multiple reasons to change a class then we should break it into multiple classes
//O-> OPEN CLOSED PRINCIPLE -> A CLASS SHOULD BE OPEN FOR EXTENSION BUT CLOSED FOR MODIFICATION . we should be able to add new features to a class without changing the existing code
//L-> LISKOV SUBSTITUTION PRINCIPLE -> OBJECTS OF A SUPERCLASS SHOULD BE REPLACEABLE WITH OBJECTS OF SUBCLASS WITHOUT AFFECTING THE FUNCTIONALITY OF THE PROGRAM. if not create a new interface with the common methods
//I-> INTERFACE SEGREGATION PRINCIPLE -> A CLIENT SHOULD NOT BE FORCED TO IMPLEMENT AN INTERFACE THAT IT DOES NOT USE. break the interface into multiple interfaces
//D-> DEPENDENCY INVERSION PRINCIPLE -> HIGH LEVEL MODULES SHOULD NOT DEPEND ON LOW LEVEL MODULES. BOTH SHOULD DEPEND ON ABSTRACTIONS. ABSTRACTIONS SHOULD NOT DEPEND ON DETAILS. DETAILS SHOULD DEPEND ON ABSTRACTIONS. use dependency injection