const am = bnb.scene.getAssetManager();

class Ears{
    constructor(){
        this.settings = {
            "shape": "default",
            "left_earring":{
                "shape": "default",
                "color": "default"
            },
            "right_earring":{
                "shape": "default",
                "color": "default" 
            }
        }
    
        this.shapes = {
            "default":{
                "ShapeEarSizeVertical": 0.0,
                "ShapeEarSizeHorizontal": 0.0,
                "ShapeEarPositionVertical": 0.0,
            }
    
        }

        this.earrings = {
            "default": "",
            "shape_1": "earring_01",
            "shape_2": "earring_02",
            "shape_3": "earring_03",
            "shape_4": "earring_04",
            "shape_5": "earring_05",
            "shape_6": "earring_06"

        }
        this.colors ={
            "default": "0.9568627450980393, 0.796078431372549, 0.5803921568627451, 1.",
            "color_1": "0.9568627450980393, 0.796078431372549, 0.5803921568627451, 1.",
            "color_2": "0.8588235294117647, 0.6745098039215687, 0.4745098039215686, 1.",
            "color_3": "0.9803921568627451, 0.9098039215686274, 0.7764705882352941, 1.",
            "color_4": "0.9764705882352941, 0.7843137254901961, 0.28627450980392155, 1.",
            "color_5": "0.9137254901960784, 0.6431372549019608, 0.27450980392156865, 1.",
            "color_6": "0.9490196078431372, 0.9490196078431372, 0.9490196078431372, 1.",
            "color_7": "0.8313725490196079, 0.8313725490196079, 0.8313725490196079, 1.",
            "color_8": "0.6980392156862745, 0.7333333333333333, 0.7843137254901961, 1.",
            "color_9": "0.6078431372549019, 0.6039215686274509, 0.6392156862745098, 1.",
            "color_10": "0.06274509803921569, 0.06274509803921569, 0.06274509803921569, 1."
        }

        this.material_left_earring = am.findMaterial("mat_earring_01_L");
        this.mesh_L = am.findMesh("earring_01_L");

        this.MI_L = bnb.scene.getRoot().findChildByName("Earring_L").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Base_L = am.findImage("earrings_L_Base").asTexture();
        this.Normal_L = am.findImage("earrings_L_Normal").asTexture();
        this.Blendshapes_L = am.findImage("earrings_L_blendshapes").asTexture();
        this.left_earring_color = am.findMaterial("unused").findParameter("left_earring_color");

        this.material_right_earring = am.findMaterial("mat_earring_01_R");
        this.mesh_R = am.findMesh("earring_01_R");

        this.MI_R = bnb.scene.getRoot().findChildByName("Earring_R").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Base_R = am.findImage("earrings_R_Base").asTexture();
        this.Normal_R = am.findImage("earrings_R_Normal").asTexture();
        this.Blendshapes_R = am.findImage("earrings_R_blendshapes").asTexture();
        this.right_earring_color = am.findMaterial("unused").findParameter("right_earring_color");

        this.ears_shape_sv_sh_pv = am.findMaterial("unused").findParameter("ears_shape_sv_sh_pv");

        this.clear()
    }

    
    setShape({ShapeEarSizeVertical, ShapeEarSizeHorizontal, ShapeEarPositionVertical}){
        this.ears_shape_sv_sh_pv.setVector4(new bnb.Vec4(
            ShapeEarSizeVertical ? ShapeEarSizeVertical : 0.0, 
            ShapeEarSizeHorizontal ? ShapeEarSizeHorizontal : 0.0, 
            ShapeEarPositionVertical ? ShapeEarPositionVertical : 0.0, 
            0.0))
    }

    
    setShapePreset(name){
        this.setShape(this.shapes[name])
    }

    setLeftEarring({shape, color}){
        if(shape == "default"){
            return
        }
        if(this.earrings[shape]){
            // const Mesh = am.findMesh(this.earrings[shape]+"_L")
            // this.MI_L.setMesh(Mesh)
            am.uploadMeshData(this.mesh_L, "meshes/"+this.earrings[shape]+"_L.bsm2")

            this.MI_L.setSubGeometryMaterial("mat_earring_01_L", this.material_left_earring)
            this.Base_L.load("modules/ears/images/"+this.earrings[shape]+"_Base.png")
            this.Normal_L.load("modules/ears/images/"+this.earrings[shape]+"_L_Normal.png")
            this.Blendshapes_L.load("modules/ears/images/blendshapes_"+this.earrings[shape]+"_L.ktx")

            this.MI_L.setVisible(true)
    
        }
        let c;
        if(color.charAt(0) == "@"){
            c = color.substring(1);
        } else {
            c = this.colors[color] || this.colors["default"];
        }
        const [x,y,z] = c.split(',');
        this.left_earring_color.setVector4(new bnb.Vec4(x,y,z,1.0))
    }

    setRightEarring({shape, color}){
        if(shape == "default"){
            return
        }
        if(this.earrings[shape]){
            // const Mesh = am.findMesh(this.earrings[shape]+"_R")
            // this.MI_R.setMesh(Mesh)
            am.uploadMeshData(this.mesh_R, "meshes/"+this.earrings[shape]+"_R.bsm2")

            this.MI_R.setSubGeometryMaterial("mat_earring_01_R", this.material_right_earring)
            this.Base_R.load("modules/ears/images/"+this.earrings[shape]+"_Base.png")
            this.Normal_R.load("modules/ears/images/"+this.earrings[shape]+"_R_Normal.png")
            this.Blendshapes_R.load("modules/ears/images/blendshapes_"+this.earrings[shape]+"_R.ktx")
            this.MI_R.setVisible(true)
        }

        let c;
        if(color.charAt(0) == "@"){
            c = color.substring(1);
        } else {
            c = this.colors[color] || this.colors["default"];
        }
        const [x,y,z] = c.split(',');
        this.right_earring_color.setVector4(new bnb.Vec4(x,y,z,1.0))
    }

    parameters({shape, left_earring, right_earring}){
        if(typeof(shape) == "string")
            this.setShapePreset(shape);
        else if(typeof(shape) == "object")
            this.setShape(shape);

        left_earring && this.setLeftEarring(left_earring)
        right_earring && this.setRightEarring(right_earring)
    }

    
    clear(){
        this.parameters(this.settings)
        this.MI_R.setVisible(false)
        this.MI_L.setVisible(false)
    }
}

exports.Ears = Ears