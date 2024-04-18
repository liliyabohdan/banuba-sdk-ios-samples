const am = bnb.scene.getAssetManager();

class Glasses{
    constructor(){
        this.settings = {
            "shape": "default",
            "color": "default"
        }
        this.frames = {
            "default" : "",
            "shape_1" : "glasses_01",
            "shape_2" : "glasses_02",
            "shape_3" : "glasses_03",
            "shape_4" : "glasses_04",
            "shape_5" : "glasses_05",
            "shape_6" : "glasses_06",
        }
        this.colors = {
            "default": "0., 0., 0., 1.",
            "color_1": "0.9764705882352941, 0.9764705882352941, 0.9764705882352941, 1.",
            "color_2": "0.8352941176470589, 0.8352941176470589, 0.8352941176470589, 1.",
            "color_3": "0.3215686274509804, 0.3215686274509804, 0.3215686274509804, 1.",
            "color_4": "0.06274509803921569, 0.06274509803921569, 0.06274509803921569, 1.",
            "color_5": "0.9568627450980393, 0.796078431372549, 0.5803921568627451, 1.",
            "color_6": "0.8588235294117647, 0.6745098039215687, 0.4745098039215686, 1.",
            "color_7": "0.6980392156862745, 0.7333333333333333, 0.7843137254901961, 1.",
            "color_8": "0.6078431372549019, 0.6039215686274509, 0.6392156862745098, 1.",
            "color_9": "0.9882352941176471, 0.6941176470588235, 0.6705882352941176, 1.",
            "color_10": "0.8980392156862745, 0.19215686274509805, 0.13725490196078433, 1.",
            "color_11": "0.6470588235294118, 0.09411764705882353, 0.050980392156862744, 1.",
            "color_12": "1.0, 0.8392156862745098, 0.9137254901960784, 1.",
            "color_13": "0.9176470588235294, 0.34901960784313724, 0.615686274509804, 1.",
            "color_14": "0.6235294117647059, 0.0196078431372549, 0.3058823529411765, 1.",
            "color_15": "0.8392156862745098, 0.788235294117647, 1., 1.",
            "color_16": "0.5568627450980392, 0.45098039215686275, 0.9019607843137255, 1.",
            "color_17": "0.1568627450980392, 0.054901960784313725, 0.49411764705882355, 1.",
            "color_18": "0.7176470588235294, 0.8470588235294118, 1., 1.",
            "color_19": "0.30196078431372547, 0.596078431372549, 0.9529411764705882, 1.",
            "color_20": "0.0784313725490196, 0.34901960784313724, 0.6745098039215687, 1.",
            "color_21": "0.788235294117647, 0.9254901960784314, 0.6274509803921569, 1.",
            "color_22": "0.5058823529411764, 0.7254901960784313, 0.2549019607843137, 1.",
            "color_23": "0.2549019607843137, 0.42745098039215684, 0.058823529411764705, 1.",
            "color_24": "0.9921568627450981, 0.9372549019607843, 0.5607843137254902, 1.",
            "color_25": "0.9764705882352941, 0.7843137254901961, 0.28627450980392155, 1.",
            "color_26": "0.9176470588235294, 0.49411764705882355, 0.16862745098039217, 1.",
        }

        this.material_glasses = am.findMaterial("mat_glasses_01");
        this.mesh = am.findMesh("glasses_01");

        this.MI = bnb.scene.getRoot().findChildByName("Glasses").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Base = am.findImage("glasses_Base").asTexture();
        this.MR = am.findImage("glasses_MR").asTexture();
        this.Normal = am.findImage("glasses_Normal").asTexture();
        this.Blendshapes = am.findImage("glasses_blendshapes").asTexture();

        this.glasses_color = am.findMaterial("unused").findParameter("glasses_color");

        this.disableAll()
    }

    setShape(name){
        if(name == "default"){
            return
        }
        if(this.frames[name]){
        // am.uploadMeshData(this.mesh, "meshes/"+this.sets[name]+".bsm2")
        // const Mesh = am.findMesh(this.frames[name])
        // this.MI.setMesh(Mesh)
        am.uploadMeshData(this.mesh, "meshes/"+this.frames[name]+".bsm2")

        this.MI.setSubGeometryMaterial("mat_glasses_01", this.material_glasses)
        this.Base.load("modules/glasses/images/"+this.frames[name]+"_Base.png")
        this.MR.load("modules/glasses/images/"+this.frames[name]+"_MR.png")
        this.Normal.load("modules/glasses/images/"+this.frames[name]+"_Normal.png")
        this.Blendshapes.load("modules/glasses/images/blendshapes_"+ this.frames[name] +".ktx")

        this.MI.setVisible(true)
        }
    }

    setColor(color){
        let c;
        if(color.charAt(0) == "@"){
            c = color.substring(1);
        } else {
            c = this.colors[color] || this.colors["default"];
        }
        const [x,y,z] = c.split(',');
        this.glasses_color.setVector4(new bnb.Vec4(x,y,z,1.0))
    }

    disableAll(){
        this.MI.setVisible(false)

    }

    parameters({frame, color}){
        frame && this.setShape(frame)
        color && this.setColor(color)
    }

    clear(){
        this.disableAll()
    }
}

exports.Glasses = Glasses