<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class ToolController extends Controller
{
    public function index()
    {
        return view('admin.tool');
    }
}
