<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;

class MediaController extends Controller
{
    public function index()
    {
        return view('site.media');
    }
}
