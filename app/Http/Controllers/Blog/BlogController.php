<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\BlogModel;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    protected $perPage = 4;
    function write(Request $request, BlogModel $Model) {
        $user_id                = Auth::user()->id;

        $data['id'] = $request->id;

        if($data['id']) {
            $post  = $Model->where(['id' => $data['id'], 'user_id' => $user_id]);
            $data['post'] = $post->first();
        }


        return view('default.blog.form', $data);

    }

    function all(BlogModel $Model) {
        $user_id                = Auth::user()->id;
        $posts                  = $Model->where('user_id', $user_id)
                                  ->orderBy('id', 'DESC');

        $posts                  = $posts->paginate($this->perPage);

        $data['posts']          = $posts;

        return view('default.blog.index', $data);
    }

    function save(Request $request, BlogModel $Model) {

        $input      = $request->input();
        
        //Tidak di validasi jika update
        if( !isset($input['id']) ) {
            $config['permalink']    =  'required|unique:blog|max:255';
        }

        $config['title']        =  'required|max:255';
        $config['article']      =  'required';
        $config['description']  =  'required';

        //Validatoin
        $validatedData = $request->validate($config);


        $simpan = $Model->simpan($request);

        if($simpan) {
            
            
            if( isset($input['id']) ) {
                
                return redirect('user/blog')->with('message', 'Artikel di update!');
            } else {

                return redirect('user/blog')->with('message', 'Artikel di tambahkan!');
            }
        }

    }
}
