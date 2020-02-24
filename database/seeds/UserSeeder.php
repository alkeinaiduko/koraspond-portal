<?php

use App\Eloquent\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // admin user
        User::create([
            'first_name' => 'Alkein',
            'last_name' => 'Villajos',
            'user_type_id' => 2, // Admin
            'email' => 'user@user.com',
            'password' => Hash::make('password'),
            'country' => 'Saudi Arabia',
            'city' => 'Riyadh',
            'address' => 'Shobah Dist., P.O.Box: 42628',
            'country_code' => '+123',
            'phone' => '123-4567-8900'
        ]);

        User::create([
            'first_name' => 'Alkeinn',
            'last_name' => 'Villajoss',
            'user_type_id' => 3, // Admin
            'email' => 'users@users.com',
            'password' => Hash::make('1234'),
            'country' => 'Saudi Arabia',
            'city' => 'Riyadh',
            'address' => 'Shobah Dist., P.O.Box: 42628',
            'country_code' => '+123',
            'phone' => '123-4567-8900'
        ]);

    }
}
