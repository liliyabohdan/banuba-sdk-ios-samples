const am = bnb.scene.getAssetManager();

class Outfit{
    constructor(){
        this.settings = {
            "set": "first",
        }
        this.sets = {
            "default": "",
            "set_1" : "cloth_01",
            "set_2" : "cloth_02",
            "set_3" : "cloth_03",
            "set_4" : "cloth_04",
            "set_5" : "cloth_05",
            "set_6" : "cloth_06",
            "set_7" : "cloth_07",
            "set_8" : "cloth_08",
            "set_9" : "cloth_09",
            "set_10" : "cloth_10",
            "set_11" : "cloth_11",
            "set_12" : "cloth_12",
            "set_13" : "cloth_13",
            "set_14" : "cloth_14",
            "set_15" : "cloth_15",
            "set_16" : "cloth_16",
            "set_17" : "cloth_17",
            "set_18" : "cloth_18",
            "set_19" : "cloth_19"
        }

        this.material_cloth = am.findMaterial("mat_cloth_01");
        this.material_logo = am.findMaterial("mat_logo_01");
        this.mesh = am.findMesh("cloth_01");

        this.MI = bnb.scene.getRoot().findChildByName("Cloth").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Base = am.findImage("cloth_Base").asTexture();
        this.MR = am.findImage("cloth_MR").asTexture();
        this.Normal = am.findImage("cloth_Normal").asTexture();

        this.disableAll();
    }

    setShape(name){
        if(name == "default"){
            return
        }
        // am.uploadMeshData(this.mesh, "meshes/"+this.sets[name]+".bsm2")
        if(this.sets[name]){
            // const Mesh = am.findMesh(this.sets[name])
            // this.MI.setMesh(Mesh)
            am.uploadMeshData(this.mesh,"meshes/"+this.sets[name]+".bsm2")
            this.MI.setSubGeometryMaterial("mat_cloth_01", this.material_cloth)
            this.MI.setSubGeometryMaterial("mat_logo_01", this.material_logo)
            this.Base.load("modules/outfit/images/"+this.sets[name]+"_Base.jpg")
            this.MR.load("modules/outfit/images/"+this.sets[name]+"_MR.jpg")
            this.Normal.load("modules/outfit/images/"+this.sets[name]+"_Normal.jpg")
            this.MI.setVisible(true)
        }

    }

    disableAll(){
        this.MI.setVisible(false)

    }

    parameters({set}){
        set && this.setShape(set)
    }

    clear(){
        this.disableAll()
    }
}

exports.Outfit = Outfit