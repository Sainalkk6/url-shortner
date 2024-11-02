import { DataTypes, Model } from "sequelize";
import sequelize from ".";



export interface UrlAttributes {
    url: string;
    shortedUrl: string
}

export class Url extends Model<UrlAttributes> implements UrlAttributes {
    public url!: string;
    public shortedUrl!: string;
}

Url.init({
    url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortedUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    sequelize:sequelize,
    
})
