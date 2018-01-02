import {Entity} from "../annotation/Entity";
import {PrimaryGeneratedColumn} from "typeorm";

@Entity
export class EntityBase {
	id: number;
}