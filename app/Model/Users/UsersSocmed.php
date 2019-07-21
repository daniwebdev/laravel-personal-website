<?php

namespace App\Model\Users;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class UsersSocmed extends Model
{
    use \App\Model\Concerns\UsesUuid;

    protected $guarded = []; // YOLO
    protected $table = 'users_socmed';


    function simpan($input) {
        
        // $input = $request->input();
        $model = $this;

        if( isset($input['id']) ) {
            $model = $this->find($input['id']);
        }

        $model->link    = $input['link'];
        $model->label   = $input['label'];
        $model->user_id = Auth::user()->id;

        return $model->save();
    }


    function hapus($id)
    {
        $del = $this->find($id);

        return $del->delete();
    }
}
