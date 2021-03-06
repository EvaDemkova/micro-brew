<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 
use App\Models\Beerpost;
use App\Models\User;
use App\Models\Beerpost_like;
use App\Models\Beerpost_ingredient;
use App\Models\Beerpost_section;
use App\Models\Beerpost_photo;

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

        // var_dump($request->file('image'));
        $files = $request->file('image');
        for ($i = 0; $i < count($files); $i++) {
            $files[$i]->storeAs('beerpost-images', $files[$i]->getClientOriginalName(), 'uploads');
            $relative_url = '/uploads/beerpost-images/'. $files[$i]->getClientOriginalName();
            $beerpost_id = Beerpost::all() -> last()->id;
            $img = new Beerpost_photo;
            $img['beerpost_id']= $beerpost_id;
            $img['image']=$relative_url;
            $img->save();
        }
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
        //updating general section
        $beerpost = Beerpost::findOrFail($id);
        $values = collect($request['values']);
        $beerpost->update($values->all());

        //saving all ingredients related to beerpost
        //first delete all ingredients
        Beerpost_ingredient::query()
        ->where('beerpost_id',$id)
        ->delete();
        //then create new entries for the ingredients
        $ingredients = collect($request['beerpostIngredients']);
        foreach($ingredients as $ingredient) {
            $ing = new Beerpost_ingredient;
            $values = collect($ingredient);
            $values['beerpost_id'] = $id;
            $ing->create($values->all());
        }
      
        //updating beerpost sections
        $sections = collect($request['beerpostSections']);
        foreach($sections as $section) {
            $values = collect($section);
            $sec = Beerpost_section::findOrFail($values['key']);
            $values['beerpost_id'] = $id;
            $sec->update($values->all());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $beerpost = Beerpost::findOrFail($id);
        $beerpost->delete();

        Beerpost_ingredient::query()
        ->where('beerpost_id',$id)
        ->delete();

        Beerpost_section::query()
        ->where('beerpost_id',$id)
        ->delete();

        Beerpost_like::query()
        ->where('beerpost_id',$id)
        ->delete();

    }

    public function show_by_user_id($id)
    {
        $user = User::findOrFail($id);
        $beerposts = Beerpost::query()
        ->with('ingredients')
        ->with('beerpost_sections')
        ->with('likes')
        ->with('comments.user')
        ->with('beerpost_photos')
        ->with('user')
        ->where('user_id', $user->id)
        ->orderByDesc('updated_at')
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
        ->with('beerpost_photos')
        ->with('comments.user')
        ->with('user')
        ->whereIn('user_id', $user_follows_id)
        ->orderByDesc('updated_at')
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
