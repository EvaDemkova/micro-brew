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
Route::post('/api/beerposts/update/{id}', 'BeerpostController@update');
Route::post('/api/beerposts/delete/{id}', 'BeerpostController@destroy');
Route::post('/api/beerposts/savePhotos','BeerpostController@savePhotos');
Route::post('/api/beerposts/comment','BeerpostCommentController@store');


//users related
Route::get('/api/users/follow_list_proposal', 'UserController@follow_list_proposal');
Route::get('/api/users/{id}', 'UserController@show');
Route::get('/api/profile', 'UserController@getProfile');
Route::post('/api/users/update', 'UserController@update');
Route::get('/api/users', 'UserController@index');

Route::post('/api/users/add_follow', 'FollowerController@store');
Route::post('/api/users/delete_follow', 'FollowerController@destroy');



//if no other route was matched yet
Route::view('/{path?}', 'frontend')->where('path', '.*');



