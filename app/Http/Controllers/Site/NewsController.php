<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    public function index()
    {
        return view('site.news');
    }
}
