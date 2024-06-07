<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;

class ProjectsController extends Controller
{
    public function index()
    {
        return view('site.projects');
    }
}
