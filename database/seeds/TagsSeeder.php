<?php

use App\Eloquent\Tag;
use Illuminate\Database\Seeder;

class TagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            'Animation',
            'Engineering',
            'Artificial Intelligence',
            'Software',
            'Science'
        ];

        foreach($tags as $tag) {
            Tag::create(['name' => $tag]);
        }
    }
}
