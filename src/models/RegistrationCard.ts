import db from "../configs/db";
import { DataTypes } from "sequelize";
import Delegate from "./Delegate";

const RegistrationCard = db.define(
  "registration_card",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    delegate_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    delegate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    registration_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    hall: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    room_no: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    convention_year: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// RegistrationCard.belongsTo(Church, {
//     foreignKey: "church_id",
//     as: "church",
// });

RegistrationCard.belongsTo(Delegate, {
  foreignKey: "delegate_id",
  as: "delegate",
});

Delegate.hasMany(RegistrationCard, {
  foreignKey: "delegate_id",
  as: "registration_cards",
});

RegistrationCard.sync({ alter: true });

export default RegistrationCard;
