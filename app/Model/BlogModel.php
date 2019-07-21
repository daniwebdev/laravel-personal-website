<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogModel extends Model {

    protected $table = 'blog';
    protected $dates = ['created_at'];

    function simpan(Request $request) {
        $input = $request->input();
        
        $blog = $this;

        if(isset($input['id'])) {
            $blog = $this->find($input['id']);
        }

        $blog->label        = $input['label']; 
        $blog->title        = $input['title']; 
        $blog->article      = $input['article'];
        $blog->description  = $input['description'];
        $blog->permalink    = $input['permalink'];

        $blog->user_id = Auth::user()->id;

        return $blog->save();
    }
}
