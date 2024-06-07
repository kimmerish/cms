<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    public function index()
    {
        return view('admin.logout');
    }
}
