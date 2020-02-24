<?php


use Illuminate\Database\Seeder;
use App\Eloquent\MeetingRequest;

class MeetingRequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MeetingRequest::create([
            'request_from' => '1',
            'request_to' => '2',
            'title' => 'Sample title',
            'content' => 'Sample content',
        ]);
    }
}
