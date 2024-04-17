class Engine {

    static load(...args) {
        window.onload = () => new Engine(...args);
        
    }

    constructor(firstSceneClass, storyDataUrl) {

        //Global Variables
            //Bedroom
        this.inspectBed = false;
        this.inspectDesk = false;
        this.inspectNS = false;
        this.inspectCloset = false;
            //Living Room
        this.inspectCouch = false;
        this.inspectCoffeeTable = false;
        this.inspectBT = false;
        this.inspectStereo = false;
            //Kitchen
        this.inspectFridge = false;
        this.inspectOven = false;
        this.inspectStove = false;
        this.inspectMicrowave = false;
        this.inspectCabinet = false;

        //Collectables
        this.keysBool = false;
        this.backpackBool = false;
        this.waterBottleBool = false;




        this.firstSceneClass = firstSceneClass;
        this.storyDataUrl = storyDataUrl;

        this.header = document.body.appendChild(document.createElement("h1"));
        this.output = document.body.appendChild(document.createElement("div"));
        this.actionsContainer = document.body.appendChild(document.createElement("div"));

        fetch(storyDataUrl).then(
            (response) => response.json()
        ).then(
            (json) => {
                this.storyData = json;
                this.gotoScene(firstSceneClass)
            }
        );
    }

    gotoScene(sceneClass, data) {
        this.scene = new sceneClass(this);
        this.scene.create(data);
    }

    addChoice(action, data) { // Location data
        let button = this.actionsContainer.appendChild(document.createElement("button"));
        button.innerText = action;
        button.onclick = () => {

            while(this.actionsContainer.firstChild) {
                this.actionsContainer.removeChild(this.actionsContainer.firstChild);            }
            
            this.scene.handleChoice(data);
        }
    }

    addInspectChoice(action, data){
        let button = this.actionsContainer.appendChild(document.createElement("button"));
        button.innerText = action;
        
        button.onclick = () => {
            
            //Bedroom
            if(data.name == "Bed"){
                this.inspectBed = true;
            }
            if(data.name == "Desk"){
                this.inspectDesk = true;
                this.keysBool = true;
            }
            if(data.name == "Nightstand"){
                this.inspectNS = true;
            }
            if(data.name == "Closet"){
                this.inspectCloset = true;
                this.backpackBool = true;
                
            }

            //Living Room
            if(data.name == "Couch"){
                this.inspectCouch = true;
            }
            if(data.name == "CoffeeTable"){
                this.inspectCoffeeTable = true;
            }
            if(data.name == "B_T"){
                this.inspectBT = true;
            }
            if(data.name == "Stereo"){
                this.inspectStereo = true;
            }

            //Kitchen
            if(data.name == "Fridge"){
                this.inspectFridge = true;
                this.waterBottleBool = true;
            }
            if(data.name == "Oven"){
                this.inspectOven = true;
            }
            if(data.name == "Stove"){
                this.inspectStove = true;
            }
            if(data.name == "Microwave"){
                this.inspectMicrowave = true;
            }
            if(data.name == "Cabinet"){
                this.inspectCabinet = true;
            }
           
            for (let i = 0; i < this.actionsContainer.children.length; i++){
                if(this.actionsContainer.children[i].innerHTML == data.ButtonText){

                    this.actionsContainer.removeChild(this.actionsContainer.children[i]);

                }
            }
            this.scene.handleChoice(data);
        }
    }

    

    setTitle(title) {
        document.title = title;
        this.header.innerText = title;
    }

    show(msg) {
        let div = document.createElement("div");
        div.innerHTML = msg;
        this.output.appendChild(div);
    }
}

class Scene {
    constructor(engine) {
        this.engine = engine;
    }

    create() { }

    update() { }

    handleChoice(action) {
        console.warn('no choice handler on scene ', this);
    }
}