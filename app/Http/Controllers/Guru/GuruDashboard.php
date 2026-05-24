<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruDashboard extends Controller
{
    public function index()
    {
        return Inertia('Guru/Dashboard', [
            'user' => auth()->user(),
            'role' => 'guru',
        ]);
    }
}
