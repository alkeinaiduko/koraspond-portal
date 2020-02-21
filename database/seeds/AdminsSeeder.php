<?php

use App\Eloquent\Admin;
use Illuminate\Database\Seeder;

class AdminsSeeder extends Seeder
{
     /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // admin user
        Admin::create([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'role_id' => 1, // Admin
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
            'country' => 'Saudi Arabia',
            'city' => 'Riyadh',
            'address' => 'Shobah Dist., P.O.Box: 42628',
            'phone' => '123-4567-8900'
        ]);

    }
}
