const am = bnb.scene.getAssetManager();

class Eyelashes{
    constructor(){

        this.Eyelashes_01 = bnb.scene.getRoot().findChildByName("Eyelashes_01").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Eyelashes_02 = bnb.scene.getRoot().findChildByName("Eyelashes_02").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Eyelashes_03 = bnb.scene.getRoot().findChildByName("Eyelashes_03").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Eyelashes_04 = bnb.scene.getRoot().findChildByName("Eyelashes_04").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()

        this.clear();
    }
    
    parameters({shape}){
        switch(shape){
            case "default":
                this.Eyelashes_01.setVisible(false)
                this.Eyelashes_02.setVisible(false)
                this.Eyelashes_03.setVisible(false)
                this.Eyelashes_04.setVisible(false)
                break;
            case "shape_1":
                this.Eyelashes_01.setVisible(true)
                break;
            case "shape_2":
                this.Eyelashes_01.setVisible(true)
                this.Eyelashes_02.setVisible(true)
                break;
            case "shape_3":
                this.Eyelashes_01.setVisible(true)
                this.Eyelashes_02.setVisible(true)
                this.Eyelashes_03.setVisible(true)
                break;
            case "shape_4":
                this.Eyelashes_01.setVisible(true)
                this.Eyelashes_02.setVisible(true)
                this.Eyelashes_03.setVisible(true)
                this.Eyelashes_04.setVisible(true)
                break;
        }

    }

    clear(){
        this.parameters({"shape":"default"})
    }
}

exports.Eyelashes = Eyelashes