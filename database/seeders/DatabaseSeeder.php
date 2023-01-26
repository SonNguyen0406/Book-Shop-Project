<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\UserSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $sql_file_path = 'database/sql/db_seed.sql';
        if (!!file_get_contents($sql_file_path)) {
            DB::unprepared(file_get_contents($sql_file_path));
        }
        $this->call([
            UserSeeder::class,
        ]);
    }
}
