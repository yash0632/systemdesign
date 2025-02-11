interface DocumentManager{
    openDocument():void;
    closeDocument():void;
    saveDocument():void;
    scanDocument():void;
}

interface DocumentOpener{
    openDocument():void;
}

interface Documentcloser{
    closeDocument():void;
}

interface DocumentSaver{
    saveDocument():void;
}

class BasicEditor implements DocumentOpener,Documentcloser,DocumentSaver{
    openDocument(): void {
        console.log('Open document');
        
    }
    closeDocument(): void {
        console.log('Close document');
        
    }
    saveDocument(): void {
        console.log('Save document');
    }
    
    scanDocument(): void {
        console.log("Don't Do anything")
    }
}

class AdvancedEditor implements DocumentOpener,Documentcloser,DocumentSaver,DocumentManager{
    openDocument(): void {
        console.log('Open document');
        
    }
    closeDocument(): void {
        console.log('Close document');
        
    }
    saveDocument(): void {
        console.log('Save document');
    }
    scanDocument(): void {
        console.log("Scan Document");
    }
    printDocument(): void {
        console.log("Print Document");
    }
}
//Koi witch ki koshish kare koi maang ke top mein aish kare


//dependency inversion principle
//high level module should not depend on low level module but depend on abstraction and both should depend on abstraction
