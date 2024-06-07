<?php

// SiteController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function home()
    {
        return view('site.home');
    }

    public function gallery()
    {
        return view('site.gallery');
    }

    public function about()
    {
        return view('site.about');
    }

    public function news()
    {
        return view('site.news');
    }

    public function media()
    {
        return view('site.media');
    }

    public function help()
    {
        return view('site.help');
    }

    public function projects()
    {
        return view('site.projects');
    }

    public function auction()
    {
        return view('site.auction');
    }

    public function contacts()
    {
        return view('site.contacts');
    }
}
