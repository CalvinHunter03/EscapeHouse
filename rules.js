class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title); // TODO: replace this text using this.engine.storyData to find the story title
        this.engine.show("<hr>You wake up in your bedroom. You should probably get out of there.")
        this.engine.addChoice("Begin the story");
        
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // TODO: replace this text by the initial location of the story
    }
}

class Location extends Scene {
    create(key) {
        let locationData = this.engine.storyData.Locations[key]; // TODO: use `key` to get the data object for the current story location
        // TODO: replace this text by the Body of the location data
        this.engine.show("<hr>");
        this.engine.show(locationData.Body); 

        //console.log("This is the thing " + this.engine.countVar);
        for(let choice of locationData.LocationChoices) { // TODO: loop over the location's LocationChoices
            this.engine.addChoice(choice.Text, choice); // TODO: use the Text of the choice
            // TODO: add a useful second argument to addChoice so that the current code of handleChoice below works
        }

        //let addInspectChoice = this.engine.addInspectChoice(locationData.InspectChoices[i].ButtonText, locationData.InspectChoices[i]);

        

        for(let i = 0; i < locationData.InspectChoices.length; i++){
            let button_text = locationData.InspectChoices[i].ButtonText;
            let choices = locationData.InspectChoices[i];
            let button_name = locationData.InspectChoices[i].name;
            // Bedroom
            if(button_name == "Bed" && !this.engine.inspectBed){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Desk" && !this.engine.inspectDesk){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Nightstand" && !this.engine.inspectNS){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Closet" && !this.engine.inspectCloset){
                this.engine.addInspectChoice(button_text, choices);
            }

            //Living room
            else if(button_name == "Couch" && !this.engine.inspectCouch){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "CoffeeTable" && !this.engine.inspectCoffeeTable){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "B_T" && !this.engine.inspectBT){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Stereo" && !this.engine.inspectStereo){
                this.engine.addInspectChoice(button_text, choices);
            }

            //Kitchen
            else if(button_name == "Fridge" && !this.engine.inspectFridge){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Oven" && !this.engine.inspectOven){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Stove" && !this.engine.inspectStove){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Microwave" && !this.engine.inspectMicrowave){
                this.engine.addInspectChoice(button_text, choices);
            }
            else if(button_name == "Cabinet" && !this.engine.inspectCabinet){
                this.engine.addInspectChoice(button_text, choices);
            }

            

            

            
        }
        if(this.engine.keysBool && this.engine.backpackBool && this.engine.waterBottleBool && locationData.InspectChoices[0].name != "Bed"){
            console.log(locationData)
                
            this.engine.addChoice("To Front Door", "OutsideLand");
        
        }
        
            
        
            /*
            if(inspectChoice.ButtonText == "Bed" && !this.inspectBed){
                this.engine.addInspectChoice(inspectChoice.ButtonText, inspectChoice);
            }
            else if(inspectChoice.ButtonText == "Couch" && !this.insepctCouch){
                this.engine.addInspectChoice(inspectChoice.ButtonText, inspectChoice);
            }
            */
        
        
        
    }

    handleChoice(choice) {
        if(choice && choice.index == 0) {
            
            
            this.engine.show("&gt; "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        } 
        else if (choice && choice.index == 1) {
            this.engine.show("&gt; " + choice.Message);
        }
        else{
            this.engine.gotoScene(End);
        }
    }

}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show("The end :)");
        this.engine.show(this.engine.storyData.Credits);
    }
}

Engine.load(Start, 'myStory.json');