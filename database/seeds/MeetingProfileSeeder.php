<?php

use App\Eloquent\MeetingProfile;
use Illuminate\Database\Seeder;

class MeetingProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $meeting_profiles = [
            'Investor', 'Private Sector', 'Expert', 'Business Person',
            'Minister', 'Ambassador', 'Public Sector', 'Organizer', 'Others'
        ];

        foreach ($meeting_profiles as $p) {
            MeetingProfile::create(['name' => $p]);
        }
    }
}
