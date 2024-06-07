<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;

class HelpController extends Controller
{
    public function index()
    {
        return view('site.help');
    }
}
