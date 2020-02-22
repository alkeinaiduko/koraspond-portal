<?php

use App\Eloquent\Partnership;
use Illuminate\Database\Seeder;

class PartnershipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $partnerships = [
            'Partner/Joint Venture',
            'Potential Investors',
            'Funding Institutions',
            'Credit & Insurance',
            'Grant'
        ];

        foreach ($partnerships as $p) {
            Partnership::create(['name' => $p]);
        }
    }
}
