exports.up = function (knex) {
    return knex.schema.createTable('afk_statuses', function (table) {
        // Primary key komposit, karena 1 user hanya bisa punya 1 status AFK di 1 server
        table.primary(['guild_id', 'user_id']);
        table.string('guild_id').notNullable();
        table.string('user_id').notNullable();
        table.text('reason').notNullable();
        // Menyimpan timestamp dalam milidetik kapan AFK dimulai
        table.bigInteger('timestamp').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('afk_statuses');
};