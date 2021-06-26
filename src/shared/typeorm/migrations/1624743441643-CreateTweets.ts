import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateTweets1624743441643 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'tweets',
      columns: [{
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid'
      }, {
        name: 'author',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'text',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'link',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'opinion',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'date',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'avg',
        type: 'float',
        isNullable: false
      }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tweets')
  }
}
