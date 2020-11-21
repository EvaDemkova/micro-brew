<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Equipment;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::whereNotNull('lat')->whereNotNull('lng')->get();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::query()
        ->findOrFail($id);

        $user->follows;
        $user->followed_by;

        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        
        $id = Auth::id();
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;

        $equipment = Equipment::updateOrCreate(
            ['user_id'=> $id],
            ['name'=> $request->input('equipment')]
        );

        return $request->input('equipment');

        // $file = $request->file('image');

        // return $user;
        // $user->save();
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function follow_list_proposal() 
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        $user_follows = $user->follows()->get();
        $user_follows_id = [$id];

        //get the list of all id of users that you follow 
        foreach($user_follows as $item) {
            $user_follows_id[] = $item->id;
        };

        $follow_list_proposal = User::query()
        ->whereNotIn('id', $user_follows_id)
        ->get();
        return $follow_list_proposal;
    }

    public function getProfile()
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        $equipment = Equipment::query()->where('user_id', $id)->get();

        return compact('user', 'equipment');
    }

    public function users_for_map()
    {
        $id = Auth::id();
        $user = User::findOrFail($id);
        $user_follows = $user->follows()->get();
        $user_follows_id = [$id];
        //get the list of all id of users that you follow 
        foreach($user_follows as $item) {
            $user_follows_id[] = $item->id;
        };

        $follow_list_proposal = User::query()
        ->whereNotIn('id', $user_follows_id)
        ->whereNotNull('lat')
        ->whereNotNull('lng')
        ->get();
        
        $friend_list = User::query()
        ->whereIn('id', $user_follows_id)
        ->where('id','!=',$id)
        ->whereNotNull('lat')
        ->whereNotNull('lng')
        ->get();
        
        return compact('follow_list_proposal','friend_list');
        
    }

}
