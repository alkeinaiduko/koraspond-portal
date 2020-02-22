<?php

use App\Eloquent\UserType;
use Illuminate\Database\Seeder;

class UserTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userTypes = [
            'Admin',
            'Applicant',
            'CEO',
            'Attendant/Observer',
            'ISDB President Secretariat',
            'Govt. Minister',
            'Investor'
        ];

        foreach ($userTypes as $type) {
            UserType::create(['name' => $type]);
        }
    }
}
