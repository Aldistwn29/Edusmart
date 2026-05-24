<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects = [
            ['name' => 'Matematika Umum', 'code' => 'MTK'],
            ['name' => 'Pendidikan Kewaraganegaraan', 'code' => 'PPKN'],
            ['name' => 'Ilmu Pengetahuan Alam', 'code' => 'IPA'],
            ['name' => 'Bahasa Inggris', 'code' => 'B.Inggris'],
        ];

        foreach($subjects as $subject){
            Subject::create($subject);
        }
    }
}
