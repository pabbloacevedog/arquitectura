// perfil
export default (sequelize, DataTypes) => {
    return sequelize.define('tipo_perfil', {
        id_tipo_perfil:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'tipo_perfil'
    })
}
