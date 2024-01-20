import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Data {
@PrimaryGeneratedColumn()
id:number;

@Column()
status:string;

@Column()
status_Message:string;

@Column()
body:string;

@Column()
headers:string;

@Column()
Method:string;

@Column()
Url:string

}
