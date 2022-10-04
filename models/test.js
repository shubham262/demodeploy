

module.exports=(sequelize,DataTypes)=>{

    const test=sequelize.define('test', {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
    
        Title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Information:{
            type:DataTypes.STRING,
            allowNull:false,
            
        }
    
    })
    
    return test;
    
    }