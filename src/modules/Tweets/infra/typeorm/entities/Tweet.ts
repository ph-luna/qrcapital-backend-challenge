import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tweets')
export default class Tweet {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    author: string

    @Column()
    text: string

    @Column()
    link: string

    @Column('timestamp with time zone')
    date: Date

    @Column('float')
    compound: number
}
