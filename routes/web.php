<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return view('layouts/auth');
});

Route::get('/{any?}', function () {
    return view('layouts/app');
})  ->where('/book-shelf', '.*')
    ->where('/service', '.*')
    ->where('/flash-sale', '.*')
    ->where('/new-letter', '.*')
    ->where('/new-book', '.*')
    ->where('/deal', '.*')
    ->where('/review', '.*')
    ->where('/blog', '.*');