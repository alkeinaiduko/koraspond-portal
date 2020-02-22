<?php

use App\Eloquent\Interest;
use Illuminate\Database\Seeder;

class InterestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $interests = [
            'The core infrastructure',
            'Agriculture',
            'Manufacturing and mining added value',
            'Transport',
            'Services',
            'Others'
        ];

        foreach($interests as $i) {
            Interest::create(['name' => $i]);
        }
    }
}
