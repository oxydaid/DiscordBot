exports.up = function (knex) {
    return knex.schema
        .createTable('giveaways', function (table) {
            table.string('message_id').primary();
            table.string('guild_id').notNullable();
            table.string('channel_id').notNullable();
            table.text('prize').notNullable();
            table.integer('winner_count').notNullable().defaultTo(1);
            table.bigInteger('end_timestamp').notNullable();
            table.boolean('is_ended').defaultTo(false);
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('giveaway_entrants', function (table) {
            table.increments('id').primary();
            table.string('giveaway_message_id').notNullable().references('message_id').inTable('giveaways').onDelete('CASCADE');
            table.string('user_id').notNullable();
            table.unique(['giveaway_message_id', 'user_id']);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('giveaway_entrants')
        .dropTableIfExists('giveaways');
};