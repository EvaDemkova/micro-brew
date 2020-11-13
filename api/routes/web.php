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

Route::get('/api/beerposts/users/{id}', 'BeerpostController@show_by_user_id');
Route::get('/api/beerposts/feed/{id}', 'BeerpostController@show_feed');

Route::get('/api/users/{id}', 'UserController@show');

