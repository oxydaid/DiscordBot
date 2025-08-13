/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('welcome_settings', function (table) {
        table.string('guild_id').primary();
        table.boolean('is_enabled').defaultTo(false);
        table.string('channel_id').nullable();
        table.text('message').defaultTo('Selamat datang {user.mention} di server **{server.name}**! 🎉');
        table.boolean('card_enabled').defaultTo(true);
        table.string('image_url').nullable();
        table.boolean('dm_enabled').defaultTo(false);
        table.text('dm_message').defaultTo('Hai {user.name}, selamat datang di **{server.name}**!');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('welcome_settings');
};
