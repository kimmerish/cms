<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class BotController extends Controller
{
    public function index()
    {
        return view('admin.bot');
    }
}
