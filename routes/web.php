<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\BotController;
use App\Http\Controllers\ThemeController;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WebServiceController;
use App\Http\Controllers\UserUpdateController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PluginController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ToolController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.dashboard');

    Route::resource('sites', SiteController::class);
    Route::resource('news', NewsController::class);
    Route::resource('pages', PageController::class);
    Route::resource('portfolio', PortfolioController::class);
    Route::resource('bots', BotController::class);
    Route::resource('themes', ThemeController::class);
    Route::resource('templates', TemplateController::class);
    Route::resource('emails', EmailController::class);
    Route::resource('products', ProductController::class);
    Route::resource('web-services', WebServiceController::class);
    Route::resource('user-updates', UserUpdateController::class);
    Route::resource('payments', PaymentController::class);
    Route::resource('users', UserController::class);
    Route::resource('plugins', PluginController::class);
    Route::resource('settings', SettingController::class);
    Route::resource('tools', ToolController::class);
});

Route::get('/home', [SiteController::class, 'home'])->name('site.home');
Route::get('/gallery', [SiteController::class, 'gallery'])->name('site.gallery');
Route::get('/about-us', [SiteController::class, 'about'])->name('site.about');
Route::get('/news', [SiteController::class, 'news'])->name('site.news');
Route::get('/media', [SiteController::class, 'media'])->name('site.media');
Route::get('/help', [SiteController::class, 'help'])->name('site.help');
Route::get('/projects', [SiteController::class, 'projects'])->name('site.projects');
Route::get('/auction', [SiteController::class, 'auction'])->name('site.auction');
Route::get('/contacts', [SiteController::class, 'contacts'])->name('site.contacts');
