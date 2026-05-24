<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SiswaDashboard extends Controller
{
    public function index()
    {
        return inertia('Siswa/Dashboard');
    }
}
