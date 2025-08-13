exports.up = function (knex) {
    return knex.schema
        // Tabel untuk menyimpan konfigurasi per jenis tiket
        .createTable('ticket_settings', function (table) {
            table.increments('id').primary();
            table.string('guild_id').notNullable();
            table.string('panel_message_id').nullable(); // Mengikat ke sebuah panel
            table.string('ticket_type').notNullable(); // 'support', 'bug', 'order'
            table.string('button_label').defaultTo('Buat Tiket');
            table.string('button_emoji').nullable();
            table.string('button_style').defaultTo('SECONDARY');
            table.text('support_role_ids').nullable(); // Menyimpan ID role, dipisah koma
            table.string('ticket_category_id').notNullable();
            table.string('log_channel_id').nullable();
            table.text('greeting_message').defaultTo('Halo {user.mention}, tim support akan segera membantumu.');
            table.unique(['panel_message_id', 'ticket_type']); // Jenis tiket harus unik per panel
        })
        // Tabel untuk melacak tiket yang sedang aktif
        .createTable('open_tickets', function (table) {
            table.string('channel_id').primary();
            table.string('guild_id').notNullable();
            table.string('user_id').notNullable();
            table.string('ticket_type').notNullable();
            table.string('claimed_by_id').nullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
        // Tabel untuk menyimpan panel dan jenis tiket yang terkait
        .createTable('ticket_panels', function (table) {
            table.string('message_id').primary();
            table.string('guild_id').notNullable();
            table.string('channel_id').notNullable();
            table.text('ticket_types').notNullable(); // Menyimpan daftar jenis tiket (misal: "support,report")
        });
};

exports.down = function (knex) {
    // Menghapus semua tabel jika migrasi di-rollback
    return knex.schema
        .dropTableIfExists('ticket_panels')
        .dropTableIfExists('open_tickets')
        .dropTableIfExists('ticket_settings');
};