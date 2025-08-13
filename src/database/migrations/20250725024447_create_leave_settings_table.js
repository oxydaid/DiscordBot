exports.up = function (knex) {
    return knex.schema.createTable('leave_settings', function (table) {
        table.string('guild_id').primary();
        table.boolean('is_enabled').defaultTo(false);
        table.string('channel_id').nullable();
        table.text('message').defaultTo('Selamat tinggal {user.name}, sampai jumpa lagi! 👋');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('leave_settings');
};