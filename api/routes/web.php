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
Route::post('/api/beerposts/{id}/like/','BeerpostController@like');
Route::post('/api/beerposts/{id}/unlike/','BeerpostController@unlike');
Route::post('/api/beerposts/store','BeerpostController@store');

Route::post('/api/beerposts/comment/','BeerpostCommentController@store');

Route::get('/api/users/{id}', 'UserController@show');



