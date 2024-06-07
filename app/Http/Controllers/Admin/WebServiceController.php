<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class WebServiceController extends Controller
{
    public function index()
    {
        return view('admin.webservice');
    }
}
