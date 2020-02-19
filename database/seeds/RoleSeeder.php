<?php

use App\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            'Admin',
            'Applicant',
            'CEO',
            'Attendant/Observer',
            'ISDB President Secretariat',
            'Govt. Minister',
            'Invistor'
        ];

        foreach ($roles as $key => $role) {
            Role::create(['name' => $role]);
        }
    }
}
