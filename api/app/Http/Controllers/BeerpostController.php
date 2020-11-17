<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 
use App\Models\Beerpost;
use App\Models\User;
use App\Models\Beerpost_like;
use App\Models\Beerpost_ingredient;
use App\Models\Beerpost_section;

class BeerpostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
       return $request;
      //saving general information about beer
      $values = collect($request['values']);
      $beerpost = new Beerpost;
      $beerpost->create($values->all());

      //saving all ingredients related to beerpost
      $ingredients = collect($request['beerpostIngredients']);
      foreach($ingredients as $ingredient) {
            $ing = new Beerpost_ingredient;
            $beerpost_id = Beerpost::all() -> last()->id;
            $values = collect($ingredient);
            $values['beerpost_id'] = $beerpost_id;
            $ing->create($values->all());
      }
      
      //saving beerpost sections
      $sections = collect($request['beerpostSections']);
      foreach($sections as $section) {
          $sec = new Beerpost_section;
          $beerpost_id = Beerpost::all() -> last()->id;
          $values = collect($section);
          $values['beerpost_id'] = $beerpost_id;
          $sec->create($values->all());
      }

      return [
            'status' => 'success'
        ];
    }

    public function savePhotos(Request $request) {

        return $request;

        // $file =  $request->file['fileName'];
        // return $file;
        // $files = collect($request['files']);
      
        // if($files) {
        //     foreach($files as $one_file) {
        //         $image = collect($one_file);
        //         $image->storeAs('img', $image->getClientOriginalName(), 'img');
        //         return $image;
        //     }
      
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
        public function show($id)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
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

    public function show_by_user_id($id)
    {
        $user = User::findOrFail($id);
        $beerposts = Beerpost::query()
        ->with('ingredients')
        ->with('beerpost_sections')
        ->with('likes')
        ->with('comments.user')
        ->with('user')
        ->where('user_id', $user->id)
        ->get();

        return $beerposts;
    }

    public function show_feed($id)
    {
        $user = User::findOrFail($id);
        $user_follows = $user->follows()->get();
        $user_follows_id = [];

        //get the list of all id of users that you follow 
        foreach($user_follows as $item) {
            $user_follows_id[] = $item->id;
        };
        
        $beerposts = Beerpost::query()
        ->with('ingredients')
        ->with('beerpost_sections')
        ->with('likes')
        ->with('comments.user')
        ->with('user')
        ->whereIn('user_id', $user_follows_id)
        ->get();

        return $beerposts;
    }

    public function like($id, Request $request)
    {
        // missing validation of input and check that the post is not already liked by user (frontend only)
        $beerpost = Beerpost::findOrFail($id);
        //$beerpost->likes()->create(['user_id'=>'3']);
        $beerpost->likes()->create($request->all());
        return [
            'status' => 'success'
        ];
    }

    public function unlike($id, Request $request)
    {
        //missing validation of existing like in the database
        $user_id = $request->input('user_id');
        $beerpost = Beerpost::findOrFail($id);
        $like = Beerpost_like::query()
        ->where('beerpost_id',$id)
        ->where('user_id',$user_id)
        ->first();

        $like->delete();

        return [
            'status' => 'success'
        ];
    }
}
